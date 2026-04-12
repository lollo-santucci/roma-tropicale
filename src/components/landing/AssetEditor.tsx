"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

type Asset = {
  type: "image" | "video";
  src: string;
  label: string;
  top: string;
  left: string;
  w: string;
  ratio: string;
  rotate?: number;
  zIndex?: number;
  scrollScale?: [number, number, number];
  scrollRotate?: [number, number];
  radius?: string;
};

type Breakpoint = "mobile" | "tablet" | "desktop";

const BREAKPOINT_WIDTHS: Record<Breakpoint, number> = {
  mobile: 390,
  tablet: 768,
  desktop: 1280,
};

interface AssetEditorProps {
  desktopAssets: Asset[];
  tabletAssets: Asset[];
  mobileAssets: Asset[];
}

export default function AssetEditor({ desktopAssets, tabletAssets, mobileAssets }: AssetEditorProps) {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("desktop");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [configs, setConfigs] = useState<Record<Breakpoint, Asset[]>>({
    desktop: desktopAssets,
    tablet: tabletAssets,
    mobile: mobileAssets,
  });

  const assets = configs[breakpoint];
  const selected = selectedIndex !== null && selectedIndex < assets.length ? assets[selectedIndex] : null;

  useEffect(() => { setSelectedIndex(null); }, [breakpoint]);

  const updateAsset = (index: number, updates: Partial<Asset>) => {
    setConfigs(prev => ({
      ...prev,
      [breakpoint]: prev[breakpoint].map((a, i) => i === index ? { ...a, ...updates } : a),
    }));
  };

  const handleMouseDown = (e: React.MouseEvent, index: number, mode: "drag" | "resize") => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedIndex(index);

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const startX = e.clientX;
    const startY = e.clientY;
    const asset = configs[breakpoint][index];
    const startTop = parseFloat(asset.top);
    const startLeft = parseFloat(asset.left);
    const startW = parseFloat(asset.w);

    const handleMove = (ev: MouseEvent) => {
      const dx = ev.clientX - startX;
      const dy = ev.clientY - startY;
      if (mode === "drag") {
        updateAsset(index, {
          top: `${Math.round((startTop + (dy / rect.height) * 100) * 10) / 10}%`,
          left: `${Math.round((startLeft + (dx / rect.width) * 100) * 10) / 10}%`,
        });
      } else {
        updateAsset(index, {
          w: `${Math.max(5, Math.round((startW + (dx / rect.width) * 100) * 10) / 10)}%`,
        });
      }
    };

    const handleUp = () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
  };

  const copyConfig = () => {
    const varName = breakpoint === "desktop" ? "ASSETS_DESKTOP" : breakpoint === "tablet" ? "ASSETS_TABLET" : "ASSETS_MOBILE";
    const lines = configs[breakpoint].map(a => {
      const parts: string[] = [
        `type: "${a.type}"`, `src: "${a.src}"`, `label: "${a.label}"`,
        `top: "${a.top}"`, `left: "${a.left}"`, `w: "${a.w}"`, `ratio: "${a.ratio}"`,
      ];
      if (a.rotate) parts.push(`rotate: ${a.rotate}`);
      if (a.zIndex !== undefined) parts.push(`zIndex: ${a.zIndex}`);
      if (a.scrollScale) parts.push(`scrollScale: [${a.scrollScale.join(", ")}]`);
      if (a.scrollRotate) parts.push(`scrollRotate: [${a.scrollRotate.join(", ")}]`);
      if (a.radius) parts.push(`radius: "${a.radius}"`);
      return `  { ${parts.join(", ")} },`;
    });
    navigator.clipboard.writeText(`const ${varName}: Asset[] = [\n${lines.join("\n")}\n];`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerWidth = BREAKPOINT_WIDTHS[breakpoint];
  const containerHeight = breakpoint === "desktop"
    ? Math.min(1400, containerWidth * 1.2)
    : Math.min(1200, containerWidth * 2);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left: Canvas */}
      <div className="flex-1 overflow-auto flex justify-center py-8">
        <div
          ref={containerRef}
          className="relative bg-[#f5f5f5] border border-gray-300 shadow-lg shrink-0"
          style={{ width: containerWidth, height: containerHeight }}
        >
          {/* Grid */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "10% 10%",
          }} />

          {assets.map((asset, i) => (
            <div
              key={`${asset.src}-${i}`}
              className={`absolute overflow-hidden cursor-move group ${
                selectedIndex === i ? "ring-2 ring-blue-500 ring-offset-2" : "hover:ring-1 hover:ring-blue-300"
              }`}
              style={{
                top: asset.top,
                left: asset.left,
                width: asset.w,
                aspectRatio: asset.ratio,
                borderRadius: asset.radius ?? "0.75rem",
                zIndex: selectedIndex === i ? 100 : (asset.zIndex ?? i),
                rotate: asset.rotate ? `${asset.rotate}deg` : undefined,
              }}
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(i); }}
              onMouseDown={(e) => handleMouseDown(e, i, "drag")}
            >
              {asset.type === "video" ? (
                <video src={asset.src} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
              ) : (
                <Image src={asset.src} alt={asset.label} fill className="object-cover pointer-events-none" />
              )}
              <div className={`absolute top-1 left-1 bg-black/70 text-white text-[9px] px-1.5 py-0.5 rounded pointer-events-none transition-opacity ${selectedIndex === i ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                {i}: {asset.label}
              </div>
              <div
                className={`absolute bottom-0 right-0 w-4 h-4 bg-blue-500 cursor-se-resize transition-opacity ${selectedIndex === i ? "opacity-100" : "opacity-0 group-hover:opacity-70"}`}
                onMouseDown={(e) => handleMouseDown(e, i, "resize")}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right: Panel */}
      <div className="w-[280px] bg-white border-l border-gray-200 flex flex-col shrink-0 overflow-y-auto">
        {/* Header */}
        <div className="px-3 py-3 border-b border-gray-100 flex items-center justify-between">
          <span className="font-bold text-xs">Asset Editor</span>
          <div className="flex gap-1.5">
            <button
              onClick={copyConfig}
              className={`px-2.5 py-1 text-[10px] font-medium rounded transition-colors ${
                copied ? "bg-green-500 text-white" : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            <a href="/" className="px-2.5 py-1 text-[10px] font-medium rounded bg-gray-200 text-gray-700 hover:bg-gray-300">
              X
            </a>
          </div>
        </div>

        {/* Breakpoint */}
        <div className="px-3 py-2 border-b border-gray-100">
          <div className="flex gap-0.5 bg-gray-100 rounded p-0.5">
            {(["mobile", "tablet", "desktop"] as Breakpoint[]).map(bp => (
              <button
                key={bp}
                onClick={() => setBreakpoint(bp)}
                className={`flex-1 px-1 py-1 text-[10px] font-medium rounded transition-colors ${
                  breakpoint === bp ? "bg-black text-white" : "text-gray-500"
                }`}
              >
                {bp}
              </button>
            ))}
          </div>
        </div>

        {/* Asset list */}
        <div className="px-3 py-2 border-b border-gray-100">
          <p className="text-[9px] text-gray-400 uppercase tracking-wider mb-1.5">Assets</p>
          <div className="flex flex-wrap gap-1">
            {assets.map((a, i) => (
              <button
                key={i}
                onClick={() => setSelectedIndex(selectedIndex === i ? null : i)}
                className={`px-1.5 py-0.5 text-[10px] rounded transition-colors ${
                  selectedIndex === i ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {i}
              </button>
            ))}
          </div>
        </div>

        {/* Properties */}
        {selected && selectedIndex !== null ? (
          <div className="px-3 py-2 flex flex-col gap-2.5">
            <p className="text-[9px] text-gray-400 uppercase tracking-wider">Properties — {selected.label}</p>

            {([
              { label: "top", key: "top" as const },
              { label: "left", key: "left" as const },
              { label: "width", key: "w" as const },
            ]).map(({ label, key }) => (
              <div key={key}>
                <label className="text-[10px] text-gray-500 block mb-0.5">{label}</label>
                <input
                  type="text"
                  value={selected[key]}
                  onChange={(e) => updateAsset(selectedIndex, { [key]: e.target.value })}
                  className="w-full border rounded px-2 py-1 text-xs bg-gray-50"
                />
              </div>
            ))}

            <div>
              <label className="text-[10px] text-gray-500 block mb-0.5">ratio</label>
              <select
                value={selected.ratio}
                onChange={(e) => updateAsset(selectedIndex, { ratio: e.target.value })}
                className="w-full border rounded px-2 py-1 text-xs bg-gray-50"
              >
                {["1/2", "9/16", "5/9", "2/3", "3/4", "4/5", "1/1", "5/4", "4/3", "3/2", "16/9"].map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[10px] text-gray-500 block mb-0.5">radius</label>
              <select
                value={selected.radius ?? "0.75rem"}
                onChange={(e) => updateAsset(selectedIndex, { radius: e.target.value })}
                className="w-full border rounded px-2 py-1 text-xs bg-gray-50"
              >
                {["0", "0.25rem", "0.5rem", "0.75rem", "1rem", "1.5rem", "2rem", "50%"].map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[10px] text-gray-500 block mb-0.5">rotate</label>
              <input
                type="number"
                value={selected.rotate ?? 0}
                onChange={(e) => updateAsset(selectedIndex, { rotate: Number(e.target.value) })}
                className="w-full border rounded px-2 py-1 text-xs bg-gray-50"
              />
            </div>

            <div>
              <label className="text-[10px] text-gray-500 block mb-0.5">z-index</label>
              <input
                type="number"
                value={selected.zIndex ?? selectedIndex}
                onChange={(e) => updateAsset(selectedIndex, { zIndex: Number(e.target.value) })}
                className="w-full border rounded px-2 py-1 text-xs bg-gray-50"
              />
            </div>
          </div>
        ) : (
          <div className="px-3 py-6 text-center text-[10px] text-gray-400">
            Click an asset to edit
          </div>
        )}
      </div>
    </div>
  );
}

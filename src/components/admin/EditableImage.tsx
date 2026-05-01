"use client";

import { useRef, useState, type ChangeEvent, type ReactNode } from "react";
import { useAdmin, useEditableValue } from "./AdminContext";

type Props = {
  path: string;
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  children?: ReactNode;
};

export default function EditableImage({
  path,
  src,
  alt,
  className,
  width,
  height,
  fill = false,
  children,
}: Props) {
  const { enabled, update, slug } = useAdmin();
  const currentSrc = useEditableValue<string>(path, src);
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  if (!enabled) {
    if (!src) return null;
    if (children) return <>{children}</>;
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={className} width={width} height={height} />
    );
  }

  async function onPick(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    try {
      const fd = new FormData();
      fd.set("file", file);
      fd.set("path", path);
      fd.set("slug", slug);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Upload fallito");
        return;
      }
      update(path, data.path);
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  const wrapperBase = "group outline-dashed outline-1 outline-yellow-500/60 hover:outline-yellow-500";
  const wrapperClass = fill
    ? `absolute inset-0 ${wrapperBase}`
    : `relative inline-block ${wrapperBase}`;

  return (
    <span className={wrapperClass}>
      {currentSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={currentSrc}
          alt={alt}
          className={(className || "") + (fill ? " absolute inset-0 h-full w-full object-cover" : " block")}
          width={width}
          height={height}
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center bg-neutral-200 text-xs text-neutral-500">
          Nessuna immagine — clicca “Carica”
        </span>
      )}
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={busy}
        className={
          "absolute bottom-2 right-2 z-10 rounded-full bg-black/85 px-3 py-1 text-xs font-medium text-white transition disabled:opacity-40 " +
          (currentSrc ? "opacity-0 group-hover:opacity-100" : "opacity-100")
        }
      >
        {busy ? "Upload…" : currentSrc ? "Cambia" : "Carica"}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/svg+xml"
        className="hidden"
        onChange={onPick}
      />
    </span>
  );
}

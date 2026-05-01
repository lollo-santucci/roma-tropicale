"use client";

import { useEffect } from "react";
import { useAdmin } from "./AdminContext";

export default function AdminToolbar() {
  const { enabled, slug, isDirty, saving, status, save, discard, logout } = useAdmin();

  useEffect(() => {
    if (!enabled) return;
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [enabled, isDirty]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[1000] flex justify-center px-4 pb-4">
      <div className="pointer-events-auto flex w-full max-w-3xl items-center gap-3 rounded-full border border-white/20 bg-black/85 px-4 py-2 text-sm text-white shadow-lg backdrop-blur">
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs uppercase tracking-wide">
          {slug}
        </span>
        <span className="flex-1 truncate text-white/80">
          {status ?? (isDirty ? "Modifiche non salvate" : "Tutto salvato")}
        </span>
        <button
          type="button"
          onClick={discard}
          disabled={!isDirty || saving}
          className="rounded-full px-3 py-1 text-white/70 hover:text-white disabled:opacity-30"
        >
          Annulla
        </button>
        <button
          type="button"
          onClick={save}
          disabled={!isDirty || saving}
          className="rounded-full bg-white px-4 py-1.5 font-medium text-black transition hover:bg-white/90 disabled:opacity-40"
        >
          {saving ? "Salvataggio…" : "Salva"}
        </button>
        <button
          type="button"
          onClick={logout}
          className="rounded-full px-3 py-1 text-white/60 hover:text-white"
          title="Logout"
        >
          ⏻
        </button>
      </div>
    </div>
  );
}

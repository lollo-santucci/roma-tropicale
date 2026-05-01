"use client";

import { useAdmin, useEditableValue } from "./AdminContext";

type Props = {
  path: string;
  value: boolean;
  labelOn?: string;
  labelOff?: string;
};

export default function EditableToggle({ path, value, labelOn = "Attivo", labelOff = "Coming soon" }: Props) {
  const { enabled, update } = useAdmin();
  const current = useEditableValue<boolean>(path, value);

  if (!enabled) return null;

  return (
    <div className="sticky top-10 z-[800] mx-auto flex max-w-7xl items-center gap-3 rounded-full border border-yellow-500/40 bg-yellow-50/95 px-4 py-2 text-xs text-yellow-900 shadow-sm backdrop-blur">
      <span className="font-medium uppercase tracking-wide">Stato evento</span>
      <button
        type="button"
        onClick={() => update(path, !current)}
        aria-pressed={current}
        className={
          "relative h-6 w-11 shrink-0 rounded-full transition " +
          (current ? "bg-green-600" : "bg-neutral-400")
        }
      >
        <span
          className={
            "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all " +
            (current ? "left-0.5" : "right-0.5")
          }
        />
      </button>
      <span className="font-medium">{current ? labelOn : labelOff}</span>
      <span className="ml-auto text-yellow-900/60">
        {current
          ? "La pagina pubblica mostra l’evento attivo"
          : "La pagina pubblica mostra il messaggio coming soon"}
      </span>
    </div>
  );
}

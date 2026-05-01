"use client";

import { Fragment, type ReactNode } from "react";
import { useAdmin, useEditableValue } from "./AdminContext";

type Controls = {
  remove: () => void;
  moveUp: () => void;
  moveDown: () => void;
  isFirst: boolean;
  isLast: boolean;
};

type Props<T> = {
  path: string;
  items: readonly T[];
  template: T;
  children: (item: T, index: number, controls: Controls) => ReactNode;
  addLabel?: string;
};

export default function EditableList<T>({
  path,
  items,
  template,
  children,
  addLabel = "Aggiungi",
}: Props<T>) {
  const { enabled, update } = useAdmin();
  const list = useEditableValue<readonly T[]>(path, items);

  if (!enabled) {
    return (
      <>
        {list.map((item, i) => (
          <Fragment key={i}>
            {children(item, i, {
              remove: noop,
              moveUp: noop,
              moveDown: noop,
              isFirst: i === 0,
              isLast: i === list.length - 1,
            })}
          </Fragment>
        ))}
      </>
    );
  }

  const writeList = (next: T[]) => update(path, next);

  return (
    <>
      {list.map((item, i) => {
        const controls: Controls = {
          remove: () => writeList(list.filter((_, j) => j !== i)),
          moveUp: () => {
            if (i === 0) return;
            const next = [...list];
            [next[i - 1], next[i]] = [next[i], next[i - 1]];
            writeList(next);
          },
          moveDown: () => {
            if (i === list.length - 1) return;
            const next = [...list];
            [next[i + 1], next[i]] = [next[i], next[i + 1]];
            writeList(next);
          },
          isFirst: i === 0,
          isLast: i === list.length - 1,
        };
        return (
          <div key={i} className="relative">
            <div className="absolute -left-2 -top-2 z-50 flex gap-1 rounded-md bg-black/80 px-1.5 py-0.5 text-[11px] text-white opacity-0 transition hover:opacity-100 focus-within:opacity-100 group-hover:opacity-100 [div:hover>&]:opacity-100">
              <button
                type="button"
                onClick={controls.moveUp}
                disabled={controls.isFirst}
                className="px-1 disabled:opacity-30"
                aria-label="Sposta su"
              >
                ↑
              </button>
              <button
                type="button"
                onClick={controls.moveDown}
                disabled={controls.isLast}
                className="px-1 disabled:opacity-30"
                aria-label="Sposta giù"
              >
                ↓
              </button>
              <button
                type="button"
                onClick={() => {
                  if (confirm("Rimuovere questo elemento?")) controls.remove();
                }}
                className="px-1 text-red-300 hover:text-red-200"
                aria-label="Rimuovi"
              >
                ✕
              </button>
            </div>
            {children(item, i, controls)}
          </div>
        );
      })}
      <button
        type="button"
        onClick={() => writeList([...list, structuredClone(template)])}
        className="mt-2 rounded-full border border-dashed border-black/30 px-3 py-1 text-xs text-black/60 hover:border-black/60 hover:text-black"
      >
        + {addLabel}
      </button>
    </>
  );
}

const noop = () => {};

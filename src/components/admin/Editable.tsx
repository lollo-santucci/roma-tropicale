"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { useAdmin, useEditableValue } from "./AdminContext";

type Props = {
  path: string;
  children: ReactNode;
  as?: ElementType;
  multiline?: boolean;
  className?: string;
};

export default function Editable({
  path,
  children,
  as: Tag = "span",
  multiline = false,
  className,
}: Props) {
  const { enabled, update } = useAdmin();
  const fallback = typeof children === "string" ? children : "";
  const value = useEditableValue<string>(path, fallback);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;
    if (el.innerText !== value) el.innerText = value;
  }, [value, enabled]);

  if (!enabled) {
    return <>{children}</>;
  }

  const Component = Tag as unknown as "span";
  return (
    <Component
      ref={ref as never}
      contentEditable
      suppressContentEditableWarning
      data-admin-path={path}
      className={
        (className ? className + " " : "") +
        "outline-dashed outline-1 outline-yellow-500/50 hover:outline-yellow-500 focus:outline-blue-500 focus:outline-2 rounded-sm px-0.5 -mx-0.5 transition-[outline-color]"
      }
      onBlur={(e) => {
        const text = multiline ? e.currentTarget.innerText : e.currentTarget.innerText.replace(/\n+/g, " ");
        update(path, text);
      }}
      onKeyDown={(e) => {
        if (!multiline && e.key === "Enter") {
          e.preventDefault();
          (e.currentTarget as HTMLElement).blur();
        }
      }}
    >
      {value}
    </Component>
  );
}

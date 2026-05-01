"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import set from "lodash.set";

type Draft = Record<string, unknown>;

type AdminState = {
  enabled: boolean;
  slug: string;
  draft: Draft;
  isDirty: boolean;
  saving: boolean;
  status: string | null;
  update: (path: string, value: unknown) => void;
  discard: () => void;
  save: () => Promise<void>;
  logout: () => Promise<void>;
};

const AdminContext = createContext<AdminState | null>(null);

function deepClone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

function getByPath(obj: unknown, path: string): unknown {
  if (!path) return obj;
  const segments = path.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
  let cur: unknown = obj;
  for (const s of segments) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[s];
  }
  return cur;
}

export function useAdmin(): AdminState {
  const ctx = useContext(AdminContext);
  if (ctx) return ctx;
  return DISABLED_STATE;
}

export function useEditableValue<T>(path: string, fallback: T): T {
  const { enabled, draft } = useAdmin();
  if (!enabled) return fallback;
  const v = getByPath(draft, path);
  if (v === undefined || v === null) return fallback;
  return v as T;
}

const DISABLED_STATE: AdminState = {
  enabled: false,
  slug: "",
  draft: {},
  isDirty: false,
  saving: false,
  status: null,
  update: () => {},
  discard: () => {},
  save: async () => {},
  logout: async () => {},
};

export function AdminProvider({
  slug,
  initial,
  children,
}: {
  slug: string;
  initial: Draft;
  children: ReactNode;
}) {
  const [base] = useState<Draft>(() => deepClone(initial));
  const [draft, setDraft] = useState<Draft>(() => deepClone(initial));
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const isDirty = useMemo(
    () => JSON.stringify(base) !== JSON.stringify(draft),
    [base, draft]
  );

  const update = useCallback((path: string, value: unknown) => {
    setStatus(null);
    setDraft((prev) => {
      const next = deepClone(prev);
      set(next as object, path, value);
      return next;
    });
  }, []);

  const discard = useCallback(() => {
    setDraft(deepClone(base));
    setStatus(null);
  }, [base]);

  const save = useCallback(async () => {
    setSaving(true);
    setStatus("Committing…");
    try {
      const res = await fetch(`/api/admin/content/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: draft }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus(`Errore: ${data.error || res.status}`);
        return;
      }
      setStatus("Committed. Vercel deploy in corso…");
    } catch (e) {
      setStatus(`Errore di rete: ${(e as Error).message}`);
    } finally {
      setSaving(false);
    }
  }, [draft, slug]);

  const logout = useCallback(async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin-tropicale/login";
  }, []);

  const value = useMemo<AdminState>(
    () => ({
      enabled: true,
      slug,
      draft,
      isDirty,
      saving,
      status,
      update,
      discard,
      save,
      logout,
    }),
    [slug, draft, isDirty, saving, status, update, discard, save, logout]
  );

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
}

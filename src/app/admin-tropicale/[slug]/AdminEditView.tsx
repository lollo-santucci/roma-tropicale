"use client";

import type { ReactNode } from "react";
import { AdminProvider } from "@/components/admin/AdminContext";
import AdminToolbar from "@/components/admin/AdminToolbar";

export default function AdminEditView({
  slug,
  initial,
  children,
}: {
  slug: string;
  initial: Record<string, unknown>;
  children: ReactNode;
}) {
  return (
    <AdminProvider slug={slug} initial={initial}>
      <div className="pb-24">{children}</div>
      <AdminToolbar />
    </AdminProvider>
  );
}

import { NextRequest, NextResponse } from "next/server";
import { commitBinary } from "@/lib/github";

export const runtime = "nodejs";

const ALLOWED_MIME = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/svg+xml",
]);
const MAX_BYTES = 5 * 1024 * 1024;

const EXT_FOR: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/svg+xml": "svg",
};

function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

const ALLOWED_FOLDERS = new Set([
  "landing",
  "about",
  "events",
  "academy",
  "merch",
  "membership",
  "contacts",
  "shared",
  "uploads",
]);

export async function POST(req: NextRequest) {
  const form = await req.formData().catch(() => null);
  if (!form) return NextResponse.json({ error: "expected multipart" }, { status: 400 });

  const file = form.get("file");
  const slug = form.get("slug");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "missing file" }, { status: 400 });
  }
  if (!ALLOWED_MIME.has(file.type)) {
    return NextResponse.json({ error: `mime non supportato: ${file.type}` }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "file > 5MB" }, { status: 413 });
  }

  const ext = EXT_FOR[file.type];
  const baseName = slugify(file.name.replace(/\.[^.]+$/, "")) || "image";
  const folder = typeof slug === "string" && ALLOWED_FOLDERS.has(slug) ? slug : "uploads";
  const filename = `${baseName}-${Date.now()}.${ext}`;
  const repoPath = `public/${folder}/${filename}`;
  const publicPath = `/${folder}/${filename}`;

  const buf = Buffer.from(await file.arrayBuffer());
  const base64 = buf.toString("base64");

  try {
    await commitBinary(repoPath, base64, `admin: upload ${filename}`);
    return NextResponse.json({ ok: true, path: publicPath });
  } catch (e) {
    return NextResponse.json(
      { error: (e as Error).message || "upload failed" },
      { status: 500 }
    );
  }
}

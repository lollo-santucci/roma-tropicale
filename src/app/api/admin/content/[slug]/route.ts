import { NextRequest, NextResponse } from "next/server";
import { commitFile } from "@/lib/github";
import { slugToSchema, type ContentSlug } from "@/lib/content-schema";

export const runtime = "nodejs";

export async function POST(
  req: NextRequest,
  ctx: { params: Promise<{ slug: string }> }
) {
  const { slug } = await ctx.params;
  if (!(slug in slugToSchema)) {
    return NextResponse.json({ error: "unknown slug" }, { status: 404 });
  }

  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object" || !("content" in body)) {
    return NextResponse.json({ error: "missing content" }, { status: 400 });
  }

  const schema = slugToSchema[slug as ContentSlug];
  const parsed = schema.safeParse((body as { content: unknown }).content);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "validation failed", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  const path = `src/content/${slug}.json`;
  const text = JSON.stringify(parsed.data, null, 2) + "\n";

  try {
    const result = await commitFile(path, text, `admin: update ${slug} content`);
    return NextResponse.json({ ok: true, ...result });
  } catch (e) {
    return NextResponse.json(
      { error: (e as Error).message || "commit failed" },
      { status: 500 }
    );
  }
}

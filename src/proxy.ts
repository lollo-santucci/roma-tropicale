import { NextRequest, NextResponse } from "next/server";
import { verifySession, ADMIN_COOKIE_NAME } from "@/lib/admin-auth";

const PUBLIC_ADMIN_PATHS = new Set([
  "/admin-tropicale/login",
]);

const PUBLIC_ADMIN_API = new Set([
  "/api/admin/login",
]);

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isAdminPage = pathname.startsWith("/admin-tropicale");
  const isAdminApi = pathname.startsWith("/api/admin");

  if (!isAdminPage && !isAdminApi) return NextResponse.next();
  if (PUBLIC_ADMIN_PATHS.has(pathname) || PUBLIC_ADMIN_API.has(pathname)) {
    return NextResponse.next();
  }

  const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
  const session = await verifySession(token);

  if (!session) {
    if (isAdminApi) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
    const url = req.nextUrl.clone();
    url.pathname = "/admin-tropicale/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin-tropicale/:path*", "/api/admin/:path*"],
};

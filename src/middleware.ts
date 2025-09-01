import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Proteksi rute /admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Cek cookie auth-token
    const token = request.cookies.get("auth-token");

    if (!token) {
      // Redirect ke login jika tidak ada token
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

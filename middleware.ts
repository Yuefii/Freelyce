import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/api/features")) {
    return protectAPI(req);
  }

  if (pathname.startsWith("/dashboard")) {
    return protectPage(req);
  }

  if (pathname.startsWith("/auth")) {
    return preventAuthWhenLoggedIn(req);
  }

  return NextResponse.next();
}

async function protectAPI(req: NextRequest) {
  let token: string | undefined;
  const authHeader = req.headers.get("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  }
  if (!token) {
    token = req.cookies.get("token")?.value;
  }

  if (!token) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const decoded = await verifyToken(token);
  if (!decoded) {
    return NextResponse.json({ error: "invalid or expired token" }, { status: 401 });
  }

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-user-id", decoded.id.toString());
  requestHeaders.set("x-user-email", decoded.email);

  return NextResponse.next({ request: { headers: requestHeaders } });
}

async function protectPage(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }

  const decoded = await verifyToken(token);
  if (!decoded) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }

  return NextResponse.next();
}

async function preventAuthWhenLoggedIn(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.next();
  }

  const decoded = await verifyToken(token);
  if (decoded) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

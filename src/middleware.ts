import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect("https://localsupplies.co.uk/", 301);
}

export const config = {
  matcher: "/",
};

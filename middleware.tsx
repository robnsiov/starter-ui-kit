import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { languages } from "./constants/settings/types";
import settings from "./constants/settings";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let url = "/%path";
  const lang = request.cookies.get("lang")?.value;
  if (lang) {
    const path = languages[lang].path;
    url = url.replace("%path", path);
  } else {
    const path = languages[settings.LANG].path;
    url = url.replace("%path", path);
  }
  return NextResponse.redirect(new URL(url, request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};

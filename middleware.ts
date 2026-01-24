import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supportedLanguages = ["en", "de"];

export function middleware(request: NextRequest) {
  const cookieLang = request.cookies.get("selectedLanguage")?.value;
  let lang = "en";
  if (cookieLang && supportedLanguages.includes(cookieLang)) {
    lang = cookieLang;
  } else {
    const browserLang = request.headers.get("accept-language")?.toLowerCase() ?? "en";
    if (browserLang.startsWith("de")) lang = "de";
  }
  const response = NextResponse.next();
  response.headers.set("x-initial-language", lang);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|assets).*)"],
};

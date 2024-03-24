// middleware.ts
import { NextResponse } from "next/server";
import { i18n } from "./i18n";

let defaultLocale = i18n.defaultLocale;
let locales = i18n.locales;

// Get the preferred locale, similar to above or using a library
function getLocale(request) {
  const acceptedLanguage =
    request.headers.get("accept-language") || defaultLocale;
  const preferredLocale = acceptedLanguage.split(",")[0].trim().toLowerCase();

  // Ensure the preferred locale is one of the supported locales
  return locales.includes(preferredLocale) ? preferredLocale : defaultLocale;
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    "/",
  ],
};

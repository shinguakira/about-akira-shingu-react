import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'ja'];
const defaultLocale = 'en';

const PUBLIC_FILE = /\.(?:jpg|jpeg|png|gif|svg|ico|css|js|woff|woff2)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const searchParams = request.nextUrl.searchParams;
  const userRole = searchParams.get('role');

  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (userRole === 'certification') {
    const pathParts = pathname.split('/').filter(Boolean);
    const pathLocale = pathParts[0] && locales.includes(pathParts[0]) ? pathParts[0] : defaultLocale;
    
    if (!pathname.includes('/certifications')) {
      const certUrl = new URL(`/${pathLocale}/certifications`, request.url);
      certUrl.searchParams.set('role', 'certification');
      return NextResponse.redirect(certUrl);
    }
    
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  let locale = defaultLocale;
  
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    locale = cookieLocale;
  } else {
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage) {
      const preferredLocale = acceptLanguage
        .split(',')[0]
        .split('-')[0]
        .toLowerCase();
      
      if (locales.includes(preferredLocale)) {
        locale = preferredLocale;
      }
    }
  }

  const url = new URL(
    pathname === '/' ? `/${locale}` : `/${locale}${pathname}`, 
    request.url
  );
  
  url.search = request.nextUrl.search;
  
  const response = NextResponse.redirect(url);
  response.cookies.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  });
  
  return response;
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico).*)',
  ],
};

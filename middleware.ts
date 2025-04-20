import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'ja'];
const defaultLocale = 'en';

const PUBLIC_FILE = /\.(?:jpg|jpeg|png|gif|svg|ico|css|js|woff|woff2)$/;

const DEFAULT_ROLE_KEYS = {
  ADMIN: 'usr_type_a7x9z',
  CERTIFICATION: 'usr_type_c3r7f'
};

const DEFAULT_ROLE_VALUES = {
  ADMIN: 'adm_8d92x7',
  CERTIFICATION: 'cert_5f3g2h'
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const searchParams = request.nextUrl.searchParams;
  
  const certKey = process.env.NEXT_PUBLIC_CERTIFICATION_ROLE_KEY || DEFAULT_ROLE_KEYS.CERTIFICATION;
  const certValue = process.env.NEXT_PUBLIC_CERTIFICATION_ROLE_VALUE || DEFAULT_ROLE_VALUES.CERTIFICATION;
  
  const userCertValue = searchParams.get(certKey);
  const isCertificationRole = userCertValue === certValue;

  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (isCertificationRole) {
    const pathParts = pathname.split('/').filter(Boolean);
    const pathLocale = pathParts[0] && locales.includes(pathParts[0]) ? pathParts[0] : defaultLocale;
    
    if (!pathname.includes('/certifications')) {
      const certUrl = new URL(`/${pathLocale}/certifications`, request.url);
      certUrl.searchParams.set(certKey, certValue);
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

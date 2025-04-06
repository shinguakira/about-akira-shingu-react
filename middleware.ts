import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return;
  }

  const locale = request.cookies.get('NEXT_LOCALE')?.value || 
                 request.headers.get('accept-language')?.split(',')[0].split('-')[0] || 
                 'en';
  
  const validLocale = ['en', 'ja'].includes(locale) ? locale : 'en';

  const pathnameHasLocale = ['/en', '/ja'].some(
    (loc) => request.nextUrl.pathname.startsWith(loc)
  );

  if (!pathnameHasLocale) {
    const url = new URL(`/${validLocale}${request.nextUrl.pathname}`, request.url);
    url.search = request.nextUrl.search;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

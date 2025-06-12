import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const redirectPaths = ['invitation'];


export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');
  const pathname = request.nextUrl.pathname;

  if (hostname === 'link.cookiesand1023.com') {
    if (pathname === '/redirect') {
      return NextResponse.next();
    }

    // パスの最初のセグメントを取得（/invitation/code から invitation を取得）
    const pathSegments = pathname.split('/').filter(Boolean);
    const basePath = pathSegments[0];

    if (!redirectPaths.includes(basePath)) {
      return new NextResponse(null, { status: 404 });
    }

    if (basePath === 'invitation') {
      const code = pathSegments[1] || '';
      const url = request.nextUrl.clone();
      const distPath = `https://www.cookiesand1023.com/invitation/${code}`;
      url.pathname = '/redirect?path=' + encodeURIComponent(distPath);
      return NextResponse.rewrite(url);
    }
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

// Configure matcher to run middleware on all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};

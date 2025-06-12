import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const redirectPaths = ['invitation'];


export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');
  const pathname = request.nextUrl.pathname;

  if (hostname === 'redirect.cookiesand1023.com') {

    // パスの最初のセグメントを取得（/invitation/code から invitation を取得）
    const pathSegments = pathname.split('/').filter(Boolean);
    console.log("[DEBUG_LOG] Path segments:", pathSegments);

    const basePath = pathSegments[0];
    console.log("[DEBUG_LOG] Base path:", basePath);

    if (!redirectPaths.includes(basePath)) {
      return new NextResponse(null, { status: 404 });
    }

    if (basePath === 'invitation') {
      const code = pathSegments[1] || '';
      console.log("[DEBUG_LOG] Invitation code:", code);

      const url = request.nextUrl.clone();

      url.pathname = '/redirect';
      url.search = `?path=${encodeURIComponent(pathname)}`;

      return NextResponse.redirect(url);
    }

    return new NextResponse(null, { status: 404 });
  }

  console.log("[DEBUG_LOG] Hostname doesn't match, continuing normal request processing");
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

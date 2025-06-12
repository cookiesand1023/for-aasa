import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const redirectPaths = ['invitation'];


export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');
  const pathname = request.nextUrl.pathname;
  const query = request.nextUrl.search;

  console.log("[DEBUG_LOG] Middleware processing request:", { hostname, pathname, query });

  if (hostname === 'link.cookiesand1023.com') {
    console.log("[DEBUG_LOG] Hostname matches 'link.cookiesand1023.com'");

    if (pathname === '/redirect') {
      console.log("[DEBUG_LOG] Path is '/redirect', skipping middleware processing");
      return NextResponse.next();
    }

    // パスの最初のセグメントを取得（/invitation/code から invitation を取得）
    const pathSegments = pathname.split('/').filter(Boolean);
    console.log("[DEBUG_LOG] Path segments:", pathSegments);

    const basePath = pathSegments[0];
    console.log("[DEBUG_LOG] Base path:", basePath);

    if (!redirectPaths.includes(basePath)) {
      console.log("[DEBUG_LOG] Base path not in redirect paths list, returning 404");
      return new NextResponse(null, { status: 404 });
    }

    if (basePath === 'invitation') {
      console.log("[DEBUG_LOG] Processing 'invitation' path");

      const code = pathSegments[1] || '';
      console.log("[DEBUG_LOG] Invitation code:", code);

      const url = request.nextUrl.clone();
      const distPath = `https://www.cookiesand1023.com/invitation/${code}`;
      console.log("[DEBUG_LOG] Destination path:", distPath);

      url.pathname = '/redirect';
      url.search = `?path=${encodeURIComponent(distPath)}`;
      console.log("[DEBUG_LOG] Rewriting URL to:", url.toString());

      return NextResponse.rewrite(url);
    }

    console.log("[DEBUG_LOG] No matching path handler, returning 404");
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

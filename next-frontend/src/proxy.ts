import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const handleI18n = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  request.headers.set('x-pathname', request.nextUrl.pathname);
  const response = handleI18n(request);
  response.headers.set('x-pathname', request.nextUrl.pathname);
  return response;
}

export const config = {
  // Match all request paths except for API routes, _next internals, hero-img rewrites, and static files
  matcher: [
    '/((?!api|_next|_vercel|hero-img|.*\\..*).*)',
  ],
};

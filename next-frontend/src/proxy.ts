import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all request paths except for API routes, _next internals, hero-img rewrites, and static files
  matcher: [
    '/((?!api|_next|_vercel|hero-img|.*\\..*).*)',
  ],
};

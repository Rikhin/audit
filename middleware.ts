import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/api/waitlist',
  '/sign-in/(.*)',
  '/sign-up/(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    auth.protect();
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Exclude files with a dot (e.g. favicon.ico)
    '/(api|trpc|static|images|videos|audios|fonts|_next|.+[\.\w]+)(.*)',
    // Re-include any files in the api or trpc folders that might have been excluded above
    '/((?!api|trpc|_next).*)',
    // Re-include specific routes
    '/',
    '/auth-test',
  ],
};

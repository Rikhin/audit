import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rate limiting configuration
const RATE_LIMIT = {
  // Maximum number of requests per IP
  MAX_REQUESTS: 100,
  // Time window in milliseconds (1 minute)
  WINDOW_MS: 60 * 1000,
}

// In-memory store for rate limiting
const rateLimits = new Map()

// Rate limiting middleware
export async function middleware(request: NextRequest) {
  // Skip rate limiting for static files and API routes
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api/') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Get client IP address
  const ip = request.headers.get('x-forwarded-for') || '127.0.0.1'
  
  // Get or initialize rate limit for this IP
  const now = Date.now()
  const windowStart = now - RATE_LIMIT.WINDOW_MS
  const requestTimestamps = rateLimits.get(ip) || []
  
  // Filter out old requests
  const recentRequests = requestTimestamps.filter((timestamp: number) => timestamp > windowStart)
  
  // Check if rate limit is exceeded
  if (recentRequests.length >= RATE_LIMIT.MAX_REQUESTS) {
    return new NextResponse('Too many requests', { status: 429 })
  }
  
  // Add current request timestamp
  recentRequests.push(now)
  rateLimits.set(ip, recentRequests)
  
  // Set security headers
  const response = NextResponse.next()
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  return response
}

// Configure which paths to run the middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - api/auth (auth routes)
     */
    '/((?!_next/static|_next/image|favicon.ico|api/auth).*)',
  ],
}

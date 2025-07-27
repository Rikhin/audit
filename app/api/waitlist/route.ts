import { NextResponse } from 'next/server'
import { createClient } from '@/src/lib/supabase/client'

// Rate limiting configuration
const RATE_LIMIT = {
  // Maximum number of requests per IP
  MAX_REQUESTS: 5,
  // Time window in milliseconds (1 minute)
  WINDOW_MS: 60 * 1000,
}

// In-memory store for rate limiting (consider using Redis in production)
const rateLimits = new Map()

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(/, /)[0] : '127.0.0.1'

    // Rate limiting check
    const now = Date.now()
    const windowStart = now - RATE_LIMIT.WINDOW_MS
    const requestTimestamps = rateLimits.get(ip) || []
    const recentRequests = requestTimestamps.filter((timestamp: number) => timestamp > windowStart)

    if (recentRequests.length >= RATE_LIMIT.MAX_REQUESTS) {
      return new NextResponse(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Add current request timestamp
    rateLimits.set(ip, [...recentRequests, now])

    // Parse request body
    const { email } = await request.json()

    // Validate email
    if (!email || typeof email !== 'string') {
      return new NextResponse(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Simple email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new NextResponse(
        JSON.stringify({ error: 'Please enter a valid email address' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const supabase = createClient()

    // Check if email already exists
    const { data: existingEmail, error: queryError } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single()

    if (queryError && queryError.code !== 'PGRST116') {
      console.error('Supabase query error:', queryError)
      return new NextResponse(
        JSON.stringify({ error: 'Failed to check email' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    if (existingEmail) {
      return new NextResponse(
        JSON.stringify({ message: 'This email is already on the waitlist!' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Insert new email
    const { error: insertError } = await supabase
      .from('waitlist')
      .insert([{ email, created_at: new Date().toISOString() }])

    if (insertError) {
      console.error('Supabase insert error:', insertError)
      return new NextResponse(
        JSON.stringify({ error: 'Failed to add to waitlist' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    return new NextResponse(
      JSON.stringify({ message: 'Thanks for joining the waitlist! We\'ll be in touch soon.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error in waitlist API:', error)
    return new NextResponse(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}

// Add CORS headers for preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

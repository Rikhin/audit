import { createClient } from '@supabase/supabase-js'

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Supabase URL or Anon Key is not defined in environment variables.')
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    const { count, error } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })

    if (error) {
      console.error('Error fetching waitlist count:', error)
      return new Response(JSON.stringify({ error: error.message }), { status: 500 })
    }

    return new Response(JSON.stringify({ count }), { status: 200 })
  } catch (error: any) {
    console.error('Error in waitlist-count API:', error)
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }
}
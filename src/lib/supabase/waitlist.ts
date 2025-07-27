import { createClient } from './client'

export async function addToWaitlist(email: string) {
  try {
    const supabase = createClient()
    console.log('Attempting to add email to waitlist:', email)
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 20) + '...')
    
    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ email }])
      .select()

    if (error) {
      console.error('Supabase insert error:', error)
      throw new Error(`Failed to add to waitlist: ${error.message}`)
    }

    console.log('Successfully added to waitlist:', data)
    return data
  } catch (error) {
    console.error('Error in addToWaitlist:', error)
    throw error
  }
}

export async function isEmailInWaitlist(email: string) {
  try {
    const supabase = createClient()
    console.log('Checking if email exists in waitlist:', email)
    
    const { data, error } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single()

    // PGRST116 is the code for no rows returned, which is expected if email doesn't exist
    if (error && error.code !== 'PGRST116') {
      console.error('Supabase query error:', error)
      throw new Error(`Failed to check email: ${error.message}`)
    }

    console.log('Email check result:', !!data)
    return !!data
  } catch (error) {
    console.error('Error in isEmailInWaitlist:', error)
    throw error
  }
}

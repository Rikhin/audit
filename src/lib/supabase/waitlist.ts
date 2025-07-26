import { createClient } from './client'

export async function addToWaitlist(email: string) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('waitlist')
    .insert([{ email }])
    .select()

  if (error) {
    throw error
  }

  return data
}

export async function isEmailInWaitlist(email: string) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('waitlist')
    .select('email')
    .eq('email', email)
    .single()

  if (error && error.code !== 'PGRST116') { // PGRST116 is the code for no rows returned
    throw error
  }

  return !!data
}

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// Accept common variants for the anon key so deployments don't break if the name differs
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_SUPABASE_ANON_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.VITE_SUPABASE_ANONKEY

if (!supabaseUrl || !supabaseAnonKey) {
  // include which values are missing to make logs easier to read
  throw new Error(
    `Missing Supabase environment variables. Found VITE_SUPABASE_URL=${!!supabaseUrl}, VITE_SUPABASE_ANON_KEY=${!!supabaseAnonKey}`
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

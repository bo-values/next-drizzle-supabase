import { Provider } from "@supabase/supabase-js";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * create supabase client
 * 
 * @returns 
 */
export const createSupabaseClient = () => {
  const SupabaseClient = {
    instance: createPagesBrowserClient({
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_PROJECT_API_KEY as string
    }),
  };
  Object.freeze(SupabaseClient);
  return SupabaseClient.instance
}

/**
 * oauth With SignIn
 * 
 * create session at local Storage
 */
export const oauthWithSignIn = async (provider: Provider) => {
  const supabase = createSupabaseClient()
  await supabase.auth.signInWithOAuth({ provider })
}

/**
 * oauthWithSignOut
 * 
 * delete session at local Storage
 */
export const oauthWithSignOut = async () => {
  const supabase = createSupabaseClient()
  await supabase.auth.signOut()
}
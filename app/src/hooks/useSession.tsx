import { createSupabaseClient } from "@/lib/utils"
import { AuthError, Session, createClient } from "@supabase/supabase-js"
import React, { useEffect } from "react"

export default function useSession() {
    const [session, setSession] = React.useState<Session | null>(null)
    const supabase = createSupabaseClient()
    useEffect(() => {
        (async () => {
            const result = await supabase.auth.getSession()
            if (!result) return
            const { data: { session }, error } = result
            if (error) {
                console.error(error)
                return
            }
            setSession(session)
        })()
    }, [])
    if (!session) return
    return session
}
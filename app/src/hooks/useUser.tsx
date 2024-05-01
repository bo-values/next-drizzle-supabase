import { createSupabaseClient } from "@/lib/utils"
import { AuthError, Session, User, createClient } from "@supabase/supabase-js"
import React, { useEffect } from "react"


export default function useUser() {
    const [user, setUser] = React.useState<User | null>(null)
    const supabase = createSupabaseClient()
    useEffect(() => {
        (async () => {
            const result = await supabase.auth.getUser()
            if (!result) return
            const { data: { user }, error } = result
            if (error) {
                console.error(error)
                return
            }
            setUser(user)
        })()
    }, [])
    if (!user) return
    return user
}
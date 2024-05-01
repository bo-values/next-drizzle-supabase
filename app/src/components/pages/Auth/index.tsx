"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Icons } from "@/lib/icons"
import { oauthWithSignIn } from "@/lib/utils"
import { Provider } from "@supabase/supabase-js"

type OAuthProviders = "github"

// 認証可能なプロバイダーの一覧
const oauthProviders = [
  { name: "GitHub", provider: "github", icon: "github" },
] satisfies {
  name: string
  icon: keyof typeof Icons,
  provider: OAuthProviders
}[]


export default function Index() {

  /**
   * sign in with provider
   */
  const signIn = React.useCallback(async (provider: Provider) => {
    await oauthWithSignIn(provider)
  }, [])


  return (
    <div className="h-screen flex justify-center items-center">
      {oauthProviders.map((provider) => {
        const Icon = Icons[provider.icon]

        return <div key={provider.provider}>
          <Button onClick={() => signIn(provider.provider)}>
            <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
            <span>
              SignIn with {provider.name}
            </span>
          </Button>
        </div>
      })}
    </div>
  )
}
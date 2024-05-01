"use client"
import useSession from "@/hooks/useSession";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Auth from "@/components/pages/Auth";

export default function Home() {
  const session = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session) {
      router.push("/todo")
    }
  }, [session, router])
  return <Auth />
}
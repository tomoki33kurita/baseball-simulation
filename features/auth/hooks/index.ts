import { auth } from '@/app/api/server/firebase'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useAuth = (): { isAuthSuccess: boolean } => {
  const [isAuthSuccess, setIsAuthSuccess] = useState(false)
  const router = useRouter()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        router.replace(`/signIn?redirect=retail`)
        return
      }
      setIsAuthSuccess(true)
    })
  }, [router])
  return { isAuthSuccess }
}

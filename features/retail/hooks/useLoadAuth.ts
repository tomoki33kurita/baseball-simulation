import { auth } from '@/app/api/server/firebase'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

// useAuth と命名が似ていて微妙
export const useLoadAuth = () => {
  const [email, setEmail] = useState<string>('')
  const router = useRouter()
  const handleToTop = () => router.push('/')

  useEffect(() => {
    // api router を経由して呼ぶ感じにしたい。
    auth.onAuthStateChanged((user) => {
      if (user !== null && user.email !== null) {
        setEmail(user.email)
      }
    })
  }, [])

  return { email, handleToTop }
}

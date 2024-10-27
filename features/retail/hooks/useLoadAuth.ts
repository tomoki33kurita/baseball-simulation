import { auth } from '@/app/api/server/firebase'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useLoadAuth = () => {
  const [email, setEmail] = useState<string>('')
  const router = useRouter()
  const handleToTop = () => router.push('/')

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user !== null && user.email !== null) {
        setEmail(user.email)
      }
    })
  }, [])

  return { email, handleToTop }
}

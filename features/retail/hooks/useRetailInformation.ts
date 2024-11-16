import { Retail } from '@/types'
import axios from 'axios'
import { useEffect, useState } from 'react'

const GET_RETAIL_INFORMATION_PATH = '/api/server/retail/information'

export const useRetailInformation = (email: string) => {
  const [retail, setRetail] = useState<Retail | null>(null)
  useEffect(() => {
    const fetchRetailInformation = async () => {
      if (email === '') return
      await axios.get(`${GET_RETAIL_INFORMATION_PATH}?email=${email}`).then((res) => {
        if (!res.data) {
          console.log('No selectable brands')
          return
        }
        setRetail(res.data.foundShop)
      })
    }
    fetchRetailInformation()
  }, [email])

  return {
    retail
  }
}

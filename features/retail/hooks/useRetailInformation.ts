import { Brand, RetailShop } from '@/types'
import axios from 'axios'
import { useEffect, useState } from 'react'

const GET_RETAIL_INFORMATION_PATH = '/api/server/retail/information'

export const useRetailInformation = (email: string, brand: Brand | null) => {
  const [retailShop, setRetailShop] = useState<RetailShop | null>(null)
  useEffect(() => {
    const fetchRetailInformation = async () => {
      if (email === '') return
      await axios.get(`${GET_RETAIL_INFORMATION_PATH}?email=${email}`).then((res) => {
        if (!res.data) {
          console.log('No selectable brands')
          return
        }
        setRetailShop(res.data.foundShop)
      })
    }
    fetchRetailInformation()
  }, [email])

  const retailName = retailShop ? retailShop.name : '--'

  return {
    retailShop,
    retailName
  }
}

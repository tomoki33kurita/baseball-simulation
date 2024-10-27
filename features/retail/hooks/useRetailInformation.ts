import { Brand, RetailShop } from '@/types'
import axios from 'axios'
import { useEffect, useState } from 'react'

const GET_RETAIL_INFORMATION_PATH = '/api/server/retail/information'

export const useRetailInformation = (email: string, brand: Brand | null) => {
  const [retailShop, setRetailShop] = useState<RetailShop | null>(null)
  useEffect(() => {
    const fetchRetailInformation = async () => {
      await axios.post(GET_RETAIL_INFORMATION_PATH, { email }).then((res) => setRetailShop(res.data.foundShop))
    }
    fetchRetailInformation()
  }, [email])

  const selectableBrandChecker = (brand: Brand | null) => {
    if (brand === null) return false
    if (retailShop === null) return false
    if (retailShop.selectableBrands.length === 0) return false
    return retailShop.selectableBrands.map((b) => b.value).includes(brand)
  }

  const isSelectableBrand = selectableBrandChecker(brand)
  const retailName = retailShop ? retailShop.name : '--'

  return {
    isSelectableBrand,
    retailName
  }
}

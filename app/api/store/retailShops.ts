import { ALL_BRANDS } from '@/features/retail/Constants/brands'
import { RetailShop } from '@/types'

const demoKurita = {
  email: 'tomoki_kurita@b-ridge.org',
  selectableBrands: ALL_BRANDS,
  name: 'くりたデモ'
}

// const a = {
//   email: '',
//   selectableBrands: [ATOMS, YELL_STORY, DxM],
//   name: ''
// }

export const retailShops: RetailShop[] = [
  demoKurita
  // a
]

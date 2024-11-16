import { ALL_BRANDS } from '@/features/retail/Constants/brands'
import { Retail } from '@/types'

const demoKurita = {
  name: 'くりたデモ',
  email: 'tomoki_kurita@b-ridge.org',
  selectableBrands: ALL_BRANDS
}

// const a = {
//   name: ''
//   email: '',
//   selectableBrands: [YELL_STORY, DxM],
// }

export const retailShops: Retail[] = [
  demoKurita
  // a
]

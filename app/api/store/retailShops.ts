import { ALL_BRANDS, FIVE } from '@/features/retail/Constants/brands'
import { Retail } from '@/types'

const demoKurita = {
  name: 'くりたデモ',
  email: 'tomoki_kurita@b-ridge.org',
  selectableBrands: ALL_BRANDS
}

const yoshikawaDemoMain = {
  name: '吉川様_デモ',
  email: 'shack.glove@gmail.com',
  selectableBrands: [FIVE]
}

// const a = {
//   name: ''
//   email: '',
//   selectableBrands: [YELL_STORY, DxM],
// }

export const retailShops: Retail[] = [
  demoKurita,
  yoshikawaDemoMain
  // a
]

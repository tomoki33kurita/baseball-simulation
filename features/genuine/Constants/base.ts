import { WebParts } from '@/types'

export const DOMINANT_ARMS = [
  { label: '右投げ', value: 'rightThrow' },
  { label: '左投げ', value: 'leftThrow' }
]

export const BACK_STYLES = [
  { label: 'ノーマル', value: 'normal' },
  { label: 'ベルクロ', value: 'velcro' }
]

export const MATERIAL_PACKS = [
  { label: '横とじシングル', value: 'sideSingle' },
  { label: '横とじダブル', value: 'sideDouble' },
  { label: 'ダブルレース無し', value: 'sideDoubleNoLace' }
]
export const FINGER_GUARDS = [
  { label: '指カバー有り', value: 'indexCover' },
  { label: '指アテ有り', value: 'indexPad' },
  // { label: '指アテ有り(中指)', value: 'middlePad' },
  { label: '無し', value: 'none' }
]

const webImageBaseUrl = '/genuine/webParts'
export const WEB_PARTS: WebParts[] = [
  { label: 'フラット', value: 'flat', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/flat.jpg` },
  { label: 'フラット2', value: 'flat2', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/flat2.jpg` },
  { label: 'バスケット', value: 'basket', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/basket.jpg` },
  { label: 'バスケット2', value: 'basket2', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/basket2.jpg` },
  { label: 'ツーピース', value: 'twoPeace', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/twoPeace.jpg` },
  { label: 'ツーピース2', value: 'twoPeace2', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/twoPeace2.jpg` },
  { label: 'Genuine', value: 'genuine', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/genuine.jpg` },

  { label: 'クロス', value: 'cross', positions: ['infielder'], imageUrl: `${webImageBaseUrl}/cross.jpg` },
  { label: 'クロス2', value: 'cross2', positions: ['infielder'], imageUrl: `${webImageBaseUrl}/cross2.jpg` },
  { label: 'クロス3', value: 'cross3', positions: ['infielder'], imageUrl: `${webImageBaseUrl}/cross3.jpg` },
  { label: 'クロスV', value: 'crossV', positions: ['infielder'], imageUrl: `${webImageBaseUrl}/crossV.jpg` },
  { label: 'クロスV2', value: 'crossV2', positions: ['infielder'], imageUrl: `${webImageBaseUrl}/crossV2.jpg` },
  { label: 'Hウェブ', value: 'h', positions: ['infielder'], imageUrl: `${webImageBaseUrl}/h.jpg` },
  { label: 'Uネット', value: 'uNet', positions: ['infielder'], imageUrl: `${webImageBaseUrl}/uNet.jpg` },
  { label: 'Uネット2', value: 'uNet2', positions: ['infielder'], imageUrl: `${webImageBaseUrl}/uNet2.jpg` },

  { label: 'Tネット', value: 'tNet', positions: ['outfielder'], imageUrl: `${webImageBaseUrl}/TNet.jpg` },
  { label: 'Tネット2', value: 'tNet2', positions: ['outfielder'], imageUrl: `${webImageBaseUrl}/TNet2.jpg` },
  { label: 'Tネット3', value: 'tNet3', positions: ['outfielder'], imageUrl: `${webImageBaseUrl}/TNet3.jpg` },
  { label: 'Iネット', value: 'iNet', positions: ['outfielder'], imageUrl: `${webImageBaseUrl}/iNet.jpg` },
  { label: 'トンボ', value: 'dragonfly', positions: ['outfielder'], imageUrl: `${webImageBaseUrl}/dragonfly.jpg` },
  { label: 'トンボ2', value: 'dragonfly2', positions: ['outfielder'], imageUrl: `${webImageBaseUrl}/dragonfly2.jpg` },
  { label: 'ラダー', value: 'ladder', positions: ['outfielder'], imageUrl: `${webImageBaseUrl}/ladder.jpg` }
]

export const DOMINANT_ARM_BUTTON_OPTION = 'genuine-dominant-arm-card'
export const BACK_STYLE_BUTTON_OPTION = 'genuine-back-style-card'
export const MATERIAL_PACK_BUTTON_OPTION = 'genuine-material-pack-card'
export const FINGER_GUARD_TYPE_BUTTON_OPTION = 'genuine-finger-guard-type-card'
export const WEB_PARTS_BUTTON_OPTION = 'genuine-web-parts-card'
export const LOOP_OF_RING_FINGER_BUTTON_OPTION = 'genuine-loop-of-ring-finger-card'

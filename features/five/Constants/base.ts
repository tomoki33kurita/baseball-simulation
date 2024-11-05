export const ORDER_TYPES = [
  { label: 'Basic', value: 'basic', price: 53900 },
  // { label: 'Basic(刺繍有)', value: 'basicWithEmbroidery', price: 53900 },
  { label: 'Color Select', value: 'colorSelect', price: 57200 },
  { label: 'Custom', value: 'custom', price: 61600 }
]

export const DOMINANT_ARMS = [
  { label: '右投げ', value: 'rightThrow' },
  { label: '左投げ', value: 'leftThrow' }
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

export const F_LEX_ENGRAVINGS = [
  { label: '有り', value: 'fLexEngraving', price: 3300 },
  { label: '無し', value: 'none', price: 0 }
]

const webImageBaseUrl = '/five/webParts'
type WebPartsObj = {
  label: string
  value: string
  positions: string[]
  imageUrl: string
}
export const WEB_PARTS: WebPartsObj[] = [
  { label: 'P-01', value: 'p01', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/p01.jpg` },
  { label: 'P-02', value: 'p02', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/p02.jpg` },
  { label: 'P-03', value: 'p03', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/p03.jpg` },
  { label: 'P-04', value: 'p04', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/p04.jpg` },
  { label: 'P-05', value: 'p05', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/p05.jpg` },
  { label: 'P-06', value: 'p06', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/p06.jpg` },
  { label: 'IN-01', value: 'in01', positions: ['infielder'], imageUrl: `${webImageBaseUrl}/in01.jpg` },
  { label: 'IN-02', value: 'in02', positions: ['infielder'], imageUrl: `${webImageBaseUrl}/in02.jpg` },
  { label: 'IN-03', value: 'in03', positions: ['infielder'], imageUrl: `${webImageBaseUrl}/in03.jpg` },
  { label: 'IN-04', value: 'in04', positions: ['infielder'], imageUrl: `${webImageBaseUrl}/in04.jpg` },
  { label: 'IN-05', value: 'in05', positions: ['infielder'], imageUrl: `${webImageBaseUrl}/in05.jpg` },
  { label: 'IN-06', value: 'in06', positions: ['infielder'], imageUrl: `${webImageBaseUrl}/in06.jpg` },
  { label: 'OU-01', value: 'ou01', positions: ['outfielder'], imageUrl: `${webImageBaseUrl}/ou01.jpg` },
  { label: 'OU-02', value: 'ou02', positions: ['outfielder'], imageUrl: `${webImageBaseUrl}/ou02.jpg` },
  { label: 'OU-03', value: 'ou03', positions: ['outfielder'], imageUrl: `${webImageBaseUrl}/ou03.jpg` }
]

export const TANNER_BUTTON_OPTION = 'five-tanner-card'
export const BACK_STYLE_BUTTON_OPTION = 'five-back-style-card'
export const DOMINANT_ARM_BUTTON_OPTION = 'five-dominant-arm-card'
export const MATERIAL_PACK_BUTTON_OPTION = 'five-material-pack-card'
export const FINGER_GUARD_TYPE_BUTTON_OPTION = 'five-finger-guard-type-card'
export const WEB_PARTS_BUTTON_OPTION = 'five-web-parts-card'
export const LOOP_OF_RING_FINGER_BUTTON_OPTION = 'five-loop-of-ring-finger-card'
export const WELTING_CUT_BUTTON_OPTION = 'five-welting-cut-card'

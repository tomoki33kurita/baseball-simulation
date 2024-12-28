import { BankLaceDirectionItem, BaseItem, BaseItemWithPrice, ColorItem, WebParts } from '@/types'

export const DOMINANT_ARMS: BaseItem[] = [
  { label: '右投げ', value: 'rightThrow' },
  { label: '左投げ', value: 'leftThrow' }
]

export const NORMAL_BACK_STYLE: BaseItemWithPrice = { label: 'ノーマル', value: 'normal', price: 0 }
export const CROWN_BACK_STYLE: BaseItemWithPrice = { label: '王冠スタイル', value: 'crown', price: 0 }
export const RN_BACK_STYLE: BaseItemWithPrice = { label: 'RNスタイル', value: 'rn', price: 0 }
export const BACK_STYLES: BaseItemWithPrice[] = [
  NORMAL_BACK_STYLE,
  CROWN_BACK_STYLE,
  RN_BACK_STYLE
  // { label: 'ノーマルメッシュ', value: 'normalMesh', price: 3300 },
  // { label: '王冠メッシュ', value: 'crownMesh', price: 3300 },
]

export const BACK_STYLES_CATCHER: BaseItemWithPrice[] = [
  { label: 'ベルト', value: 'belt', price: 0 },
  { label: 'レギュラー', value: 'regular', price: 0 },
  { label: 'TMバック', value: 'tmBack', price: 0 }
]

export const ALL_BACK_STYLES: BaseItemWithPrice[] = [...BACK_STYLES, ...BACK_STYLES_CATCHER]

export const MESH_COLORS: ColorItem[] = [
  { label: 'ブラック', value: 'black', color: '#1E1E1E' },
  { label: 'ホワイト', value: 'white', color: '#000000' },
  { label: 'ブルー', value: 'blue', color: '#253F86' },
  { label: 'ネイビー', value: 'navy', color: '#151830' },
  { label: 'レッド', value: 'red', color: '#CB1527' }
]

export const SIZES: BaseItemWithPrice[] = [
  { label: '10mm大きく', value: 'large10', price: 3300 },
  { label: '5mm大きく', value: 'large5', price: 3300 },
  { label: '基本モデルズバリ', value: 'default', price: 0 },
  { label: '5mm小さく', value: 'small5', price: 3300 },
  { label: '10mm小さく', value: 'small10', price: 3300 }
]

export const PALM_TO_WEB_CONNECT_LACE_STYLE: BaseItem[] = [
  { label: 'ストレート', value: 'straight' },
  { label: 'クロス', value: 'cross' }
]

export const WEB_LACE_STYLES: BaseItem[] = [
  { label: '通常', value: 'normal' },
  { label: 'クロス', value: 'cross' }
]

export const BACK_LACE_STYLES: BaseItem[] = [
  { label: 'なし', value: 'none' },
  { label: '並行通し', value: 'normal' },
  { label: 'クロス通し', value: 'cross' }
]

export const LEATHER_THICKNESS: BaseItem[] = [
  { label: '普通', value: 'normal' },
  { label: '薄く', value: 'thin' }
]

export const CORE_HARDNESSES: BaseItem[] = [
  { label: '普通', value: 'normal' },
  { label: '硬め', value: 'hard' }
]

export const GLOVE_SIZES: BaseItem[] = [
  { label: '23cm以下', value: 'under23' },
  { label: '24~26cm', value: 'between24and26' },
  { label: '27cm以上', value: 'over27' }
]

export const BANK_LACE_DIRECTIONS: BankLaceDirectionItem[] = [
  { label: 'レギュラー巻き', value: 'sequentialRoll' },
  { label: '逆巻き', value: 'reverseRoll' }
]

export const LOOP_OF_RING_FINGERS: BaseItemWithPrice[] = [
  { label: '有り', value: 'loopOfRingFinger', price: 2200 },
  { label: '無し', value: 'none', price: 0 }
]

export const MATERIAL_PACKS: BaseItem[] = [
  { label: 'タテとじ', value: 'vertical' },
  { label: 'ヨコトジ', value: 'sideSingle' },
  { label: 'ヨコトジダブル', value: 'sideDouble' },
  { label: 'ヨコトジ(紐抜き)', value: 'sideDoubleNoLace' },
  { label: 'ワイドヒンジ', value: 'sideSingleWideHinge' }, // canvas
  { label: 'ワイドヒンジダブル', value: 'sideDoubleWideHinge' }, // canvas
  { label: 'ワイドヒンジ(紐抜き)', value: 'sideDoubleWideHingeNoLace' } // canvas
]

export const MATERIAL_PACKS_FOR_FIRST_BASEMAN: BaseItem[] = [
  { label: 'ヨコトジ', value: 'sideSingle' },
  { label: 'ヨコトジダブル', value: 'sideDouble' },
  { label: 'ヨコトジ(紐抜き)', value: 'sideDoubleNoLace' }
]

export const FINGER_GUARDS: BaseItem[] = [
  { label: '指カバー', value: 'indexCover' },
  { label: '指アテ', value: 'indexPad' },
  // { label: '指アテ有り(中指)', value: 'middlePad' },
  { label: '無し', value: 'none' }
]

export const FINGER_GUARDS_CATCHER: BaseItem[] = [
  { label: '指カバー有り', value: 'indexCover' },
  { label: '指アテ1', value: 'indexPad1' },
  { label: '指アテ2', value: 'indexPad2' },
  // { label: '指アテ有り(中指)', value: 'middlePad' },
  { label: '無し', value: 'none' }
]

export const GENUINE_EMBROIDERIES: BaseItemWithPrice[] = [
  { label: '薬指一体型', value: 'atRingFinger', price: 4400 },
  { label: '無し', value: 'none', price: 0 }
]

export const GENUINE_ENGRAVINGS: BaseItemWithPrice[] = [
  { label: 'あり', value: 'genuineEngraving', price: 4400 },
  { label: '無し', value: 'none', price: 0 }
]

const webImageBaseUrl = '/genuine/webParts'
export const WEB_PARTS: WebParts[] = [
  { label: '通常', value: 'normal', positions: ['firstBaseman'], imageUrl: `${webImageBaseUrl}/normal.jpg` },
  { label: '通常2', value: 'normal2', positions: ['firstBaseman'], imageUrl: `${webImageBaseUrl}/normal2.jpg` },
  { label: 'フラット', value: 'flat', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/flat.jpg` },
  { label: 'フラット2', value: 'flat2', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/flat2.jpg` },
  { label: 'フラット3', value: 'flat3', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/flat3.jpg` },
  { label: 'フラット4', value: 'flat4', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/flat4.jpg` },
  { label: 'フラット5', value: 'flat5', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/flat5.jpg` },
  { label: 'フラット6', value: 'flat6', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/flat6.jpg` },
  { label: 'バスケット', value: 'basket', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/basket.jpg` },
  { label: 'バスケット2', value: 'basket2', positions: ['pitcher', 'infielder'], imageUrl: `${webImageBaseUrl}/basket2.jpg` },
  { label: 'ツーピース', value: 'twoPeace', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/twoPeace.jpg` },
  { label: 'ツーピース2', value: 'twoPeace2', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/twoPeace2.jpg` },
  { label: 'Genuine', value: 'genuine', positions: ['pitcher'], imageUrl: `${webImageBaseUrl}/genuine.jpg` },

  { label: 'クロス', value: 'cross', positions: ['infielder'], imageUrl: `${webImageBaseUrl}/cross.jpg` },
  { label: 'クロス2', value: 'cross2', positions: ['infielder', 'firstBaseman'], imageUrl: `${webImageBaseUrl}/cross2.jpg` },
  { label: 'クロス3', value: 'cross3', positions: ['infielder', 'firstBaseman'], imageUrl: `${webImageBaseUrl}/cross3.jpg` },
  { label: 'クロスV', value: 'crossV', positions: ['infielder'], imageUrl: `${webImageBaseUrl}/crossV.jpg` },
  { label: 'クロスV2', value: 'crossV2', positions: ['infielder', 'firstBaseman'], imageUrl: `${webImageBaseUrl}/crossV2.jpg` },
  { label: 'H', value: 'h', positions: ['infielder'], imageUrl: `${webImageBaseUrl}/h.jpg` },
  { label: 'ワンピース', value: 'onePeace', positions: ['infielder'], imageUrl: `${webImageBaseUrl}/onePeace.jpg` },
  { label: 'Uネット', value: 'uNet', positions: ['infielder'], imageUrl: `${webImageBaseUrl}/uNet.jpg` },
  { label: 'Uネット2', value: 'uNet2', positions: ['infielder'], imageUrl: `${webImageBaseUrl}/uNet2.jpg` },

  { label: 'Tネット', value: 'tNet', positions: ['outfielder'], imageUrl: `${webImageBaseUrl}/tNet.jpg` },
  { label: 'Tネット2', value: 'tNet2', positions: ['outfielder', 'firstBaseman'], imageUrl: `${webImageBaseUrl}/tNet2.jpg` },
  { label: 'Tネット3', value: 'tNet3', positions: ['outfielder', 'firstBaseman'], imageUrl: `${webImageBaseUrl}/tNet3.jpg` },
  { label: 'Tネット4', value: 'tNet4', positions: ['firstBaseman'], imageUrl: `${webImageBaseUrl}/iNet.jpg` },
  { label: 'Iネット', value: 'iNet', positions: ['outfielder'], imageUrl: `${webImageBaseUrl}/iNet.jpg` },
  { label: 'バスネット', value: 'basNet', positions: ['outfielder'], imageUrl: `${webImageBaseUrl}/basNet.jpg` },
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

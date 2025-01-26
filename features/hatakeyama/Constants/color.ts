import { BaseItemWithPrice, ColorItem } from '@/types'
import { LeatherColorsByPartsOfGenuine, PartsItem } from '../types'
import { MESH_COLORS } from './base'

export const LEATHER_COLORS: ColorItem[] = [
  { label: 'ホワイト', value: 'white', color: '#fff' },
  { label: 'グレー', value: 'gray', color: '#8A8C8C' },
  { label: 'キャメル', value: 'camel', color: '#D7CEA5' },
  { label: 'ライムイエロー', value: 'limeYellow', color: '#D9D943' },
  { label: 'イエロー', value: 'yellow', color: '#E8C84B' },
  { label: 'Lオレンジ', value: 'lOrange', color: '#FF6C23' },
  { label: 'Rオレンジ', value: 'rOrange', color: '#FF362E' },
  { label: 'オレンジ', value: 'orange', color: '#FF6C23' },
  { label: 'レッド', value: 'red', color: '#CB1527' },
  { label: 'ピンク', value: 'pink', color: '#F94C97' },
  { label: 'パープル', value: 'purple', color: '#664785' },
  { label: 'グリーン', value: 'green', color: '#4e734c' },
  { label: 'コルク', value: 'cork', color: '#CE7220' },
  { label: 'Lブラウン', value: 'lBrown', color: '#60311A' },
  { label: 'Dブラウン', value: 'dBrown', color: '#70352e' },
  { label: 'ブルー', value: 'blue', color: '#0d42b5' },
  { label: 'ブラック', value: 'black', color: '#1E1E1E' },
  { label: 'サックス', value: 'sax', color: '#3a8daa' },
  { label: 'インペリアルブラック', value: 'imperialNavy', color: '#0d194a' },
  { label: 'アベンチュリンブラウン', value: 'aventurineBrown', color: '#2B2934' },
  { label: 'ブラックペイズリー', value: 'blackPaisley', color: '#1E1E1E' },
  { label: 'Dブラウンペイズリー', value: 'dBrownPaisley', color: '#70352e' }
]
export const LEATHER_COLORS_FOR_CATCHER: ColorItem[] = [
  { label: 'エコロジーブラウン', value: 'darkBrown', color: '#70352e' },
  { label: 'ブラウン', value: 'cork', color: '#CE7220' },
  { label: 'オレンジ', value: 'orange', color: '#FF6C23' },
  { label: 'ブラック', value: 'black', color: '#1E1E1E' },
  { label: 'Jイエロー', value: 'limeYellow', color: '#E2AB3B' },
  { label: 'Vオレンジ', value: 'vOrange', color: '#FF362E' },
  { label: 'Vブラック', value: 'imperialNavy', color: '#5F6166' },
  { label: 'Iブラック', value: 'aventurineBrown', color: '#2B2934' },
  { label: 'Kブルー', value: 'blue', color: '#0d42b5' },
  { label: 'レッド', value: 'red', color: '#CB1527' },
  { label: 'ホワイト', value: 'white', color: '#fff' }
]

export const LININGS: ColorItem[] = [
  { label: 'エコロジーブラウン', value: 'darkBrown', color: '#70352e' },
  { label: 'ブラウン', value: 'cork', color: '#CE7220' },
  { label: 'オレンジ', value: 'orange', color: '#FF6C23' },
  { label: 'ブラック', value: 'black', color: '#1E1E1E' },
  { label: 'Jイエロー', value: 'limeYellow', color: '#E2AB3B' },
  { label: 'Vオレンジ', value: 'vOrange', color: '#FF362E' },
  { label: 'Vブラック', value: 'imperialNavy', color: '#5F6166' },
  { label: 'Iブラック', value: 'aventurineBrown', color: '#2B2934' },
  { label: 'Kブルー', value: 'blue', color: '#0d42b5' },
  { label: 'レッド', value: 'red', color: '#CB1527' },
  { label: 'ホワイト', value: 'white', color: '#fff' }
]

export const BINDINGS: ColorItem[] = [
  { label: 'エコロジーブラウン', value: 'darkBrown', color: '#70352e' },
  { label: 'ブラウン', value: 'cork', color: '#CE7220' },
  { label: 'オレンジ', value: 'orange', color: '#FF6C23' },
  { label: 'ブラック', value: 'black', color: '#1E1E1E' },
  { label: 'Jイエロー', value: 'limeYellow', color: '#E2AB3B' },
  { label: 'Vオレンジ', value: 'vOrange', color: '#FF362E' },
  { label: 'Vブラック', value: 'imperialNavy', color: '#5F6166' },
  { label: 'Iブラック', value: 'aventurineBrown', color: '#2B2934' },
  { label: 'Kブルー', value: 'blue', color: '#0d42b5' },
  { label: 'レッド', value: 'red', color: '#CB1527' },
  { label: 'ホワイト', value: 'white', color: '#fff' }
]

export const WELTINGS: ColorItem[] = [
  { label: 'キリハミ(ブラック)', value: 'cutWeltingBlack', color: '#1E1E1E' },
  { label: 'キリハミ(ホワイト)', value: 'cutWeltingWhite', color: '#fff' }
]

export const STITCHES: ColorItem[] = [
  { label: 'イエロー', value: 'yellow', color: '#C1BB32' },
  { label: 'ブラック', value: 'black', color: '#1A1919' },
  { label: 'ブルー', value: 'blue', color: '#1623c9' },
  { label: 'レッド', value: 'red', color: '#BD313F' },
  { label: 'グリーン', value: 'green', color: '#2A4029' },
  { label: 'ホワイト', value: 'white', color: '#f2f2f2' },
  { label: 'オレンジ', value: 'orange', color: '#DF572C' },
  { label: 'ブラウン', value: 'brown', color: '#895129' },
  { label: 'パープル', value: 'purple', color: '#7f00ff' }
]

export const LACES: ColorItem[] = [
  { label: 'ブラック', value: 'black', color: '#1E1E1E' },
  { label: 'オレンジ', value: 'orange', color: '#FF6C23' },
  { label: 'ブルー', value: 'blue', color: '#0d42b5' },
  { label: 'レッド', value: 'red', color: '#CB1527' },
  { label: 'Iブラック', value: 'aventurineBrown', color: '#2B2934' },
  { label: 'エコロジーブラウン', value: 'darkBrown', color: '#70352e' },
  { label: 'Vオレンジ', value: 'vOrange', color: '#FF362E' },
  { label: 'ホワイト', value: 'white', color: '#fff' },
  { label: 'Jイエロー', value: 'limeYellow', color: '#E2AB3B' },
  { label: '台湾ローハイド', value: 'cork', color: '#CE7220' },
  { label: 'Pブラウン', value: 'pBrown', color: '#F2D4A7' }
]

export const MOUTON_COLORS: ColorItem[] = [
  { label: 'ムートン白', value: 'white', color: '#fff', price: 0 },
  { label: 'ムートン黒', value: 'black', color: '#1E1E1E', price: 0 },
  { label: 'ディアスキンパット', value: 'deerSkinPad', color: '#1E1E1E', price: 3300 }
]

// setter側で使用
export const GENUINE_LABELS: BaseItemWithPrice[] = [
  { label: '通常フロント', value: 'normalFront', price: 0 },
  { label: '通常サイド', value: 'normalSide', price: 0 },
  { label: '直刺繍フロント', value: 'directEmbroideryFront', price: 5500 },
  { label: '直刺繍サイド', value: 'directEmbroiderySide', price: 5500 }
]

export const FRONT_GENUINE_LABELS: BaseItemWithPrice[] = [
  { label: '通常フロント', value: 'normalFront', price: 0 },
  { label: '直刺繍フロント', value: 'directEmbroideryFront', price: 5500 }
]

export const FIRST_BACK_GENUINE_LABELS: BaseItemWithPrice[] = [
  { label: '親指側(通常)', value: 'thumbSideNormal', price: 0 },
  { label: '小指側(通常)', value: 'littleFingerSideNormal', price: 0 },
  { label: '親指側(直刺繍)', value: 'thumbSideEmbroidery', price: 5500 },
  { label: '小指側(直刺繍)', value: 'littleFingerSideEmbroidery', price: 5500 }
]

export const FIRST_BACK_WITH_MIDDLE_HOLE_GENUINE_LABELS: BaseItemWithPrice[] = [
  { label: '親指側(通常)', value: 'thumbSideNormal', price: 0 },
  { label: '親指側(直刺繍)', value: 'thumbSideEmbroidery', price: 5500 }
]

const commonPartsObjs: PartsItem[] = [
  // 共通
  { label: '全体', value: 'all' },
  { label: '捕球面', value: 'palm' },
  { label: 'ウェブ', value: 'web' },
  { label: 'ウェブ2', value: 'web2' },
  { label: 'ヘリ革', value: 'binding' },
  { label: '親指掛け紐', value: 'thumbHook' },
  { label: '小指掛け紐', value: 'littleHook' },
  { label: '指カバー/指当て', value: 'fingerGuardColor' },
  { label: '薬指リング', value: 'loopOfRingFingerColor' },
  { label: '裏革', value: 'linings' }
]
const backGloveObjs: PartsItem[] = [
  { label: '親指1', value: 'thumbOut' },
  { label: '親指2', value: 'thumbWeb' },
  { label: '人差指3', value: 'indexWeb' },
  { label: '人差指4', value: 'indexMiddle' },
  { label: '中指5', value: 'middleIndex' },
  { label: '中指6', value: 'middleRing' },
  { label: '薬指7', value: 'ringMiddle' },
  { label: '薬指8', value: 'ringLittle' },
  { label: '小指9', value: 'littleRing' },
  { label: '小指10', value: 'littleOut' },
  { label: 'バンド', value: 'listBelt' }
]
export const PALM_PARTS = [...commonPartsObjs]

export const BACK_PARTS: PartsItem[] = [...commonPartsObjs, ...backGloveObjs]

export const CATCHER_MITT_REGULAR_BACK_PARTS: PartsItem[] = [
  ...commonPartsObjs,
  { label: '親指マチ', value: 'thumbMachi' },
  { label: '小指マチ', value: 'littleMachi' },
  { label: '土台', value: 'fingerStand' },
  { label: '親指・人差指・中指5', value: 'thumbIndexMiddleRight' },
  { label: '中指6・薬指', value: 'middleLeftRing' },
  { label: '小指10', value: 'littleOut' },
  { label: '指出し', value: 'indexFingerTipOut' },
  { label: 'バンド', value: 'listBelt' }
]

export const CATCHER_MITT_TM_BACK_PARTS: PartsItem[] = [
  ...commonPartsObjs,
  { label: '親指マチ', value: 'thumbMachi' },
  { label: '小指マチ', value: 'littleMachi' },
  { label: '土台', value: 'fingerStand' },
  { label: '親指', value: 'thumb' },
  { label: '人差指・中指・薬指・小指', value: 'indexMiddleRingLittle' },
  { label: 'バンド', value: 'listBelt' }
]

export const CATCHER_MITT_BELT_BACK_PARTS: PartsItem[] = [
  ...commonPartsObjs,
  { label: '親指マチ', value: 'thumbMachi' },
  { label: '小指マチ', value: 'littleMachi' },
  { label: '土台', value: 'fingerStand' },
  { label: '親指・人差指・中指5', value: 'thumbIndexMiddleRight' },
  { label: '中指6・薬指・小指', value: 'middleLeftRingLittle' },
  // { label: '小指10', value: 'littleOut' },
  { label: 'バンド', value: 'listBelt' }
]

export const FIRST_BACK_PARTS: PartsItem[] = [
  ...commonPartsObjs,
  { label: '親指1', value: 'thumbOut' },
  { label: '親指2・人差指・中指5', value: 'thumbIndexMiddleRight' },
  { label: '中指6・薬指7', value: 'middleLeftRingRight' },
  { label: '薬指8・小指9', value: 'ringLeftLittleRight' },
  { label: '小指10', value: 'littleOut' },
  { label: 'バンド', value: 'listBelt' }
]

export const FIRST_BACK_MIDDLE_HOLE_PARTS: PartsItem[] = [
  ...commonPartsObjs,
  { label: '親指1', value: 'thumbOut' },
  { label: '親指2・人差指3', value: 'thumbLeftIndexRight' },
  { label: '人差指4・中指・薬指7', value: 'indexLeftMiddleRingRight' },
  { label: '薬指8・小指9', value: 'ringLeftLittleRight' },
  { label: '小指10', value: 'littleOut' },
  { label: 'バンド', value: 'listBelt' }
]

export const CROWN_BACK_PARTS: PartsItem[] = [
  ...commonPartsObjs,
  { label: '親指1', value: 'thumbOut' },
  { label: '親指2', value: 'thumbWeb' },
  { label: '人差指3', value: 'indexWeb' },
  { label: '人差指4・中指5', value: 'indexLeftMiddleRight' },
  { label: '中指6・薬指7', value: 'middleLeftRingRight' },
  { label: '薬指8・小指9', value: 'ringLeftLittleRight' },
  { label: '小指10', value: 'littleOut' },
  { label: 'バンド', value: 'listBelt' }
]

export const FIRST_MITT_PARTS: PartsItem[] = [
  ...commonPartsObjs,
  { label: '親指', value: 'thumb' },
  { label: 'ウェブ下', value: 'underWeb' },
  { label: 'ブーメラン', value: 'boomerang' },
  { label: 'バンド', value: 'listBelt' }
]

export const PARTS = [
  ...commonPartsObjs,
  ...PALM_PARTS,
  ...BACK_PARTS,
  ...FIRST_BACK_PARTS,
  ...FIRST_BACK_MIDDLE_HOLE_PARTS,
  ...CROWN_BACK_PARTS,
  ...FIRST_MITT_PARTS,
  ...CATCHER_MITT_REGULAR_BACK_PARTS,
  ...CATCHER_MITT_BELT_BACK_PARTS,
  ...CATCHER_MITT_TM_BACK_PARTS
]

export const LEATHER_COLORS_BY_PARTS: LeatherColorsByPartsOfGenuine = {
  all: LEATHER_COLORS,
  lace: LACES,
  binding: BINDINGS,
  meshColor: MESH_COLORS,
  stitch: STITCHES,
  welting: WELTINGS,
  palm: LEATHER_COLORS,
  web: LEATHER_COLORS,
  web2: LEATHER_COLORS,
  thumbHook: LEATHER_COLORS,
  littleHook: LEATHER_COLORS,
  fingerGuardColor: LEATHER_COLORS,
  linings: LININGS,
  thumbOut: LEATHER_COLORS,
  thumbWeb: LEATHER_COLORS,
  indexWeb: LEATHER_COLORS,
  indexMiddle: LEATHER_COLORS,
  middleIndex: LEATHER_COLORS,
  middleRing: LEATHER_COLORS,
  ringMiddle: LEATHER_COLORS,
  ringLittle: LEATHER_COLORS,
  littleRing: LEATHER_COLORS,
  littleOut: LEATHER_COLORS,
  listBelt: LEATHER_COLORS,
  loopOfRingFingerColor: LININGS, // 裏革と同じ
  thumb: LEATHER_COLORS, // only for firstMitt
  boomerang: LEATHER_COLORS, // only for firstMitt
  underWeb: LEATHER_COLORS, // only for firstMitt
  fingerStand: LEATHER_COLORS, // only for catcher
  middleLeftRing: LEATHER_COLORS, // only for catcher
  middleLeftRingLittle: LEATHER_COLORS, // only for catcher
  thumbMachi: LEATHER_COLORS, // only for catcher
  littleMachi: LEATHER_COLORS, // only for catcher
  indexFingerTipOut: LEATHER_COLORS, // only for catcher
  thumbIndexMiddle: LEATHER_COLORS, // only for catcher
  indexMiddleRingLittle: LEATHER_COLORS, // only for catcher
  thumbIndexMiddleRight: LEATHER_COLORS, // only for catcher of first back style
  middleLeftRingRight: LEATHER_COLORS, // only for first back style
  ringLeftLittleRight: LEATHER_COLORS, // only for first back style
  indexLeftMiddleRight: LEATHER_COLORS, // crown back style glove
  thumbLeftIndexRight: LEATHER_COLORS, // crown back style glove
  indexLeftMiddleRingRight: LEATHER_COLORS, // crown back style glove
  genuineBrandMarkColor: STITCHES
}

export const LEATHER_COLORS_BY_PARTS_FOR_CATCHER: LeatherColorsByPartsOfGenuine = {
  lace: LACES,
  binding: BINDINGS,
  meshColor: MESH_COLORS,
  stitch: STITCHES,
  welting: WELTINGS,
  linings: LININGS,
  loopOfRingFingerColor: LININGS, // 裏革と同じ
  genuineBrandMarkColor: STITCHES,
  all: LEATHER_COLORS_FOR_CATCHER,
  palm: LEATHER_COLORS_FOR_CATCHER,
  web: LEATHER_COLORS_FOR_CATCHER,
  web2: LEATHER_COLORS_FOR_CATCHER,
  thumbHook: LEATHER_COLORS_FOR_CATCHER,
  littleHook: LEATHER_COLORS_FOR_CATCHER,
  fingerGuardColor: LEATHER_COLORS_FOR_CATCHER,
  thumbOut: LEATHER_COLORS_FOR_CATCHER,
  thumbWeb: LEATHER_COLORS_FOR_CATCHER,
  indexWeb: LEATHER_COLORS_FOR_CATCHER,
  indexMiddle: LEATHER_COLORS_FOR_CATCHER,
  middleIndex: LEATHER_COLORS_FOR_CATCHER,
  middleRing: LEATHER_COLORS_FOR_CATCHER,
  ringMiddle: LEATHER_COLORS_FOR_CATCHER,
  ringLittle: LEATHER_COLORS_FOR_CATCHER,
  littleRing: LEATHER_COLORS_FOR_CATCHER,
  littleOut: LEATHER_COLORS_FOR_CATCHER,
  listBelt: LEATHER_COLORS_FOR_CATCHER,
  thumb: LEATHER_COLORS_FOR_CATCHER, // only for firstMitt
  boomerang: LEATHER_COLORS_FOR_CATCHER, // only for firstMitt
  underWeb: LEATHER_COLORS_FOR_CATCHER, // only for firstMitt
  fingerStand: LEATHER_COLORS_FOR_CATCHER, // only for catcher
  middleLeftRing: LEATHER_COLORS_FOR_CATCHER, // only for catcher
  middleLeftRingLittle: LEATHER_COLORS_FOR_CATCHER, // only for catcher
  thumbMachi: LEATHER_COLORS_FOR_CATCHER, // only for catcher
  littleMachi: LEATHER_COLORS_FOR_CATCHER, // only for catcher
  indexFingerTipOut: LEATHER_COLORS_FOR_CATCHER, // only for catcher
  thumbIndexMiddle: LEATHER_COLORS_FOR_CATCHER, // only for catcher
  indexMiddleRingLittle: LEATHER_COLORS_FOR_CATCHER, // only for catcher
  thumbIndexMiddleRight: LEATHER_COLORS_FOR_CATCHER, // only for catcher of first back style
  middleLeftRingRight: LEATHER_COLORS_FOR_CATCHER, // only for first back style
  ringLeftLittleRight: LEATHER_COLORS_FOR_CATCHER, // only for first back style
  indexLeftMiddleRight: LEATHER_COLORS_FOR_CATCHER, // crown back style glove
  thumbLeftIndexRight: LEATHER_COLORS_FOR_CATCHER, // crown back style glove
  indexLeftMiddleRingRight: LEATHER_COLORS_FOR_CATCHER // crown back style glove
}

// export const PARTS_BUTTON_OPTION = 'genuine-parts-button-option'
export const LEATHER_COLOR_BUTTON_OPTION = 'genuine-leather-color-button-option'
export const LACE_COLOR_BUTTON_OPTION = 'genuine-lace-color-button-option'
export const LININGS_COLOR_BUTTON_OPTION = 'genuine-linings-color-button-option'
export const BINDING_COLOR_BUTTON_OPTION = 'genuine-binding-color-button-option'
export const STITCH_COLOR_BUTTON_OPTION = 'genuine-stitch-color-button-option'
export const WELTING_COLOR_BUTTON_OPTION = 'genuine-welting-color-button-option'
export const MOUTON_BUTTON_OPTION = 'genuine-mouton-button-option'
export const LABEL_BUTTON_OPTION = 'genuine-label-button-option'
export const DIRECT_EMBROIDERY_LABEL_BUTTON_OPTION = 'genuine-direct-embroidery-label-button-option'

import { BaseItemWithPrice, ColorItem } from '@/types'
import { LeatherColorsByPartsOfGenuine, PartsItem } from '../types'
import { MESH_COLORS } from './base'

export const LEATHER_COLORS: ColorItem[] = [
  { label: 'ホワイト', value: 'white', color: '#AFB3B1' },
  { label: 'グレー', value: 'gray', color: '#959190' },
  { label: 'キャメル', value: 'camel', color: '#9F9059' },
  { label: 'ライムイエロー', value: 'limeYellow', color: '#ABA025' },
  { label: 'イエロー', value: 'yellow', color: '#AA9123' },
  { label: 'オレンジ', value: 'orange', color: '#9A7729' },
  { label: 'Lオレンジ', value: 'lOrange', color: '#B56723' },
  { label: 'Rオレンジ', value: 'rOrange', color: '#A83327' },
  { label: 'Sオレンジ', value: 'sOrange', color: '#A12F28' },
  { label: 'レッド', value: 'red', color: '#9D2E28' },
  { label: 'ピンク', value: 'pink', color: '#BB5B78' },
  { label: 'パープル', value: 'purple', color: '#6F267A' },
  { label: 'グリーン', value: 'green', color: '#264425' },
  { label: 'ワイン', value: 'wine', color: '#812824' },
  { label: 'コルク', value: 'cork', color: '#B07824' },
  { label: 'Lブラウン', value: 'lBrown', color: '#60311A' },
  { label: 'Dブラウン', value: 'dBrown', color: '#1C110C' },
  { label: 'ブルー', value: 'blue', color: '#24226F' },
  { label: 'ネイビー', value: 'navy', color: '#17131B' },
  { label: 'ブラック', value: 'black', color: '#14120D' },
  { label: 'サックス', value: 'sax', color: '#2D5181' }
]
export const LININGS: ColorItem[] = [...LEATHER_COLORS]

export const BINDINGS: ColorItem[] = [
  { label: 'ホワイト', value: 'white', color: '#AFB3B1' },
  { label: 'グレー', value: 'gray', color: '#959190' },
  { label: 'キャメル', value: 'camel', color: '#9F9059' },
  { label: 'ライムイエロー', value: 'limeYellow', color: '#ABA025' },
  { label: 'イエロー', value: 'yellow', color: '#AA9123' },
  { label: 'オレンジ', value: 'orange', color: '#9A7729' },
  { label: 'Lオレンジ', value: 'lOrange', color: '#B56723' },
  { label: 'Rオレンジ', value: 'rOrange', color: '#A83327' },
  { label: 'Sオレンジ', value: 'sOrange', color: '#A12F28' },
  { label: 'レッド', value: 'red', color: '#9D2E28' },
  { label: 'ピンク', value: 'pink', color: '#BB5B78' },
  { label: 'パープル', value: 'purple', color: '#6F267A' },
  { label: 'グリーン', value: 'green', color: '#264425' },
  { label: 'ワイン', value: 'wine', color: '#812824' },
  { label: 'コルク', value: 'cork', color: '#B07824' },
  { label: 'Lブラウン', value: 'lBrown', color: '#60311A' },
  { label: 'Dブラウン', value: 'dBrown', color: '#1C110C' },
  { label: 'ブルー', value: 'blue', color: '#24226F' },
  { label: 'ネイビー', value: 'navy', color: '#17131B' },
  { label: 'ブラック', value: 'black', color: '#14120D' },
  { label: 'サックス', value: 'sax', color: '#2D5181' }
]

export const WELTINGS: ColorItem[] = [
  { label: 'キリハミ(ブラック)', value: 'cutWeltingBlack', color: '#1E1E1E' },
  { label: 'キリハミ(ホワイト)', value: 'cutWeltingWhite', color: '#AFB3B1' },
  { label: '玉ハミ(ブラック)', value: 'black', color: '#1E1E1E' },
  { label: '玉ハミ(ホワイト)', value: 'white', color: '#AFB3B1' },
  { label: '玉ハミ(グレー)', value: 'gray', color: '#959190' },
  { label: '玉ハミ(キャメル)', value: 'camel', color: '#9F9059' },
  { label: '玉ハミ(ライムイエロー)', value: 'limeYellow', color: '#ABA025' },
  { label: '玉ハミ(イエロー)', value: 'yellow', color: '#AA9123' },
  { label: '玉ハミ(オレンジ)', value: 'orange', color: '#9A7729' },
  { label: '玉ハミ(Lオレンジ)', value: 'lOrange', color: '#B56723' },
  { label: '玉ハミ(Rオレンジ)', value: 'rOrange', color: '#A83327' },
  { label: '玉ハミ(Sオレンジ)', value: 'sOrange', color: '#A12F28' },
  { label: '玉ハミ(レッド)', value: 'red', color: '#9D2E28' },
  { label: '玉ハミ(ピンク)', value: 'pink', color: '#BB5B78' },
  { label: '玉ハミ(パープル)', value: 'purple', color: '#6F267A' },
  { label: '玉ハミ(グリーン)', value: 'green', color: '#264425' },
  { label: '玉ハミ(ワイン)', value: 'wine', color: '#812824' },
  { label: '玉ハミ(Lブラウン)', value: 'lBrown', color: '#60311A' },
  { label: '玉ハミ(Dブラウン)', value: 'dBrown', color: '#1C110C' },
  { label: '玉ハミ(ブルー)', value: 'blue', color: '#24226F' },
  { label: '玉ハミ(ネイビー)', value: 'navy', color: '#17131B' },
  { label: '玉ハミ(サックス)', value: 'sax', color: '#2D5181' },
  { label: '玉ハミ(ゴールド)', value: 'gold', color: '#D9A948' }
]

export const STITCHES: ColorItem[] = [
  { label: 'ブラック', value: 'black', color: '#1A1919' },
  { label: 'ホワイト', value: 'white', color: '#FFFFFF' },
  { label: '金茶', value: 'GoldBrown', color: '#B2A666' },
  { label: 'ネイビー', value: 'navy', color: '#2D2B54' },
  { label: 'グレー', value: 'gray', color: '#646464' },
  { label: 'オレンジ', value: 'orange', color: '#DF572C' },
  { label: 'サックス', value: 'sax', color: '#3A7993' },
  { label: 'レッド', value: 'red', color: '#BD313F' },
  { label: 'イエロー', value: 'yellow', color: '#C1BB32' },
  { label: 'ブルー', value: 'blue', color: '#2C338B' },
  { label: 'パープル', value: 'purple', color: '#7f00ff' },
  { label: 'グリーン', value: 'green', color: '#2A4029' },
  { label: 'ピンク', value: 'pink', color: '#B9527D' },
  { label: 'ブラウン', value: 'brown', color: '#895129' },
  { label: 'キャメル', value: 'camel', color: '#f0dbc0' }
]

export const LACES: ColorItem[] = [
  { label: 'ホワイト', value: 'white', color: '#AFB3B1' },
  { label: 'グレー', value: 'gray', color: '#646464' },
  { label: 'キャメル', value: 'camel', color: '#f0dbc0' },
  { label: 'ライムイエロー', value: 'limeYellow', color: '#ABA025' },
  { label: 'イエロー', value: 'yellow', color: '#AA9123' },
  { label: 'オレンジ', value: 'orange', color: '#9A7729' },
  { label: 'Lオレンジ', value: 'lOrange', color: '#B56723' },
  { label: 'Rオレンジ', value: 'rOrange', color: '#A83327' },
  { label: 'Sオレンジ', value: 'sOrange', color: '#A12F28' },
  { label: 'レッド', value: 'red', color: '#9D2E28' },
  { label: 'ピンク', value: 'pink', color: '#BB5B78' },
  { label: 'パープル', value: 'purple', color: '#6F267A' },
  { label: 'グリーン', value: 'green', color: '#264425' },
  { label: 'Lブラウン', value: 'lBrown', color: '#60311A' },
  { label: 'Dブラウン', value: 'dBrown', color: '#1C110C' },
  { label: 'ブルー', value: 'blue', color: '#24226F' },
  { label: 'ネイビー', value: 'navy', color: '#17131B' },
  { label: 'ブラック', value: 'black', color: '#14120D' },
  { label: 'サックス', value: 'sax', color: '#2D5181' },
  { label: 'タン', value: 'tan', color: '#b08030' }
]

export const MOUTON_COLORS: ColorItem[] = [
  { label: 'ムートン白', value: 'white', color: '#fff' },
  { label: 'ムートン黒', value: 'black', color: '#1E1E1E' },
  { label: 'ディアスキンパット', value: 'deerSkinPad', color: '#1E1E1E' }
]

// setter側で使用
export const GENUINE_LABELS: BaseItemWithPrice[] = [
  { label: '通常フロント', value: 'normalFront', price: 0 },
  { label: '通常サイド', value: 'normalSide', price: 0 },
  { label: '直刺繍フロント', value: 'directEmbroideryFront', price: 5500 },
  { label: '直刺繍サイド', value: 'directEmbroiderySide', price: 5500 }
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
  { label: '指カバー/指当て', value: 'fingerGuardColor' }
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

export const BACK_PARTS: PartsItem[] = [...commonPartsObjs, ...backGloveObjs, { label: '裏革', value: 'linings' }]
export const FIRST_BACK_PARTS: PartsItem[] = [
  ...commonPartsObjs,
  { label: '親指1', value: 'thumbOut' },
  { label: '親指2・人差指・中指5', value: 'thumbIndexMiddleRight' },
  { label: '中指6・薬指7', value: 'middleLeftRingRight' },
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

export const PARTS = [...commonPartsObjs, ...PALM_PARTS, ...BACK_PARTS, ...FIRST_BACK_PARTS, ...CROWN_BACK_PARTS]

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
  thumb: LEATHER_COLORS, // only for firstMitt
  boomerang: LEATHER_COLORS, // only for firstMitt
  underWeb: LEATHER_COLORS, // only for firstMitt
  fingerStand: LEATHER_COLORS, // only for catcher
  middleLeftRing: LEATHER_COLORS, // only for catcher
  middleLeftRingLittle: LEATHER_COLORS, // only for catcher
  thumbMachi: LEATHER_COLORS, // only for catcher
  littleMachi: LEATHER_COLORS, // only for catcher
  thumbIndexMiddle: LEATHER_COLORS, // only for catcher
  thumbIndexMiddleRight: LEATHER_COLORS, // only for catcher of first back style
  middleLeftRingRight: LEATHER_COLORS, // only for first back style
  ringLeftLittleRight: LEATHER_COLORS, // only for first back style
  indexLeftMiddleRight: LEATHER_COLORS // crown back style glove
}

// export const PARTS_BUTTON_OPTION = 'genuine-parts-button-option'
export const LEATHER_COLOR_BUTTON_OPTION = 'genuine-leather-color-button-option'
export const LACE_COLOR_BUTTON_OPTION = 'genuine-lace-color-button-option'
export const BINDING_COLOR_BUTTON_OPTION = 'genuine-binding-color-button-option'
export const STITCH_COLOR_BUTTON_OPTION = 'genuine-stitch-color-button-option'
export const WELTING_COLOR_BUTTON_OPTION = 'genuine-welting-color-button-option'
export const MOUTON_BUTTON_OPTION = 'genuine-mouton-button-option'
export const LABEL_BUTTON_OPTION = 'genuine-label-button-option'
export const DIRECT_EMBROIDERY_LABEL_BUTTON_OPTION = 'genuine-direct-embroidery-label-button-option'

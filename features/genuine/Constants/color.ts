import { BaseItemWithPrice, ColorItem } from '@/types'
import { LeatherColorsByPartsOfGenuine, PartsItem } from '../types'
import { MESH_COLORS } from './base'

export const LEATHER_COLORS: ColorItem[] = [
  { label: 'ブラック', value: 'black', color: '#1E1E1E' },
  { label: 'ダークブラウン', value: 'darkBrown', color: '#4A3826' },
  { label: 'タン', value: 'tan', color: '#b08030' },
  { label: 'キャメル', value: 'camel', color: '#f0dbc0' },
  { label: 'イエロー', value: 'yellow', color: '#C2B64A' },
  { label: 'オレンジ', value: 'orange', color: '#D5803D' },
  { label: 'レッドオレンジ', value: 'redOrange', color: '#CE2A2B' },
  // { label: 'ネイビー', value: 'navy', color: '#2B2F52' },
  { label: 'ネイビー', value: 'navy', color: '#151830' },
  { label: 'ブルー', value: 'blue', color: '#253F86' },
  { label: 'グリーン', value: 'green', color: '#2A4029' },
  { label: 'グレー', value: 'gray', color: '#646464' }
]

const SOFT_LEATHER_BLACK: ColorItem = { label: 'ソフトレザー(ブラック)', value: 'softLeatherBlack', color: '#232222' }
export const LININGS: ColorItem[] = [SOFT_LEATHER_BLACK, ...LEATHER_COLORS]
export const WELTINGS: ColorItem[] = [
  { label: '切りハミ(ホワイト)', value: 'kirihamiWhite', color: '#fff' },
  { label: '玉ハミ(ブラック)', value: 'black', color: '#1E1E1E' },
  { label: '玉ハミ(ダークブラウン)', value: 'darkBrown', color: '#4A3826' },
  { label: '玉ハミ(タン)', value: 'tan', color: '#b08030' },
  { label: '玉ハミ(キャメル)', value: 'camel', color: '#f0dbc0' },
  { label: '玉ハミ(イエロー)', value: 'yellow', color: '#C2B64A' },
  { label: '玉ハミ(オレンジ)', value: 'orange', color: '#D5803D' },
  { label: '玉ハミ(レッドオレンジ)', value: 'redOrange', color: '#CE2A2B' },
  { label: '玉ハミ(ネイビー)', value: 'navy', color: '#151830' },
  { label: '玉ハミ(ブルー)', value: 'blue', color: '#253F86' },
  // { label: '玉ハミ(グリーン)', value: 'green', color: '#164e13' },
  { label: '玉ハミ(グリーン)', value: 'green', color: '#2A4019' },
  { label: '玉ハミ(グレー)', value: 'gray', color: '#646464' }
]

export const BINDINGS: ColorItem[] = [
  { label: 'ブラック', value: 'black', color: '#1E1E1E' },
  { label: 'ダークブラウン', value: 'darkBrown', color: '#4A3826' },
  { label: 'タン', value: 'tan', color: '#b08030' },
  { label: 'キャメル', value: 'camel', color: '#f0dbc0' },
  { label: 'イエロー', value: 'yellow', color: '#C2B64A' },
  { label: 'オレンジ', value: 'orange', color: '#D5803D' },
  { label: 'レッドオレンジ', value: 'redOrange', color: '#CE2A2B' },
  { label: 'ネイビー', value: 'navy', color: '#151830' },
  { label: 'ブルー', value: 'blue', color: '#253F86' },
  { label: 'グリーン', value: 'green', color: '#2A4029' },
  { label: 'グレー', value: 'gray', color: '#646464' }
]

export const LACES: ColorItem[] = [
  { label: 'ブラック', value: 'black', color: '#1E1E1E' },
  { label: 'ダークブラウン', value: 'darkBrown', color: '#4A3826' },
  { label: 'タン', value: 'tan', color: '#b08030' },
  { label: 'キャメル', value: 'camel', color: '#f0dbc0' },
  { label: 'イエロー', value: 'yellow', color: '#C2B64A' },
  { label: 'オレンジ', value: 'orange', color: '#D5803D' },
  { label: 'レッドオレンジ', value: 'redOrange', color: '#CE2A2B' },
  { label: 'ネイビー', value: 'navy', color: '#151830' },
  { label: 'ブルー', value: 'blue', color: '#253F86' },
  { label: 'グリーン', value: 'green', color: '#2A4029' },
  { label: 'グレー', value: 'gray', color: '#646464' }
]

export const MOUTON_COLORS: ColorItem[] = [
  { label: 'ホワイト', value: 'white', color: '#fff' },
  { label: 'ブラック', value: 'black', color: '#1E1E1E' }
]

export const STITCHES: ColorItem[] = [
  { label: 'グリーン', value: 'green', color: '#022b02' },
  { label: 'ブラック', value: 'black', color: '#0a0a0a' },
  { label: 'ネイビー', value: 'navy', color: '#041342' },
  { label: 'ブルー', value: 'blue', color: '#002bff' },
  { label: 'サックス', value: 'sax', color: '#367D8F' },
  { label: 'ホワイト', value: 'white', color: '#eee' },
  { label: 'キャメル', value: 'camel', color: '#ffcf8f' },
  { label: 'ピンク', value: 'pink', color: '#ff1493' },
  { label: 'レッド', value: 'red', color: '#ff2200' },
  { label: 'イエロー', value: 'yellow', color: '#ab9a02' },
  { label: 'ライトシルバー', value: 'lightSilver', color: '#8A8C8C' },
  { label: 'ライトゴールド', value: 'lightGold', color: '#B3A26C' },
  { label: 'パインゴールド', value: 'pineGold', color: '#D0B774' }
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

export const PARTS = [...commonPartsObjs, ...PALM_PARTS, ...BACK_PARTS]

export const LEATHER_COLORS_BY_PARTS: LeatherColorsByPartsOfGenuine = {
  all: LEATHER_COLORS,
  lace: LACES,
  binding: BINDINGS,
  meshColor: MESH_COLORS,
  stitch: STITCHES,
  welting: WELTINGS,
  palm: LEATHER_COLORS,
  web: LEATHER_COLORS,
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
  thumbIndexMiddleRight: LEATHER_COLORS, // only for catcher
  middleLeftRing: LEATHER_COLORS, // only for catcher
  middleLeftRingLittle: LEATHER_COLORS, // only for catcher
  thumbMachi: LEATHER_COLORS, // only for catcher
  littleMachi: LEATHER_COLORS // only for catcher
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

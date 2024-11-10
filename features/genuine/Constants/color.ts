import { LeatherColorsByParts, PartsItem } from '../types'

export const LEATHER_COLORS = [
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

const SOFT_LEATHER_BLACK = { label: 'ソフトレザー(ブラック)', value: 'softLeatherBlack', color: '#232222' }
export const LININGS = [SOFT_LEATHER_BLACK, ...LEATHER_COLORS]
export const WELTINGS = [
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

export const BINDINGS = [
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

export const LACES = [
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

export const MOUTON_COLORS = [
  { label: 'ホワイト', value: 'white', color: '#fff' },
  { label: 'ブラック', value: 'black', color: '#1E1E1E' }
]

export const STITCHES = [
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
export const GENUINE_LABELS = [
  { label: 'No.01', value: '1', imageUrl: '/genuine/labels/1.jpg' },
  { label: 'No.02', value: '2', imageUrl: '/genuine/labels/2.jpg' },
  { label: 'No.03', value: '3', imageUrl: '/genuine/labels/3.jpg' },
  { label: 'No.04', value: '4', imageUrl: '/genuine/labels/4.jpg' },
  { label: 'No.05', value: '5', imageUrl: '/genuine/labels/5.jpg' },
  { label: 'No.06', value: '6', imageUrl: '/genuine/labels/6.jpg' },
  { label: 'No.07', value: '7', imageUrl: '/genuine/labels/7.jpg' },
  { label: 'No.08', value: '8', imageUrl: '/genuine/labels/8.jpg' },
  { label: 'No.09', value: '9', imageUrl: '/genuine/labels/9.jpg' },
  { label: 'No.10', value: '10', imageUrl: '/genuine/labels/10.jpg' },
  { label: 'No.11', value: '11', imageUrl: '/genuine/labels/11.jpg' },
  { label: 'No.12', value: '12', imageUrl: '/genuine/labels/12.jpg' }
]

// canvas側で使用
const CORE_GOLD = '#f2bf05'
export const GENUINE_LABEL_COLORS = [
  { value: '1', core: CORE_GOLD, secondary: CORE_GOLD, binding: '#121212' },
  { value: '2', core: '#C3934C', secondary: '#C3934C', binding: '#C3934C' },
  { value: '3', core: CORE_GOLD, secondary: CORE_GOLD, binding: '#2A4029' },
  { value: '4', core: CORE_GOLD, secondary: CORE_GOLD, binding: 'blue' },
  { value: '5', core: CORE_GOLD, secondary: CORE_GOLD, binding: 'red' },
  { value: '6', core: '#C9B284', secondary: '#C9B284', binding: '#121212' },
  { value: '7', core: '#C9B284', secondary: '#C9B284', binding: '#C9B284' },
  { value: '8', core: 'silver', secondary: 'silver', binding: '#121212' },
  { value: '9', core: 'silver', secondary: 'silver', binding: 'silver' },
  { value: '10', core: '#121212', secondary: '#121212', binding: '#121212' },
  { value: '11', core: '#20373F', secondary: '#c9b606', binding: 'navy' },
  { value: '12', core: 'navy', secondary: 'red', binding: 'silver' }
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
  { label: 'バンド', value: 'listBelt' },
  { label: 'ラベル台', value: 'labelStand' }
]
export const PALM_PARTS = [...commonPartsObjs]

export const BACK_PARTS: PartsItem[] = [...commonPartsObjs, ...backGloveObjs, { label: '裏革', value: 'linings' }]

export const PARTS = [...commonPartsObjs, ...PALM_PARTS, ...BACK_PARTS]

export const LEATHER_COLORS_BY_PARTS: LeatherColorsByParts = {
  all: LEATHER_COLORS,
  lace: LACES,
  binding: BINDINGS,
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
  labelStand: LEATHER_COLORS
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

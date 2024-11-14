import { EmbroideryItems } from '../types'

export const TYPE_FACES = [
  { label: 'ブロック体', value: 'sanserif', selectable: ['en'] }, //ゴシック体
  { label: '筆記体', value: 'cursive', selectable: ['en'] }, // 筆記体
  { label: 'ブラッシュ体', value: 'fantasy', selectable: ['en'] }, // ブラッシュ体
  { label: '楷書体', value: 'serif', selectable: ['ja'] }, // 楷書
  { label: '行書体', value: 'monospace', selectable: ['ja'] } // 行書
]

export const EMBROIDERY_POSITIONS = [
  { label: '親指部', value: 'thumbFinger' },
  { label: '小指部', value: 'childFinger' },
  { label: '平裏', value: 'leatherLiningFirst' },
  // { label: '裏革部分(2段目)', value: 'leatherLiningSecond' }
  { label: 'バンド部', value: 'band' }
]

export const EMBROIDERY_COLORS = [
  { label: 'ホワイト', value: 'white', color: '#FFFFFF' },
  { label: 'イエロー', value: 'yellow', color: '#C1BB32' },
  { label: 'オレンジ', value: 'orange', color: '#DF572C' },
  { label: 'レッド', value: 'red', color: '#BD313F' },
  { label: 'ピンク', value: 'pink', color: '#B9527D' },
  { label: 'サックス', value: 'saxe', color: '#3A7993' },
  { label: 'ブルー', value: 'blue', color: '#2C338B' },
  { label: 'ネイビー', value: 'navy', color: '#2D2B54' },
  { label: 'グリーン', value: 'green', color: '#284127' },
  { label: 'ライトゴールド', value: 'lightGold', color: '#B2A666' },
  { label: 'ラメシルバー', value: 'lameSilver', color: '#B5B5B5' },
  { label: 'ラメゴールド', value: 'lameGold', color: '#B7AF75' },
  { label: 'ブラック', value: 'black', color: '#1A1919' }
]
export const SHADOW_EDGE_COLORS = [{ label: '不要', value: 'none' }, ...EMBROIDERY_COLORS]

export const EMBROIDERY_ITEMS: EmbroideryItems = {
  typeFace: TYPE_FACES,
  position: EMBROIDERY_POSITIONS,
  color: EMBROIDERY_COLORS,
  shadowColor: SHADOW_EDGE_COLORS,
  edgeColor: SHADOW_EDGE_COLORS
}

export const SPECIFIED_LOGOS = [
  { label: '有り', value: 'logo', price: 6600 },
  { label: '無し', value: 'none', price: 0 }
]

import { EmbroideryItems } from '../types'

export const TYPE_FACES = [
  { label: 'ローマ字活字体', value: 'sanserif', selectable: ['en'] }, //ゴシック体
  { label: '筆記体', value: 'cursive', selectable: ['en'] }, // 筆記体
  { label: 'ブラッシュ体', value: 'Brush Script MT', selectable: ['en'] }, // ブラッシュ体
  { label: 'オールドイングリッシュ体', value: 'oldEnglish', selectable: ['en'] }, // オールドイングリッシュ体
  { label: '漢字(楷書体)', value: 'serif', selectable: ['ja'] }, // 行書
  { label: '漢字(行書体)', value: 'cursiveJa', selectable: ['ja'] } // 行書
]

export const EMBROIDERY_POSITIONS = [
  { label: '親指', value: 'thumbFinger' },
  { label: '小指', value: 'childFinger' },
  { label: '平裏', value: 'leatherLiningFirst' },
  { label: '平裏(2段目)', value: 'leatherLiningSecond' },
  { label: 'バンド横', value: 'bandSide' }
]

export const EMBROIDERY_COLORS = [
  { label: 'ブラック', value: 'black', color: '#1A1919' },
  { label: 'レッド', value: 'red', color: '#BD313F' },
  { label: 'ライトゴールド', value: 'lightGold', color: '#B2A666' },
  { label: 'ライトシルバー', value: 'lightSilver', color: '#B5B5B5' },
  { label: 'ゴールド', value: 'gold', color: '#B7AF75' },
  { label: 'シルバー', value: 'silver', color: '#B5B5B5' },
  { label: 'ネイビー', value: 'navy', color: '#2D2B54' },
  { label: 'ホワイト', value: 'white', color: '#FFFFFF' },
  { label: 'ブルー', value: 'blue', color: '#2C338B' },
  { label: 'グリーン', value: 'green', color: '#0d6b15' },
  { label: 'イエロー', value: 'yellow', color: '#C1BB32' },
  { label: 'オレンジ', value: 'orange', color: '#DF572C' },
  { label: 'ブラウン', value: 'brown', color: '#895129' },
  { label: 'ピンク', value: 'pink', color: '#B9527D' },
  { label: 'パープル', value: 'purple', color: '#7f00ff' },
  { label: 'サックス', value: 'sax', color: '#3A7993' }
]
export const SHADOW_EDGE_COLORS = [{ label: '不要', value: 'none' }, ...EMBROIDERY_COLORS]

export const EMBROIDERY_ITEMS: EmbroideryItems = {
  typeFace: TYPE_FACES,
  position: EMBROIDERY_POSITIONS,
  color: EMBROIDERY_COLORS,
  shadowColor: SHADOW_EDGE_COLORS,
  edgeColor: SHADOW_EDGE_COLORS
}

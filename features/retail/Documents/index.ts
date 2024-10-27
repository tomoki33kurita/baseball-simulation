import { FiveState } from '@/features/five/types'
import { drawImages } from './drawImages'
import { customerInformation } from './customerInformation'
import { customerRemarks } from './customerRemarks'
import { priceInformation } from './priceInformation'
import { baseSettings } from './baseSettings'
import { colorSettings } from './colorSettings'
import { embroiderySettings } from './embroiderySettings'

const genCellContent = (head: string, content: string, alignment?: string, color?: string) => [
  { text: `${head}： `, fontSize: 8 },
  {
    text: content,
    alignment: alignment || 'right',
    fontSize: 10,
    color: color || '#323232'
  }
]

export const getPdfDocDefine = (state: FiveState, retail: { email: string }): any => {
  const personal = state.personal
  const remarks = personal.remarks
  return {
    content: [
      { text: 'オーダー仕様書', style: { fontSize: 16 } },
      ...drawImages(),
      ...customerInformation(personal, retail.email, genCellContent),
      remarks.length > 0 && customerRemarks(remarks, genCellContent),
      ...priceInformation(state, genCellContent),
      ...baseSettings(state),
      ...colorSettings(state),
      ...embroiderySettings(state, genCellContent)
    ].filter(Boolean),
    defaultStyle: { font: 'GenYoMin' } // 必須
  }
}

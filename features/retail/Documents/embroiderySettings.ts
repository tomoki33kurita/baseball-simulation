import { DocumentContentGenerator, Embroidery, State } from '@/types'
import { getFiveEmbroideryCells } from '@/features/five/Components/ConfirmContents/embroidery'
import { getOrderType } from '@/features/five/Components/Setters/logic'
import { FiveState } from '@/features/five/types'

const genEmbroideryPdfHeader = (index: number) => ({
  text: `刺繍設定${index + 1}`,
  style: { fontSize: 11 },
  margin: [0, 8, 0, 4]
})

export const switchEmbroideryCells = (state: State) => (e: Embroidery) => {
  const brand = state.baseModel.brand
  switch (brand) {
    case 'five':
      const fiveState = state as FiveState
      const { isCustomOrder } = getOrderType(fiveState.orderType)
      return getFiveEmbroideryCells(e, isCustomOrder)
    default:
      return []
  }
}

export const embroiderySettings = (state: State, genCellContent: DocumentContentGenerator): any => {
  const cellsList = state.embroideries.map(switchEmbroideryCells(state))
  const existEmbroidery = state.embroideries.some((e) => e.content.length > 0)
  if (!existEmbroidery) {
    return [
      genEmbroideryPdfHeader(0),
      {
        text: `通常刺繍なし`,
        style: { fontSize: 8 },
        margin: [0, 8, 0, 4]
      }
    ]
  }
  const chunked = cellsList.map((cells) => {
    return cells.reduce((acc: any[][], curr: unknown, i: number) => {
      if (i % 2 === 0) {
        acc.push([curr])
      } else {
        acc[acc.length - 1].push(curr)
      }
      return acc
    }, [])
  })

  const dist = chunked.map((cellLists, i) => [
    genEmbroideryPdfHeader(i),
    {
      table: {
        widths: '50%',
        body: cellLists.map((cellList: any[]) => cellList.map((cell) => genCellContent(cell.head, cell.label || '--', 'right')))
      }
    }
  ])
  return dist
}

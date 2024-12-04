import { Embroidery } from '@/types'
import { GenuineState } from '../types'

export const calculateGenuineBaseCost = (state: GenuineState): number => {
  return 50000
}

export const calculateGenuineOptionCost = (state: GenuineState): number => {
  const labelCost = state.genuineLabel.price
  const optionCost = labelCost
  return optionCost
}

export const calculateGenuineEmbroideryCost = (state: GenuineState): number => {
  const embroideries = state.embroideries
  const embroideriesOfFiltered = embroideries.filter((e: Embroidery) => e.content.trim()?.length > 0)
  const singlePrice = 1100
  const shadowPrice = 1650
  const edgePrice = 2200
  const costsOfEmbroideries = embroideriesOfFiltered
    .map((e: Embroidery) => {
      const isEdge = e.edgeColor.value !== 'none' //フチ付きかどうか
      const isShadow = e.shadowColor.value !== 'none' //カゲ付きかどうか
      const cost = isEdge ? edgePrice : isShadow ? shadowPrice : singlePrice
      return cost // 2750
    }) // [2750, 2200, ...]
    .reduce((a: number, c: number) => a + c, 0) //
  return costsOfEmbroideries
}

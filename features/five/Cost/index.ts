import { Embroidery } from '@/types'
import { FiveState } from '../types'

export const calculateFiveBaseCost = (state: FiveState): number => {
  const baseCost = state.orderType.price
  return baseCost
}

export const calculateFiveOptionCost = (state: FiveState): number => {
  const optionCost = 0
  return optionCost
}

export const calculateFiveEmbroideryCost = (state: FiveState): number => {
  const embroideries = state.embroideries
  const embroideriesOfFiltered = embroideries.filter((e: Embroidery) => e.content.trim()?.length > 0)
  const singlePrice = 2200
  const shadowPrice = 2530
  const edgePrice = 2750
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

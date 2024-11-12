import { Embroidery } from '@/types'
import { FiveState } from '../types'
import { getOrderType } from '../Components/Setters/logic'

export const calculateFiveBaseCost = (state: FiveState): number => {
  const baseCost = state.orderType.price
  return baseCost
}

export const calculateFiveOptionCost = (state: FiveState): number => {
  const optionCost = 0
  return optionCost
}

export const calculateFiveEmbroideryCost = (state: FiveState): number => {
  const { isCustomOrder } = getOrderType(state.orderType)
  if (!isCustomOrder) return 0
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
  const existsDiscount = embroideriesOfFiltered.some((e) => e.edgeColor.value === 'none' && e.shadowColor.value === 'none')
  const specificLogo = state.specifiedLogo.price
  const discount = existsDiscount ? 1100 : 0
  const discounted = costsOfEmbroideries + specificLogo - discount
  return discounted
}

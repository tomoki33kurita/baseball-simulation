import { FiveState } from '@/features/five/types'
import { calculateBaseCost, calculateEmbroideryCost, calculateOptionCost } from '@/features/Logic/cost'
import { State } from '@/types'
const moneyUnitSticker = (price: number): string => {
  const formatted = `${(price || 0)?.toLocaleString()}`
  // return isUsModel ? `$${formatted}` : `${formatted}円`
  return `${formatted}円`
}

export const priceInformation = (state: State, genCellContent: any) => {
  const basePrice = calculateBaseCost(state.baseModel.brand, state)
  const embroideryPrice = calculateEmbroideryCost(state.baseModel.brand, state)
  const optionPrice = calculateOptionCost(state.baseModel.brand, state)
  const totalPrice = basePrice + embroideryPrice + (optionPrice || 0)
  return [
    {
      text: '金額情報',
      style: { fontSize: 11 },
      margin: [0, 8, 0, 4]
    },
    {
      table: {
        widths: ['25%', '25%', '25%', '25%'],
        body: [
          [
            genCellContent('基本金額', moneyUnitSticker(basePrice)),
            genCellContent('刺繍金額', moneyUnitSticker(embroideryPrice)),
            genCellContent('オプション金額', moneyUnitSticker(optionPrice)),
            genCellContent('合計金額', moneyUnitSticker(totalPrice))
          ]
        ]
      }
    }
  ]
}

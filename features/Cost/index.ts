import { Brand } from '@/types'
import { calculateFiveBaseCost, calculateFiveEmbroideryCost, calculateFiveOptionCost } from '../five/Cost'
import { FiveState } from '../five/types'

export const calculateBaseCost = (brand: Brand, state: FiveState): number => {
  switch (brand) {
    case 'five':
      const baseCost = calculateFiveBaseCost(state)
      return baseCost
    case 'genuine':
    default:
      return 0
  }
}

export const calculateOptionCost = (brand: Brand, state: FiveState): number => {
  switch (brand) {
    case 'five':
      const optionCost = calculateFiveOptionCost(state)
      return optionCost
    case 'genuine':
    default:
      return 0
  }
}

export const calculateEmbroideryCost = (brand: Brand, state: FiveState): number => {
  switch (brand) {
    case 'five':
      const embroideryCost = calculateFiveEmbroideryCost(state)
      return embroideryCost
    case 'genuine':
    default:
      return 0
  }
}
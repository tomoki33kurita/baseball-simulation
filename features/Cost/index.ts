import { Brand, State } from '@/types'
import { calculateFiveBaseCost, calculateFiveEmbroideryCost, calculateFiveOptionCost } from '../five/Cost'
import { FiveState } from '../five/types'

export const calculateBaseCost = (brand: Brand, state: State): number => {
  switch (brand) {
    case 'five':
      const baseCost = calculateFiveBaseCost(state as FiveState)
      return baseCost
    case 'genuine':
    default:
      return 0
  }
}

export const calculateOptionCost = (brand: Brand, state: State): number => {
  switch (brand) {
    case 'five':
      const optionCost = calculateFiveOptionCost(state as FiveState)
      return optionCost
    case 'genuine':
    default:
      return 0
  }
}

export const calculateEmbroideryCost = (brand: Brand, state: State): number => {
  switch (brand) {
    case 'five':
      const embroideryCost = calculateFiveEmbroideryCost(state as FiveState)
      return embroideryCost
    case 'genuine':
    default:
      return 0
  }
}

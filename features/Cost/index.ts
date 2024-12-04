import { Brand, State } from '@/types'
import { calculateFiveBaseCost, calculateFiveEmbroideryCost, calculateFiveOptionCost } from '../five/Cost'
import { FiveState } from '../five/types'
import { GenuineState } from '../genuine/types'
import { calculateGenuineBaseCost, calculateGenuineEmbroideryCost, calculateGenuineOptionCost } from '../genuine/Cost'

export const calculateBaseCost = (brand: Brand, state: State): number => {
  switch (brand) {
    case 'five':
      const fiveBaseCost = calculateFiveBaseCost(state as FiveState)
      return fiveBaseCost
    case 'genuine':
      const genuineBaseCost = calculateGenuineBaseCost(state as GenuineState)
      return genuineBaseCost
    default:
      return 0
  }
}

export const calculateOptionCost = (brand: Brand, state: State): number => {
  switch (brand) {
    case 'five':
      const fiveOptionCost = calculateFiveOptionCost(state as FiveState)
      return fiveOptionCost
    case 'genuine':
      const genuineOptionCost = calculateGenuineOptionCost(state as GenuineState)
      return genuineOptionCost
    default:
      return 0
  }
}

export const calculateEmbroideryCost = (brand: Brand, state: State): number => {
  switch (brand) {
    case 'five':
      const fiveEmbroideryCost = calculateFiveEmbroideryCost(state as FiveState)
      return fiveEmbroideryCost
    case 'genuine':
      const genuineEmbroideryCost = calculateGenuineEmbroideryCost(state as GenuineState)
      return genuineEmbroideryCost
    default:
      return 0
  }
}

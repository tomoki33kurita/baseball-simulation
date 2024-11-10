import { Brand, Embroidery, State } from '@/types'
import { calculateFiveBaseCost, calculateFiveEmbroideryCost, calculateFiveOptionCost } from '../five/Cost'
import { FiveState } from '../five/types'
import { getFiveColorCells } from '../five/Components/ConfirmContents/color'
import { getGenuineColorCells } from '../genuine/Components/ConfirmContents/color'
import { GenuineState } from '../genuine/types'
import { getFiveBaseCells } from '../five/Components/ConfirmContents/base'
import { getGenuineBaseCells } from '../genuine/Components/ConfirmContents/base'
import { getFiveEmbroideryCells } from '../five/Components/ConfirmContents/embroidery'

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

export const getColorCells = (state: State) => {
  switch (state.baseModel.brand) {
    case 'five':
      return getFiveColorCells(state as FiveState)
    case 'genuine':
      return getGenuineColorCells(state as GenuineState)
    default:
      return []
  }
}

export const getBaseCells = (state: State) => {
  switch (state.baseModel.brand) {
    case 'five':
      return getFiveBaseCells(state as FiveState)
    case 'genuine':
      return getGenuineBaseCells(state as GenuineState)
    default:
      return []
  }
}

export const getEmbroideryCells = (state: State, isCustomOrder: boolean, existEmbroidery: boolean) => {
  if (!existEmbroidery) return []
  switch (state.baseModel.brand) {
    case 'five':
      return state.embroideries.map((e: Embroidery) => getFiveEmbroideryCells(e, isCustomOrder)).flat()
    case 'genuine':
      return [] //state.embroideries.map((e: Embroidery) => getFiveEmbroideryCells(e, isCustomOrder)).flat()
    default:
      return []
  }
}

export const getBrandName = (brand: Brand) => {
  switch (brand) {
    case 'five':
      return 'FIVE'
    case 'genuine':
      return 'Genuine'
    default:
      return '--'
  }
}

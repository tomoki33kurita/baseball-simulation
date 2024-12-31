import { Brand, Embroidery, State } from '@/types'
import { calculateFiveEmbroideryCost, calculateFiveOptionCost } from '../five/Cost'
import { FiveState } from '../five/types'
import { getFiveColorCells } from '../five/Components/ConfirmContents/color'
import { getGenuineColorCells } from '../genuine/Components/ConfirmContents/color'
import { GenuineState } from '../genuine/types'
import { getFiveBaseCells } from '../five/Components/ConfirmContents/base'
import { getGenuineBaseCells } from '../genuine/Components/ConfirmContents/base'
import { getFiveEmbroideryCells } from '../five/Components/ConfirmContents/embroidery'
import { getOrderType } from '../five/Components/Setters/logic'
import { getGenuineEmbroideryCells } from '../genuine/Components/ConfirmContents/embroidery'

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

export const getEmbroideryCells = (state: State, existEmbroidery: boolean) => {
  if (!existEmbroidery) return []
  switch (state.baseModel.brand) {
    case 'five':
      const fiveState = state as FiveState
      const { isCustomOrder } = getOrderType(fiveState.orderType)
      return state.embroideries.map((e: Embroidery) => getFiveEmbroideryCells(e, isCustomOrder)).flat()
    case 'genuine':
      return state.embroideries.map(getGenuineEmbroideryCells).flat()
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

import { ResponseDispatch } from '@/features/five/types'
import { BaseItem, BaseModel, ChoiceItem, ColorItem, Position } from '@/types'

export const positionChecker = (position: Position) => {
  const isPitcher = position === 'pitcher'
  const isOutfielder = position === 'outfielder'
  const isGlove = ['pitcher', 'infielder', 'outfielder'].includes(position)

  return {
    isPitcher,
    isOutfielder,
    isGlove
  }
}
type Item = BaseItem | ColorItem | ChoiceItem
export const first = (array: Item[]): Item => array[0]
export const objectsFilter = (selected: string, objects: Item[]): Item => first(objects.filter((x) => x.value === selected))

export const originDispatcher = (DISPATCHER: any, key: string, dispatch: React.Dispatch<unknown>, stateObjects: Item[]): ResponseDispatch => {
  return (selected: string) => {
    dispatch({
      type: DISPATCHER[key],
      [key]: objectsFilter(selected, stateObjects)
    })
  }
}

export const positionFilterLogic = (position: Position) => (m: BaseModel) => m.position.includes(position)

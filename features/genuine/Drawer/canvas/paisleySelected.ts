import { ColorItem } from '@/types'
import { GenuineState } from '../../types'
import { getGenuineColorCells } from '../../Components/ConfirmContents/color'

const isColorItem = (item: any): item is ColorItem => {
  return item !== null && typeof item === 'object' && 'color' in item && typeof item.color === 'string'
}
export const paisleySelected = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const colorCells = getGenuineColorCells(state)
  const partsColors = colorCells.filter(isColorItem)
  const isExistPaisley = partsColors.some((item) => ['blackPaisley', 'dBrownPaisley', 'navyPaisley'].includes(item.value))
  ctx.beginPath()
  ctx.font = '18px serif'
  ctx.strokeStyle = 'blue'
  if (isExistPaisley) {
    ctx.strokeText('※ペイズリー柄を選択中', 650, 650)
  }
  ctx.closePath()
}

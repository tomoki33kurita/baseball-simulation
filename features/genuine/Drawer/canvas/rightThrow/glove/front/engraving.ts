import { ColorItem } from '@/types'
import { genuineEngraved } from '../../../label'

// 捕球面の刻印
export const genuineEngravedOfPalm = (ctx: CanvasRenderingContext2D, palm: ColorItem, x: number, y: number): void => {
  ctx.lineWidth = 1.5
  const isBright = [
    'black',
    'kBlack',
    'uBlack',
    'jBlack',
    'navy',
    'blue',
    'cork',
    'jCork',
    'uCork',
    'kCork',
    'purple',
    'chocolate',
    'green',
    'gray',
    'sOrange',
    'rOrange',
    'lOrange'
  ].includes(palm.value)
  ctx.strokeStyle = isBright ? '#eee' : '#6d6d6d'
  ctx.beginPath()
  // ctx.font = '32px Brush Script MT'
  // ctx.strokeText(`g`, 420 + x, 455 + y)
  ctx.font = '56px Brush Script MT'
  ctx.strokeText(`genuine`, 415 + x, 450 + y)
  ctx.stroke()

  const strokeStyle = isBright ? '#eee' : '#6d6d6d'

  genuineEngraved(ctx, 190, -60, 0.8, strokeStyle)
  ctx.closePath()
}

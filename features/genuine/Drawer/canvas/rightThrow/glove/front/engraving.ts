import { ColorItem } from '@/types'
import { genuineEngraved } from '../../../label'

// 捕球面の刻印
export const genuineEngravedOfPalm = (ctx: CanvasRenderingContext2D, palm: ColorItem, x: number, y: number): void => {
  ctx.lineWidth = 1.0
  const isBright = [
    'black',
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
    'red',
    'pink',
    'sOrange',
    'rOrange',
    'lOrange',
    'wine'
  ].includes(palm.value)
  ctx.strokeStyle = isBright ? '#eee' : '#6d6d6d'
  ctx.beginPath()
  // ctx.font = isMobile ? '30px cursive' : '56px Brush Script MT'
  ctx.font = '56px Alex Brush'
  ctx.strokeText(`genuine`, 415 + x, 450 + y)
  ctx.stroke()

  const strokeStyle = isBright ? '#eee' : '#6d6d6d'

  genuineEngraved(ctx, 190, -60, 0.8, strokeStyle)
  ctx.closePath()
}

export const genuineEmbroideryForRingFinger = (ctx: CanvasRenderingContext2D, ringMiddle: ColorItem, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.save()
  // ctx.translate(263, 238)
  ctx.rotate((86 * Math.PI) / 180)

  ctx.beginPath()
  // ctx.font = isMobile ? '30px cursive' : '56px Brush Script MT'
  ctx.font = '48px Alex Brush'
  ctx.strokeStyle = color
  ctx.strokeText(`genuine`, 200, -242)
  ctx.stroke()
  ctx.closePath()

  ctx.restore()
}

import { ColorItem } from '@/types'

// 捕球面の刻印
export const fiveEngravedOfPalm = (ctx: CanvasRenderingContext2D, palm: ColorItem, x: number, y: number): void => {
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
    'redOrange'
  ].includes(palm.value)
  ctx.strokeStyle = isBright ? '#eee' : '#6d6d6d'
  ctx.beginPath()
  ctx.font = '16px serif'
  ctx.strokeText(`Grab the Future`, 420 + x, 455 + y)
  ctx.stroke()
  ctx.closePath()
}

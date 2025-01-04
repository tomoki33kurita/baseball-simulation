import { ColorItem } from '@/types'
import { genuineEngraved } from '../../../label'
import { getGenuineBackStyle } from '@/features/genuine/Components/Setters/logic'
import { GenuineState } from '@/features/genuine/types'
import { positionChecker } from '@/util/logic'
// import localFont from 'next/font/local'

// import { Alex_Brush } from 'next/font/google'
// const alexBrush = Alex_Brush({
//   weight: '400',
//   subsets: ['latin'],
//   variable: '--font-alex-brush'
// })

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
  const isReady = document.fonts.check('56px Alex Brush')
  ctx.strokeText(isReady ? `genuine` : ``, 415 + x, 450 + y)
  ctx.stroke()

  const strokeStyle = isBright ? '#eee' : '#6d6d6d'
  genuineEngraved(ctx, 190, -60, 0.8, strokeStyle)
  ctx.closePath()
}

import { positionChecker } from '@/util/logic'
import { getGenuineBackStyle } from '../../Components/Setters/logic'
import { GenuineState } from '../../types'
import { genuineEngraved } from './label'
import { ColorItem } from '@/types'

const genuineEmbroideryForRingFinger = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.save()
  // ctx.translate(263, 238)
  ctx.rotate((86 * Math.PI) / 180)
  ctx.beginPath()
  const isReady = document.fonts.check('56px Alex Brush')
  // ctx.font = isMobile ? '30px cursive' : '56px Brush Script MT'
  ctx.font = '40px Alex Brush'
  // ctx.font = `48px ${alexBrush.style.fontFamily}`
  ctx.strokeStyle = color
  if (isReady) {
    ctx.strokeText(`genuine`, 200, -242)
  }
  ctx.stroke()
  ctx.closePath()

  ctx.restore()
}

const genuineEmbroideryForLeftThrowRingFinger = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.save()
  // ctx.translate(263, 238)
  ctx.rotate((86 * Math.PI) / 180)
  ctx.beginPath()
  const isReady = document.fonts.check('56px Alex Brush')
  // ctx.font = isMobile ? '30px cursive' : '56px Brush Script MT'
  ctx.font = '40px Alex Brush'
  // ctx.font = `48px ${alexBrush.style.fontFamily}`
  ctx.strokeStyle = color
  if (isReady) {
    ctx.strokeText(`genuine`, 230, -590)
  }
  ctx.stroke()
  ctx.closePath()

  ctx.restore()
}

const genuineEmbroideryForCrownBack = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.save()
  ctx.rotate((-30 * Math.PI) / 180)
  ctx.beginPath()
  const isReady = document.fonts.check('56px Alex Brush')
  // ctx.font = isMobile ? '30px cursive' : '56px Brush Script MT'
  ctx.font = '40px Alex Brush'
  // ctx.font = `48px ${alexBrush.style.fontFamily}`
  ctx.strokeStyle = color
  if (isReady) {
    ctx.strokeText(`genuine`, -10, 470)
  }
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
}

const genuineEmbroideryForLeftThrowCrownBack = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.save()
  ctx.rotate((30 * Math.PI) / 180)
  ctx.beginPath()
  const isReady = document.fonts.check('56px Alex Brush')
  // ctx.font = isMobile ? '30px cursive' : '56px Brush Script MT'
  ctx.font = '40px Alex Brush'
  // ctx.font = `48px ${alexBrush.style.fontFamily}`
  ctx.strokeStyle = color
  if (isReady) {
    ctx.strokeText(`genuine`, 670, 35)
  }
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
}

const genuineEmbroideryForFirstMitt = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.save()
  ctx.rotate((-30 * Math.PI) / 180)
  ctx.beginPath()
  const isReady = document.fonts.check('48px Alex Brush')
  // ctx.font = isMobile ? '30px cursive' : '56px Brush Script MT'
  ctx.font = '40px Alex Brush'
  // ctx.font = `48px ${alexBrush.style.fontFamily}`
  ctx.strokeStyle = color
  if (isReady) {
    ctx.strokeText(`genuine`, -15, 480)
  }
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
}

const genuineEmbroideryForLeftThrowFirstMitt = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.save()
  ctx.rotate((30 * Math.PI) / 180)
  ctx.beginPath()
  const isReady = document.fonts.check('48px Alex Brush')
  // ctx.font = isMobile ? '30px cursive' : '56px Brush Script MT'
  ctx.font = '40px Alex Brush'
  // ctx.font = `48px ${alexBrush.style.fontFamily}`
  ctx.strokeStyle = color
  if (isReady) {
    ctx.strokeText(`genuine`, 690, 40)
  }
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
}

const genuineEmbroideryForCatcherMitt = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 1.0
  ctx.save()
  // ctx.translate(263, 238)
  ctx.rotate((86 * Math.PI) / 180)
  ctx.beginPath()
  const isReady = document.fonts.check('56px Alex Brush')
  // ctx.font = isMobile ? '30px cursive' : '56px Brush Script MT'
  ctx.font = '48px Alex Brush'
  // ctx.font = `48px ${alexBrush.style.fontFamily}`
  ctx.strokeStyle = color

  if (isReady) {
    ctx.strokeText(`genuine`, 270 + x, -140 + y)
  }
  ctx.stroke()
  ctx.closePath()

  ctx.restore()
}

const genuineEmbroideryForLeftThrowCatcherMitt = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 1.0
  ctx.save()
  // ctx.translate(263, 238)
  ctx.rotate((-86 * Math.PI) / 180)
  ctx.beginPath()
  const isReady = document.fonts.check('56px Alex Brush')
  // ctx.font = isMobile ? '30px cursive' : '56px Brush Script MT'
  ctx.font = '48px Alex Brush'
  // ctx.font = `48px ${alexBrush.style.fontFamily}`
  ctx.strokeStyle = color

  if (isReady) {
    ctx.strokeText(`genuine`, -310 + x, 720 + y)
  }
  ctx.stroke()
  ctx.closePath()

  ctx.restore()
}

export const genuineBrandMarkEmbroideryDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  const { isCrownBackStyle, isTMBackStyle, isRegularBackStyle, isBeltBackStyle } = getGenuineBackStyle(state)
  const { isGlove, isFirstBaseman, isCatcher } = positionChecker(state.baseModel.position)
  const isRequiredGenuineBrandMark = ['genuineEngraving', 'genuineEmbroidery'].includes(state.genuineBrandMark.value)
  if (isRequiredGenuineBrandMark && !isCrownBackStyle && isGlove) genuineEmbroideryForRingFinger(ctx, state.genuineBrandMarkColor.color)
  if (isRequiredGenuineBrandMark && isCrownBackStyle && isGlove) genuineEmbroideryForCrownBack(ctx, state.genuineBrandMarkColor.color)
  if (isRequiredGenuineBrandMark && isFirstBaseman) genuineEmbroideryForFirstMitt(ctx, 'gray')
  if (isRequiredGenuineBrandMark && isCatcher) {
    if (isTMBackStyle || isBeltBackStyle) {
      genuineEmbroideryForCatcherMitt(ctx, state.genuineBrandMarkColor.color, 0, -20)
    }
    if (isRegularBackStyle) {
      genuineEmbroideryForCatcherMitt(ctx, state.genuineBrandMarkColor.color, 0, 0)
    }
  }
}

export const genuineLeftThrowBrandMarkEmbroideryDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  const { isCrownBackStyle, isTMBackStyle, isBeltBackStyle, isRegularBackStyle } = getGenuineBackStyle(state)
  const { isGlove, isFirstBaseman, isCatcher } = positionChecker(state.baseModel.position)
  const isRequiredGenuineBrandMark = ['genuineEngraving', 'genuineEmbroidery'].includes(state.genuineBrandMark.value)
  if (isRequiredGenuineBrandMark && !isCrownBackStyle && isGlove) genuineEmbroideryForLeftThrowRingFinger(ctx, state.genuineBrandMarkColor.color)
  if (isRequiredGenuineBrandMark && isCrownBackStyle && isGlove) genuineEmbroideryForLeftThrowCrownBack(ctx, state.genuineBrandMarkColor.color)
  if (isRequiredGenuineBrandMark && isFirstBaseman) genuineEmbroideryForLeftThrowFirstMitt(ctx, 'gray')
  if (isRequiredGenuineBrandMark && isCatcher) {
    if (isTMBackStyle || isBeltBackStyle) {
      genuineEmbroideryForLeftThrowCatcherMitt(ctx, state.genuineBrandMarkColor.color, 0, 0)
    }
    if (isRegularBackStyle) {
      genuineEmbroideryForLeftThrowCatcherMitt(ctx, state.genuineBrandMarkColor.color, 0, 20)
    }
  }
}

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
  genuineEngraved(ctx, 190 + x, -60 + y, 0.8, strokeStyle)
  ctx.closePath()
}

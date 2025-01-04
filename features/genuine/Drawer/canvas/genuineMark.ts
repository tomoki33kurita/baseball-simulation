import { positionChecker } from '@/util/logic'
import { getGenuineBackStyle } from '../../Components/Setters/logic'
import { GenuineState } from '../../types'

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

const genuineEmbroideryForCatcherMitt = (ctx: CanvasRenderingContext2D, color: string): void => {
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
    ctx.strokeText(`genuine`, 250, -160)
  }
  ctx.stroke()
  ctx.closePath()

  ctx.restore()
}

export const genuineBrandMarkEmbroideryDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  const { isCrownBackStyle } = getGenuineBackStyle(state)
  const { isGlove, isFirstBaseman, isCatcher } = positionChecker(state.baseModel.position)
  const isRequiredGenuineBrandMark = ['genuineEngraving', 'genuineEmbroidery'].includes(state.genuineBrandMark.value)
  if (isRequiredGenuineBrandMark && !isCrownBackStyle && isGlove) genuineEmbroideryForRingFinger(ctx, state.genuineBrandMarkColor.color)
  if (isRequiredGenuineBrandMark && isCrownBackStyle && isGlove) genuineEmbroideryForCrownBack(ctx, state.genuineBrandMarkColor.color)
  if (isRequiredGenuineBrandMark && isFirstBaseman) genuineEmbroideryForFirstMitt(ctx, 'gray')
  if (isRequiredGenuineBrandMark && isCatcher) genuineEmbroideryForCatcherMitt(ctx, state.genuineBrandMarkColor.color)
}

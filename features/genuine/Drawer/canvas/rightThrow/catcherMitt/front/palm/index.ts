import { normalPalm } from './normalPalm'
import { shallowPalm } from './shallowPalm'
import { GenuineState } from '@/features/genuine/types'

export const palmDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = state.palm.color

  const isShallowWebModel = false

  if (isShallowWebModel) {
    shallowPalm(ctx, state.palm.color, state.stitch.color)
  }

  if (!isShallowWebModel) {
    normalPalm(ctx, state.palm.color, state.stitch.color)
  }
}

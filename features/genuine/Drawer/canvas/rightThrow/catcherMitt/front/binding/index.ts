import { normalBinding, shallowBinding } from './binding'
import { GenuineState } from '@/features/genuine/types'

export const edgeDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = state.palm.color

  const isShallowWebModel = ['AKG-JS2'].includes(state.baseModel.productNumber)
  if (isShallowWebModel) {
    shallowBinding(ctx, state.binding.color)
  }

  if (!isShallowWebModel) {
    normalBinding(ctx, state.binding.color)
  }
}
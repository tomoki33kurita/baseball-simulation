import { webOfNormalPocket, webOfShallowPocket, webTop } from './web'
import { GenuineState } from '@/features/genuine/types'

export const webDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = state.palm.color

  const isShallowWebModel = ['YT-22'].includes(state.baseModel.productNumber)
  if (isShallowWebModel) {
    webOfShallowPocket(ctx, state.web.color, state.stitch.color)
    webTop(ctx, state.web2.color, state.stitch.color)
  }

  if (!isShallowWebModel) {
    webOfNormalPocket(ctx, state.web.color, state.stitch.color)
    webTop(ctx, state.web2.color, state.stitch.color)
  }
}

import { webOfNormalPocket, webOfShallowPocket, webTop } from './web'
import { GenuineState } from '@/features/genuine/types'

export const webDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = state.palm.color

  const isShallowWeb = ['onePeaceShallow'].includes(state.coreHardness.value)
  if (isShallowWeb) {
    webOfShallowPocket(ctx, state.web.color, state.stitch.color)
    webTop(ctx, state.web2.color, state.stitch.color)
  }
  const isOnePeace = ['onePeace'].includes(state.coreHardness.value)
  if (isOnePeace) {
    webOfNormalPocket(ctx, state.web.color, state.stitch.color)
    webTop(ctx, state.web2.color, state.stitch.color)
  }
  const isTwoPeace = ['twoPeace'].includes(state.coreHardness.value)
  if (isTwoPeace) {
    webOfNormalPocket(ctx, state.web.color, state.stitch.color)
    webTop(ctx, state.web2.color, state.stitch.color)
  }
}

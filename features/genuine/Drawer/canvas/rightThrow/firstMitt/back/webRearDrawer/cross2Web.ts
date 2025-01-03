import { GenuineState } from '@/features/genuine/types'
import { webBottom2, webTop2 } from '../web'
import { webKnots } from '@/util/canvas/lace/webKnots'
import { verticalParts } from './parts/vertical'
import { topLaces } from '../lace/webTop'

export const cross2Web = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  webTop2(ctx, state.web.color, state.stitch.color) // ウェブ先端側
  webBottom2(ctx, state.web.color, state.stitch.color) // ウェブ捕球面側
  topLaces(ctx, state.lace.color)

  verticalParts(ctx, state.web2.color, state.stitch.color)
  // ウェブ上の結び目
  const laceColor = state.lace.color
  webKnots(ctx, laceColor, -40, -25)
  webKnots(ctx, laceColor, -100, 45)
}

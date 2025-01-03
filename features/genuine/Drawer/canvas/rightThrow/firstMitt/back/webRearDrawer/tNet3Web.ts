import { webKnots } from '@/util/canvas/lace/webKnots'
import { webTopJoint } from '../web'
import { GenuineState } from '@/features/genuine/types'
import { verticalParts3 } from './parts/vertical'
import { topCrossLaces, topLaces } from '../lace/webTop'

export const tNet3Web = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  webTopJoint(ctx, state.web.color, state.web2.color, state.stitch.color) // ウェブ先端側

  verticalParts3(ctx, state.web.color, state.stitch.color, state.lace.color)

  if (state.webLaceStyle.value === 'cross') {
    topCrossLaces(ctx, state.lace.color)
  } else {
    topLaces(ctx, state.lace.color) // 革紐＿ウェブ先端側
  }

  //   // ウェブ上の結び目
  const laceColor = state.lace.color
  webKnots(ctx, laceColor, -85, 30)
  webKnots(ctx, laceColor, 5, -85)
}

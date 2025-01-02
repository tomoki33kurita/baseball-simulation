import { GenuineState } from '@/features/genuine/types'
import { webBottom, webTop, webTopJoint } from '../web'
import { webCross } from '../lace/webCross'
import { webKnots } from '@/util/canvas/lace/webKnots'
import { topLaces } from '../lace/webTop'

export const normalJointWeb = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  webTopJoint(ctx, state.web2.color, state.stitch.color) // ウェブ先端側
  webBottom(ctx, state.web.color, state.stitch.color) // ウェブ捕球面側
  const laceColor = state.lace.color

  topLaces(ctx, laceColor)
  // ウェブとウェブを結ぶバツ紐
  webCross(ctx, laceColor, 0, 0) // 左下
  webCross(ctx, laceColor, 62, 70) // 右下
  webCross(ctx, laceColor, 50, -70) // 左上
  webCross(ctx, laceColor, 100, 10) // 右上

  // ウェブ上の結び目
  webKnots(ctx, laceColor, -20, -25)
  webKnots(ctx, laceColor, -80, 35)
}

import { GenuineState } from '@/features/genuine/types'
import { edgeOfBeltBackStyle } from '../../edge'
import { verticalKnotForCatcher } from '@/util/canvas/lace/webKnots'
import { listCross } from '../../lace/listCross'

export const beltTypeDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  edgeOfBeltBackStyle(ctx, state.binding.color, state.stitch.color)
  listCross(ctx, state.lace.color)
  verticalKnotForCatcher(ctx, state.lace.color, 105, 185, 1) // ベルト結び目
}

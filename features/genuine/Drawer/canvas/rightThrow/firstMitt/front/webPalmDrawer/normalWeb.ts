import { GenuineState } from '@/features/genuine/types'
import { webBottom, webTop } from './parts/side'
import { webCross } from '../lace/webCross'
import { webTopLaces } from '../lace/webTop'

export const normalWeb = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const laceColor = state.lace.color
  webCross(ctx, laceColor, 0, 0) // 革紐＿ウェブ間クロス＿上段
  webCross(ctx, laceColor, 60, -50)
  webCross(ctx, laceColor, -40, -75) // 革紐＿ウェブ間クロス＿下段
  webCross(ctx, laceColor, 20, -120)

  webTop(ctx, state.web.color, state.stitch.color) // ウェブ先端側
  webTopLaces(ctx, laceColor) // 革紐＿ウェブ先端側
  webBottom(ctx, state.web2.color, state.stitch.color) // ウェブ捕球面側
}

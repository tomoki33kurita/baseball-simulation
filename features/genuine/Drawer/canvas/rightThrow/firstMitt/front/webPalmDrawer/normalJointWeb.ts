import { GenuineState } from '@/features/genuine/types'
import { webBottom, webTopJoint } from './parts/side'
import { webCross } from '../lace/webCross'
import { webTopCrossLaces } from '../lace/webTop'

export const normalJointWeb = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const laceColor = state.lace.color
  webCross(ctx, laceColor, 0, 0) // 革紐＿ウェブ間クロス＿上段
  webCross(ctx, laceColor, 60, -50)
  webCross(ctx, laceColor, -40, -75) // 革紐＿ウェブ間クロス＿下段
  webCross(ctx, laceColor, 20, -120)

  const stitchColor = state.stitch.color
  webTopJoint(ctx, state.web.color, state.web2.color, stitchColor) // ウェブ先端側
  webTopCrossLaces(ctx, laceColor) // 革紐＿ウェブ先端側

  webBottom(ctx, state.web.color, stitchColor) // ウェブ捕球面側
}

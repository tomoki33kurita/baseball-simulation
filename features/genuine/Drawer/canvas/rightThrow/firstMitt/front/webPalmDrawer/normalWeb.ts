import { GenuineState } from '@/features/genuine/types'
import { webBottom, webTop } from './parts/web'
import { webCross } from '../lace/webCross'

export const normalWeb = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  webCross(ctx, state.lace.color, 0, 0) // 革紐＿ウェブ間クロス＿上段
  webCross(ctx, state.lace.color, 60, -50)
  webCross(ctx, state.lace.color, -40, -75) // 革紐＿ウェブ間クロス＿下段
  webCross(ctx, state.lace.color, 20, -120)

  webTop(ctx, state.web2.color, state.stitch.color) // ウェブ先端側
  webBottom(ctx, state.web.color, state.stitch.color) // ウェブ捕球面側
}

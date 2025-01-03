import { GenuineState } from '@/features/genuine/types'
import { webBottom2, webBottom3, webTop2, webTopJoint } from './parts/side'
import { verticalParts3 } from './parts/vertical'
import { webTopLaces } from '../lace/webTop'

export const crossV2Web = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  verticalParts3(ctx, state.web2.color, state.stitch.color) // ウェブ縦部分
  webTopJoint(ctx, state.web.color, state.web2.color, state.stitch.color) // ウェブ先端側
  webTopLaces(ctx, state.lace.color) // 革紐＿ウェブ先端側
  webBottom2(ctx, state.web.color, state.stitch.color, 10, 15) // ウェブ捕球面側
  webBottom3(ctx, state.web.color, state.stitch.color) // ウェブ捕球面側
}

import { GenuineState } from '@/features/genuine/types'
import { webTopJoint } from './parts/side'
import { webTopCrossLaces, webTopLaces } from '../lace/webTop'

export const tNet3Web = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const stitchColor = state.stitch.color
  webTopJoint(ctx, state.web.color, state.web2.color, stitchColor) // ウェブ先端側

  if (state.webLaceStyle.value === 'cross') {
    webTopCrossLaces(ctx, state.lace.color) // 革紐＿ウェブ先端側
  } else {
    webTopLaces(ctx, state.lace.color) // 革紐＿ウェブ先端側
  }
}

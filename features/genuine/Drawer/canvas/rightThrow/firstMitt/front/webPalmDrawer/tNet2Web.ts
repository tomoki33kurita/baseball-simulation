import { GenuineState } from '@/features/genuine/types'
import { webBottom2, webTop2 } from './parts/web'

export const tNet2Web = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const stitchColor = state.stitch.color
  webTop2(ctx, state.web2.color, stitchColor) // ウェブ先端側
}

import { GenuineState } from '@/features/genuine/types'
import { webBottom, webBottom2, webTop2 } from './parts/web'

export const cross2Web = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  webTop2(ctx, state.web2.color, state.stitch.color) // ウェブ先端側
  webBottom2(ctx, state.web.color, state.stitch.color) // ウェブ捕球面側
}

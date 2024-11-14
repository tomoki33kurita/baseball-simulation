import { GenuineState } from '@/features/genuine/types'
import { normalWristBelt } from './normalWristBelt'

export const wristBeltDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  normalWristBelt(ctx, state.listBelt.color, state.stitch.color)
}

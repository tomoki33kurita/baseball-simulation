import { GenuineState } from '@/features/genuine/types'
import { normalWristBelt } from './normalWristBelt'

export const wristBeltDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const isFrontSide = ['normalFront', 'directEmbroideryFront'].includes(state.genuineLabel.value)
  if (isFrontSide) normalWristBelt(ctx, state.listBelt.color, state.stitch.color)
}

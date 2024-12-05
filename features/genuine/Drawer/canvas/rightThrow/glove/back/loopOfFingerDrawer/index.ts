import { GenuineState } from '@/features/genuine/types'
import { loopOfRingFinger } from './loopOfFinger'

export const loopOfRingFingerDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const stitchColor = state.stitch.color
  const loopOfRingColor = state.loopOfRingFingerColor.color

  if (state.loopOfRingFinger.value === 'loopOfRingFinger') {
    loopOfRingFinger(ctx, loopOfRingColor, stitchColor)
  }
}

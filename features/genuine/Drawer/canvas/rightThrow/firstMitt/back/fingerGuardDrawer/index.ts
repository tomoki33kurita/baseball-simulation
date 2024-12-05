import { GenuineState } from '@/features/genuine/types'
import { indexFingerCover } from './indexFingerCover'
import { indexFingerPad, indexFingerPadWithNoEdge } from './indexFingerPad'

export const fingerGuardDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const fingerGuardType = state.fingerGuard.value
  const fingerGuardColor = state.fingerGuardColor.color
  const stitchColor = state.stitch.color
  if (fingerGuardType === 'indexPad') {
    indexFingerPad(ctx, fingerGuardColor, stitchColor)
  }
  if (fingerGuardType === 'indexPadWithNoEdge') {
    indexFingerPadWithNoEdge(ctx, fingerGuardColor, stitchColor)
  }
  if (fingerGuardType === 'indexCover') {
    indexFingerCover(ctx, fingerGuardColor, stitchColor)
  }
}

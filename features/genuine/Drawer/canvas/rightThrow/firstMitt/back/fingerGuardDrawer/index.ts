import { GenuineState } from '@/features/genuine/types'
import { indexFingerCover, indexFingerPad } from './indexFinger'
import {} from './indexFinger'
import { middleFingerCover, middleFingerPad } from './middleFinger'

export const fingerGuardDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const fingerGuardType = state.fingerGuard.value
  const fingerGuardColor = state.fingerGuardColor.color
  const stitchColor = state.stitch.color
  if (fingerGuardType === 'indexPad') {
    indexFingerPad(ctx, fingerGuardColor, stitchColor)
  }
  if (fingerGuardType === 'indexCover') {
    indexFingerCover(ctx, fingerGuardColor, stitchColor)
  }
  if (fingerGuardType === 'middlePad') {
    middleFingerPad(ctx, fingerGuardColor, stitchColor)
  }
  if (fingerGuardType === 'middleCover') {
    middleFingerCover(ctx, fingerGuardColor, stitchColor)
  }
}

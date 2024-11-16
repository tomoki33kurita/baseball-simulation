import { GenuineState } from '@/features/genuine/types'
import { indexFingerCover } from './indexFingerCover'
import { middleFingerCover } from './middleFIngerCover'

export const fingerGuardDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const isIndexFingerCover =
    state.fingerGuard.value == 'indexCover' || (state.fingerGuard.value === 'unselected' && state.baseModel.position === 'pitcher')
  const isMiddleFingerCover = state.fingerGuard.value === 'middleCover'

  const fingerGuardColor = state.fingerGuardColor.color
  const stitchColor = state.stitch.color
  // 指カバー
  isIndexFingerCover && indexFingerCover(ctx, fingerGuardColor, stitchColor)
  // 指カバー(中指)
  isMiddleFingerCover && middleFingerCover(ctx, fingerGuardColor, stitchColor, -140, 65, -10)
}

import { State } from '@/features/five/types'
import { indexFingerCover } from './indexFingerCover'
import { middleFingerCover } from './middleFIngerCover'
import { getOrderType } from '@/features/five/Setters/logic'

export const fingerGuardDrawer = (ctx: CanvasRenderingContext2D, state: State): void => {
  const isIndexFingerCover =
    state.fingerGuard.value == 'indexCover' || (state.fingerGuard.value === 'unselected' && state.baseModel.position === 'pitcher')
  const isMiddleFingerCover = state.fingerGuard.value === 'middleCover'

  const { isBasicOrder, isBasicWithEmbroideryOrder } = getOrderType(state.orderType)

  if (isBasicOrder || isBasicWithEmbroideryOrder) {
    const basicColors = state.baseModel.basicColors
    // 指カバー
    isIndexFingerCover && indexFingerCover(ctx, basicColors.leather.color, basicColors.stitch.color)
    // 指カバー(中指)
    isMiddleFingerCover && middleFingerCover(ctx, basicColors.leather.color, basicColors.stitch.color, -140, 65, -10)
    return
  }
  // 指カバー
  isIndexFingerCover && indexFingerCover(ctx, state.fingerGuardColor.color, state.stitch.color)
  // 指カバー(中指)
  isMiddleFingerCover && middleFingerCover(ctx, state.fingerGuardColor.color, state.stitch.color, -140, 65, -10)
}

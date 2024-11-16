import { GenuineState } from '@/features/genuine/types'
import { indexFingerPad, indexFingerPadWithNoEdge } from '../indexFingerPad'
import { indexFingerCover } from '../indexFinger'

export const fingerGuardDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  switch (state.fingerGuard.value) {
    case 'indexPadWithNoEdge':
      // ヘリ無し指当て
      indexFingerPadWithNoEdge(ctx, state.fingerGuardColor.color, state.stitch.color)
      break
    case 'indexCover':
      // 指カバー
      indexFingerCover(ctx, state.fingerGuardColor.color, state.stitch.color)
      break
    case 'indexPad':
      // 指当て
      indexPadSwitcher(ctx, state)
      break
  }
}

const indexPadSwitcher = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  switch (state.baseModel.brand) {
    default:
      // atoms, treasure, gorilla
      indexFingerPad(ctx, state.fingerGuardColor.color, state.stitch.color)
      break
  }
}

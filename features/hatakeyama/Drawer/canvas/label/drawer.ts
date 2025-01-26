import { HatakeyamaState } from '@/features/hatakeyama/types'
import { hatakeyamaLabel } from '.'

export const hatakeyamaCatcherMittLabelDrawer = (ctx: CanvasRenderingContext2D | null, state: HatakeyamaState): void => {
  if (!ctx) return
  const isUnselectedBackStyle = state.backStyle.value === 'unselected'
  if (state.genuineLabel.value === 'unselected') return

  if (['rightThrow', 'unselected'].includes(state.dominantArm.value)) {
    if (isUnselectedBackStyle) {
      switch (state.baseModel.productNumber) {
        case 'TM-411':
          hatakeyamaLabel(ctx, state, 100, -10, 15, 0.9)
          return
        default:
          hatakeyamaLabel(ctx, state, 50, 155, 0, 0.85)
      }
    }
    switch (state.backStyle.value) {
      case 'belt':
      case 'unselected':
        hatakeyamaLabel(ctx, state, 50, 155, 0, 0.85)
        return
      case 'regular':
        hatakeyamaLabel(ctx, state, 110, 115, -8, 0.85)
        return
      case 'tmBack':
        hatakeyamaLabel(ctx, state, 100, -10, 15, 0.9)
        return
    }
  }
}

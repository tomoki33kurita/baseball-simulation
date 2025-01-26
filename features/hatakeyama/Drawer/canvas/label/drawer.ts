import { HatakeyamaState } from '@/features/hatakeyama/types'
import { hatakeyamaLabel } from '.'

export const hatakeyamaCatcherMittLabelDrawer = (ctx: CanvasRenderingContext2D | null, state: HatakeyamaState): void => {
  if (!ctx) return

  if (['rightThrow', 'unselected'].includes(state.dominantArm.value)) {
    const labelColor = '#ffd500'
    switch (state.genuineLabel.value) {
      case 'littleFingerSideNormal':
        hatakeyamaLabel(ctx, labelColor, -20, -700, 85, 0.8) // ベルトの上
        return
      default:
        hatakeyamaLabel(ctx, labelColor, -35, 100, 0) // ベルトの上
        return
    }
  }
}

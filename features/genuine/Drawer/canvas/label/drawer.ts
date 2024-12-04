import { getBackStyle } from '@/features/genuine/Components/Setters/logic'
import { GenuineState } from '@/features/genuine/types'
import { genuineLabel } from '.'
import { wristBelt } from '../rightThrow/glove/back/backStyles/crownBackStyleDrawer/wristBelt'

export const genuineLabelDrawer = (ctx: CanvasRenderingContext2D | null, state: GenuineState): void => {
  const { isFirstBackStyle } = getBackStyle(state)
  if (!ctx) return

  if (isFirstBackStyle) {
    genuineLabel(ctx, state, -80, 170, -8, 0.7)
    return
  }
  const label = state.genuineLabel
  if (['normalFront', 'directEmbroideryFront'].includes(label.value)) {
    wristBelt(ctx, state.listBelt.color, state.stitch.color)
    genuineLabel(ctx, state, 50, 60, 0, 0.9)
    return
  }
  if (['normalSide', 'directEmbroiderySide'].includes(label.value)) {
    genuineLabel(ctx, state, 90, 155, -8, 0.85)
    return
  }
}

import { getBackStyle } from '@/features/genuine/Components/Setters/logic'
import { GenuineState } from '@/features/genuine/types'
import { genuineLabel } from '.'

export const genuineLabelDrawer = (ctx: CanvasRenderingContext2D | null, state: GenuineState): void => {
  const { isFirstBackStyle } = getBackStyle(state)
  if (!ctx) return

  if (isFirstBackStyle) {
    genuineLabel(ctx, state, -80, 170, -8, 0.7)
    return
  }
  genuineLabel(ctx, state, 50, 60, 0, 0.9)
  return
}

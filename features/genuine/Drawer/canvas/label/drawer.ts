import { getBackStyle } from '@/features/genuine/Components/Setters/logic'
import { GenuineState } from '@/features/genuine/types'
import { genuineLabel } from '.'
import { wristBelt } from '../rightThrow/glove/back/backStyles/crownBackStyleDrawer/wristBelt'
import { positionChecker } from '@/util/logic'

export const genuineLabelDrawer = (ctx: CanvasRenderingContext2D | null, state: GenuineState): void => {
  if (!ctx) return
  const { isFirstBackStyle, isConnectBackStyle } = getBackStyle(state)
  const { isCatcher } = positionChecker(state.baseModel.position)
  const isUnselectedBackStyle = state.backStyle.value === 'unselected'
  if (state.genuineLabel.value === 'unselected') return

  if (isCatcher) {
    if (isUnselectedBackStyle) {
      switch (state.baseModel.productNumber) {
        case 'TM-411':
          genuineLabel(ctx, state, 100, -10, 15, 0.9)
          return
        default:
          genuineLabel(ctx, state, 50, 155, 0, 0.85)
      }
    }
    switch (state.backStyle.value) {
      case 'belt':
      case 'unselected':
        genuineLabel(ctx, state, 50, 155, 0, 0.85)
        return
      case 'regular':
        genuineLabel(ctx, state, 110, 115, -8, 0.85)
        return
      case 'tmBack':
        genuineLabel(ctx, state, 100, -10, 15, 0.9)
        return
      case 'connect':
        genuineLabel(ctx, state, 50, 60, 0, 0.9)
        return
    }
  }

  if (isFirstBackStyle) {
    genuineLabel(ctx, state, -80, 170, -8, 0.7)
    return
  }
  if (isConnectBackStyle) {
    genuineLabel(ctx, state, -30, 60, -2, 0.9)
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

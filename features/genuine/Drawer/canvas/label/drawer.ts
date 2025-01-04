import { getBackStyle } from '@/features/genuine/Components/Setters/logic'
import { GenuineState } from '@/features/genuine/types'
import { genuineLabel } from '.'
import { wristBelt } from '../rightThrow/glove/back/backStyles/crownBackStyleDrawer/wristBelt'
import { positionChecker } from '@/util/logic'
import { startInversion, undoInversion } from '@/util/canvas'

export const genuineLabelDrawer = (ctx: CanvasRenderingContext2D | null, state: GenuineState, width: number): void => {
  if (!ctx) return
  const { isFirstBackStyle, isConnectBackStyle } = getBackStyle(state)
  if (state.genuineLabel.value === 'unselected') return

  if (state.dominantArm.value === 'rightThrow') {
    if (isFirstBackStyle) {
      const isThumbSide = ['thumbSideNormal', 'thumbSideEmbroidery'].includes(state.genuineLabel.value)
      if (isThumbSide) {
        genuineLabel(ctx, state, 130, 70, -8, 0.85)
        return
      }
      // little finger side
      genuineLabel(ctx, state, -80, 185, -8, 0.7)
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

  if (state.dominantArm.value === 'leftThrow') {
    if (isFirstBackStyle) {
      const isThumbSide = ['thumbSideNormal', 'thumbSideEmbroidery'].includes(state.genuineLabel.value)
      if (isThumbSide) {
        genuineLabel(ctx, state, 70, -50, 8, 0.85)
        return
      }
      // little finger side
      genuineLabel(ctx, state, 500, 40, 8, 0.7)
      return
    }
    if (isConnectBackStyle) {
      genuineLabel(ctx, state, 150, 65, -2, 0.9)
      return
    }
    const label = state.genuineLabel
    if (['normalFront', 'directEmbroideryFront'].includes(label.value)) {
      startInversion(ctx, width)
      wristBelt(ctx, state.listBelt.color, state.stitch.color)
      undoInversion(ctx, width)
      genuineLabel(ctx, state, 100, 60, 0, 0.9)
      return
    }
    if (['normalSide', 'directEmbroiderySide'].includes(label.value)) {
      genuineLabel(ctx, state, 130, -10, 10, 0.85)
      return
    }
  }
}

export const genuineFirstMittLabelDrawer = (ctx: CanvasRenderingContext2D | null, state: GenuineState): void => {
  if (!ctx) return
  if (state.genuineLabel.value === 'unselected') return
  if (state.dominantArm.value === 'rightThrow') {
    const isThumbSide = ['normalSide', 'directEmbroiderySide'].includes(state.genuineLabel.value)
    if (isThumbSide) {
      genuineLabel(ctx, state, 120, 210, -7, 0.8)
      return
    }
    const isFrontSide = ['normalFront', 'directEmbroideryFront'].includes(state.genuineLabel.value)
    if (isFrontSide) {
      genuineLabel(ctx, state, 40, 85, 0, 0.9)
      return
    }
  }

  if (state.dominantArm.value === 'leftThrow') {
    const isThumbSide = ['normalSide', 'directEmbroiderySide'].includes(state.genuineLabel.value)
    if (isThumbSide) {
      genuineLabel(ctx, state, 200, 50, 10, 0.8)
      return
    }
    const isFrontSide = ['normalFront', 'directEmbroideryFront'].includes(state.genuineLabel.value)
    if (isFrontSide) {
      genuineLabel(ctx, state, 130, 90, 0, 0.9)
      return
    }
  }
}

export const genuineCatcherMittLabelDrawer = (ctx: CanvasRenderingContext2D | null, state: GenuineState): void => {
  if (!ctx) return
  const { isCatcher } = positionChecker(state.baseModel.position)
  const isUnselectedBackStyle = state.backStyle.value === 'unselected'
  if (state.genuineLabel.value === 'unselected') return

  if (state.dominantArm.value === 'rightThrow') {
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
    }
  }

  if (state.dominantArm.value === 'leftThrow') {
    if (isUnselectedBackStyle) {
      switch (state.baseModel.productNumber) {
        case 'TM-411':
          genuineLabel(ctx, state, 350, -60, 15, 0.9) //
          return
        default:
          genuineLabel(ctx, state, 175, 155, 0, 0.85) //
          return
      }
    }
    switch (state.backStyle.value) {
      case 'belt':
        genuineLabel(ctx, state, 175, 155, 0, 0.85) //
        return
      case 'regular':
        genuineLabel(ctx, state, 90, -20, 8, 0.85)
        return
      case 'tmBack':
        genuineLabel(ctx, state, 350, -60, 15, 0.9) //
        return
    }
  }
}

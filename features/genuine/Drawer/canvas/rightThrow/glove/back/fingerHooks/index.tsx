import { GenuineState } from '@/features/genuine/types'
import { littleHook } from './littleHook'
import { getBackStyle } from '@/features/genuine/Components/Setters/logic'

export const littleHookDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  const isTwoFingerInLittleSlot = state.twoFingerInLittleSlot.value === 'twoFingerInLittleSlot'
  const { isFirstBackStyle } = getBackStyle(state)

  if (isTwoFingerInLittleSlot) {
    littleHook(ctx, state.littleHook.color, 10, 280, -10, 0.7) // 小指掛け紐
    return
  }

  if (isFirstBackStyle) {
    littleHook(ctx, state.littleHook.color, 15, 240, -10, 0.7) // 小指掛け紐
    return
  }

  littleHook(ctx, state.littleHook.color, 25, 240, -10, 0.7) // 小指掛け紐
}

import { GenuineState } from '@/features/genuine/types'
import { littleHook } from './littleHook'

export const littleHookDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  const isTwoFingerInLittleSlot = state.twoFingerInLittleSlot.value === 'twoFingerInLittleSlot'

  if (isTwoFingerInLittleSlot) {
    littleHook(ctx, state.littleHook.color, 10, 280, -10, 0.7) // 小指掛け紐
    return
  }
  littleHook(ctx, state.littleHook.color, 25, 240, -10, 0.7) // 小指掛け紐
}

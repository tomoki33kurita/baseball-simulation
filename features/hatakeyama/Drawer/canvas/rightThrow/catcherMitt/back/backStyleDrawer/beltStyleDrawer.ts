import { GenuineState } from '@/features/genuine/types'
import { bindingOfCommon } from '../edge'
import { weltingOfMiddleFingerBeltBackStyle } from '../welting'
import { littleRingMergedFingerOfBeltBackStyle } from '../littleRingFinger'
import { thumbFingerOfBeltBackStyle } from '../thumbFinger'
import { beltTypeDrawer } from './beltTypeDrawer'
import { fingerGuardDrawer } from '../fingerGuardDrawer'

export const beltStyleDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const isBeltBack = ['belt'].includes(state.backStyle.value)
  const isUnselectedBackStyle = state.backStyle.value === 'unselected'
  const isDefaultBeltBack = isUnselectedBackStyle && state.baseModel.productNumber !== 'TM-411'

  if (!isBeltBack && !isDefaultBeltBack) return
  littleRingMergedFingerOfBeltBackStyle(ctx, state) // 小指側の指袋
  thumbFingerOfBeltBackStyle(ctx, state?.thumbIndexMiddleRight.color, state.stitch.color) // 親指側の指袋
  weltingOfMiddleFingerBeltBackStyle(ctx, state.welting) // ベルトスタイルのハミダシ
  bindingOfCommon(ctx, state.binding.color) // ヘリ革
  beltTypeDrawer(ctx, state) // ベルトタイプ別の描画
  fingerGuardDrawer(ctx, state) // 指カバー・指当て
}

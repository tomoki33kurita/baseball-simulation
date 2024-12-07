import { GenuineState } from '@/features/genuine/types'
import { edgeOfCommon } from '../edge'
import { weltingOfMiddleFingerBeltBackStyle } from '../welting'
import { littleRingMergedFingerOfBeltBackStyle } from '../littleRingFinger'
import { thumbFingerOfBeltBackStyle } from '../thumbFinger'
import { beltTypeDrawer } from './beltTypeDrawer'

export const beltStyleDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const isBeltBack = state.backStyle.value === 'belt'
  if (!isBeltBack) return
  littleRingMergedFingerOfBeltBackStyle(ctx, state.middleLeftRingLittle.color, state.stitch.color) // 小指側の指袋
  thumbFingerOfBeltBackStyle(ctx, state?.thumbIndexMiddleRight.color, state.stitch.color) // 親指側の指袋
  weltingOfMiddleFingerBeltBackStyle(ctx, state.welting) // ベルトスタイルのハミダシ
  edgeOfCommon(ctx, state.binding.color) // ヘリ革
  beltTypeDrawer(ctx, state) // ベルトタイプ別の描画
}

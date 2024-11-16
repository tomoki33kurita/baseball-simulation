import { GenuineState } from '@/features/genuine/types'
import { edgeOfCommon } from '../edge'
import { weltingOfMiddleFingerBeltBackStyle } from '../welting'
import { littleRingMergedFingerOfBeltBackStyle } from '../littleRingFinger'
import { thumbFingerOfBeltBackStyle } from '../thumbFinger'
import { beltTypeDrawer } from './beltTypeDrawer'

export const beltStyleDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  // 小指側の指袋
  littleRingMergedFingerOfBeltBackStyle(ctx, state.middleLeftRingLittle.color, state.stitch.color)

  // 親指側の指袋
  thumbFingerOfBeltBackStyle(ctx, state?.thumbIndexMiddleRight.color, state.stitch.color)

  // ベルトスタイルのハミダシ
  weltingOfMiddleFingerBeltBackStyle(ctx, state.welting)

  // ヘリ革
  edgeOfCommon(ctx, state.binding.color)

  // ベルトタイプ別の描画
  beltTypeDrawer(ctx, state)
}

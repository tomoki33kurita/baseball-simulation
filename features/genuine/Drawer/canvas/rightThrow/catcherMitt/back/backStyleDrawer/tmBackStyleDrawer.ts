import { GenuineState } from '@/features/genuine/types'
import { bindingOfTMBackStyle, edgeOfCommon } from '../edge'
import { otherThanThumbFingerOfTMBackStyle } from '../littleRingFinger'
import { thumbFingerOfTMBackStyle } from '../thumbFinger'
import { tmBackTypeDrawer } from './tmBackTypeDrawr'
import { verticalKnotForCatcher } from '@/util/canvas/lace/webKnots'
import { fingerGuardDrawer } from '../fingerGuardDrawer'

export const tmBackStyleDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const isTMBack = state.backStyle.value === 'tmBack'
  const isUnselectedBackStyle = state.backStyle.value === 'unselected'
  const isDefaultTMBack = isUnselectedBackStyle && state.baseModel.productNumber === 'TM-411'
  if (!isTMBack && !isDefaultTMBack) return
  otherThanThumbFingerOfTMBackStyle(ctx, state.indexMiddleRingLittle.color, state.stitch.color) // 小指側の指袋
  thumbFingerOfTMBackStyle(ctx, state?.thumb.color, state.stitch.color) // 親指側の指袋
  edgeOfCommon(ctx, state.binding.color) // ヘリ革
  tmBackTypeDrawer(ctx, state) // ベルトタイプ別の描画
  bindingOfTMBackStyle(ctx, state.binding.color, state.stitch.color) // 手入れ口部分
  verticalKnotForCatcher(ctx, state.lace.color, 345, 160, 1) // ベルト結び目
  fingerGuardDrawer(ctx, state) // 指カバー・指当て
}

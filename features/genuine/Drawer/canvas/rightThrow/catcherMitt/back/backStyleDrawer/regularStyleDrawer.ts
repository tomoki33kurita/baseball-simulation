import { edgeOfCommon, edgeOfRegularBackStyle } from '../edge'
import { weltingOfMiddleFingerRegularBackStyle } from '../welting'
import { indexFingerTipOutDrawer } from '../indexFingerTipOut'
import { littleFingerOfRegularBackStyle } from '../littleFinger'
import { regularBackStyleWristBelt } from '../regularBackWristBelt'
import { ringRightMiddleLeftFingerOfRegularBackStyle } from '../ringMiddleFinger'
import { thumbFingerOfRegularBackStyle } from '../thumbFinger'
import { GenuineState } from '@/features/genuine/types'
import { fingerGuardDrawer } from '../fingerGuardDrawer'

export const regularStyleDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const isRegularBack = state.backStyle.value === 'regular'
  // [state.backStyle?.value].includes('regularBackStyle') ||
  // (state.baseModel.backStyle === 'regularBackStyle' && state.backStyle.value === 'unselected')
  if (!isRegularBack) return
  // 親指
  // 人差指
  // 中指右
  thumbFingerOfRegularBackStyle(ctx, state.thumbIndexMiddleRight.color, state.stitch.color)
  // 中指左
  // 薬指
  ringRightMiddleLeftFingerOfRegularBackStyle(ctx, state.middleLeftRing.color, state.stitch.color)
  // 小指袋
  littleFingerOfRegularBackStyle(ctx, state.littleOut.color, state.stitch.color)
  // ハミダシ
  weltingOfMiddleFingerRegularBackStyle(ctx, state.welting)
  // ヘリ革
  edgeOfCommon(ctx, state.binding.color)
  edgeOfRegularBackStyle(ctx, state.binding.color, state.fingerGuard.value, state.linings.color)
  fingerGuardDrawer(ctx, state) // 指カバー・指当て
  // 人差し指の指だし周りパーツ部分
  indexFingerTipOutDrawer(ctx, state?.indexFingerTipOut.color, state.fingerGuard.value)
  // バックルベルト
  regularBackStyleWristBelt(ctx, state.listBelt.color, -70, 50)
}

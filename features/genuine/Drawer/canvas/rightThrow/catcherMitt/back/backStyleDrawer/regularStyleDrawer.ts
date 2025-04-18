import { bindingOfCommon, bindingOfRegularBackStyle } from '../edge'
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
  if (!isRegularBack) return
  // 親指
  // 人差指
  // 中指右
  thumbFingerOfRegularBackStyle(ctx, state.thumbIndexMiddleRight.color, state.stitch.color)
  // 中指左
  // 薬指
  ringRightMiddleLeftFingerOfRegularBackStyle(ctx, state.middleLeftRing.color, state.stitch.color)
  // 小指袋
  littleFingerOfRegularBackStyle(ctx, state)
  // ハミダシ
  weltingOfMiddleFingerRegularBackStyle(ctx, state.welting)
  // ヘリ革
  bindingOfCommon(ctx, state.binding.color)
  bindingOfRegularBackStyle(ctx, state.binding.color, state.fingerGuard.value, state.linings.color)
  // 人差し指の指だし周りパーツ部分
  indexFingerTipOutDrawer(ctx, state?.indexFingerTipOut.color, state.linings.color, state.fingerGuard.value)
  fingerGuardDrawer(ctx, state) // 指カバー・指当て
  // バックルベルト
  regularBackStyleWristBelt(ctx, state.listBelt.color, -70, 50)
}

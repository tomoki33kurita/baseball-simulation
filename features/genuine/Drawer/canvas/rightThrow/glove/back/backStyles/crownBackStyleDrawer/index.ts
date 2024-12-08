import { GenuineState } from '@/features/genuine/types'
import { getBackStyle } from '@/features/genuine/Components/Setters/logic'
import { thumbAndWristBelt, thumbOut } from './thumbAndWristBelt'
import { indexFingerLeft } from './indexFingerLeft'
import { middleFingerLeft, middleFingerRight } from './middleFinger'
import { ringFingerLeft, ringFingerRight } from './ringFInger'
import { littleFingerLeft, littleFingerRight } from './littleFinger'
import { wingTip } from './wingTip'
import { welting } from './welting'
import { middleFingerPad } from '../../fingerCoverOrPad/middleFIngerPad'
import { indexFingerPad } from '../../fingerCoverOrPad/indexFingerPad'
import { palm2 } from '../palm'
import { binding, bindingOfWrist } from './binding'

// 王冠モデル
export const crownBackStyleDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const { isCrownBackStyle } = getBackStyle(state)
  if (!isCrownBackStyle) return

  const isIndexFingerPad = ['indexPad'].includes(state.fingerGuard.value)
  const isMiddleFingerPad = ['middlePad'].includes(state.fingerGuard.value)

  thumbAndWristBelt(ctx, state.thumbWeb.color, state.stitch.color) // 親指指袋_手口ベルト(下地)
  thumbOut(ctx, state.thumbOut.color) // 親指＿外
  // wristBelt(ctx, state.listBelt.color, state.stitch.color)
  indexFingerLeft(ctx, state.indexLeftMiddleRight.color) // 人差し指＿左
  middleFingerRight(ctx, state.indexLeftMiddleRight.color) // 中指＿右
  middleFingerLeft(ctx, state.middleLeftRingRight.color) // 中指＿左

  ringFingerRight(ctx, state.middleLeftRingRight.color) // 薬指＿右
  ringFingerLeft(ctx, state.ringLeftLittleRight.color) // 薬指＿左
  littleFingerRight(ctx, state.ringLeftLittleRight.color) // 小指＿右
  littleFingerLeft(ctx, state.littleOut.color) // 小指＿左
  wingTip(ctx, state.indexWeb.color)
  welting(ctx, state.welting.color)
  isMiddleFingerPad && middleFingerPad(ctx, state.fingerGuardColor.color, state.stitch.color, -165, 90, -15) // 指当て
  isIndexFingerPad && indexFingerPad(ctx, state.fingerGuardColor.color, state.stitch.color)
  palm2(ctx, state.palm.color, state.stitch.color) // 捕球面 / ウェブ下折り返し
  binding(ctx, state.binding.color, state.stitch.color)
  bindingOfWrist(ctx, state.binding.color, state.stitch.color)
}

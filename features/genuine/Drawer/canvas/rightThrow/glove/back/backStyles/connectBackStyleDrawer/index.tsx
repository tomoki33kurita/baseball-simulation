import { GenuineState } from '@/features/genuine/types'
import { thumbAndWristBelt, thumbOut } from '../../thumbAndWristBelt'
import { indexFingerLeft, indexFingerRight } from '../../indexFinger'
import { middleFingerLeft, middleFingerRight } from '../../middleFinger'
import { ringFingerLeft, ringFingerRight } from '../../ringFinger'
import { littleFingerLeft, littleFingerRight } from '../../littleFinger'
import { weltingOfNormal } from '../../welting/normal'
import { palm } from '../../catchFace'
import { bindingOfBeltBackStyle } from '../../edge/edgeOfBeltBackStyle'
import { bindingOfWrist } from '../crownBackStyleDrawer/binding'
import { indexFingerPad } from '../../fingerCoverOrPad/indexFingerPad'
import { middleFingerPad } from '../../fingerCoverOrPad/middleFIngerPad'
import { fingerCrotch } from '../../fingerCrotch'

export const connectBackStyleDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState, needPalmWrap: boolean): void => {
  if (state.backStyle.value !== 'connect') return
  const isIndexFingerPad = ['indexPad'].includes(state.fingerGuard.value)
  const isMiddleFingerPad = ['middlePad'].includes(state.fingerGuard.value)
  const stitchColor = state.stitch.color

  thumbAndWristBelt(ctx, state.thumbWeb.color, stitchColor)
  thumbOut(ctx, state.thumbOut.color) // 親指＿外
  indexFingerRight(ctx, state.indexWeb.color) // 人差し指＿右
  indexFingerLeft(ctx, state.indexMiddle.color) // 人差し指＿左
  middleFingerRight(ctx, state.middleIndex.color) // 中指＿右
  middleFingerLeft(ctx, state.middleRing.color) // 中指＿左
  ringFingerRight(ctx, state.ringMiddle.color) // 薬指＿右
  ringFingerLeft(ctx, state.ringLittle.color) // 薬指＿左
  littleFingerRight(ctx, state.littleRing.color) // 小指＿右
  littleFingerLeft(ctx, state.littleOut.color) // 小指＿左
  weltingOfNormal(ctx, state.welting.color) // ハミダシ
  palm(ctx, state.palm.color, stitchColor, needPalmWrap) // 捕球面 / ウェブ下折り返し
  bindingOfBeltBackStyle(ctx, state.binding.color, stitchColor) // ヘリ革
  bindingOfWrist(ctx, state.binding.color, stitchColor)
  isIndexFingerPad && indexFingerPad(ctx, state.fingerGuardColor.color, stitchColor) // 指当て(人指し指)
  isMiddleFingerPad && middleFingerPad(ctx, state.fingerGuardColor.color, stitchColor, -165, 90, -15) // 指当て(中指)
  fingerCrotch(ctx, state.palm.color, state.welting.color, state.baseModel.isFingerCrotch) // 指股
}

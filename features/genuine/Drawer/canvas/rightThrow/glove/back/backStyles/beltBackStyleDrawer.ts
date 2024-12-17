import { indexFingerLeft, indexFingerRight } from '../indexFinger'
import { littleFingerLeft, littleFingerRight } from '../littleFinger'
import { thumbAndWristBelt, thumbOut } from '../thumb'
import { indexFingerPad } from '../fingerCoverOrPad/indexFingerPad'
import { fingerCrotch } from '../fingerCrotch'
import { palm } from '../catchFace'
import { bindingOfBeltBackStyle } from '../edge/edgeOfBeltBackStyle'
import { bindingOfWrist } from '../edge/edgeOfWrist'
import { middleFingerPad } from '../fingerCoverOrPad/middleFIngerPad'
import { middleFingerLeft, middleFingerRight } from '../middleFinger'
import { ringFingerIntegrated, ringFingerLeft, ringFingerRight } from '../ringFinger'
import { weltingOfNormal } from '../welting/normal'
import { GenuineState } from '@/features/genuine/types'
import { getBackStyle } from '@/features/genuine/Components/Setters/logic'
import { genuineEmbroideryForRingFinger } from '../../front/engraving'

// ※オーダータイプ：basicの場合はこの関数は呼ばれない想定
export const beltBackStyleDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState, needPalmWrap: boolean): void => {
  const { isFirstBackStyle, isCrownBackStyle, isConnectBackStyle } = getBackStyle(state)
  if (isFirstBackStyle || isCrownBackStyle || isConnectBackStyle) return
  const isIndexFingerPad = ['indexPad'].includes(state.fingerGuard.value)
  const isMiddleFingerPad = ['middlePad'].includes(state.fingerGuard.value)
  const stitchColor = state.stitch.color
  const isIntegratedRing = state.leatherIntegratedRing.value === 'atRingFinger'

  thumbAndWristBelt(ctx, state.thumbWeb.color, stitchColor)
  thumbOut(ctx, state.thumbOut.color) // 親指＿外
  indexFingerRight(ctx, state.indexWeb.color) // 人差し指＿右
  indexFingerLeft(ctx, state.indexMiddle.color) // 人差し指＿左
  middleFingerRight(ctx, state.middleIndex.color) // 中指＿右
  middleFingerLeft(ctx, state.middleRing.color) // 中指＿左
  if (isIntegratedRing) {
    ringFingerIntegrated(ctx, state.ringMiddle.color) // 薬指＿統合
    genuineEmbroideryForRingFinger(ctx, state.ringMiddle, false, 0, 0)
  } else {
    ringFingerRight(ctx, state.ringMiddle.color) // 薬指＿右
    ringFingerLeft(ctx, state.ringLittle.color) // 薬指＿左
  }
  littleFingerRight(ctx, state.littleRing.color) // 小指＿右
  littleFingerLeft(ctx, state.littleOut.color) // 小指＿左
  weltingOfNormal(ctx, state.welting.color, isIntegratedRing, state.ringMiddle.color) // ハミダシ
  palm(ctx, state.palm.color, stitchColor, needPalmWrap) // 捕球面 / ウェブ下折り返し
  bindingOfBeltBackStyle(ctx, state.binding.color, stitchColor) // ヘリ革
  bindingOfWrist(ctx, state.binding.color, stitchColor)
  isIndexFingerPad && indexFingerPad(ctx, state.fingerGuardColor.color, stitchColor) // 指当て(人指し指)
  isMiddleFingerPad && middleFingerPad(ctx, state.fingerGuardColor.color, stitchColor, -165, 90, -15) // 指当て(中指)
  fingerCrotch(ctx, state.palm.color, state.welting.color, state.baseModel.isFingerCrotch) // 指股
}

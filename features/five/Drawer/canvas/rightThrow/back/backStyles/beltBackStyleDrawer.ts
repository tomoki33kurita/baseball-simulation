import { indexFingerLeft, indexFingerRight } from '../indexFinger'
import { littleFingerLeft, littleFingerRight } from '../littleFinger'
import { thumbAndListBelt, thumbOut } from '../thumbAndListBelt'
import { indexFingerPad } from '../fingerCoverOrPad/indexFingerPad'
import { fingerCrotch } from '../fingerCrotch'
import { palm } from '../catchFace'
import { bindingOfBeltBackStyle } from '../edge/edgeOfBeltBackstyle'
import { bindingOfWrist } from '../edge/edgeOfWrist'
import { middleFingerPad } from '../fingerCoverOrPad/middleFIngerPad'
import { FiveState } from '@/features/five/types'
import { middleFingerLeft, middleFingerRight } from '../middleFinger'
import { ringFingerLeft, ringFingerRight } from '../ringFinger'
import { weltingOfNormal } from '../welting/normal'
import { getOrderType } from '@/features/five/Components/Setters/logic'

// 通常ベルトモデル
export const beltBackStyleDrawer = (ctx: CanvasRenderingContext2D, state: FiveState, needPalmWrap: boolean): void => {
  const { isBasicOrder, isBasicWithEmbroideryOrder } = getOrderType(state.orderType)
  if (isBasicOrder || isBasicWithEmbroideryOrder) return

  const isIndexFingerPad = ['indexPad'].includes(state.fingerGuard.value)
  const isMiddleFingerPad = ['middlePad'].includes(state.fingerGuard.value)
  const stitchColor = state.stitch.color

  thumbAndListBelt(ctx, '#2e4732', stitchColor)
  thumbAndListBelt(ctx, state.thumbWeb.color, stitchColor)
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

export const beltBackStyleDrawerForBasic = (ctx: CanvasRenderingContext2D, state: FiveState, needPalmWrap: boolean): void => {
  const isIndexFingerPad = ['indexPad'].includes(state.fingerGuard.value)
  const isMiddleFingerPad = ['middlePad'].includes(state.fingerGuard.value)
  const basicColor = state.baseModel.basicColors.leather.color
  const basicStitchColor = state.baseModel.basicColors.stitch.color
  const basicBindingColor = state.baseModel.basicColors.binding.color
  const basicWeltingColor = state.baseModel.basicColors.welting.color

  thumbAndListBelt(ctx, '#2e4732', basicStitchColor)
  thumbAndListBelt(ctx, basicColor, basicStitchColor)
  thumbOut(ctx, basicColor) // 親指＿外
  indexFingerRight(ctx, basicColor) // 人差し指＿右
  indexFingerLeft(ctx, basicColor) // 人差し指＿左
  middleFingerRight(ctx, basicColor) // 中指＿右
  middleFingerLeft(ctx, basicColor) // 中指＿左
  ringFingerRight(ctx, basicColor) // 薬指＿右
  ringFingerLeft(ctx, basicColor) // 薬指＿左
  littleFingerRight(ctx, basicColor) // 小指＿右
  littleFingerLeft(ctx, basicColor) // 小指＿左
  weltingOfNormal(ctx, basicWeltingColor) // ハミダシ
  palm(ctx, basicColor, basicStitchColor, needPalmWrap) // 捕球面 / ウェブ下折り返し
  bindingOfBeltBackStyle(ctx, basicBindingColor, basicStitchColor) // ヘリ革
  bindingOfWrist(ctx, basicBindingColor, basicStitchColor) // ヘリ革
  isIndexFingerPad && indexFingerPad(ctx, basicColor, basicStitchColor) // 指当て(人指し指)
  isMiddleFingerPad && middleFingerPad(ctx, basicColor, basicStitchColor, -165, 90, -15) // 指当て(中指)
  fingerCrotch(ctx, basicColor, state.baseModel.basicColors.welting.color, state.baseModel.isFingerCrotch) // 指股
}

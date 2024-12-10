import { GenuineState } from '@/features/genuine/types'
import { thumbForConnectBack, thumbOut } from '../../thumb'
import { indexFingerLeft, indexFingerRight } from '../../indexFinger'
import { middleFingerLeft, middleFingerRight } from '../../middleFinger'
import { ringFingerIntegrated, ringFingerLeft, ringFingerRight } from '../../ringFinger'
import { littleFingerLeft, littleFingerLeftForConnectBack, littleFingerRightForConnectBack } from '../../littleFinger'
import { weltingOfNormal } from '../../welting/normal'
import { palm } from '../../catchFace'
import { bindingOfWrist } from '../crownBackStyleDrawer/binding'
import { indexFingerPad } from '../../fingerCoverOrPad/indexFingerPad'
import { middleFingerPad } from '../../fingerCoverOrPad/middleFIngerPad'
import { fingerCrotch } from '../../fingerCrotch'
import { bindingOfConnectBackStyle } from '../../edge/edgeOfConnectBackStyle'
import { weltingForConnectBack } from '../../welting/connect'
import { crossLaceForBackOfHand1, crossLaceForBackOfHand2, crossLaceForThumb } from '../crownBackStyleDrawer/connectLace'

const connectBackBandParts = (ctx: CanvasRenderingContext2D, color: string, stitchColor: string): void => {
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(247, 486) // 左上
  ctx.quadraticCurveTo(295, 405, 318, 396) // 右上_1
  ctx.quadraticCurveTo(328, 391, 333, 402) // 右上_2（薬指＿下）
  ctx.quadraticCurveTo(340, 426, 381, 438)
  ctx.quadraticCurveTo(426, 446, 494, 443) // 右上_(親指_左上)
  ctx.quadraticCurveTo(446, 520, 522, 590) // 右下_ (親指_左下)
  ctx.quadraticCurveTo(428, 599, 342, 590) // 手口＿左下
  ctx.quadraticCurveTo(300, 542, 247, 486)
  // ctx.quadraticCurveTo(276, 537, 247, 486)
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(259, 490) //
  ctx.quadraticCurveTo(273, 440, 318, 408)
  ctx.quadraticCurveTo(325, 394, 328, 412)
  ctx.quadraticCurveTo(336, 432, 369, 445)
  ctx.quadraticCurveTo(417, 458, 481, 450)
  // ctx.quadraticCurveTo()
  // ctx.moveTo(340, 587) // 手口＿左
  // ctx.quadraticCurveTo(430, 598, 529, 585) // 手口＿右
  // ステッチここまで

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
}

export const connectBackStyleDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState, needPalmWrap: boolean): void => {
  if (state.backStyle.value !== 'connect') return
  const isIndexFingerPad = ['indexPad'].includes(state.fingerGuard.value)
  const isMiddleFingerPad = ['middlePad'].includes(state.fingerGuard.value)
  const isIntegratedRing = state.leatherIntegratedRing.value === 'atRingFinger'

  const stitchColor = state.stitch.color

  thumbForConnectBack(ctx, state.thumbWeb.color, stitchColor)
  thumbOut(ctx, state.thumbOut.color) // 親指＿外
  indexFingerRight(ctx, state.indexWeb.color) // 人差し指＿右
  indexFingerLeft(ctx, state.indexMiddle.color) // 人差し指＿左
  middleFingerRight(ctx, state.middleIndex.color) // 中指＿右
  middleFingerLeft(ctx, state.middleRing.color) // 中指＿左
  if (isIntegratedRing) {
    ringFingerIntegrated(ctx, state.ringMiddle.color) // 薬指＿右
  } else {
    ringFingerRight(ctx, state.ringMiddle.color) // 薬指＿右
    ringFingerLeft(ctx, state.ringLittle.color) // 薬指＿左
  }
  littleFingerRightForConnectBack(ctx, state.littleRing.color) // 小指＿右
  littleFingerLeftForConnectBack(ctx, state.littleOut.color) // 小指＿左
  weltingForConnectBack(ctx, state.welting.color, isIntegratedRing) // ハミダシ
  palm(ctx, state.palm.color, stitchColor, needPalmWrap) // 捕球面 / ウェブ下折り返し
  fingerCrotch(ctx, state.palm.color, state.welting.color, state.baseModel.isFingerCrotch) // 指股
  connectBackBandParts(ctx, state.listBelt.color, stitchColor) // バンドパーツ
  bindingOfConnectBackStyle(ctx, state.binding.color, stitchColor) // ヘリ革
  bindingOfWrist(ctx, state.binding.color, stitchColor)
  crossLaceForBackOfHand1(ctx, state.lace.color, 0, 0) // クロスレース
  crossLaceForBackOfHand2(ctx, state.lace.color, 45, -60) // クロスレース
  crossLaceForThumb(ctx, state.lace.color, 370, -130, 20) // クロスレース
  isIndexFingerPad && indexFingerPad(ctx, state.fingerGuardColor.color, stitchColor) // 指当て(人指し指)
  isMiddleFingerPad && middleFingerPad(ctx, state.fingerGuardColor.color, stitchColor, -165, 90, -15) // 指当て(中指)
}

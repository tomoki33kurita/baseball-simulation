import { GenuineState } from '@/features/genuine/types'
import { hamidashiOfWingTip } from '../hamidashi/wingTip'
import { wingTipBackStyle } from '../wingTipBackStyle'
import { middleFingerLeft, middleFingerRight } from 'src/features/brands/atoms/canvas/rightThrow/glove/back/middleFinger'
import { ringFingerLeft, ringFingerRight } from 'src/features/brands/atoms/canvas/rightThrow/glove/back/ringFinger'
import { indexFingerLeft } from '../indexFinger'
import { littleFingerLeft, littleFingerRight } from '../littleFinger'
import { thumbAndListBelt, thumbOut } from '../thumbAndListBelt'
import { listBelt } from '../listBelt'
import { indexFingerPad } from '../fingerCoverOrPad/indexFingerPad'
import { catchFace2 } from '../catchFace2'
import { edgeOfBeltBackStyle } from '../edge/edgeOfBeltBackstyle'
import { edgeOfWrist } from '../edge/edgeOfWrist'
import { middleFingerPad } from '../fingerCoverOrPad/middleFIngerPad'
import { getBackStyle } from '@/features/genuine/Components/Setters/logic'

// 王冠モデル
export const crownBackStyleDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState, needCatchFaceWrap: boolean): void => {
  const { isCrownBackStyle } = getBackStyle(state)
  if (!isCrownBackStyle) return

  const isIndexFingerPad = ['indexPad'].includes(state.fingerGuard.value)
  const isMiddleFingerPad = ['middlePad'].includes(state.fingerGuard.value)

  thumbAndListBelt(ctx, state.thumbWeb.color, state.stitch.color) // 親指指袋_手口ベルト(下地)
  thumbOut(ctx, state.thumbOut.color) // 親指＿外
  listBelt(ctx, state.listBelt.color, state.stitch.color)
  indexFingerLeft(ctx, state.indexLeftMiddleRight.color) // 人差し指＿左
  middleFingerRight(ctx, state.indexLeftMiddleRight.color) // 中指＿右
  middleFingerLeft(ctx, state.middleLeftRingRight.color) // 中指＿左
  ringFingerRight(ctx, state.middleLeftRingRight.color) // 薬指＿右
  ringFingerLeft(ctx, state.ringLeftLittleRight.color) // 薬指＿左
  littleFingerRight(ctx, state.ringLeftLittleRight.color) // 小指＿右
  littleFingerLeft(ctx, state.littleOut.color) // 小指＿左
  wingTipBackStyle(ctx, state.indexWeb.color)
  hamidashiOfWingTip(ctx, state.welting.color)
  isMiddleFingerPad && middleFingerPad(ctx, state.fingerGuardColor.color, state.stitch.color, -165, 90, -15) // 指当て
  isIndexFingerPad && indexFingerPad(ctx, state.fingerGuardColor.color, state.stitch.color)
  catchFace2(ctx, state.palm.color, state.stitch.color, needCatchFaceWrap) // 捕球面 / ウェブ下折り返し
  edgeOfBeltBackStyle(ctx, state.binding.color, state.stitch.color)
  edgeOfWrist(ctx, state.binding.color, state.stitch.color) // 親指への刺繍
}

import { GenuineState } from '@/features/genuine/types'
import { bindingOfBeltBackStyle } from '../../edge'
import { verticalKnotForCatcher } from '@/util/canvas/lace/webKnots'
import { listCross } from '../../lace/listCross'
import { littleRingFingerOfASBackStyle, littleRingMergedFingerOfBeltBackStyle, otherThanThumbFingerOfTMBackStyle } from '../../littleRingFinger'
import { indexForASBackStyle } from '../../indexFinger'
import { thumbFingerOfBeltBackStyle, thumbFingerOfTMBackStyle } from '../../thumbFinger'
import { fingerGuardDrawer } from '../../fingerGuardDrawer'

const beltBand = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.fillStyle = leatherColor
  ctx.beginPath()
  ctx.moveTo(264, 536) //左上
  ctx.quadraticCurveTo(275, 617, 255, 622) // 左下
  ctx.quadraticCurveTo(385, 675, 446, 612) // 右下
  ctx.quadraticCurveTo(463, 593, 476, 582)
  ctx.quadraticCurveTo(494, 535, 467, 514) // 右上
  ctx.quadraticCurveTo(398, 537, 398, 537)
  ctx.quadraticCurveTo(264, 536, 264, 536)
  ctx.closePath()
  ctx.fill()
  ctx.stroke()

  // ベルト左
  ctx.beginPath()
  ctx.lineWidth = 1.4
  ctx.fillStyle = '#fff'
  ctx.moveTo(301, 564)
  ctx.arc(301, 564, 4, 0, 2 * Math.PI)
  ctx.moveTo(297, 610)
  ctx.arc(297, 610, 4, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // stitch
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.beginPath()
  // 外側
  ctx.moveTo(465, 518) //
  ctx.quadraticCurveTo(490, 537, 471, 586)
  // 内側
  ctx.moveTo(462, 521) //
  ctx.quadraticCurveTo(486, 537, 466, 590)

  // 手口部分
  ctx.moveTo(267, 626) // 左
  ctx.quadraticCurveTo(305, 638, 345, 639) //
  ctx.quadraticCurveTo(423, 642, 445, 610) //

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}

export const asBackTypeDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const isASBack = ['asBack'].includes(state.backStyle.value)

  if (!isASBack) return

  const stitchColor = state.stitch.color
  thumbFingerOfBeltBackStyle(ctx, state.thumb.color, stitchColor) // 親指側の指袋
  indexForASBackStyle(ctx, state) // 小指側の指袋
  littleRingFingerOfASBackStyle(ctx, state) // 親指以外の指袋

  beltBand(ctx, state.listBelt.color, stitchColor) // バンド
  bindingOfBeltBackStyle(ctx, state.binding.color, stitchColor)
  listCross(ctx, state.lace.color)
  verticalKnotForCatcher(ctx, state.lace.color, 105, 185, 1) // ベルト結び目
  fingerGuardDrawer(ctx, state) // 指カバー・指当て
}

import { GenuineState } from '@/features/genuine/types'
import { bindingOfBeltBackStyle } from '../../edge'
import { verticalKnotForCatcher } from '@/util/canvas/lace/webKnots'
import { listCross } from '../../lace/listCross'
import { ColorItem } from '@/types'

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
  ctx.strokeStyle = '#282828'
}

const weltingOfMiddleFingerBeltBackStyle = (ctx: CanvasRenderingContext2D, hamidashi: ColorItem): void => {
  if (hamidashi?.value === 'none') return
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = hamidashi.color

  // 中指袋
  ctx.beginPath()
  ctx.moveTo(274, 118) // 左上
  ctx.quadraticCurveTo(233, 280, 285, 444) // 左下
  ctx.quadraticCurveTo(289, 444, 289, 444) // 右下
  ctx.quadraticCurveTo(238, 280, 278, 117) // 右上
  ctx.quadraticCurveTo(272, 118, 272, 118) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const beltTypeDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const stitchColor = state.stitch.color
  beltBand(ctx, state.listBelt.color, stitchColor) // バンド
  weltingOfMiddleFingerBeltBackStyle(ctx, state.welting) // ベルトスタイルのハミダシ
  bindingOfBeltBackStyle(ctx, state.binding.color, stitchColor)
  listCross(ctx, state.lace.color)
  verticalKnotForCatcher(ctx, state.lace.color, 105, 185, 1) // ベルト結び目
}

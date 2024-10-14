import { webKnots } from '@/util/canvas/lace/webKnots'
import { middleSidePartOfWeb, topSidePartOfWeb } from './parts/sideParts'

export const ou03Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColor

  // 横上パーツ
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
  // 横下パーツ
  middleSidePartOfWeb(ctx, webColor, laceColor, stitchColor, -10, 20, 1, 1)
  // 捕球面＿折り返し上パーツ
  onCatchFaceParts(ctx, webColor, stitchColor)
  // 縦パーツ
  verticalPartOfFenceWeb(ctx, webColor, laceColor, stitchColor)
  // 捕球面上のウェブ結び目
  webKnots(ctx, laceColor, -120, 120)
}

// 縦パーツ
const verticalPartOfFenceWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.fillStyle = webColor
  // 縦パーツ_左
  ctx.beginPath()
  ctx.moveTo(606, 93) //左上
  ctx.quadraticCurveTo(483, 289, 483, 289) //左下
  ctx.quadraticCurveTo(506, 320, 506, 320) //右下
  ctx.quadraticCurveTo(637, 127, 637, 127) //右上
  ctx.quadraticCurveTo(614, 100, 606, 93) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 縦パーツ_右
  ctx.beginPath()
  ctx.moveTo(665, 170) //左上
  ctx.quadraticCurveTo(525, 341, 525, 341) //左下
  ctx.quadraticCurveTo(549, 367, 549, 367) //右下
  ctx.quadraticCurveTo(684, 207, 684, 207) //右上
  ctx.quadraticCurveTo(681, 195, 665, 170) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])

  // 縦向き＿左
  // 左
  ctx.moveTo(608, 98) // 上
  ctx.quadraticCurveTo(486, 288, 488, 288) // 下
  // 右
  ctx.moveTo(634, 125) // 上
  ctx.quadraticCurveTo(505, 313, 505, 315) // 下
  // 縦向き＿左
  // 左
  ctx.moveTo(665, 175) // 上
  ctx.quadraticCurveTo(531, 340, 531, 340) // 下
  // 右
  ctx.moveTo(681, 205) // 上
  ctx.quadraticCurveTo(549, 361, 549, 361) // 下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
}

const onCatchFaceParts = (ctx: CanvasRenderingContext2D, webColor: string, stitchColor: string) => {
  ctx.fillStyle = webColor
  ctx.strokeStyle = '#383838'
  ctx.beginPath()
  ctx.moveTo(482, 260) //左上
  ctx.quadraticCurveTo(466, 269, 460, 293) //左下
  ctx.quadraticCurveTo(463, 324, 485, 352) //中央下
  ctx.quadraticCurveTo(515, 380, 549, 386) //右下
  ctx.quadraticCurveTo(565, 377, 572, 362) //右上
  ctx.quadraticCurveTo(482, 260, 482, 260) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  ctx.moveTo(471, 274) // 左上
  ctx.quadraticCurveTo(462, 293, 464, 293) // 左下
  ctx.quadraticCurveTo(466, 321, 488, 349) // 中央下
  ctx.quadraticCurveTo(516, 376, 549, 383) // 右下
  ctx.quadraticCurveTo(557, 375, 557, 375) // 右上
  ctx.quadraticCurveTo(505, 333, 471, 274) // 左上
  ctx.moveTo(470, 279) // 左上
  ctx.quadraticCurveTo(505, 336, 557, 380) // 左下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = '#383838'
  ctx.closePath()
  // stitchここまで
}

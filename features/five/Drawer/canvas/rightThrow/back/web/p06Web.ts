import { webKnots } from '@/app/util/canvas/lace/webKnots'
import { topSidePartOfWebForPitcher } from './parts/sideParts'
import { jointOfCatchFace, jointOfIndexFinger, jointOfThumbFinger2 } from './parts/earJointParts'

export const p06Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  // web先端の革パーツ
  topSidePartOfWebForPitcher(ctx, webColor, laceColor, stitchColor)
  // ウェブ-人差し指のジョイントパーツ
  jointOfIndexFinger(ctx, webColor, laceColor, 3, 30)
  jointOfIndexFinger(ctx, webColor, laceColor, -24, 90)
  jointOfIndexFinger(ctx, webColor, laceColor, -45, 160)
  jointOfCatchFace(ctx, webColor, laceColor, -10, 12)
  jointOfCatchFace(ctx, webColor, laceColor, 38, 57)
  jointOfThumbFinger2(ctx, webColor, laceColor, 53, -56)
  jointOfThumbFinger2(ctx, webColor, laceColor, 19, -30)
  jointOfThumbFinger2(ctx, webColor, laceColor, -18, -5)
  // web本体のflatパーツ
  ctx.fillStyle = webColor
  ctx.beginPath()
  ctx.moveTo(549, 81) // 左上
  ctx.quadraticCurveTo(502, 166, 482, 247) // 左下1
  ctx.quadraticCurveTo(480, 256, 486, 268) // 左下2
  ctx.quadraticCurveTo(516, 326, 565, 357) // 右下1
  ctx.quadraticCurveTo(571, 362, 582, 362) // 右下2
  ctx.quadraticCurveTo(637, 324, 693, 280) // 右上
  ctx.quadraticCurveTo(660, 140, 549, 81) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // DEV
  // DEV
  // DEV
  ctx.strokeStyle = 'red'
  ctx.beginPath()
  // // 縦
  // ctx.moveTo(647, 170) // 上
  // ctx.quadraticCurveTo(518, 313, 518, 313) // 下
  // // 横
  // ctx.moveTo(512, 158)
  // ctx.quadraticCurveTo(601, 217, 630, 322)
  ctx.stroke()
  ctx.closePath()

  ctx.strokeStyle = 'blue'
  ctx.lineWidth = 3
  ctx.beginPath()

  // ctx.moveTo() // 上
  // ctx.lineTo() // 下

  ctx.stroke()
  ctx.closePath()
  ctx.lineWidth = 0.8
  // DEV
  // DEV
  // DEV

  // stitchここから
  ctx.beginPath()
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 外側_外
  ctx.moveTo(552, 87) // 左上
  ctx.quadraticCurveTo(508, 166, 486, 252) // 左下
  ctx.quadraticCurveTo(505, 318, 581, 358) // 右下
  ctx.quadraticCurveTo(630, 326, 689, 277) //
  // 外側_内
  ctx.moveTo(555, 87) // 左上
  ctx.quadraticCurveTo(511, 166, 489, 252) // 左下
  ctx.quadraticCurveTo(505, 313, 581, 353) // 右下
  ctx.quadraticCurveTo(627, 323, 686, 277) //

  // 雷デザイン_ 外側
  ctx.moveTo(623, 140) // 左上
  ctx.lineTo(511, 211) // 左下
  ctx.lineTo(567, 246) // 中央
  ctx.lineTo(503, 275) // 左下下
  ctx.lineTo(643, 278) // 右中央
  ctx.lineTo(544, 208) // 左下_内側
  ctx.lineTo(600, 194) // 中央右上
  ctx.lineTo(669, 250) // 右上_右上
  ctx.lineTo(630, 190) // 右上_左下
  ctx.lineTo(658, 190) // 右上_上
  // 雷デザイン_内側
  ctx.lineTo(656, 187) // 右上_上
  ctx.lineTo(623, 187) // 右上_左下
  ctx.lineTo(650, 228) // 右上_右上
  ctx.lineTo(603, 191) // 中央右上
  ctx.lineTo(537, 206) // 左下_内側
  ctx.lineTo(629, 273) // 右中央
  ctx.lineTo(516, 271) // 左下下
  ctx.lineTo(574, 249) // 中央
  ctx.lineTo(522, 209) // 左下
  ctx.lineTo(626, 143) // 左上
  // ctx.lineTo()

  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()

  // 右下のデザイン
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = '#eeeeee'
  ctx.lineWidth = 2.0
  ctx.beginPath()
  ctx.arc(632, 300, 3, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.arc(606, 295, 3, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.arc(592, 295, 3, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.arc(588, 301, 3, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.arc(599, 312, 3, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.arc(590, 320, 3, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.arc(576, 316, 3, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.arc(553, 308, 3, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.arc(540, 304, 3, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.arc(518, 293, 3, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // stitchここまで
  webKnots(ctx, laceColor, -110, 110, 1) // ウェブ先端寄りのウェブ結び目
}

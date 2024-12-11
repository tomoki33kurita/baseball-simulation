import { webKnots } from '@/util/canvas/lace/webKnots'
import { middleSidePartOfWeb2, topSidePartOfWeb2 } from './parts/sideParts'
import { webToCatchFaceConnect } from '../lace/webToCatchFaceConnect'

export const onePeaceWeb = (ctx: CanvasRenderingContext2D, webColor: string, web2Color: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  // 横上パーツ
  topSidePartOfWeb2(ctx, webColor, laceColor, stitchColor)
  // 横下パーツ
  middleSidePartOfWeb2(ctx, webColor, laceColor, stitchColor, -10, 10, 1, 1)
  // 縦パーツ
  ctx.fillStyle = web2Color
  ctx.beginPath()
  ctx.moveTo(627, 117) //左上
  ctx.quadraticCurveTo(607, 176, 571, 220) //左下
  ctx.quadraticCurveTo(591, 240, 607, 280) //右下
  ctx.quadraticCurveTo(658, 233, 672, 184) //右上
  ctx.quadraticCurveTo(650, 141, 627, 115) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // // 縦向き＿左＿外側
  ctx.moveTo(629, 123) // 上
  ctx.quadraticCurveTo(611, 177, 576, 220) // 下
  // // 縦向き＿左＿内側
  ctx.moveTo(632, 127) // 上
  ctx.quadraticCurveTo(615, 179, 579, 224) // 下
  // // 縦向き＿右＿内側
  ctx.moveTo(665, 178) // 上
  ctx.quadraticCurveTo(641, 239, 605, 267) // 下
  // // 縦向き＿右＿外側
  ctx.moveTo(668, 183) // 上
  ctx.quadraticCurveTo(647, 239, 607, 272) // 下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  ctx.fillStyle = webColor
  // stitchここまで

  // laceここから
  webToCatchFaceConnect(ctx, laceColor, -35, 15)
  webKnots(ctx, laceColor, 20, -45) // ウェブ先端寄りのウェブ結び目
  webKnots(ctx, laceColor, -25, 25) // 捕球面寄りのウェブ結び目
}

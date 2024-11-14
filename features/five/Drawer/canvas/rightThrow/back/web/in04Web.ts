import { webKnots } from '@/util/canvas/lace/webKnots'
import { webToCatchFaceConnect } from '../lace/webToCatchFaceConnect'
import { middleSidePartOfWeb2, topSidePartOfWeb2 } from './parts/sideParts'

export const in04Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  // 横上パーツ
  topSidePartOfWeb2(ctx, webColor, laceColor, stitchColor)
  // 横下パーツ
  middleSidePartOfWeb2(ctx, webColor, laceColor, stitchColor, -10, 10, 1, 1)
  // 縦パーツ

  ctx.fillStyle = webColor
  // 裏地
  ctx.beginPath()
  ctx.moveTo(612, 100) //左上
  ctx.quadraticCurveTo(571, 220, 571, 220) //左下
  ctx.quadraticCurveTo(591, 240, 604, 270) //右下
  ctx.quadraticCurveTo(686, 211, 686, 209) //右上
  ctx.quadraticCurveTo(612, 100, 612, 100) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 表地
  ctx.beginPath()
  ctx.moveTo(612, 100) //左上
  ctx.quadraticCurveTo(571, 220, 571, 220) //左下
  ctx.quadraticCurveTo(591, 240, 604, 270) //右下
  ctx.quadraticCurveTo(686, 211, 686, 209) //右上
  ctx.quadraticCurveTo(671, 173, 658, 158) //右上＿左上
  ctx.quadraticCurveTo(616, 212, 616, 212) //右上＿左下
  ctx.quadraticCurveTo(652, 149, 652, 149) //左上＿右上
  // ctx.quadraticCurveTo() //右上＿左下
  // ctx.quadraticCurveTo(655, 136, 612, 100) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 縦向き＿左＿外側
  ctx.moveTo(614, 105) // 上
  ctx.quadraticCurveTo(576, 220, 576, 220) // 下
  // 縦向き＿左＿内側
  ctx.moveTo(617, 107) // 上
  ctx.quadraticCurveTo(578, 222, 578, 222) // 下
  // 縦向き＿右＿内側
  ctx.moveTo(681, 207) // 上
  ctx.quadraticCurveTo(603, 265, 603, 265) // 下
  // 縦向き＿右＿外側
  ctx.moveTo(679, 205) // 上
  ctx.quadraticCurveTo(601, 263, 601, 263) // 下
  // 内側のV字
  ctx.moveTo(648, 148) // 上
  ctx.quadraticCurveTo(612, 218, 612, 218) // 下
  ctx.quadraticCurveTo(661, 163, 661, 163) // 上

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

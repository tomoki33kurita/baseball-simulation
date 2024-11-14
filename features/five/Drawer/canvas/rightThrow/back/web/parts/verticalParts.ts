import { allowLace2 } from '../../lace/allowCenterOfCrossWeb'

// クロスウェブ等の縦パーツ

export const verticalPartOfWeb2 = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.fillStyle = webColor
  // 縦パーツ
  ctx.beginPath()
  ctx.moveTo(630, 120) //左上
  ctx.quadraticCurveTo(587, 214, 470, 340) //左下
  ctx.quadraticCurveTo(515, 380, 515, 380) //右下
  ctx.quadraticCurveTo(658, 225, 668, 175) //右上
  ctx.quadraticCurveTo(650, 141, 630, 120) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])

  // 縦向き＿左
  ctx.moveTo(648, 142) // 上
  ctx.quadraticCurveTo(608, 193, 608, 193) //
  ctx.quadraticCurveTo(632, 194, 632, 194) //
  ctx.quadraticCurveTo(531, 298, 531, 298) //
  ctx.quadraticCurveTo(557, 297, 557, 297) //
  ctx.quadraticCurveTo(496, 344, 496, 344) //
  // ctx.quadraticCurveTo() //
  // // 縦向き＿右
  ctx.moveTo(654, 146) // 上
  ctx.quadraticCurveTo(618, 188, 618, 188) //
  ctx.quadraticCurveTo(641, 189, 641, 189) //
  ctx.quadraticCurveTo(546, 290, 546, 290) //
  ctx.quadraticCurveTo(575, 290, 575, 290) //
  ctx.quadraticCurveTo(505, 344, 505, 344) //

  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
}

export const verticalPartOfOutfielderWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.fillStyle = webColor
  // 縦パーツ
  ctx.beginPath()
  ctx.moveTo(630, 120) //左上
  ctx.quadraticCurveTo(587, 214, 487, 320) //左下
  ctx.quadraticCurveTo(479, 365, 530, 362) //右下
  ctx.quadraticCurveTo(658, 225, 668, 175) //右上
  ctx.quadraticCurveTo(650, 141, 630, 120) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])

  // 縦向き＿左
  ctx.moveTo(648, 142) // 上
  ctx.quadraticCurveTo(608, 193, 608, 193) //
  ctx.quadraticCurveTo(632, 194, 632, 194) //
  ctx.quadraticCurveTo(531, 298, 531, 298) //
  ctx.quadraticCurveTo(557, 297, 557, 297) //
  ctx.quadraticCurveTo(490, 353, 490, 353)
  // ctx.quadraticCurveTo() //
  // // 縦向き＿右
  ctx.moveTo(654, 146) // 上
  ctx.quadraticCurveTo(618, 188, 618, 188) //
  ctx.quadraticCurveTo(641, 189, 641, 189) //
  ctx.quadraticCurveTo(546, 290, 546, 290) //
  ctx.quadraticCurveTo(575, 290, 575, 290) //
  ctx.quadraticCurveTo(490, 353, 490, 353)

  ctx.moveTo(633, 127) // 上
  ctx.quadraticCurveTo(590, 222, 492, 325)
  ctx.quadraticCurveTo(484, 330, 495, 351)
  ctx.quadraticCurveTo(510, 364, 527, 358)
  ctx.quadraticCurveTo(631, 251, 666, 174)
  // ctx.quadraticCurveTo()

  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
}

export const verticalPartOfWebWithLace = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.fillStyle = webColor
  // 縦パーツ
  ctx.beginPath()
  ctx.moveTo(630, 120) //左上
  ctx.quadraticCurveTo(587, 214, 494, 311) //左下
  ctx.quadraticCurveTo(493, 353, 534, 355) //右下
  ctx.quadraticCurveTo(658, 225, 668, 175) //右上
  ctx.quadraticCurveTo(650, 141, 630, 120) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 縦向き＿左＿外側
  ctx.moveTo(632, 125) // 上
  ctx.quadraticCurveTo(597, 205, 497, 315) // 下
  // 縦向き＿左＿内側
  ctx.moveTo(635, 127) // 上
  ctx.quadraticCurveTo(600, 207, 502, 315) // 下
  // 縦向き＿右＿内側
  ctx.moveTo(662, 171) // 上
  ctx.quadraticCurveTo(638, 239, 528, 347) // 下
  // 縦向き＿右＿外側
  ctx.moveTo(664, 174) // 上
  ctx.quadraticCurveTo(640, 242, 534, 349) // 下
  // 縦向き 下部の半円ステッチ＿外側
  ctx.moveTo(497, 315) // 左
  ctx.quadraticCurveTo(503, 355, 534, 349) // 右
  // // 縦向き 下部の半円ステッチ＿内側
  ctx.moveTo(502, 315) // 左
  ctx.quadraticCurveTo(505, 343, 528, 347) // 右
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで

  // laceここから
  allowLace2(ctx, laceColor, -5, 0)
  allowLace2(ctx, laceColor, -18, 25)
  allowLace2(ctx, laceColor, -36, 54)
  allowLace2(ctx, laceColor, -57, 83)
  allowLace2(ctx, laceColor, -80, 110)
}

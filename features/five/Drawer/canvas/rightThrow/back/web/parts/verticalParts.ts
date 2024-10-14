import { allowLace } from '../../lace/allowCenterOfCrossWeb'

// クロスウェブ等の縦パーツ
export const verticalPartOfWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.fillStyle = webColor
  // 縦パーツ
  ctx.beginPath()
  ctx.moveTo(630, 120) //左上
  ctx.quadraticCurveTo(587, 214, 482, 330) //左下
  ctx.quadraticCurveTo(520, 370, 520, 370) //右下
  ctx.quadraticCurveTo(658, 225, 668, 175) //右上
  ctx.quadraticCurveTo(650, 141, 630, 120) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])

  // 縦向き＿左＿外側
  ctx.moveTo(642, 143) // 上
  ctx.quadraticCurveTo(605, 230, 501, 343) // 下
  // 縦向き＿左＿内側
  ctx.moveTo(645, 145) // 上
  ctx.quadraticCurveTo(608, 233, 505, 345) // 下
  // 縦向き＿右＿内側
  ctx.moveTo(650, 151) // 上
  ctx.quadraticCurveTo(610, 245, 508, 351) // 下
  // // 縦向き＿右＿外側
  ctx.moveTo(652, 155) // 上
  ctx.quadraticCurveTo(613, 250, 512, 352) // 下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
}

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
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])

  // 縦向き＿左＿外側
  ctx.moveTo(642, 143) // 上
  ctx.quadraticCurveTo(605, 230, 501, 343) // 下
  // 縦向き＿左＿内側
  ctx.moveTo(645, 145) // 上
  ctx.quadraticCurveTo(608, 233, 505, 345) // 下
  // 縦向き＿右＿内側
  ctx.moveTo(650, 151) // 上
  ctx.quadraticCurveTo(610, 245, 508, 351) // 下
  // // 縦向き＿右＿外側
  ctx.moveTo(652, 155) // 上
  ctx.quadraticCurveTo(613, 250, 512, 352) // 下
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
  allowLace(ctx, laceColor, -2, -5, 1, 1)
  allowLace(ctx, laceColor, -19, 33, 0, 1)
  allowLace(ctx, laceColor, -34, 58, 0, 1)
  allowLace(ctx, laceColor, -53, 85, 0, 1)
  allowLace(ctx, laceColor, -73, 110, 0, 1)
}

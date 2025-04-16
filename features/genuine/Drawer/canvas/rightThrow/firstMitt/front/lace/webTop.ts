export const webTop = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number, numerator?: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  // 右から２番目
  ctx.moveTo(194 + locationX, 177 + locationY) // 左上
  ctx.quadraticCurveTo(198 + locationX, 166 + locationY, 208 + locationX, 167 + locationY) //
  ctx.quadraticCurveTo(219 + locationX, 166 + locationY, 220 + locationX, 187 + locationY) // 右＿左
  ctx.quadraticCurveTo(228 + locationX, 181 + locationY, 228 + locationX, 178 + locationY) // 右＿右
  ctx.quadraticCurveTo(227 + locationX, 157 + locationY, 208 + locationX, 157 + locationY) //
  ctx.quadraticCurveTo(192 + locationX, 163 + locationY, 194 + locationX, 177 + locationY) //
  ctx.fill()
  // 側面ライン
  ctx.moveTo(196 + locationX, 166 + locationY) // 左上
  ctx.quadraticCurveTo(202 + locationX, 160 + locationY, 214 + locationX, 163 + locationY) // 右下
  ctx.quadraticCurveTo(224 + locationX, 166 + locationY, 225 + locationX, 184 + locationY) // 右下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}
export const webTop2 = (
  ctx: CanvasRenderingContext2D,
  color: string,
  locationX: number,
  locationY: number,
  numerator?: number,
  scaleSize?: number
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  // 右から２番目
  ctx.moveTo(291 + locationX, 92 + locationY) // 左上
  ctx.quadraticCurveTo(296 + locationX, 86 + locationY, 302 + locationX, 90 + locationY) //
  ctx.quadraticCurveTo(310 + locationX, 92 + locationY, 316 + locationX, 102 + locationY) // 右＿左
  ctx.quadraticCurveTo(324 + locationX, 105 + locationY, 326 + locationX, 98 + locationY) // 右＿右
  ctx.quadraticCurveTo(319 + locationX, 85 + locationY, 309 + locationX, 81 + locationY) //
  ctx.quadraticCurveTo(301 + locationX, 80 + locationY, 295 + locationX, 85 + locationY) //
  ctx.quadraticCurveTo(290 + locationX, 87 + locationY, 291 + locationX, 92 + locationY) //
  ctx.fill()
  // 側面ライン
  ctx.moveTo(296 + locationX, 83 + locationY) // 左上
  ctx.quadraticCurveTo(310 + locationX, 85 + locationY, 317 + locationX, 103 + locationY) // 右下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const webTop3 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  // 右から２番目
  ctx.moveTo(326, 69) // 左上
  ctx.quadraticCurveTo(326, 73, 326, 73) // 左下
  ctx.quadraticCurveTo(343, 90, 343, 88) // 右下
  ctx.quadraticCurveTo(336, 68, 336, 68) // 右上
  ctx.quadraticCurveTo(331, 66, 326, 69) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

const webTop4 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()

  ctx.moveTo(315 + x, 74 + y) // 左上
  ctx.quadraticCurveTo(309 + x, 83 + y, 305 + x, 95 + y) // 左下
  ctx.quadraticCurveTo(307 + x, 105 + y, 315 + x, 102 + y) // 右下
  ctx.quadraticCurveTo(320 + x, 95 + y, 324 + x, 82 + y) // 右上
  ctx.quadraticCurveTo(327 + x, 69 + y, 315 + x, 74 + y) // 左上
  ctx.fill()
  ctx.moveTo(315 + x, 74 + y) // 左上
  ctx.quadraticCurveTo(313 + x, 86 + y, 307 + x, 100 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const webTopLaces = (ctx: CanvasRenderingContext2D, color: string): void => {
  webTop3(ctx, color) // 一番右
  webTop2(ctx, color, 17, -8) //
  webTop2(ctx, color, 0, 0) //
  webTop2(ctx, color, -20, 10) //
  webTop2(ctx, color, -34, 20) //
  webTop2(ctx, color, -46, 28) //
  webTop(ctx, color, 39, -41) //
  webTop(ctx, color, 29, -33) //
  webTop(ctx, color, 22, -26) //
  webTop(ctx, color, 13, -17) //
  webTop(ctx, color, 8, -10) //
  webTop(ctx, color, 0, 0) // 一番左
}

export const webTopCrossLaces = (ctx: CanvasRenderingContext2D, color: string): void => {
  webTop3(ctx, color) // 一番右
  webTop2(ctx, color, 5, -4) //
  webTop4(ctx, color, 0, 0) //
  webTop2(ctx, color, -22, 12) //
  webTop4(ctx, color, -28, 15) //
  webTop2(ctx, color, -43, 28) //
  webTop4(ctx, color, -50, 30) //
  webTop(ctx, color, 29, -33) //
  webTop4(ctx, color, -75, 45) //
  webTop(ctx, color, 12, -13) //
  webTop4(ctx, color, -94, 65) //

  webTop(ctx, color, -3, 5) // 一番左
}

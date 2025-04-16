export const indexTopOver = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(347, 53) // 左上
  ctx.quadraticCurveTo(348, 55, 351, 61) // 左下
  ctx.quadraticCurveTo(358, 54, 353, 58) // 右下
  ctx.quadraticCurveTo(355, 51, 365, 43) // 右上
  ctx.quadraticCurveTo(354, 45, 347, 53) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const indexTop = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(352, 68) // 左上
  ctx.quadraticCurveTo(354, 72, 354, 79) // 左下
  ctx.quadraticCurveTo(368, 84, 382, 75) // 右下
  ctx.quadraticCurveTo(384, 69, 379, 65) // 右上
  ctx.quadraticCurveTo(365, 67, 352, 68) // 左上
  ctx.fill()
  // // 側面ライン
  ctx.moveTo(352, 69) // 右上
  ctx.quadraticCurveTo(367, 74, 380, 68) // 右下
  ctx.stroke()
  ctx.closePath()
}

// 折り返し部分
export const indexWrapBack = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 小指芯固定用の紐
  ctx.beginPath()
  ctx.moveTo(380 + x, 168 + y) // 左上
  ctx.quadraticCurveTo(379 + x, 188 + y, 384 + x, 206 + y) // 左下
  ctx.quadraticCurveTo(393 + x, 205 + y, 393 + x, 197 + y) // 右下
  ctx.quadraticCurveTo(391 + x, 170 + y, 392 + x, 170 + y) // 右上
  ctx.quadraticCurveTo(390 + x, 158 + y, 380 + x, 168 + y) // 左上
  ctx.fill()
  // // 側面ライン
  ctx.moveTo(391 + x, 168 + y) // 左上
  ctx.quadraticCurveTo(387 + x, 184 + y, 392 + x, 199 + y) // 右下
  ctx.stroke()
  ctx.closePath()
}

export const webConnectTopUpper = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  // 右から２番目
  ctx.moveTo(356, 69) // 左上
  ctx.quadraticCurveTo(359, 82, 359, 82) // 左下
  ctx.quadraticCurveTo(367, 75, 377, 73) // 右下
  ctx.quadraticCurveTo(377, 69, 384, 65) //
  ctx.quadraticCurveTo(382, 62, 382, 62) // 右上
  ctx.quadraticCurveTo(366, 63, 356, 69) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(356, 72) // 左上
  ctx.quadraticCurveTo(368, 65, 384, 65) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const webConnectTopLower = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  // 右から２番目
  ctx.moveTo(360, 83) // 左上
  ctx.quadraticCurveTo(362, 93, 362, 93) // 左下
  ctx.quadraticCurveTo(373, 105, 396, 98) // 右下
  ctx.quadraticCurveTo(395, 88, 390, 89) // 右上
  ctx.quadraticCurveTo(374, 94, 363, 81) //
  ctx.quadraticCurveTo(360, 83, 360, 83) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(360, 83) // 左上
  ctx.quadraticCurveTo(373, 100, 393, 91) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const underRight = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number, numerator?: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  // 右上
  ctx.moveTo(407 + locationX, 294 + locationY) // 上_左
  ctx.quadraticCurveTo(400 + locationX, 304 + locationY, 411 + locationX, 305 + locationY) // 下＿左
  ctx.quadraticCurveTo(419 + locationX, 301 + locationY, 428 + locationX, 304 + locationY) // 下＿右
  ctx.quadraticCurveTo(437 + locationX, 306 + locationY, 437 + locationX, 296 + locationY) // 上＿右
  ctx.quadraticCurveTo(427 + locationX, 289 + locationY, 407 + locationX, 294 + locationY) // 上＿左
  ctx.fill()
  // 側面ライン
  ctx.moveTo(406 + locationX, 303 + locationY) // 左上
  ctx.quadraticCurveTo(424 + locationX, 299 + locationY, 433 + locationX, 303 + locationY) // 右下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

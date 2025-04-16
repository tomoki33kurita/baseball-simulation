export const tiedLittleMachiMaterialSide = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(273 + x, 98 + y) // 左左
  ctx.quadraticCurveTo(279 + x, 99 + y, 279 + x, 99 + y) //左右
  ctx.quadraticCurveTo(292 + x, 85 + y, 308 + x, 91 + y) // 右左
  ctx.quadraticCurveTo(315 + x, 85 + y, 315 + x, 85 + y) // 右右
  ctx.quadraticCurveTo(307 + x, 79 + y, 292 + x, 82 + y) //
  ctx.quadraticCurveTo(275 + x, 87 + y, 273 + x, 98 + y) //
  ctx.fill()
  ctx.moveTo(275 + x, 99 + y) // 左
  ctx.quadraticCurveTo(290 + x, 78 + y, 311 + x, 88 + y) // 右
  ctx.stroke()
  ctx.closePath()
}

export const tiedLittleMachiMaterialDiagonal = (
  ctx: CanvasRenderingContext2D,
  color: string,
  x: number,
  y: number,
  numerator?: number,
  scaleSize?: number
): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  //  人差し指袋真上
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }

  ctx.moveTo(215 + x, 132 + y) // 左下左
  ctx.quadraticCurveTo(221 + x, 132 + y, 221 + x, 132 + y) // 左下右
  ctx.quadraticCurveTo(228 + x, 119 + y, 241 + x, 115 + y) // 右上下
  ctx.quadraticCurveTo(247 + x, 111 + y, 245 + x, 109 + y) // 右上上
  ctx.quadraticCurveTo(230 + x, 105 + y, 215 + x, 132 + y) //
  ctx.fill()
  ctx.moveTo(219 + x, 132 + y) // 下
  ctx.quadraticCurveTo(233 + x, 109 + y, 243 + x, 114 + y) // 上
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }

  ctx.closePath()
}

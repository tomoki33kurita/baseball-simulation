export const arrow1 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number, scaleSize?: number): void => {
  ctx.strokeStyle = '#383838'
  ctx.lineWidth = 0.7
  ctx.fillStyle = color
  // ウェブ先端側の結び目
  // 左側の先端紐
  ctx.save()
  if (numerator !== undefined && numerator !== 0) {
    ctx.rotate((numerator * Math.PI) / 180)
  }
  if (scaleSize !== undefined) {
    ctx.scale(scaleSize, scaleSize)
  }
  // 左側
  ctx.beginPath()
  ctx.moveTo(558 + x, 218 + y) // 左上
  ctx.quadraticCurveTo(560 + x, 235 + y, 560 + x, 241 + y) // 左下
  ctx.quadraticCurveTo(570 + x, 238 + y, 565 + x, 238 + y) // 右下
  ctx.quadraticCurveTo(570 + x, 230 + y, 566 + x, 223 + y) // 右上
  ctx.quadraticCurveTo(558 + x, 218 + y, 558 + x, 218 + y) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 側面
  ctx.beginPath()
  ctx.moveTo(560 + x, 220 + y) // 左上
  ctx.quadraticCurveTo(564 + x, 228 + y, 561 + x, 238 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  // 右側
  ctx.beginPath()
  ctx.moveTo(566 + x, 234 + y) // 左上
  ctx.quadraticCurveTo(562 + x, 240 + y, 562 + x, 240 + y) // 左下
  ctx.quadraticCurveTo(571 + x, 249 + y, 571 + x, 252 + y) // 右下
  ctx.quadraticCurveTo(575 + x, 245 + y, 573 + x, 248 + y) //　右上
  ctx.quadraticCurveTo(578 + x, 242 + y, 563 + x, 234 + y) //　左上
  ctx.fill()
  ctx.moveTo(562 + x, 239 + y) // 左上
  ctx.quadraticCurveTo(571 + x, 242 + y, 572 + x, 252 + y) // 右下
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
}

export const arrow2 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number, scaleSize?: number): void => {
  ctx.strokeStyle = '#383838'
  ctx.lineWidth = 0.7
  ctx.fillStyle = color
  // ウェブ先端側の結び目
  // 左側の先端紐
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  if (scaleSize !== undefined) {
    ctx.scale(scaleSize, scaleSize)
  }
  // 左側
  ctx.beginPath()
  ctx.moveTo(644 + x, 276 + y) // 左上
  ctx.quadraticCurveTo(649 + x, 286 + y, 649 + x, 293 + y) // 左下
  ctx.quadraticCurveTo(654 + x, 295 + y, 654 + x, 295 + y) // 右下
  ctx.quadraticCurveTo(658 + x, 291 + y, 654 + x, 280 + y) // 右上
  ctx.quadraticCurveTo(648 + x, 276 + y, 644 + x, 276 + y) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 側面
  ctx.beginPath()
  ctx.moveTo(645 + x, 275 + y) // 左上
  ctx.quadraticCurveTo(652 + x, 283 + y, 650 + x, 293 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  // 左側
  ctx.beginPath()
  ctx.moveTo(645 + x, 293 + y) // 左上
  ctx.quadraticCurveTo(637 + x, 296 + y, 637 + x, 307 + y) // 左下
  ctx.quadraticCurveTo(641 + x, 311 + y, 646 + x, 306 + y) // 右下
  ctx.quadraticCurveTo(645 + x, 300 + y, 651 + x, 296 + y) // 右上
  ctx.quadraticCurveTo(645 + x, 293 + y, 645 + x, 293 + y) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 側面
  ctx.beginPath()
  ctx.moveTo(648 + x, 296 + y) // 右上
  ctx.quadraticCurveTo(643 + x, 300 + y, 644 + x, 307 + y) // 右下
  ctx.stroke()
  ctx.closePath()

  if (numerator !== undefined) {
    ctx.restore()
  }
}

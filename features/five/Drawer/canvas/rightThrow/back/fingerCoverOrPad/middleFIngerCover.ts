export const middleFingerCover = (
  ctx: CanvasRenderingContext2D,
  leatherColor: string,
  stitchColor: string,
  x: number,
  y: number,
  numerator: number
): void => {
  ctx.lineWidth = 1.0
  ctx.fillStyle = leatherColor
  ctx.strokeStyle = '#3b3b3b'
  ctx.save()
  ctx.rotate((numerator * Math.PI) / 180)
  ctx.beginPath()

  ctx.moveTo(372 + x, 345 + y) // 左下
  ctx.quadraticCurveTo(385 + x, 278 + y, 398 + x, 240 + y) // 左上
  ctx.quadraticCurveTo(405 + x, 210 + y, 435 + x, 205 + y) // 中央下
  ctx.quadraticCurveTo(458 + x, 213 + y, 455 + x, 241 + y) // 右上
  ctx.quadraticCurveTo(436 + x, 361 + y, 436 + x, 351 + y) // 右下
  ctx.quadraticCurveTo(432 + x, 353 + y, 413 + x, 377 + y) // 切れ端部分右下
  ctx.quadraticCurveTo(375 + x, 403 + y, 362 + x, 380 + y) //
  ctx.quadraticCurveTo(363 + x, 365 + y, 372 + x, 345 + y) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.2
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(381 + x, 330 + y) // 左下
  ctx.quadraticCurveTo(385 + x, 290 + y, 404 + x, 235 + y) // 左上
  ctx.quadraticCurveTo(412 + x, 212 + y, 435 + x, 211 + y) // 中央上
  ctx.quadraticCurveTo(445 + x, 212 + y, 451 + x, 229 + y) // 右上
  ctx.quadraticCurveTo(432 + x, 356 + y, 432 + x, 347 + y) // 右下
  // 内側
  ctx.moveTo(385 + x, 310 + y) // 左下
  ctx.quadraticCurveTo(387 + x, 290 + y, 408 + x, 235 + y) // 左上
  ctx.quadraticCurveTo(414 + x, 214 + y, 435 + x, 215 + y) // 中央上
  ctx.quadraticCurveTo(443 + x, 214 + y, 447 + x, 231 + y) // 右上
  ctx.quadraticCurveTo(430 + x, 354 + y, 428 + x, 348 + y) // 右下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.restore()
}

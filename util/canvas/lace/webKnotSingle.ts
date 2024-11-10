export const webKnotUpward = (
  ctx: CanvasRenderingContext2D,
  color: string,
  locationX: number,
  locationY: number,
  numerator?: number,
  scaleSize?: number
): void => {
  ctx.strokeStyle = 'gray' //'#383838'
  ctx.lineWidth = 0.5
  ctx.fillStyle = color
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }

  // 一番下の結び目
  ctx.moveTo(623 + locationX, 372 + locationY) // 左上
  ctx.quadraticCurveTo(616 + locationX, 377 + locationY, 621 + locationX, 386 + locationY) // 左下
  ctx.quadraticCurveTo(632 + locationX, 386 + locationY, 630 + locationX, 384 + locationY)
  ctx.quadraticCurveTo(634 + locationX, 378 + locationY, 634 + locationX, 378 + locationY) // 右上
  ctx.quadraticCurveTo(628 + locationX, 368 + locationY, 623 + locationX, 372 + locationY)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 一番下の結び目＿側面
  ctx.moveTo(626 + locationX, 363 + locationY) // 左上
  ctx.quadraticCurveTo(625 + locationX, 380 + locationY, 629 + locationX, 386 + locationY) // 左下
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  // 二段目の結び目
  ctx.moveTo(629 + locationX, 361 + locationY) // 左上
  ctx.quadraticCurveTo(616 + locationX, 377 + locationY, 619 + locationX, 378 + locationY) // 左下
  ctx.quadraticCurveTo(624 + locationX, 362 + locationY, 633 + locationX, 379 + locationY)
  ctx.quadraticCurveTo(638 + locationX, 371 + locationY, 638 + locationX, 371 + locationY) // 右上
  ctx.quadraticCurveTo(637 + locationX, 360 + locationY, 629 + locationX, 361 + locationY)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  // 先端紐
  ctx.moveTo(634 + locationX, 363 + locationY) // 左上
  ctx.quadraticCurveTo(638 + locationX, 363 + locationY, 638 + locationX, 371 + locationY) // 左下
  ctx.quadraticCurveTo(652 + locationX, 355 + locationY, 684 + locationX, 336 + locationY) // 右下
  ctx.quadraticCurveTo(685 + locationX, 334 + locationY, 685 + locationX, 328 + locationY) // 右上
  ctx.quadraticCurveTo(634 + locationX, 363 + locationY, 634 + locationX, 363 + locationY)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const webKnotDownward = (
  ctx: CanvasRenderingContext2D,
  color: string,
  locationX: number,
  locationY: number,
  numerator?: number,
  scaleSize?: number
): void => {
  ctx.strokeStyle = 'gray' //'#383838'
  ctx.lineWidth = 0.5
  ctx.fillStyle = color
  // 結び目1段目
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }

  ctx.moveTo(729 + locationX, 267 + locationY) // 左上
  ctx.quadraticCurveTo(729 + locationX, 275 + locationY, 729 + locationX, 275 + locationY) // 左下
  ctx.quadraticCurveTo(735 + locationX, 271 + locationY, 742 + locationX, 274 + locationY)
  ctx.quadraticCurveTo(740 + locationX, 265 + locationY, 729 + locationX, 267 + locationY)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 結び目2段目
  ctx.beginPath()
  ctx.moveTo(728 + locationX, 275 + locationY) // 左上
  ctx.quadraticCurveTo(730 + locationX, 288 + locationY, 730 + locationX, 288 + locationY) // 左下
  ctx.quadraticCurveTo(736 + locationX, 284 + locationY, 744 + locationX, 284 + locationY)
  ctx.quadraticCurveTo(746 + locationX, 274 + locationY, 746 + locationX, 274 + locationY)
  ctx.quadraticCurveTo(736 + locationX, 270 + locationY, 728 + locationX, 275 + locationY)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 紐部分
  ctx.beginPath()
  ctx.moveTo(732 + locationX, 288 + locationY) // 左上
  ctx.quadraticCurveTo(742 + locationX, 344 + locationY, 742 + locationX, 394 + locationY) // 左下
  ctx.quadraticCurveTo(750 + locationX, 388 + locationY, 750 + locationX, 388 + locationY)
  ctx.quadraticCurveTo(754 + locationX, 360 + locationY, 743 + locationX, 284 + locationY) // 右上
  ctx.quadraticCurveTo(735 + locationX, 285 + locationY, 732 + locationX, 288 + locationY)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}

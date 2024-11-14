export const bankEdge1 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.moveTo(383, 587) // 左上
  ctx.quadraticCurveTo(382, 599, 389, 602) // 左下
  ctx.quadraticCurveTo(413, 603, 439, 583) // 右下
  ctx.quadraticCurveTo(443, 576, 435, 577) // 右上
  ctx.quadraticCurveTo(390, 600, 383, 587) //
  ctx.fill()
  // 側面ライン
  ctx.moveTo(382, 594) // 左上
  ctx.quadraticCurveTo(398, 603, 425, 582) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const bankEdge2 = (
  ctx: CanvasRenderingContext2D,
  color: string,
  locationX: number,
  locationY: number,
  numerator?: number,
  scaleSize?: number
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
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
  ctx.moveTo(438 + locationX, 607 + locationY) // 左
  ctx.quadraticCurveTo(446 + locationX, 614 + locationY, 463 + locationX, 610 + locationY) // 右下
  ctx.quadraticCurveTo(476 + locationX, 595 + locationY, 476 + locationX, 585 + locationY) // 右上
  ctx.quadraticCurveTo(472 + locationX, 577 + locationY, 467 + locationX, 584 + locationY) // 右＿左
  ctx.quadraticCurveTo(457 + locationX, 608 + locationY, 438 + locationX, 607 + locationY) // 左
  ctx.fill()
  // 側面ライン
  ctx.moveTo(446 + locationX, 611 + locationY) // 左下
  ctx.quadraticCurveTo(464 + locationX, 603 + locationY, 465 + locationX, 586 + locationY) // 右上
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

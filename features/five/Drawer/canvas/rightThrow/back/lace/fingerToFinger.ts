export const indexToMiddle = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(404, 70) // 左上
  ctx.quadraticCurveTo(398, 81, 398, 81)
  ctx.quadraticCurveTo(400, 86, 408, 84) // 左下
  ctx.quadraticCurveTo(412, 74, 443, 84) // 右下
  ctx.quadraticCurveTo(449, 74, 449, 74) // 右上
  ctx.quadraticCurveTo(406, 60, 404, 70) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(398, 82) // 左上
  ctx.quadraticCurveTo(410, 71, 443, 85) // 左下
  ctx.stroke()
  ctx.closePath()

  // 捕球面側
  ctx.beginPath()
  ctx.moveTo(419, 82) // 左上
  ctx.quadraticCurveTo(420, 90, 418, 99) // 左下
  ctx.quadraticCurveTo(441, 87, 441, 85) // 右下
  ctx.quadraticCurveTo(431, 80, 419, 82) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const middleToRing = (
  // same ringTolittle part
  ctx: CanvasRenderingContext2D,
  color: string,
  locationX: number,
  locationY: number,
  scaleSize?: number
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  if (scaleSize !== undefined) {
    ctx.save()
    ctx.scale(scaleSize, scaleSize)
  }
  ctx.moveTo(298 + locationX, 132 + locationY) // 左左
  ctx.quadraticCurveTo(306 + locationX, 130 + locationY, 309 + locationX, 128 + locationY) // 左右
  ctx.quadraticCurveTo(305 + locationX, 123 + locationY, 305 + locationX, 123 + locationY) // 左右上
  ctx.quadraticCurveTo(302 + locationX, 115 + locationY, 322 + locationX, 118 + locationY) // 右下
  ctx.quadraticCurveTo(327 + locationX, 109 + locationY, 327 + locationX, 109 + locationY) // 右上
  ctx.quadraticCurveTo(288 + locationX, 95 + locationY, 298 + locationX, 132 + locationY) // 左左
  ctx.fill()
  // 側面ライン
  ctx.moveTo(297 + locationX, 124 + locationY) // 左
  ctx.quadraticCurveTo(300 + locationX, 105 + locationY, 322 + locationX, 116 + locationY) // 左下
  ctx.stroke()
  if (scaleSize !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

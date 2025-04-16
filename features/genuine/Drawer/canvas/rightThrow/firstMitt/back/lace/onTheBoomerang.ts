export const onTheBoomerang = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  // 左上＿右下
  ctx.beginPath()
  ctx.moveTo(415, 78) // 左上
  ctx.quadraticCurveTo(418, 82, 424, 76) // 左下
  ctx.quadraticCurveTo(431, 64, 446, 59) // 右下
  ctx.quadraticCurveTo(451, 58, 456, 53) // 右上
  ctx.quadraticCurveTo(426, 53, 415, 78) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.moveTo(455, 53) // 右上
  ctx.quadraticCurveTo(423, 60, 419, 79) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const onTheBoomerang2 = (
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

  // 左上＿右下
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }

  ctx.moveTo(382 + locationX, 92 + locationY) // 左下
  ctx.quadraticCurveTo(396 + locationX, 79 + locationY, 416 + locationX, 70 + locationY) // 右上
  ctx.quadraticCurveTo(395 + locationX, 70 + locationY, 382 + locationX, 92 + locationY) // 左下

  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const onTheBoomerang3 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  // 革紐先端
  ctx.beginPath()
  ctx.moveTo(437, 11) // 左上
  ctx.quadraticCurveTo(414, 57, 432, 52) // 左下
  ctx.quadraticCurveTo(442, 49, 442, 49) // 右下
  ctx.quadraticCurveTo(438, 43, 438, 43) //
  ctx.quadraticCurveTo(425, 49, 442, 15) //
  ctx.quadraticCurveTo(442, 10, 442, 10) // 右上
  ctx.quadraticCurveTo(437, 11, 437, 11) // 右上
  ctx.fill()
  ctx.stroke()
  // 右上
  ctx.beginPath()
  ctx.moveTo(438, 43) // 左上
  ctx.quadraticCurveTo(441, 43, 439, 48) // 左下
  ctx.quadraticCurveTo(452, 43, 452, 43) // 右下
  ctx.quadraticCurveTo(450, 40, 450, 40) // 右上
  ctx.quadraticCurveTo(441, 37, 441, 37) //
  ctx.quadraticCurveTo(438, 43, 438, 43) // 左上
  ctx.fill()
  ctx.stroke()
  // 結び目＿横
  ctx.beginPath()
  ctx.moveTo(430, 56) // 左上
  ctx.quadraticCurveTo(434, 58, 434, 58) // 左下
  ctx.quadraticCurveTo(444, 50, 458, 48) // 右下
  ctx.quadraticCurveTo(459, 42, 459, 42) // 右上
  ctx.quadraticCurveTo(439, 40, 430, 56) // 右上
  ctx.fill()
  ctx.stroke()

  // 右上＿側面ライン
  ctx.moveTo(441, 37) // 左上
  ctx.quadraticCurveTo(443, 39, 441, 44) // 左下
  // 紐先端＿側面ライン
  ctx.moveTo(441, 12) // 左上
  ctx.quadraticCurveTo(421, 52, 434, 49) // 左下

  ctx.stroke()
  ctx.closePath()
}

export const middleFingerRight = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(375, 37) // 中指先端
  ctx.quadraticCurveTo(315, 204, 340, 370) // 左下
  ctx.quadraticCurveTo(370, 360, 376, 360) // 右下
  ctx.quadraticCurveTo(378, 260, 406, 173)
  ctx.quadraticCurveTo(422, 87, 421, 47)
  ctx.quadraticCurveTo(410, 26, 375, 37)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const middleFingerLeft = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(373, 37) // 右上
  ctx.quadraticCurveTo(332, 78, 320, 135)
  ctx.quadraticCurveTo(288, 262, 318, 382) // 左下
  ctx.quadraticCurveTo(336, 371, 338, 371) // 右下
  ctx.quadraticCurveTo(313, 195, 373, 37) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

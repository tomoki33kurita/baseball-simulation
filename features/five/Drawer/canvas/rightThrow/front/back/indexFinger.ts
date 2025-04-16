export const indexBackWebSide = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  // 輪郭
  ctx.beginPath()
  ctx.moveTo(372, 240) // 左下
  ctx.quadraticCurveTo(357, 55, 362, 55) //
  ctx.quadraticCurveTo(389, 40, 389, 40) //
  ctx.quadraticCurveTo(389, 36, 391, 37) //
  ctx.quadraticCurveTo(360, 35, 351, 66) //
  ctx.quadraticCurveTo(371, 240, 371, 240) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const indexBackMiddleSide = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  // 輪郭
  ctx.beginPath()
  ctx.moveTo(398, 41) // 左上
  ctx.quadraticCurveTo(435, 46, 446, 88) // 左下
  ctx.quadraticCurveTo(462, 245, 464, 248) // 右下
  ctx.quadraticCurveTo(480, 220, 473, 213) // 人差し指と中指の溝
  ctx.quadraticCurveTo(460, 118, 455, 90) // 革紐上
  ctx.quadraticCurveTo(447, 42, 403, 37) //
  ctx.quadraticCurveTo(398, 41, 398, 41) // 右下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

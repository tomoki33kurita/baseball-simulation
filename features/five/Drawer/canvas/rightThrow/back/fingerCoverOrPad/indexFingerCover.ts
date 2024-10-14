export const indexFingerCover = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.fillStyle = leatherColor
  ctx.strokeStyle = '#3b3b3b'
  ctx.beginPath()

  ctx.moveTo(372, 345) // 左下
  ctx.quadraticCurveTo(385, 278, 398, 240) // 左上
  ctx.quadraticCurveTo(405, 210, 435, 205) // 中央下
  ctx.quadraticCurveTo(458, 213, 455, 241) // 右上
  ctx.quadraticCurveTo(436, 361, 436, 351) // 右下
  ctx.quadraticCurveTo(432, 353, 413, 377) // 切れ端部分右下
  ctx.quadraticCurveTo(375, 403, 362, 380) //
  ctx.quadraticCurveTo(363, 365, 372, 345) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.2
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(381, 330) // 左下
  ctx.quadraticCurveTo(385, 290, 404, 235) // 左上
  ctx.quadraticCurveTo(412, 212, 435, 211) // 中央上
  ctx.quadraticCurveTo(445, 212, 451, 229) // 右上
  ctx.quadraticCurveTo(432, 356, 432, 347) // 右下
  // 内側
  ctx.moveTo(385, 310) // 左下
  ctx.quadraticCurveTo(387, 290, 408, 235) // 左上
  ctx.quadraticCurveTo(414, 214, 435, 215) // 中央上
  ctx.quadraticCurveTo(443, 214, 447, 231) // 右上
  ctx.quadraticCurveTo(430, 354, 428, 348) // 右下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

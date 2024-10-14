export const indexFingerPad = (ctx: CanvasRenderingContext2D, fingerPadColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.fillStyle = fingerPadColor
  ctx.strokeStyle = '#3b3b3b'
  ctx.beginPath()
  ctx.moveTo(378, 358) // 左下
  ctx.quadraticCurveTo(385, 278, 398, 240) // 左上
  ctx.quadraticCurveTo(405, 210, 435, 205) // 中央上
  ctx.quadraticCurveTo(458, 213, 455, 241) // 右上
  ctx.quadraticCurveTo(436, 361, 436, 361) // 右下
  ctx.quadraticCurveTo(406, 350, 378, 358) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.lineWidth = 1.2
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(383, 354) // 左下
  ctx.quadraticCurveTo(385, 290, 404, 235) // 左上
  ctx.quadraticCurveTo(412, 212, 435, 211) // 中央上
  ctx.quadraticCurveTo(445, 212, 451, 229) // 右上
  ctx.quadraticCurveTo(432, 356, 432, 356) // 右下
  // 内側
  ctx.moveTo(387, 352) // 左下
  ctx.quadraticCurveTo(387, 290, 408, 235) // 左上
  ctx.quadraticCurveTo(414, 214, 435, 215) // 中央上
  ctx.quadraticCurveTo(443, 214, 447, 231) // 右上
  ctx.quadraticCurveTo(430, 354, 428, 354) // 右下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

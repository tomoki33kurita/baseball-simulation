export const ringLittleFinger = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(212, 156) // 左上
  ctx.quadraticCurveTo(170, 413, 340, 588) // 左下
  ctx.quadraticCurveTo(351, 588, 351, 588) // 右下
  ctx.quadraticCurveTo(234, 422, 279, 90) // 右上
  ctx.quadraticCurveTo(237, 154, 236, 214) // 薬指先端＿小指先端＿溝
  ctx.quadraticCurveTo(240, 152, 226, 147) // 小指_頂点
  ctx.quadraticCurveTo(214, 147, 212, 156) // 薬指＿左上
  ctx.fill()
  // 小指＿薬指＿間ライン
  ctx.moveTo(236, 214) // 左上
  ctx.quadraticCurveTo(223, 322, 253, 405) //左下
  ctx.stroke()
  ctx.closePath()
}

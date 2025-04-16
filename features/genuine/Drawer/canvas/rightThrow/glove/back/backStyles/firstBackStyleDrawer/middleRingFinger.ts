export const middleRingFinger = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(279, 90) // 薬指右＿左上
  ctx.quadraticCurveTo(234, 422, 351, 588) // 薬指右＿左下
  ctx.quadraticCurveTo(400, 593, 400, 593) // 中指左＿右下
  ctx.quadraticCurveTo(330, 460, 335, 314) //
  ctx.quadraticCurveTo(335, 195, 374, 37) // 中指左＿右上
  ctx.quadraticCurveTo(332, 78, 322, 135) // 中指左＿左上
  ctx.quadraticCurveTo(327, 104, 314, 85) // 薬指右＿右上1
  ctx.quadraticCurveTo(298, 78, 279, 90) // 薬指右＿右上2
  // 薬指＿中指＿間ライン
  ctx.moveTo(322, 135)
  ctx.quadraticCurveTo(291, 274, 310, 382)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

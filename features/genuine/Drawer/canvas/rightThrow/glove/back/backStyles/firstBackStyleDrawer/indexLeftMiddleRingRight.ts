export const indexLeftMiddleRingRightFinger = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(279, 90) // 薬指右＿左上
  ctx.quadraticCurveTo(234, 422, 351, 588) // 薬指右＿左下
  ctx.quadraticCurveTo(400, 593, 429, 593) // 中指左＿右下
  ctx.quadraticCurveTo(355, 300, 515, 20) // 人差し指左＿頂点
  ctx.quadraticCurveTo(486, 22, 470, 41) // 人差し指_左上
  ctx.quadraticCurveTo(380, 177, 377, 360) // 人差し指_左下
  ctx.quadraticCurveTo(378, 260, 406, 173)
  ctx.quadraticCurveTo(422, 87, 421, 47) // 中指_右上
  ctx.quadraticCurveTo(410, 26, 375, 37) // 中指_中央上
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

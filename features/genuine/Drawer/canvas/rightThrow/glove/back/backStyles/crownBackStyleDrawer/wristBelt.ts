export const wristBelt = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor
  ctx.beginPath()
  ctx.moveTo(291, 488) // ベルト左上
  ctx.quadraticCurveTo(319, 538, 340, 588) // ベルト左下
  ctx.quadraticCurveTo(428, 599, 528, 586) // ベルト右下
  ctx.quadraticCurveTo(560, 508, 499, 434) // ベルト右上
  ctx.quadraticCurveTo(486, 476, 291, 488) // ベルト左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitch
  ctx.lineWidth = 1.2
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 手口ベルト縦＿外側
  ctx.moveTo(500, 441) // 上
  ctx.quadraticCurveTo(553, 513, 525, 584) // 折り返し左下_外
  // 手口ベルト縦＿内側
  ctx.moveTo(496, 448) // 上
  ctx.quadraticCurveTo(547, 511, 520, 587) // 折り返し左下_外
  ctx.stroke()
  ctx.setLineDash([])
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.closePath()
  // stitch
}
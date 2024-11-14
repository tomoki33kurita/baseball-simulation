export const normalWristBelt = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor

  ctx.beginPath()
  ctx.moveTo(265, 500) // 左上
  ctx.quadraticCurveTo(300, 615, 300, 615) // 左下
  ctx.quadraticCurveTo(346, 643, 495, 617) // 右下
  ctx.quadraticCurveTo(528, 595, 538, 525) //
  ctx.quadraticCurveTo(542, 478, 513, 448) // 右上
  ctx.lineTo(455, 491) //
  ctx.lineTo(265, 500) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  // 手口ベルト右辺＿内側
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.strokeStyle = stitchColor
  ctx.lineWidth = 1.2
  ctx.moveTo(514, 461) // 上
  ctx.quadraticCurveTo(535, 483, 530, 533) //
  ctx.quadraticCurveTo(521, 593, 486, 614) // 下
  // 手口ベルト右辺＿外側
  ctx.moveTo(515, 455) // 上
  ctx.quadraticCurveTo(540, 485, 534, 533) //
  ctx.quadraticCurveTo(524, 592, 493, 614) // 下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
}

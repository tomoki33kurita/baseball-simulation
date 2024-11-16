export const listBelt = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(265, 530) // 左上
  ctx.quadraticCurveTo(287, 607, 260, 623) // 左下
  ctx.quadraticCurveTo(287, 645, 347, 647) //
  ctx.quadraticCurveTo(435, 645, 449, 607) // 右下
  ctx.quadraticCurveTo(462, 600, 472, 587) //
  ctx.quadraticCurveTo(512, 547, 467, 500) //
  ctx.quadraticCurveTo(447, 528, 423, 535) //
  ctx.quadraticCurveTo(388, 538, 265, 530) //
  // ctx.quadraticCurveTo() // 左下
  ctx.fill()
  // ctx.moveTo(472, 140) // 左上
  // ctx.quadraticCurveTo(466, 147, 455, 189) // 左下
  ctx.stroke()
  ctx.closePath()
  // 中指＿左列
  ctx.beginPath()
  ctx.lineWidth = 1.4
  ctx.fillStyle = '#fff'
  ctx.moveTo(301, 564)
  ctx.arc(301, 564, 4, 0, 2 * Math.PI)
  ctx.moveTo(297, 610)
  ctx.arc(297, 610, 4, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // stitch
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // ベルト部分右_垂直
  ctx.moveTo(469, 517) // 左
  ctx.quadraticCurveTo(497, 548, 470, 589) //
  ctx.moveTo(470, 511) // 右
  ctx.quadraticCurveTo(503, 545, 473, 585) //
  // 平裏下
  ctx.moveTo(273, 537) // 左
  ctx.quadraticCurveTo(300, 544, 392, 544) //
  ctx.quadraticCurveTo(447, 546, 468, 512) //
  // 手口部分
  ctx.moveTo(267, 626) // 左
  ctx.quadraticCurveTo(305, 638, 345, 639) //
  ctx.quadraticCurveTo(423, 642, 445, 610) //
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  // stitch
}

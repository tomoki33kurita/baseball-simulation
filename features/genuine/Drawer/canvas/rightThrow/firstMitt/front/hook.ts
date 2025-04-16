export const thumbHook = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  // 先端＿上
  ctx.beginPath()
  ctx.moveTo(284, 467) // 左上
  ctx.quadraticCurveTo(308, 512, 320, 550) // 左下
  ctx.quadraticCurveTo(330, 545, 339, 538) // 右下
  ctx.quadraticCurveTo(333, 512, 311, 477) // 右上
  ctx.quadraticCurveTo(301, 462, 284, 467) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 結び目＿上
  ctx.beginPath()
  ctx.moveTo(320, 550) // 左上
  ctx.quadraticCurveTo(314, 561, 326, 577) // 左下
  ctx.quadraticCurveTo(337, 574, 343, 566) // 右下
  ctx.quadraticCurveTo(337, 552, 339, 538) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 結び目＿下
  ctx.beginPath()
  ctx.moveTo(317, 561) // 左上
  ctx.quadraticCurveTo(319, 583, 327, 581) // 左下
  ctx.quadraticCurveTo(339, 580, 350, 569) // 右下
  ctx.quadraticCurveTo(342, 566, 342, 566) // 右上
  ctx.quadraticCurveTo(325, 579, 325, 579) // 左下＿内側
  ctx.quadraticCurveTo(317, 561, 317, 561) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 先端＿下
  ctx.beginPath()
  ctx.moveTo(332, 581) // 左上
  ctx.quadraticCurveTo(354, 600, 363, 630) // 左下
  ctx.quadraticCurveTo(374, 635, 377, 625) // 右下
  ctx.quadraticCurveTo(362, 593, 348, 572) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

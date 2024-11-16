export const sewingLeather = (ctx: CanvasRenderingContext2D): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = '#eee'

  // 中指
  ctx.beginPath()
  ctx.moveTo(270, 127) // 左上
  ctx.quadraticCurveTo(243, 176, 236, 272) // 左下
  ctx.quadraticCurveTo(250, 149, 279, 127) // 右上
  ctx.quadraticCurveTo(279, 119, 279, 119) // 右上上
  ctx.quadraticCurveTo(274, 114, 270, 122) // 左上上
  ctx.quadraticCurveTo(272, 127, 270, 127) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 中指付け根
  ctx.beginPath()
  ctx.moveTo(242, 383) // 左上
  ctx.quadraticCurveTo(248, 431, 257, 454) // 左下
  ctx.quadraticCurveTo(266, 451, 266, 451) // 右下
  ctx.quadraticCurveTo(253, 440, 242, 383) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 小指薬指
  ctx.beginPath()
  ctx.moveTo(191, 174) // 左上
  ctx.quadraticCurveTo(193, 179, 190, 185) //
  ctx.quadraticCurveTo(182, 197, 187, 229) //
  ctx.quadraticCurveTo(188, 299, 188, 400) //
  ctx.quadraticCurveTo(187, 418, 198, 440) //
  ctx.quadraticCurveTo(220, 494, 220, 494) //
  ctx.quadraticCurveTo(230, 507, 237, 541) //
  ctx.quadraticCurveTo(244, 562, 245, 603) // 折り返し1
  ctx.quadraticCurveTo(247, 612, 249, 601) // 折り返し2
  ctx.quadraticCurveTo(245, 543, 238, 516) //
  ctx.quadraticCurveTo(236, 497, 222, 475) //
  ctx.quadraticCurveTo(191, 412, 195, 397) //
  ctx.quadraticCurveTo(196, 216, 196, 216) //
  ctx.quadraticCurveTo(190, 189, 200, 179) //
  ctx.quadraticCurveTo(198, 172, 198, 172) //
  ctx.quadraticCurveTo(194, 168, 191, 174) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

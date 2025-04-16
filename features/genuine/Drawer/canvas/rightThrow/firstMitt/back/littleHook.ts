export const littleHook = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  // 紐＿先端＿上
  ctx.beginPath()
  ctx.moveTo(218, 280) // 左上
  ctx.quadraticCurveTo(207, 348, 200, 412) // 左下
  ctx.quadraticCurveTo(208, 411, 208, 411) // 右下
  ctx.quadraticCurveTo(213, 347, 213, 347) //
  ctx.quadraticCurveTo(223, 313, 223, 280) //
  ctx.quadraticCurveTo(218, 280, 218, 280) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 結び目＿上
  ctx.beginPath()
  ctx.moveTo(198, 413) // 左上
  ctx.quadraticCurveTo(195, 424, 185, 434) //
  ctx.quadraticCurveTo(185, 439, 185, 439) // 左下
  ctx.quadraticCurveTo(202, 431, 226, 437) // 右下
  ctx.quadraticCurveTo(214, 421, 214, 414) // 右上
  ctx.quadraticCurveTo(204, 407, 198, 413) // 左上
  ctx.fill()
  ctx.moveTo(184, 435) // 左上
  ctx.quadraticCurveTo(202, 428, 225, 434) //
  ctx.stroke()
  ctx.closePath()

  // 結び目＿左下
  ctx.beginPath()
  ctx.moveTo(185, 440) // 左上
  ctx.quadraticCurveTo(187, 448, 191, 449) //
  ctx.quadraticCurveTo(198, 452, 206, 466) // 右下
  ctx.quadraticCurveTo(199, 449, 203, 436) // 右上
  ctx.quadraticCurveTo(191, 434, 185, 440) // 右上
  ctx.fill()
  ctx.moveTo(200, 436) // 上
  ctx.quadraticCurveTo(197, 447, 200, 458) // 下
  ctx.stroke()
  ctx.closePath()

  // 結び目＿右下
  ctx.beginPath()
  ctx.moveTo(202, 436) // 左上
  ctx.quadraticCurveTo(201, 446, 201, 446) // 左下
  ctx.quadraticCurveTo(215, 463, 223, 461) // 右下
  ctx.quadraticCurveTo(226, 461, 226, 456) //
  ctx.quadraticCurveTo(228, 446, 225, 437) // 右上
  ctx.quadraticCurveTo(205, 432, 202, 436) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 結び目＿付け根＿下
  ctx.beginPath()
  ctx.moveTo(201, 449) // 左上
  ctx.quadraticCurveTo(203, 456, 203, 456) // 左下
  ctx.quadraticCurveTo(211, 468, 229, 469) // 右下
  ctx.quadraticCurveTo(225, 463, 225, 463) // 右上
  ctx.quadraticCurveTo(212, 462, 201, 449) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 紐＿先端＿下
  ctx.beginPath()
  ctx.moveTo(203, 459) // 左上
  ctx.quadraticCurveTo(223, 504, 236, 573) // 左下
  ctx.quadraticCurveTo(241, 576, 241, 576) // 左下
  ctx.quadraticCurveTo(248, 545, 232, 504) //
  ctx.quadraticCurveTo(225, 489, 221, 468) //
  ctx.quadraticCurveTo(214, 470, 203, 459) //
  ctx.fill()
  ctx.moveTo(210, 466) // 上
  ctx.quadraticCurveTo(230, 510, 238, 574) // 下
  ctx.stroke()
  ctx.closePath()
}

export const shallowBinding = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(105, 320) // 左上
  ctx.quadraticCurveTo(150, 465, 300, 574) //
  ctx.quadraticCurveTo(364, 620, 471, 631) //
  ctx.quadraticCurveTo(515, 633, 562, 613) // ヒンジ左下
  ctx.quadraticCurveTo(630, 566, 686, 498) // ヒンジ右上
  ctx.quadraticCurveTo(750, 410, 735, 289) //
  ctx.quadraticCurveTo(716, 146, 613, 92) // 小指マチ上
  ctx.quadraticCurveTo(486, 48, 375, 79) //
  ctx.quadraticCurveTo(340, 88, 343, 115) //
  ctx.quadraticCurveTo(353, 163, 377, 171) //
  ctx.quadraticCurveTo(371, 167, 364, 153) //
  ctx.quadraticCurveTo(351, 138, 346, 114) //
  ctx.quadraticCurveTo(352, 90, 383, 87) //
  ctx.quadraticCurveTo(413, 78, 497, 80) //
  ctx.quadraticCurveTo(550, 78, 608, 99) // 小指マチ上
  ctx.quadraticCurveTo(680, 130, 715, 234) //
  ctx.quadraticCurveTo(746, 319, 718, 419) //
  ctx.quadraticCurveTo(700, 473, 677, 498) // 小指マチ下
  ctx.quadraticCurveTo(615, 541, 561, 602) // ヒンジ左下
  ctx.quadraticCurveTo(512, 630, 457, 622) //
  ctx.quadraticCurveTo(382, 607, 333, 579) //
  ctx.quadraticCurveTo(245, 530, 194, 456) //
  ctx.quadraticCurveTo(156, 404, 128, 344) //
  ctx.quadraticCurveTo(128, 317, 114, 314) //
  ctx.quadraticCurveTo(105, 313, 105, 320) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const normalBinding = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(105, 320) // 左上
  ctx.quadraticCurveTo(150, 465, 300, 574) //
  ctx.quadraticCurveTo(364, 620, 471, 631) //
  ctx.quadraticCurveTo(515, 633, 562, 613) // ヒンジ左下
  ctx.quadraticCurveTo(630, 566, 686, 498) // ヒンジ右上
  ctx.quadraticCurveTo(750, 410, 735, 289) //
  ctx.quadraticCurveTo(716, 146, 613, 92) // 小指マチ上
  ctx.quadraticCurveTo(486, 48, 375, 79) //
  ctx.quadraticCurveTo(340, 88, 343, 115) //
  ctx.quadraticCurveTo(353, 163, 377, 171) //
  ctx.quadraticCurveTo(393, 190, 396, 237) // 捕球面上＿ヘリ革折り返し1
  ctx.quadraticCurveTo(407, 236, 407, 236) // 捕球面上＿ヘリ革折り返し2
  ctx.quadraticCurveTo(405, 189, 390, 174) //
  ctx.quadraticCurveTo(371, 167, 364, 153) //
  ctx.quadraticCurveTo(351, 138, 346, 114) //
  ctx.quadraticCurveTo(352, 90, 383, 87) //
  ctx.quadraticCurveTo(413, 78, 497, 80) //
  ctx.quadraticCurveTo(550, 78, 608, 99) // 小指マチ上
  ctx.quadraticCurveTo(680, 130, 715, 234) //
  ctx.quadraticCurveTo(746, 319, 718, 419) //
  ctx.quadraticCurveTo(700, 473, 677, 498) // 小指マチ下
  ctx.quadraticCurveTo(615, 541, 561, 602) // ヒンジ左下
  ctx.quadraticCurveTo(512, 630, 457, 622) //
  ctx.quadraticCurveTo(382, 607, 333, 579) //
  ctx.quadraticCurveTo(245, 530, 194, 456) //
  ctx.quadraticCurveTo(156, 404, 128, 344) //
  ctx.quadraticCurveTo(128, 317, 114, 314) //
  ctx.quadraticCurveTo(105, 313, 105, 320) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(235, 360) // 左上
  ctx.quadraticCurveTo(238, 364, 238, 366) // 左下
  ctx.quadraticCurveTo(244, 365, 255, 369) // 右下
  ctx.quadraticCurveTo(253, 362, 253, 362) // 右上
  ctx.quadraticCurveTo(240, 359, 235, 360) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

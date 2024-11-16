export const normalPalm = (ctx: CanvasRenderingContext2D, catchFaceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = catchFaceColor

  ctx.beginPath()
  ctx.moveTo(102, 332) // 左上
  ctx.quadraticCurveTo(158, 455, 263, 547) //
  ctx.quadraticCurveTo(318, 594, 386, 615) //
  ctx.quadraticCurveTo(470, 650, 560, 615) // ヒンジ左下
  ctx.quadraticCurveTo(628, 567, 683, 500) // ヒンジ右上
  ctx.quadraticCurveTo(744, 432, 735, 290) //
  ctx.quadraticCurveTo(718, 160, 620, 97) // 小指マチ上
  ctx.quadraticCurveTo(470, 40, 358, 85) //
  ctx.quadraticCurveTo(320, 125, 377, 172) //
  ctx.quadraticCurveTo(395, 195, 395, 247) // /ウェブ下の右下
  ctx.quadraticCurveTo(358, 210, 358, 210) // /ウェブ下の右上
  ctx.quadraticCurveTo(302, 271, 225, 336) // /ウェブ下の左上
  ctx.quadraticCurveTo(243, 346, 259, 363) // /ウェブ下の左下
  ctx.quadraticCurveTo(243, 359, 232, 359) //
  ctx.quadraticCurveTo(204, 320, 172, 301) //
  ctx.quadraticCurveTo(150, 280, 148, 296) //
  ctx.quadraticCurveTo(130, 305, 121, 317) //
  ctx.quadraticCurveTo(105, 305, 102, 332) //
  ctx.fill()
  ctx.stroke()
  ctx.lineWidth = 0.3
  ctx.strokeStyle = '#bbb'
  // 親指芯の輪郭
  ctx.moveTo(228, 355) // 左上
  ctx.quadraticCurveTo(345, 482, 451, 508) //
  ctx.quadraticCurveTo(530, 523, 564, 581) //

  ctx.moveTo(564, 202) //
  ctx.quadraticCurveTo(607, 241, 608, 360) //

  ctx.moveTo(606, 390) //
  ctx.quadraticCurveTo(594, 449, 640, 486) //

  ctx.stroke()
  ctx.lineWidth = 0.8
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.strokeStyle = stitchColor
  // // 捕球面ポケット半円
  ctx.moveTo(249, 377) //左端
  ctx.quadraticCurveTo(320, 412, 375, 357) //
  ctx.quadraticCurveTo(419, 312, 431, 258) //
  ctx.quadraticCurveTo(432, 225, 405, 210) //
  // // 親指芯からウェブ下
  ctx.moveTo(237, 365) //左端
  ctx.quadraticCurveTo(245, 364, 267, 372) //
  ctx.quadraticCurveTo(272, 365, 270, 365) //
  ctx.quadraticCurveTo(268, 358, 253, 349) //
  ctx.quadraticCurveTo(320, 292, 375, 236) //
  ctx.quadraticCurveTo(395, 253, 395, 253) //
  ctx.quadraticCurveTo(405, 258, 406, 240) //
  ctx.moveTo(238, 365) //左端
  ctx.quadraticCurveTo(248, 370, 268, 373) //
  ctx.quadraticCurveTo(280, 369, 273, 361) //
  ctx.quadraticCurveTo(260, 349, 259, 349) //
  ctx.quadraticCurveTo(329, 292, 372, 243) //
  ctx.quadraticCurveTo(390, 256, 390, 256) //
  ctx.quadraticCurveTo(407, 263, 406, 250) //
  ctx.quadraticCurveTo(408, 238, 408, 238) //

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

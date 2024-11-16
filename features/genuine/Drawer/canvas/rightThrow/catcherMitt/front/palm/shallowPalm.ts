export const shallowPalm = (ctx: CanvasRenderingContext2D, catchFaceColor: string, stitchColor: string): void => {
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
  ctx.quadraticCurveTo(293, 284, 212, 326) // /ウェブ下の左上
  ctx.quadraticCurveTo(192, 326, 172, 301) //
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
  // 捕球面ポケット半円
  ctx.moveTo(211, 327) //左端
  ctx.quadraticCurveTo(265, 390, 347, 333) //
  ctx.quadraticCurveTo(420, 270, 405, 210) //
  // 親指芯からウェブ下
  ctx.moveTo(256, 330) //左端
  ctx.quadraticCurveTo(323, 294, 362, 242) //
  ctx.moveTo(259, 333) //左端
  ctx.quadraticCurveTo(322, 300, 365, 245) //

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

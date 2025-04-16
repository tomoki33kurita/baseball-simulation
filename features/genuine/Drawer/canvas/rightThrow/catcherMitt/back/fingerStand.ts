export const fingerStand = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = leatherColor

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(471, 323) // 捕球面の直下から左方向へ
  ctx.quadraticCurveTo(420, 270, 415, 202) //
  ctx.quadraticCurveTo(420, 140, 455, 107) //
  ctx.quadraticCurveTo(470, 80, 453, 64) //
  ctx.quadraticCurveTo(426, 47, 344, 60) //
  ctx.quadraticCurveTo(213, 77, 179, 136) //
  ctx.quadraticCurveTo(155, 166, 141, 210) //
  ctx.quadraticCurveTo(120, 290, 121, 342) //
  ctx.quadraticCurveTo(124, 393, 150, 455) //
  ctx.quadraticCurveTo(174, 501, 223, 545) //
  ctx.quadraticCurveTo(250, 546, 237, 454) //
  ctx.quadraticCurveTo(318, 381, 453, 417) //
  ctx.quadraticCurveTo(563, 480, 671, 386) //
  ctx.quadraticCurveTo(692, 348, 692, 348) //
  ctx.quadraticCurveTo(715, 316, 714, 304) //
  ctx.quadraticCurveTo(693, 293, 673, 321) //
  ctx.quadraticCurveTo(634, 368, 581, 367) //
  ctx.quadraticCurveTo(509, 355, 471, 323) //
  // ctx.quadraticCurveTo() //
  ctx.fill()
  // ctx.moveTo(472, 140) // 左上
  // ctx.quadraticCurveTo(466, 147, 455, 189) // 左下
  ctx.stroke()
  ctx.closePath()

  // stitch
  // 捕球面下のヘリ革下
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(428, 128) // 左上
  ctx.quadraticCurveTo(398, 175, 406, 222) //
  ctx.quadraticCurveTo(417, 275, 446, 311) //
  ctx.quadraticCurveTo(482, 347, 531, 367) //
  ctx.quadraticCurveTo(566, 379, 589, 372) //

  // 小指芯周りのヘリ革周り
  ctx.moveTo(454, 79) // 人差し指右上
  ctx.quadraticCurveTo(450, 54, 385, 58) // 人差し指袋の真上
  ctx.quadraticCurveTo(330, 64, 291, 72) // 中指袋の真上
  ctx.quadraticCurveTo(218, 93, 192, 126) // 小指袋の真上
  ctx.quadraticCurveTo(150, 177, 135, 254) // 小指袋の側面中間
  ctx.quadraticCurveTo(111, 389, 164, 470) //
  ctx.quadraticCurveTo(183, 505, 218, 531) //
  ctx.quadraticCurveTo(243, 551, 242, 585) //
  ctx.quadraticCurveTo(243, 615, 248, 614) //
  ctx.quadraticCurveTo(261, 618, 264, 606) //

  // 手口部分
  ctx.moveTo(267, 626) // 左
  ctx.quadraticCurveTo(305, 638, 345, 639) //
  ctx.quadraticCurveTo(423, 642, 445, 610) //

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#282828'
}

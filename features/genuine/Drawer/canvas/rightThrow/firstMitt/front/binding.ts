export const binding = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // ヘリ革
  ctx.beginPath()
  ctx.moveTo(180, 199) // 親指＿左上
  ctx.quadraticCurveTo(184, 202, 184, 202) //
  ctx.quadraticCurveTo(201, 195, 221, 217) //
  ctx.quadraticCurveTo(293, 352, 293, 352) //
  ctx.quadraticCurveTo(341, 464, 341, 464) //
  ctx.quadraticCurveTo(353, 495, 353, 495) //
  ctx.quadraticCurveTo(361, 532, 361, 532) //
  ctx.quadraticCurveTo(372, 567, 372, 567) //
  ctx.quadraticCurveTo(385, 592, 383, 592) //
  ctx.quadraticCurveTo(389, 615, 380, 618) //
  ctx.quadraticCurveTo(377, 628, 393, 627) //
  ctx.quadraticCurveTo(405, 618, 404, 603) //
  ctx.quadraticCurveTo(405, 594, 400, 586) // 土手の左に突入
  ctx.quadraticCurveTo(415, 607, 441, 608) //
  ctx.quadraticCurveTo(453, 614, 481, 613) //
  ctx.quadraticCurveTo(490, 617, 519, 614) //
  ctx.quadraticCurveTo(562, 611, 562, 611) //
  ctx.quadraticCurveTo(590, 608, 614, 593) //
  ctx.quadraticCurveTo(594, 603, 579, 630) //
  ctx.quadraticCurveTo(589, 633, 599, 627) //
  ctx.quadraticCurveTo(606, 618, 616, 601) // 小指側に突入
  ctx.quadraticCurveTo(640, 587, 650, 567) //
  ctx.quadraticCurveTo(672, 542, 679, 519) //
  ctx.quadraticCurveTo(699, 481, 702, 467) //
  ctx.quadraticCurveTo(715, 431, 715, 417) //
  ctx.quadraticCurveTo(725, 383, 723, 360) //
  ctx.quadraticCurveTo(725, 331, 723, 316) //
  ctx.quadraticCurveTo(721, 276, 716, 257) //
  ctx.quadraticCurveTo(709, 224, 703, 207) //
  ctx.quadraticCurveTo(690, 167, 681, 160) //
  ctx.quadraticCurveTo(664, 123, 648, 110) //
  ctx.quadraticCurveTo(624, 83, 609, 79) //
  ctx.quadraticCurveTo(585, 60, 572, 56) //
  ctx.quadraticCurveTo(541, 43, 530, 43) //
  ctx.quadraticCurveTo(501, 35, 486, 37) //
  ctx.quadraticCurveTo(463, 36, 455, 39) //
  ctx.quadraticCurveTo(432, 39, 422, 44) //
  ctx.quadraticCurveTo(400, 50, 394, 56) //
  ctx.quadraticCurveTo(377, 69, 371, 81) //
  ctx.quadraticCurveTo(366, 91, 370, 118) // ウェブの隣接カーブに突入
  ctx.quadraticCurveTo(375, 138, 393, 156) //
  ctx.quadraticCurveTo(404, 161, 403, 177) //
  ctx.quadraticCurveTo(407, 186, 422, 181) // 内側への折り返し地点
  ctx.quadraticCurveTo(432, 211, 432, 211) //
  ctx.quadraticCurveTo(438, 250, 438, 250) //
  ctx.quadraticCurveTo(444, 253, 446, 244) //
  ctx.quadraticCurveTo(438, 229, 441, 219) //
  ctx.quadraticCurveTo(434, 196, 434, 196) //
  ctx.quadraticCurveTo(429, 182, 422, 181) //

  ctx.quadraticCurveTo(413, 179, 411, 170) //
  ctx.quadraticCurveTo(409, 157, 397, 148) //
  ctx.quadraticCurveTo(384, 134, 383, 122) //
  ctx.quadraticCurveTo(376, 106, 381, 88) //
  ctx.quadraticCurveTo(408, 67, 450, 63) //
  ctx.quadraticCurveTo(469, 54, 525, 64) //
  ctx.quadraticCurveTo(562, 68, 600, 99) //
  ctx.quadraticCurveTo(654, 135, 680, 217) //
  ctx.quadraticCurveTo(698, 258, 700, 320) //
  ctx.quadraticCurveTo(700, 400, 674, 465) //
  ctx.quadraticCurveTo(655, 513, 635, 544) // 土手の右に突入＿内側
  ctx.quadraticCurveTo(612, 580, 588, 588) //
  ctx.quadraticCurveTo(566, 589, 547, 595) //
  ctx.quadraticCurveTo(527, 592, 510, 596) //
  ctx.quadraticCurveTo(491, 593, 473, 595) //
  ctx.quadraticCurveTo(452, 590, 433, 589) // 親指の付け根に到達
  ctx.quadraticCurveTo(408, 575, 397, 545) //
  ctx.quadraticCurveTo(388, 493, 357, 437) //
  ctx.quadraticCurveTo(337, 375, 306, 319) //
  ctx.quadraticCurveTo(270, 248, 227, 197) //
  ctx.quadraticCurveTo(199, 172, 178, 195) //
  ctx.quadraticCurveTo(180, 199, 180, 199) // 開始地点
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 外側と内側を隔てるライン_親指部分
  ctx.beginPath()
  ctx.moveTo(204, 187)
  ctx.quadraticCurveTo(249, 215, 308, 353) //
  ctx.quadraticCurveTo(359, 465, 359, 465) //
  ctx.quadraticCurveTo(376, 498, 374, 520) //
  ctx.quadraticCurveTo(380, 554, 400, 586) //
  ctx.stroke()
  ctx.closePath()

  // 外側と内側を隔てるライン_人差し→小指部分
  ctx.beginPath()
  ctx.moveTo(376, 74)
  ctx.quadraticCurveTo(416, 42, 477, 44) //
  ctx.quadraticCurveTo(547, 45, 596, 77) //
  ctx.quadraticCurveTo(667, 121, 692, 202) //
  ctx.quadraticCurveTo(724, 274, 713, 357) //
  ctx.quadraticCurveTo(706, 437, 675, 497) //
  ctx.quadraticCurveTo(647, 560, 614, 593) //
  ctx.stroke()
  ctx.closePath()

  // 外側と内側を隔てるライン_土手部分
  ctx.beginPath()
  ctx.moveTo(404, 594) // 左
  ctx.quadraticCurveTo(508, 625, 610, 596) //
  ctx.stroke()
  ctx.closePath()
}

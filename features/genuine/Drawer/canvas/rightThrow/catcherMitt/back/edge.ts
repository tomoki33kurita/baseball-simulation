export const bindingOfRegularBackStyle = (ctx: CanvasRenderingContext2D, color: string, fingerType: string, liningLeatherColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // メイン
  ctx.beginPath()
  ctx.moveTo(248, 615) // 左下＿内側＿小指袋の手元
  ctx.quadraticCurveTo(242, 616, 242, 588) // 内側
  ctx.quadraticCurveTo(243, 554, 222, 536) //
  ctx.quadraticCurveTo(186, 510, 162, 469) //
  ctx.quadraticCurveTo(135, 424, 125, 354) // 小指側面輪郭の途中_内側
  ctx.quadraticCurveTo(125, 256, 157, 181) //
  ctx.quadraticCurveTo(185, 112, 245, 88) //
  ctx.quadraticCurveTo(303, 60, 402, 57) //
  ctx.quadraticCurveTo(455, 55, 455, 82) // 人差し指の右上＿内側
  ctx.quadraticCurveTo(457, 97, 438, 116) //
  ctx.quadraticCurveTo(409, 155, 406, 191) //
  ctx.quadraticCurveTo(406, 268, 456, 318) // ウェブ真下＿内側
  ctx.quadraticCurveTo(495, 357, 561, 372) //
  ctx.quadraticCurveTo(628, 375, 676, 331) //
  ctx.quadraticCurveTo(697, 311, 705, 311) // 親指先端＿内側
  ctx.quadraticCurveTo(713, 312, 698, 340) //
  ctx.quadraticCurveTo(675, 388, 649, 417) //
  ctx.quadraticCurveTo(605, 469, 573, 502) // 親指一番下＿折り返し
  ctx.quadraticCurveTo(606, 473, 648, 420) // 外側
  ctx.quadraticCurveTo(678, 383, 706, 329) //
  ctx.quadraticCurveTo(711, 322, 715, 303) //
  ctx.quadraticCurveTo(714, 287, 707, 297) // 親指先端＿外側
  ctx.quadraticCurveTo(705, 303, 697, 302) //
  ctx.quadraticCurveTo(690, 308, 680, 309) //
  ctx.quadraticCurveTo(670, 318, 670, 318) //
  ctx.quadraticCurveTo(661, 332, 643, 340) //
  ctx.quadraticCurveTo(619, 355, 585, 359) //
  ctx.quadraticCurveTo(518, 353, 476, 314) // ウェブ真下_外側
  ctx.quadraticCurveTo(431, 274, 423, 210) //
  ctx.quadraticCurveTo(419, 175, 442, 137) //
  ctx.quadraticCurveTo(448, 124, 457, 117) //
  ctx.quadraticCurveTo(478, 85, 460, 66) // 人差し指の右上＿外側
  ctx.quadraticCurveTo(445, 47, 405, 52) //
  ctx.quadraticCurveTo(315, 59, 292, 66) // 中指の真上くらい＿外側
  ctx.quadraticCurveTo(225, 83, 191, 115) // 小指の真上くらい＿外側
  ctx.quadraticCurveTo(155, 154, 137, 208) //
  ctx.quadraticCurveTo(119, 256, 119, 300) //
  ctx.quadraticCurveTo(114, 344, 126, 393) // 結び目のあたり＿外側
  ctx.quadraticCurveTo(145, 465, 189, 517) //
  ctx.quadraticCurveTo(198, 530, 221, 545) //
  ctx.quadraticCurveTo(236, 554, 237, 607) //
  ctx.quadraticCurveTo(238, 621, 253, 627) // 手口横＿一番下＿外側
  ctx.quadraticCurveTo(321, 668, 420, 639) //
  ctx.quadraticCurveTo(440, 631, 448, 608) // 右
  ctx.quadraticCurveTo(432, 633, 392, 638) //
  ctx.quadraticCurveTo(363, 643, 315, 639) //
  ctx.quadraticCurveTo(282, 634, 262, 623) //
  ctx.quadraticCurveTo(248, 615, 248, 615) // 左下＿内側
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const bindingOfBeltBackStyle = (ctx: CanvasRenderingContext2D, color: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(259, 627) // 左
  ctx.quadraticCurveTo(321, 668, 420, 639) //
  ctx.quadraticCurveTo(440, 631, 448, 608) // 右
  ctx.quadraticCurveTo(432, 633, 392, 638) //
  ctx.quadraticCurveTo(363, 643, 315, 639) //
  ctx.quadraticCurveTo(282, 634, 262, 623) //
  ctx.quadraticCurveTo(257, 623, 259, 627) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // メイン
  ctx.beginPath()
  ctx.moveTo(271, 536) // 平裏＿窓左下
  ctx.quadraticCurveTo(337, 545, 416, 541) // 左下
  ctx.quadraticCurveTo(480, 530, 473, 475) //
  ctx.quadraticCurveTo(460, 434, 402, 428) //
  ctx.quadraticCurveTo(321, 426, 255, 457) //
  ctx.quadraticCurveTo(245, 460, 251, 485) // 窓の左上＿外側
  ctx.quadraticCurveTo(251, 518, 258, 529) //
  ctx.quadraticCurveTo(269, 560, 268, 585) //
  ctx.quadraticCurveTo(268, 600, 263, 612) //
  ctx.quadraticCurveTo(258, 620, 248, 615) //
  ctx.quadraticCurveTo(242, 616, 242, 588) // 内側
  ctx.quadraticCurveTo(243, 554, 222, 536) //
  ctx.quadraticCurveTo(186, 510, 162, 469) //
  ctx.quadraticCurveTo(135, 424, 125, 354) // 小指側面輪郭の途中_内側
  ctx.quadraticCurveTo(125, 256, 157, 181) //
  ctx.quadraticCurveTo(185, 112, 245, 88) //
  ctx.quadraticCurveTo(303, 60, 402, 57) //
  ctx.quadraticCurveTo(455, 55, 455, 82) // 人差し指の右上＿内側
  ctx.quadraticCurveTo(457, 97, 438, 116) //
  ctx.quadraticCurveTo(409, 155, 406, 191) //
  ctx.quadraticCurveTo(406, 268, 456, 318) // ウェブ真下＿内側
  ctx.quadraticCurveTo(495, 357, 561, 372) //
  ctx.quadraticCurveTo(628, 375, 676, 331) //
  ctx.quadraticCurveTo(697, 311, 705, 311) // 親指先端＿内側
  ctx.quadraticCurveTo(713, 312, 698, 340) //
  ctx.quadraticCurveTo(675, 388, 649, 417) //
  ctx.quadraticCurveTo(605, 469, 573, 502) // 親指一番下＿折り返し
  ctx.quadraticCurveTo(606, 473, 648, 420) // 外側
  ctx.quadraticCurveTo(678, 383, 706, 329) //
  ctx.quadraticCurveTo(711, 322, 715, 303) //
  ctx.quadraticCurveTo(714, 287, 707, 297) // 親指先端＿外側
  ctx.quadraticCurveTo(705, 303, 697, 302) //
  ctx.quadraticCurveTo(690, 308, 680, 309) //
  ctx.quadraticCurveTo(670, 318, 670, 318) //
  ctx.quadraticCurveTo(661, 332, 643, 340) //
  ctx.quadraticCurveTo(619, 355, 585, 359) //
  ctx.quadraticCurveTo(518, 353, 476, 314) // ウェブ真下_外側
  ctx.quadraticCurveTo(431, 274, 423, 210) //
  ctx.quadraticCurveTo(419, 175, 442, 137) //
  ctx.quadraticCurveTo(448, 124, 457, 117) //
  ctx.quadraticCurveTo(478, 85, 460, 66) // 人差し指の右上＿外側
  ctx.quadraticCurveTo(445, 47, 405, 52) //
  ctx.quadraticCurveTo(315, 59, 292, 66) // 中指の真上くらい＿外側
  ctx.quadraticCurveTo(225, 83, 191, 115) // 小指の真上くらい＿外側
  ctx.quadraticCurveTo(155, 154, 137, 208) //
  ctx.quadraticCurveTo(119, 256, 119, 300) //
  ctx.quadraticCurveTo(114, 344, 126, 393) // 結び目のあたり＿外側
  ctx.quadraticCurveTo(145, 465, 189, 517) //
  ctx.quadraticCurveTo(198, 530, 221, 545) //
  ctx.quadraticCurveTo(236, 554, 237, 607) //
  ctx.quadraticCurveTo(238, 621, 253, 627) // 手口横＿一番下＿外側
  ctx.quadraticCurveTo(280, 627, 279, 588) //
  ctx.quadraticCurveTo(282, 564, 271, 532) //
  ctx.quadraticCurveTo(262, 511, 266, 483) //
  ctx.quadraticCurveTo(265, 470, 265, 470) // 窓の左上＿内側
  ctx.quadraticCurveTo(307, 451, 375, 443) //
  ctx.quadraticCurveTo(405, 441, 435, 454) //
  ctx.quadraticCurveTo(483, 484, 441, 517) //
  ctx.quadraticCurveTo(424, 531, 390, 530) //
  ctx.quadraticCurveTo(282, 526, 282, 524) //
  ctx.quadraticCurveTo(269, 523, 268, 526) //
  ctx.quadraticCurveTo(271, 536, 271, 536) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitch
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  //  平裏上
  ctx.moveTo(252, 457) // 左
  ctx.quadraticCurveTo(296, 434, 364, 428) //
  ctx.quadraticCurveTo(427, 421, 456, 447) //
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}

export const bindingOfTMBackStyle = (ctx: CanvasRenderingContext2D, color: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(259, 627) // 左
  ctx.quadraticCurveTo(321, 668, 420, 639) //
  ctx.quadraticCurveTo(440, 631, 448, 608) // 右
  ctx.quadraticCurveTo(432, 633, 392, 638) //
  ctx.quadraticCurveTo(363, 643, 315, 639) //
  ctx.quadraticCurveTo(282, 634, 262, 623) //
  ctx.quadraticCurveTo(257, 623, 259, 627) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 手口上部分
  ctx.beginPath()
  ctx.moveTo(200, 524) // 左上
  ctx.quadraticCurveTo(212, 480, 276, 451)
  ctx.quadraticCurveTo(351, 415, 438, 445) // 親指との接合部_右下
  ctx.quadraticCurveTo(466, 466, 467, 486) // 窓の右中央
  ctx.quadraticCurveTo(464, 515, 449, 537)
  ctx.quadraticCurveTo(439, 579, 447, 608) // 右下_右
  ctx.quadraticCurveTo(449, 621, 437, 618) // 右下_左
  ctx.quadraticCurveTo(424, 580, 437, 525)
  ctx.quadraticCurveTo(472, 484, 435, 457) // 親指との接合部_右下 内側
  ctx.quadraticCurveTo(369, 433, 321, 448)
  ctx.quadraticCurveTo(233, 470, 210, 525)
  ctx.quadraticCurveTo(200, 524, 200, 524)
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // メイン
  ctx.beginPath()
  ctx.moveTo(222, 536) //
  ctx.quadraticCurveTo(186, 510, 162, 469) //
  ctx.quadraticCurveTo(135, 424, 125, 354) // 小指側面輪郭の途中_内側
  ctx.quadraticCurveTo(125, 256, 157, 181) //
  ctx.quadraticCurveTo(185, 112, 245, 88) //
  ctx.quadraticCurveTo(303, 60, 402, 57) //
  ctx.quadraticCurveTo(455, 55, 455, 82) // 人差し指の右上＿内側
  ctx.quadraticCurveTo(457, 97, 438, 116) //
  ctx.quadraticCurveTo(409, 155, 406, 191) //
  ctx.quadraticCurveTo(406, 268, 456, 318) // ウェブ真下＿内側
  ctx.quadraticCurveTo(495, 357, 561, 372) //
  ctx.quadraticCurveTo(628, 375, 676, 331) //
  ctx.quadraticCurveTo(697, 311, 705, 311) // 親指先端＿内側
  ctx.quadraticCurveTo(713, 312, 698, 340) //
  ctx.quadraticCurveTo(675, 388, 649, 417) //
  ctx.quadraticCurveTo(605, 469, 573, 502) // 親指一番下＿折り返し
  ctx.quadraticCurveTo(606, 473, 648, 420) // 外側
  ctx.quadraticCurveTo(678, 383, 706, 329) //
  ctx.quadraticCurveTo(711, 322, 715, 303) //
  ctx.quadraticCurveTo(714, 287, 707, 297) // 親指先端＿外側
  ctx.quadraticCurveTo(705, 303, 697, 302) //
  ctx.quadraticCurveTo(690, 308, 680, 309) //
  ctx.quadraticCurveTo(670, 318, 670, 318) //
  ctx.quadraticCurveTo(661, 332, 643, 340) //
  ctx.quadraticCurveTo(619, 355, 585, 359) //
  ctx.quadraticCurveTo(518, 353, 476, 314) // ウェブ真下_外側
  ctx.quadraticCurveTo(431, 274, 423, 210) //
  ctx.quadraticCurveTo(419, 175, 442, 137) //
  ctx.quadraticCurveTo(448, 124, 457, 117) //
  ctx.quadraticCurveTo(478, 85, 460, 66) // 人差し指の右上＿外側
  ctx.quadraticCurveTo(445, 47, 405, 52) //
  ctx.quadraticCurveTo(315, 59, 292, 66) // 中指の真上くらい＿外側
  ctx.quadraticCurveTo(225, 83, 191, 115) // 小指の真上くらい＿外側
  ctx.quadraticCurveTo(155, 154, 137, 208) //
  ctx.quadraticCurveTo(119, 256, 119, 300) //
  ctx.quadraticCurveTo(114, 344, 126, 393) // 結び目のあたり＿外側
  ctx.quadraticCurveTo(145, 465, 189, 517) //
  ctx.quadraticCurveTo(198, 530, 221, 545) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitch
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.lineWidth = 1.2
  ctx.setLineDash([3, 3])
  ctx.moveTo(254, 616) // 左
  ctx.quadraticCurveTo(357, 658, 436, 617)
  ctx.moveTo(320, 452)
  ctx.quadraticCurveTo(312, 497, 337, 519)
  ctx.quadraticCurveTo(367, 539, 433, 532)
  // ctx.quadraticCurveTo()

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}

export const bindingOfCommon = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // ウェブ周り奥＿人差し指側
  ctx.beginPath()
  ctx.moveTo(450, 58) // 左上
  ctx.quadraticCurveTo(490, 86, 438, 145) // 下
  ctx.quadraticCurveTo(474, 130, 476, 96) //
  ctx.quadraticCurveTo(480, 57, 450, 58) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // // ウェブ周り奥＿親指側
  ctx.beginPath()
  ctx.moveTo(598, 342) // 左上
  ctx.quadraticCurveTo(585, 353, 569, 359) //左下
  ctx.quadraticCurveTo(623, 358, 652, 333) //
  ctx.quadraticCurveTo(660, 315, 670, 318) //
  ctx.quadraticCurveTo(680, 307, 695, 304) //
  ctx.quadraticCurveTo(699, 287, 706, 286) //
  ctx.quadraticCurveTo(700, 275, 690, 286) //
  ctx.quadraticCurveTo(661, 304, 638, 326) //
  ctx.quadraticCurveTo(617, 342, 598, 342) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

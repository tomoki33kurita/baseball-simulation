export const welting = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 親指＿横方向
  ctx.beginPath()
  ctx.moveTo(180, 284) // 左＿左上
  ctx.quadraticCurveTo(176, 291, 182, 301) // 左＿下
  ctx.quadraticCurveTo(180, 285, 197, 286) // 右＿下
  ctx.quadraticCurveTo(197, 279, 197, 279) // 右＿上
  ctx.quadraticCurveTo(185, 277, 180, 284) // 右＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 親指＿縦方向
  ctx.beginPath()
  ctx.moveTo(206, 254) // 左＿上
  ctx.quadraticCurveTo(188, 256, 200, 294) //
  ctx.quadraticCurveTo(273, 457, 273, 457) // 左＿下
  ctx.quadraticCurveTo(282, 457, 282, 457) // 右＿下
  ctx.quadraticCurveTo(261, 403, 212, 298) // 右＿上
  ctx.quadraticCurveTo(196, 265, 212, 257) //
  ctx.quadraticCurveTo(206, 254, 206, 254) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 人差し指＿薬指＿人差し指
  ctx.beginPath()
  ctx.moveTo(373, 247) // 左＿下
  ctx.quadraticCurveTo(367, 155, 356, 106) //
  ctx.quadraticCurveTo(347, 76, 363, 50) //
  ctx.quadraticCurveTo(373, 37, 394, 39) // 頂点
  ctx.quadraticCurveTo(430, 44, 443, 69) //
  ctx.quadraticCurveTo(448, 89, 448, 89) // 人差し指＿中指＿溝
  ctx.quadraticCurveTo(450, 124, 464, 246) // 人差し指＿中指＿溝
  ctx.quadraticCurveTo(476, 232, 483, 178) //
  ctx.quadraticCurveTo(485, 160, 485, 160) //
  ctx.quadraticCurveTo(483, 105, 496, 68) //
  ctx.quadraticCurveTo(503, 55, 524, 54) // 中指＿頂点
  ctx.quadraticCurveTo(595, 73, 574, 128) //
  ctx.quadraticCurveTo(557, 196, 550, 277) // 中指＿薬指＿溝
  ctx.quadraticCurveTo(560, 272, 560, 270) //
  ctx.quadraticCurveTo(581, 221, 600, 133) //
  ctx.quadraticCurveTo(607, 110, 626, 108) // 薬指＿頂点手前
  ctx.quadraticCurveTo(670, 112, 675, 147) // 薬指＿頂点後
  ctx.quadraticCurveTo(678, 178, 665, 200) //
  ctx.quadraticCurveTo(641, 274, 607, 335) //
  ctx.quadraticCurveTo(601, 342, 610, 346) // 薬指＿小指＿溝
  ctx.quadraticCurveTo(605, 354, 598, 347) // 薬指＿内側
  ctx.quadraticCurveTo(592, 342, 601, 328) // 薬指
  ctx.quadraticCurveTo(630, 287, 662, 192) // 薬指
  ctx.quadraticCurveTo(679, 158, 660, 132) // 薬指_頂点前
  ctx.quadraticCurveTo(644, 113, 625, 115) // 薬指_頂点後
  ctx.quadraticCurveTo(606, 120, 602, 143) // 薬指
  ctx.quadraticCurveTo(583, 225, 564, 268) //
  ctx.quadraticCurveTo(559, 286, 546, 283) //
  ctx.quadraticCurveTo(541, 283, 543, 275) //
  ctx.quadraticCurveTo(548, 210, 562, 154) //
  ctx.quadraticCurveTo(583, 87, 549, 70) // 中指＿内側＿頂点
  ctx.quadraticCurveTo(516, 50, 504, 68) // 中指＿内側＿頂点後
  ctx.quadraticCurveTo(490, 103, 492, 145) // 中指＿内側＿
  ctx.quadraticCurveTo(488, 198, 475, 244) // 中指＿内側＿
  ctx.quadraticCurveTo(468, 258, 458, 253) // 中指＿人差し指＿内側＿溝
  ctx.quadraticCurveTo(452, 231, 444, 121) // 人差し指＿内側
  ctx.quadraticCurveTo(445, 87, 433, 69) // 人差し指＿内側＿頂点前
  ctx.quadraticCurveTo(405, 35, 370, 51) // 人差し指＿内側＿頂点後
  ctx.quadraticCurveTo(357, 68, 364, 107) // 人差し指＿内側
  ctx.quadraticCurveTo(377, 193, 376, 247) // 人差し指＿ウェブ_付け根
  ctx.quadraticCurveTo(373, 247, 373, 247) // 人差し指＿ウェブ_付け根
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 縦方向
  ctx.beginPath()
  ctx.moveTo(687, 201) // 左＿右
  ctx.quadraticCurveTo(695, 180, 719, 188) //
  ctx.quadraticCurveTo(737, 206, 727, 234) //
  ctx.quadraticCurveTo(688, 353, 688, 353) //
  ctx.quadraticCurveTo(672, 405, 653, 431) //
  ctx.quadraticCurveTo(652, 432, 652, 432) // ヘリ革到達点＿左
  ctx.quadraticCurveTo(659, 439, 659, 439) // ヘリ革到達点＿右
  ctx.quadraticCurveTo(679, 407, 700, 344) //
  ctx.quadraticCurveTo(736, 231, 736, 231) //
  ctx.quadraticCurveTo(744, 190, 715, 180) //
  ctx.quadraticCurveTo(694, 178, 687, 201) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 横方向
  ctx.beginPath()
  ctx.moveTo(735, 201) // 左＿右
  ctx.quadraticCurveTo(738, 205, 736, 205) //
  ctx.quadraticCurveTo(738, 201, 744, 209) //
  ctx.quadraticCurveTo(737, 192, 735, 201) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 人差し指＿縦方向
  ctx.beginPath()
  ctx.moveTo(392, 37) // 左上
  ctx.quadraticCurveTo(391, 39, 391, 39) // 左下
  ctx.quadraticCurveTo(394, 38, 398, 40) // 右下
  ctx.quadraticCurveTo(403, 37, 403, 37) // 右上
  ctx.quadraticCurveTo(392, 37, 392, 37) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 中指＿縦方向
  ctx.beginPath()
  ctx.moveTo(534, 56) // 左＿右
  ctx.quadraticCurveTo(542, 60, 542, 60) //
  ctx.quadraticCurveTo(548, 60, 548, 60) //
  ctx.quadraticCurveTo(543, 57, 543, 57) //
  ctx.quadraticCurveTo(534, 56, 534, 56) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

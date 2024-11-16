export const stitch = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.2
  ctx.strokeStyle = color

  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(149, 299)
  ctx.quadraticCurveTo(150, 294, 164, 311) //
  ctx.quadraticCurveTo(175, 322, 198, 363) //
  ctx.quadraticCurveTo(228, 414, 282, 477) //
  ctx.quadraticCurveTo(313, 508, 362, 541) //
  ctx.quadraticCurveTo(400, 565, 450, 580) //
  ctx.quadraticCurveTo(486, 594, 535, 597) //
  ctx.quadraticCurveTo(542, 600, 549, 609) //
  ctx.moveTo(150, 294)
  ctx.quadraticCurveTo(158, 294, 166, 302) //
  ctx.quadraticCurveTo(183, 320, 205, 363) //
  ctx.quadraticCurveTo(235, 410, 265, 447) //
  ctx.quadraticCurveTo(309, 503, 387, 548) //
  ctx.quadraticCurveTo(455, 583, 533, 591) //
  ctx.quadraticCurveTo(551, 591, 555, 605) //

  // 小指マチ
  ctx.moveTo(615, 102)
  ctx.quadraticCurveTo(614, 122, 624, 129) //
  ctx.quadraticCurveTo(642, 149, 671, 198) //
  ctx.quadraticCurveTo(698, 247, 704, 304) //
  ctx.quadraticCurveTo(708, 362, 699, 400) //
  ctx.quadraticCurveTo(694, 431, 683, 469) //
  ctx.quadraticCurveTo(678, 484, 679, 495) //
  ctx.moveTo(620, 105)
  ctx.quadraticCurveTo(621, 121, 635, 134) //
  ctx.quadraticCurveTo(665, 168, 689, 221) //
  ctx.quadraticCurveTo(711, 268, 712, 332) //
  ctx.quadraticCurveTo(710, 395, 692, 458) //
  ctx.quadraticCurveTo(683, 477, 684, 489) //
  // ctx.quadraticCurveTo() //
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()

  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 親指芯
  ctx.moveTo(124, 322)
  ctx.quadraticCurveTo(128, 325, 127, 331) //
  ctx.moveTo(128, 345)
  ctx.quadraticCurveTo(138, 362, 138, 362) //
  ctx.moveTo(145, 377)
  ctx.quadraticCurveTo(161, 402, 161, 402) //
  ctx.moveTo(168, 416)
  ctx.quadraticCurveTo(189, 445, 191, 445) //
  ctx.moveTo(194, 456)
  ctx.quadraticCurveTo(204, 467, 217, 483) //
  ctx.moveTo(218, 489)
  ctx.quadraticCurveTo(252, 518, 252, 518) //
  ctx.moveTo(255, 525)
  ctx.quadraticCurveTo(284, 545, 284, 545) //
  ctx.moveTo(289, 552)
  ctx.quadraticCurveTo(323, 573, 323, 573) //
  ctx.moveTo(330, 577)
  ctx.quadraticCurveTo(365, 593, 365, 593) //
  ctx.moveTo(373, 597)
  ctx.quadraticCurveTo(406, 607, 406, 608) //
  ctx.moveTo(412, 611)
  ctx.quadraticCurveTo(444, 619, 444, 619) //
  ctx.moveTo(453, 620)
  ctx.quadraticCurveTo(465, 626, 490, 620) //
  ctx.moveTo(497, 623)
  ctx.quadraticCurveTo(528, 615, 528, 615) //
  ctx.moveTo(537, 614)
  ctx.quadraticCurveTo(562, 606, 564, 597) //
  ctx.quadraticCurveTo(602, 555, 656, 513) //
  ctx.quadraticCurveTo(683, 502, 709, 447) //
  ctx.quadraticCurveTo(740, 360, 729, 292) //
  ctx.quadraticCurveTo(704, 168, 639, 117) //

  ctx.moveTo(628, 113)
  ctx.quadraticCurveTo(614, 99, 597, 95) //
  ctx.moveTo(585, 95)
  ctx.quadraticCurveTo(563, 85, 553, 85) //
  ctx.moveTo(543, 85)
  ctx.quadraticCurveTo(509, 79, 509, 79) //
  ctx.moveTo(502, 82)
  ctx.quadraticCurveTo(491, 82, 467, 78) //
  ctx.moveTo(458, 82)
  ctx.quadraticCurveTo(430, 80, 430, 80) //
  ctx.moveTo(419, 85)
  ctx.quadraticCurveTo(410, 87, 393, 85) //
  ctx.moveTo(384, 91)
  ctx.quadraticCurveTo(361, 95, 361, 95) //
  // 小指芯＿ウェブ横の曲線
  ctx.moveTo(354, 106)
  ctx.quadraticCurveTo(343, 113, 350, 125) //
  ctx.moveTo(364, 152)
  ctx.quadraticCurveTo(369, 165, 384, 170) //
  ctx.moveTo(390, 176)
  ctx.quadraticCurveTo(404, 180, 407, 233) //

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

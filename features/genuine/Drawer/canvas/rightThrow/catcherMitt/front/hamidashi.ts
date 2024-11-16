export const hamidashi = (ctx: CanvasRenderingContext2D, hamidashiColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  // stitch
  // 親指マチ内
  ctx.fillStyle = hamidashiColor
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
  ctx.strokeStyle = '#383838'
}

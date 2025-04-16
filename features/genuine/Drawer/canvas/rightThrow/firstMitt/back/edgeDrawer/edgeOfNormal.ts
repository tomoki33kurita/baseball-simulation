export const edgesOfNormal = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(300, 611) // 左上
  ctx.quadraticCurveTo(295, 616, 300, 620) // 左下
  ctx.quadraticCurveTo(336, 640, 409, 633) //
  ctx.quadraticCurveTo(336, 640, 449, 630) //
  ctx.quadraticCurveTo(469, 622, 490, 627) // 右下
  ctx.quadraticCurveTo(500, 622, 497, 617) // 右上
  ctx.quadraticCurveTo(469, 607, 414, 620) //
  ctx.quadraticCurveTo(330, 632, 300, 611) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 手の甲＿窓部分
  ctx.beginPath()
  ctx.moveTo(269, 487) // ベルト＿左上の左上
  ctx.quadraticCurveTo(265, 496, 272, 503) // ベルト＿左上の左下
  ctx.quadraticCurveTo(463, 499, 463, 499) // ベルト＿右上カーブ突入
  ctx.quadraticCurveTo(511, 483, 514, 443) // ベルト＿右カーブ中央
  ctx.quadraticCurveTo(510, 402, 474, 390) //
  ctx.quadraticCurveTo(433, 373, 365, 376) //
  ctx.quadraticCurveTo(318, 383, 277, 407) //
  ctx.quadraticCurveTo(243, 440, 253, 495) //
  ctx.quadraticCurveTo(284, 610, 284, 610) //
  ctx.quadraticCurveTo(283, 608, 280, 609) //
  ctx.quadraticCurveTo(285, 624, 301, 611) // 左下＿折り返し
  ctx.quadraticCurveTo(290, 552, 270, 502) //
  ctx.quadraticCurveTo(265, 462, 277, 435) //
  ctx.quadraticCurveTo(305, 400, 361, 392) //
  ctx.quadraticCurveTo(311, 402, 361, 392) //
  ctx.quadraticCurveTo(384, 383, 447, 398) //
  ctx.quadraticCurveTo(475, 405, 492, 425) //
  ctx.quadraticCurveTo(506, 432, 482, 467) //
  ctx.quadraticCurveTo(452, 489, 414, 486) //
  ctx.quadraticCurveTo(335, 482, 269, 487) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

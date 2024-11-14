export const thumbHook = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 紐＿先端＿上
  ctx.beginPath()
  ctx.moveTo(595, 462) // 左上
  ctx.quadraticCurveTo(561, 526, 561, 526) // 左下
  ctx.quadraticCurveTo(563, 555, 563, 555) // 右下
  ctx.quadraticCurveTo(577, 511, 606, 462) // 右上
  ctx.quadraticCurveTo(595, 462, 595, 462) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 結び目＿上
  ctx.beginPath()
  ctx.moveTo(562, 521) // 左上
  ctx.quadraticCurveTo(550, 542, 550, 542) // 左下
  ctx.quadraticCurveTo(555, 543, 562, 551) // 右下
  ctx.quadraticCurveTo(560, 540, 562, 521) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 結び目＿中央右
  ctx.beginPath()
  ctx.moveTo(550, 542) // 左上
  ctx.quadraticCurveTo(546, 566, 560, 570) // 右下
  ctx.quadraticCurveTo(572, 559, 561, 551) //
  ctx.quadraticCurveTo(550, 542, 550, 542) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 結び目＿中央左
  ctx.beginPath()
  ctx.moveTo(548, 546) // 左上
  ctx.quadraticCurveTo(539, 561, 539, 561) // 左下
  ctx.quadraticCurveTo(549, 563, 549, 563) // 右下
  ctx.quadraticCurveTo(548, 546, 548, 546) // 右下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 結び目＿左下
  ctx.beginPath()
  ctx.moveTo(541, 560) // 左上
  ctx.quadraticCurveTo(539, 565, 536, 569) // 左下
  ctx.quadraticCurveTo(544, 572, 552, 567) // 右下
  ctx.quadraticCurveTo(548, 561, 548, 561) // 右上
  ctx.quadraticCurveTo(544, 564, 541, 560) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 紐＿先端＿下
  ctx.beginPath()
  ctx.moveTo(536, 569) // 左上
  ctx.quadraticCurveTo(504, 611, 505, 621) // 左下
  ctx.quadraticCurveTo(505, 625, 507, 630) //
  ctx.quadraticCurveTo(521, 629, 518, 629) // 右下
  ctx.quadraticCurveTo(528, 599, 554, 570) // 右上
  ctx.quadraticCurveTo(551, 567, 551, 567) //
  ctx.quadraticCurveTo(544, 569, 536, 569) // 左上
  ctx.fill()
  ctx.moveTo(210, 466) // 上
  ctx.quadraticCurveTo(230, 510, 238, 574) // 下
  ctx.stroke()
  ctx.closePath()
}

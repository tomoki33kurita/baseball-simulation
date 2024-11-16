export const thumbHook = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 紐＿斜め右上方向
  ctx.beginPath()
  ctx.moveTo(495, 577) // 左下
  ctx.quadraticCurveTo(497, 582, 501, 577) // 左下
  ctx.quadraticCurveTo(514, 572, 519, 578) // 右下
  ctx.quadraticCurveTo(521, 572, 527, 571) //
  ctx.quadraticCurveTo(530, 550, 530, 550) // 結び目の中
  ctx.quadraticCurveTo(544, 542, 560, 522) //
  ctx.quadraticCurveTo(571, 509, 597, 491) //
  ctx.quadraticCurveTo(574, 490, 547, 526) //
  ctx.quadraticCurveTo(533, 539, 513, 550) // 結び目の中
  ctx.quadraticCurveTo(502, 565, 495, 577) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 紐先端＿左下
  ctx.beginPath()
  ctx.moveTo(475, 585) // 左下
  ctx.quadraticCurveTo(496, 577, 496, 577) // 右下
  ctx.quadraticCurveTo(503, 564, 503, 564) // 右上
  ctx.quadraticCurveTo(497, 562, 475, 585) // 右下
  ctx.fill()
  ctx.moveTo(479, 584) // 左下
  ctx.quadraticCurveTo(493, 567, 502, 566) // 左下
  ctx.stroke()
  ctx.closePath()

  // 結び目横方向
  ctx.beginPath()
  ctx.moveTo(506, 554) // 左上
  ctx.quadraticCurveTo(514, 567, 526, 573) // 左下
  ctx.quadraticCurveTo(533, 553, 533, 550) // 左下
  ctx.quadraticCurveTo(525, 544, 524, 538) // 左下
  ctx.quadraticCurveTo(515, 540, 506, 554) // 左上
  ctx.fill()
  ctx.moveTo(507, 553) // 左上
  ctx.quadraticCurveTo(515, 563, 527, 572) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const webKnots = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number, scaleSize?: number): void => {
  ctx.strokeStyle = 'gray' //'#383838'
  ctx.lineWidth = 0.5
  ctx.fillStyle = color
  // ウェブ先端側の結び目
  // 左側の先端紐
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  if (scaleSize !== undefined) {
    ctx.scale(scaleSize, scaleSize)
  }
  // 紐左
  ctx.beginPath()
  ctx.moveTo(554 + x, 123 + y) // 左上
  ctx.quadraticCurveTo(548 + x, 131 + y, 548 + x, 131 + y) // 左下
  ctx.quadraticCurveTo(565 + x, 165 + y, 609 + x, 202 + y) // 右下
  ctx.quadraticCurveTo(610 + x, 200 + y, 618 + x, 196 + y) // 右上
  ctx.quadraticCurveTo(577 + x, 164 + y, 554 + x, 123 + y) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 側面
  ctx.beginPath()
  ctx.moveTo(553 + x, 125 + y) // 左上
  ctx.quadraticCurveTo(578 + x, 170 + y, 619 + x, 200 + y) // 右上
  ctx.stroke()
  ctx.closePath()

  // 結び目本体＿左
  ctx.beginPath()
  ctx.moveTo(625 + x, 194 + y) // 左上
  ctx.quadraticCurveTo(612 + x, 196 + y, 604 + x, 209 + y)
  ctx.quadraticCurveTo(605 + x, 217 + y, 614 + x, 221 + y)
  ctx.quadraticCurveTo(622 + x, 208 + y, 634 + x, 204 + y)
  ctx.quadraticCurveTo(637 + x, 195 + y, 625 + x, 194 + y)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 側面
  ctx.beginPath()
  ctx.moveTo(634 + x, 201 + y)
  ctx.quadraticCurveTo(618 + x, 201 + y, 613 + x, 219 + y)
  ctx.stroke()
  ctx.closePath()

  // 結び目本体＿右上
  ctx.beginPath()
  ctx.moveTo(627 + x, 207 + y) // 左上
  ctx.quadraticCurveTo(621 + x, 208 + y, 619 + x, 216 + y)
  ctx.quadraticCurveTo(632 + x, 224 + y, 647 + x, 215 + y)
  ctx.quadraticCurveTo(648 + x, 206 + y, 644 + x, 204 + y)
  ctx.quadraticCurveTo(636 + x, 212 + y, 628 + x, 207 + y)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 側面
  ctx.beginPath()
  ctx.moveTo(626 + x, 207 + y) // 左下
  ctx.quadraticCurveTo(636 + x, 213 + y, 644 + x, 204 + y)
  ctx.quadraticCurveTo(641 + x, 200 + y, 627 + x, 207 + y)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 結び目本体＿右下
  ctx.beginPath()
  ctx.moveTo(618 + x, 216 + y) // 左上
  ctx.quadraticCurveTo(620 + x, 226 + y, 620 + x, 226 + y)
  ctx.quadraticCurveTo(628 + x, 229 + y, 628 + x, 229 + y)
  ctx.quadraticCurveTo(628 + x, 221 + y, 629 + x, 219 + y)
  ctx.quadraticCurveTo(624 + x, 221 + y, 618 + x, 216 + y)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 側面
  ctx.beginPath()
  ctx.moveTo(618 + x, 216 + y) // 左上
  ctx.quadraticCurveTo(614 + x, 220 + y, 614 + x, 220 + y)
  ctx.quadraticCurveTo(620 + x, 226 + y, 620 + x, 226 + y)
  ctx.quadraticCurveTo(620 + x, 226 + y, 618 + x, 216 + y)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 結び目右下_側面
  ctx.beginPath()
  ctx.moveTo(629 + x, 220 + y) // 左上
  ctx.quadraticCurveTo(628 + x, 224 + y, 628 + x, 228 + y)
  ctx.quadraticCurveTo(633 + x, 233 + y, 633 + x, 233 + y)
  ctx.quadraticCurveTo(636 + x, 223 + y, 634 + x, 219 + y)
  ctx.quadraticCurveTo(629 + x, 220 + y, 629 + x, 220 + y)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 結び目右下
  ctx.beginPath()
  ctx.moveTo(632 + x, 233 + y) // 左下
  ctx.quadraticCurveTo(645 + x, 229 + y, 633 + x, 219 + y)
  ctx.quadraticCurveTo(636 + x, 226 + y, 632 + x, 233 + y)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 紐＿右
  ctx.beginPath()
  ctx.moveTo(634 + x, 220 + y) // 左上
  ctx.quadraticCurveTo(683 + x, 309 + y, 683 + x, 309 + y) // 左下
  ctx.quadraticCurveTo(690 + x, 310 + y, 690 + x, 304 + y) // 右下
  ctx.quadraticCurveTo(645 + x, 222 + y, 645 + x, 218 + y) // 右上
  ctx.quadraticCurveTo(634 + x, 220 + y, 634 + x, 220 + y) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 側面
  ctx.beginPath()
  ctx.moveTo(643 + x, 218 + y) //上
  ctx.quadraticCurveTo(662 + x, 260 + y, 689 + x, 306 + y) // 右下
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const verticalKnot = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator: number, scaleSize: number): void => {
  ctx.strokeStyle = 'gray' //'#383838'
  ctx.lineWidth = 0.5
  ctx.fillStyle = color
  ctx.save()
  ctx.rotate((numerator * Math.PI) / 180)

  //  先端上向き
  ctx.beginPath()
  ctx.scale(scaleSize, scaleSize)
  ctx.moveTo(127 + x, 382 + y) // 左上
  ctx.quadraticCurveTo(121 + x, 386 + y, 123 + x, 397 + y) // 左下
  ctx.quadraticCurveTo(132 + x, 395 + y, 132 + x, 395 + y) // 右下
  ctx.quadraticCurveTo(127 + x, 382 + y, 127 + x, 382 + y) // 左下
  ctx.fill()
  ctx.moveTo(127 + x, 385 + y) // 右上
  ctx.quadraticCurveTo(124 + x, 388 + y, 126 + x, 393 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  //  先端上向き
  ctx.beginPath()
  ctx.scale(scaleSize, scaleSize)
  ctx.moveTo(113 + x, 310 + y) // 左上
  ctx.quadraticCurveTo(124 + x, 374 + y, 128 + x, 386 + y) // 左下
  ctx.quadraticCurveTo(138 + x, 380 + y, 138 + x, 380 + y) // 右下
  ctx.quadraticCurveTo(131 + x, 368 + y, 123 + x, 306 + y) // 右上
  ctx.quadraticCurveTo(113 + x, 310 + y, 113 + x, 310 + y) // 左上
  ctx.fill()
  ctx.moveTo(120 + x, 307 + y) // 上
  ctx.quadraticCurveTo(127 + x, 359 + y, 134 + x, 379 + y) // 下
  // ctx.quadraticCurveTo(134+x, 449+y, 144+x, 493+y) // 下
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.scale(scaleSize, scaleSize)
  // 先端下向き
  ctx.moveTo(135 + x, 493 + y) // 左下
  ctx.quadraticCurveTo(144 + x, 493 + y, 144 + x, 493 + y) // 右下
  ctx.quadraticCurveTo(145 + x, 488 + y, 145 + x, 488 + y) // 右下奥
  ctx.quadraticCurveTo(140 + x, 468 + y, 138 + x, 431 + y) //
  ctx.quadraticCurveTo(138 + x, 408 + y, 136 + x, 400 + y) //
  ctx.quadraticCurveTo(136 + x, 392 + y, 145 + x, 388 + y) //
  ctx.quadraticCurveTo(146 + x, 380 + y, 140 + x, 375 + y) //
  ctx.quadraticCurveTo(125 + x, 385 + y, 126 + x, 397 + y) //
  ctx.quadraticCurveTo(126 + x, 457 + y, 135 + x, 493 + y) //
  ctx.fill()
  ctx.moveTo(144 + x, 383 + y) // 右上
  ctx.quadraticCurveTo(131 + x, 390 + y, 133 + x, 399 + y) // 左下
  ctx.quadraticCurveTo(134 + x, 449 + y, 144 + x, 493 + y) // 下
  ctx.stroke()
  ctx.closePath()

  // 結び目＿横
  ctx.beginPath()
  ctx.scale(scaleSize, scaleSize)
  ctx.moveTo(119 + x, 399 + y) // 左上
  ctx.quadraticCurveTo(117 + x, 409 + y, 124 + x, 411 + y) // 左下
  ctx.quadraticCurveTo(144 + x, 409 + y, 144 + x, 387 + y) // 右上右
  ctx.quadraticCurveTo(138 + x, 387 + y, 134 + x, 396 + y) // 右上左
  ctx.quadraticCurveTo(119 + x, 399 + y, 119 + x, 399 + y) // 左上
  ctx.fill()
  ctx.moveTo(138 + x, 389 + y) // 上
  ctx.quadraticCurveTo(139 + x, 400 + y, 129 + x, 400 + y) //
  ctx.quadraticCurveTo(118 + x, 402 + y, 118 + x, 402 + y) //
  ctx.stroke()
  ctx.closePath()

  ctx.restore()
}

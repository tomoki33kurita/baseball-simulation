// 左Y軸用
export const jointOfIndexFinger = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, x: number, y: number): void => {
  // 指袋とウェブのジョイント
  ctx.beginPath()
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColor
  ctx.moveTo(510 + x, 86 + y) // 左下_1
  ctx.quadraticCurveTo(512 + x, 90 + y, 514 + x, 84 + y) // 左下内
  ctx.quadraticCurveTo(513 + x, 80 + y, 513 + x, 80 + y) // 左内
  ctx.quadraticCurveTo(524 + x, 75 + y, 527 + x, 88 + y) // 右下内
  ctx.quadraticCurveTo(530 + x, 88 + y, 528 + x, 88 + y) // 右下外
  ctx.quadraticCurveTo(534 + x, 82 + y, 545 + x, 54 + y) // 右上
  ctx.quadraticCurveTo(529 + x, 45 + y, 522 + x, 51 + y) // 左上
  ctx.quadraticCurveTo(514 + x, 72 + y, 509 + x, 77 + y) // 左下
  ctx.quadraticCurveTo(510 + x, 86 + y, 510 + x, 86 + y) // 左下_1
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 断面の白色
  ctx.beginPath()
  ctx.lineWidth = 2.0
  ctx.strokeStyle = '#eee'
  ctx.moveTo(512 + x, 87 + y) // 左下
  ctx.quadraticCurveTo(511 + x, 80 + y, 511 + x, 80 + y) // 左上
  ctx.quadraticCurveTo(525 + x, 73 + y, 528 + x, 88 + y) // 右
  ctx.stroke()
  ctx.closePath()
  // lace ここから
  ctx.beginPath()
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.moveTo(513 + x, 88 + y) // 左下
  ctx.quadraticCurveTo(517 + x, 92 + y, 523 + x, 91 + y) // 右下
  ctx.quadraticCurveTo(527 + x, 87 + y, 523 + x, 83 + y) // 右上
  ctx.quadraticCurveTo(518 + x, 78 + y, 514 + x, 82 + y) // 左上
  ctx.quadraticCurveTo(513 + x, 88 + y, 513 + x, 88 + y) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 側面ライン
  ctx.beginPath()
  ctx.lineWidth = 1.1
  ctx.strokeStyle = '#383838'
  ctx.moveTo(521 + x, 90 + y) // 下
  ctx.quadraticCurveTo(522 + x, 82 + y, 524 + x, 84 + y) // 上
  ctx.stroke()
  ctx.fillStyle = webColor
  ctx.closePath()
}

export const jointOfCatchFace = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, x: number, y: number): void => {
  // 指袋とウェブのジョイント
  ctx.beginPath()
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColor
  ctx.moveTo(486 + x, 281 + y) // 左下
  ctx.quadraticCurveTo(515 + x, 315 + y, 515 + x, 315 + y) // 右下
  ctx.quadraticCurveTo(525 + x, 315 + y, 531 + x, 301 + y) // 右上
  ctx.quadraticCurveTo(500 + x, 266 + y, 500 + x, 266 + y) // 左上
  ctx.quadraticCurveTo(495 + x, 277 + y, 486 + x, 281 + y) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // laceここから
  ctx.beginPath()
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.moveTo(485 + x, 279 + y) // 左下
  ctx.quadraticCurveTo(491 + x, 279 + y, 495 + x, 272 + y) // 右下
  ctx.quadraticCurveTo(490 + x, 268 + y, 486 + x, 272 + y) // 左上
  ctx.quadraticCurveTo(485 + x, 279 + y, 485 + x, 279 + y) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const jointOfThumbFinger2 = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, x: number, y: number): void => {
  // 指袋とウェブのジョイント
  ctx.beginPath()
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColor
  ctx.moveTo(609 + x, 370 + y) // 左下
  ctx.quadraticCurveTo(628 + x, 370 + y, 638 + x, 353 + y) // 右下
  ctx.quadraticCurveTo(641 + x, 345 + y, 635 + x, 340 + y) // 右上
  ctx.quadraticCurveTo(626 + x, 347 + y, 609 + x, 355 + y) // 左上
  ctx.quadraticCurveTo(610 + x, 352 + y, 609 + x, 370 + y) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 断面ここから
  ctx.beginPath()
  ctx.lineWidth = 2.0
  ctx.strokeStyle = '#eee'
  ctx.moveTo(612 + x, 358 + y) // 左
  ctx.quadraticCurveTo(615 + x, 355 + y, 612 + x, 368 + y) // 右下
  ctx.stroke()
  ctx.strokeStyle = '#383838'
  ctx.closePath()
  // laceここから
  ctx.beginPath()
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.moveTo(598 + x, 366 + y) //左下
  ctx.quadraticCurveTo(607 + x, 369 + y, 611 + x, 365 + y) // 右下
  ctx.quadraticCurveTo(613 + x, 359 + y, 608 + x, 359 + y) // 右上
  ctx.quadraticCurveTo(601 + x, 358 + y, 601 + x, 358 + y) // 左上
  ctx.quadraticCurveTo(597 + x, 361 + y, 598 + x, 366 + y) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

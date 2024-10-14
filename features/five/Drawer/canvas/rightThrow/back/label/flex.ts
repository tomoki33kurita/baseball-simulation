import { State } from '@/features/five/types'

// Fレックス
export const flexEngraving = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, rotate: number, scaleSize: number): void => {
  ctx.save()
  ctx.rotate((rotate * Math.PI) / 180)
  ctx.scale(scaleSize, scaleSize)

  back(ctx, color, x, y)
  stomach(ctx, color, x, y)
  arms(ctx, color, x, y)
  legs(ctx, color, x, y)
  glove(ctx, color, x, y)
  head(ctx, color, x, y)
  text(ctx, color, x, y)
  ctx.restore()
}

const back = (ctx: CanvasRenderingContext2D, strokeColor: string, x: number, y: number): void => {
  ctx.lineWidth = 2.5
  ctx.strokeStyle = strokeColor
  ctx.beginPath()
  ctx.moveTo(143 + x, 423 + y) // うなじ
  ctx.quadraticCurveTo(155 + x, 444 + y, 178 + x, 447 + y)
  ctx.quadraticCurveTo(204 + x, 452 + y, 218 + x, 470 + y)
  ctx.quadraticCurveTo(231 + x, 485 + y, 249 + x, 489 + y)
  ctx.quadraticCurveTo(279 + x, 493 + y, 296 + x, 463 + y) // 尻 + y尾
  ctx.quadraticCurveTo(287 + x, 498 + y, 259 + x, 514 + y)

  // 背中の模様👇
  ctx.moveTo(144 + x, 425 + y)
  ctx.quadraticCurveTo(132 + x, 452 + y, 132 + x, 452 + y)
  ctx.quadraticCurveTo(153 + x, 437 + y, 153 + x, 437 + y)

  ctx.moveTo(163 + x, 443 + y)
  ctx.quadraticCurveTo(160 + x, 460 + y, 152 + x, 474 + y)
  ctx.quadraticCurveTo(170 + x, 466 + y, 179 + x, 447 + y)

  ctx.moveTo(191 + x, 451 + y)
  ctx.quadraticCurveTo(192 + x, 468 + y, 186 + x, 483 + y)
  ctx.quadraticCurveTo(201 + x, 478 + y, 209 + x, 461 + y)

  ctx.moveTo(218 + x, 472 + y)
  ctx.quadraticCurveTo(213 + x, 496 + y, 213 + x, 496 + y)
  ctx.quadraticCurveTo(224 + x, 489 + y, 230 + x, 481 + y)

  ctx.moveTo(243 + x, 488 + y)
  ctx.quadraticCurveTo(248 + x, 506 + y, 248 + x, 508 + y)
  ctx.quadraticCurveTo(257 + x, 500 + y, 259 + x, 489 + y)

  ctx.stroke()
  ctx.closePath()
}

const stomach = (ctx: CanvasRenderingContext2D, strokeColor: string, x: number, y: number): void => {
  ctx.lineWidth = 2.5
  ctx.strokeStyle = strokeColor
  // 左（右腕側）
  ctx.beginPath()
  ctx.moveTo(111 + x, 455 + y) // 左上
  ctx.quadraticCurveTo(109 + x, 482 + y, 130 + x, 498 + y) //下
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(146 + x, 509 + y) // 上
  ctx.quadraticCurveTo(164 + x, 521 + y, 186 + x, 523 + y)
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(224 + x, 523 + y) //
  ctx.quadraticCurveTo(244 + x, 524 + y, 259 + x, 514 + y)
  ctx.stroke()
  ctx.closePath()

  // 右（左腕側）
  ctx.beginPath()
  ctx.moveTo(121 + x, 448 + y) //
  ctx.quadraticCurveTo(128 + x, 475 + y, 143 + x, 487 + y)
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(159 + x, 498 + y) // 下
  ctx.quadraticCurveTo(179 + x, 507 + y, 179 + x, 507 + y)
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(226 + x, 514 + y) // 下
  ctx.quadraticCurveTo(238 + x, 517 + y, 259 + x, 514 + y) // 最右
  ctx.stroke()
  ctx.closePath()
}

const arms = (ctx: CanvasRenderingContext2D, strokeColor: string, x: number, y: number): void => {
  ctx.lineWidth = 2.5
  ctx.strokeStyle = strokeColor // '#ccc'

  // right
  ctx.beginPath()
  ctx.moveTo(117 + x, 482 + y) //左上
  ctx.quadraticCurveTo(97 + x, 496 + y, 97 + x, 509 + y)
  ctx.moveTo(127 + x, 494 + y) // 右上
  ctx.quadraticCurveTo(119 + x, 494 + y, 116 + x, 504 + y)
  ctx.stroke()
  ctx.closePath()

  // left
  ctx.beginPath()
  ctx.moveTo(145 + x, 479 + y) // 左上
  ctx.quadraticCurveTo(143 + x, 494 + y, 143 + x, 494 + y)
  ctx.quadraticCurveTo(132 + x, 493 + y, 124 + x, 504 + y)
  ctx.moveTo(163 + x, 485 + y) // 右上
  ctx.quadraticCurveTo(159 + x, 505 + y, 142 + x, 513 + y)
  ctx.stroke()
  ctx.closePath()
}

const legs = (ctx: CanvasRenderingContext2D, strokeColor: string, x: number, y: number): void => {
  ctx.lineWidth = 2.5
  ctx.strokeStyle = strokeColor // '#ccc'

  // 右足
  ctx.beginPath()
  ctx.moveTo(164 + x, 518 + y) // 下
  ctx.quadraticCurveTo(171 + x, 528 + y, 171 + x, 537 + y)
  ctx.quadraticCurveTo(155 + x, 553 + y, 143 + x, 556 + y)
  ctx.quadraticCurveTo(159 + x, 556 + y, 159 + x, 556 + y)
  ctx.quadraticCurveTo(155 + x, 563 + y, 155 + x, 563 + y)
  ctx.quadraticCurveTo(168 + x, 557 + y, 168 + x, 557 + y)
  ctx.quadraticCurveTo(167 + x, 563 + y, 167 + x, 563 + y)
  ctx.quadraticCurveTo(193 + x, 556 + y, 194 + x, 529 + y)
  ctx.moveTo(154 + x, 551 + y)
  ctx.quadraticCurveTo(162 + x, 556 + y, 179 + x, 557 + y)
  ctx.stroke()
  ctx.closePath()

  // 左足
  ctx.beginPath()
  ctx.moveTo(179 + x, 490 + y) //
  ctx.quadraticCurveTo(181 + x, 527 + y, 203 + x, 537 + y)
  ctx.quadraticCurveTo(203 + x, 545 + y, 203 + x, 545 + y)
  ctx.quadraticCurveTo(194 + x, 560 + y, 179 + x, 566 + y)
  ctx.quadraticCurveTo(186 + x, 567 + y, 194 + x, 563 + y)
  ctx.quadraticCurveTo(191 + x, 572 + y, 191 + x, 572 + y)
  ctx.quadraticCurveTo(203 + x, 566 + y, 203 + x, 566 + y)
  ctx.quadraticCurveTo(202 + x, 575 + y, 202 + x, 575 + y)
  ctx.quadraticCurveTo(214 + x, 575 + y, 217 + x, 567 + y)
  ctx.quadraticCurveTo(231 + x, 544 + y, 223 + x, 525 + y)
  ctx.quadraticCurveTo(228 + x, 514 + y, 224 + x, 498 + y)
  ctx.moveTo(190 + x, 559 + y) //
  ctx.quadraticCurveTo(201 + x, 565 + y, 215 + x, 568 + y)
  ctx.stroke()
  ctx.closePath()
}

const glove = (ctx: CanvasRenderingContext2D, strokeColor: string, x: number, y: number): void => {
  ctx.lineWidth = 2.5
  ctx.strokeStyle = strokeColor // '#ccc'

  // ウェブ
  ctx.beginPath()
  ctx.moveTo(94 + x, 520 + y) //
  ctx.quadraticCurveTo(94 + x, 529 + y, 100 + x, 533 + y)
  ctx.quadraticCurveTo(113 + x, 523 + y, 113 + x, 523 + y)
  ctx.quadraticCurveTo(110 + x, 515 + y, 110 + x, 516 + y)
  ctx.quadraticCurveTo(94 + x, 518 + y, 94 + x, 520 + y)
  ctx.stroke()
  ctx.closePath()

  // グラブ_指_輪郭
  ctx.beginPath()
  ctx.moveTo(93 + x, 518 + y) //
  ctx.quadraticCurveTo(95 + x, 506 + y, 124 + x, 504 + y)
  ctx.quadraticCurveTo(142 + x, 513 + y, 142 + x, 513 + y)
  ctx.quadraticCurveTo(143 + x, 532 + y, 126 + x, 545 + y)
  ctx.quadraticCurveTo(122 + x, 547 + y, 118 + x, 543 + y)
  ctx.quadraticCurveTo(113 + x, 545 + y, 112 + x, 540 + y)
  ctx.quadraticCurveTo(107 + x, 543 + y, 104 + x, 536 + y)
  ctx.quadraticCurveTo(99 + x, 538 + y, 99 + x, 532 + y)

  // 指股
  ctx.moveTo(105 + x, 537 + y) //
  ctx.quadraticCurveTo(112 + x, 534 + y, 119 + x, 524 + y)
  ctx.moveTo(112 + x, 541 + y) //
  ctx.quadraticCurveTo(120 + x, 536 + y, 124 + x, 526 + y)
  ctx.moveTo(120 + x, 543 + y) //
  ctx.quadraticCurveTo(128 + x, 538 + y, 130 + x, 529 + y)

  // 手口のバンド
  ctx.moveTo(115 + x, 514 + y) // 下_左
  ctx.quadraticCurveTo(122 + x, 522 + y, 133 + x, 524 + y)
  ctx.quadraticCurveTo(138 + x, 518 + y, 138 + x, 518 + y)
  ctx.quadraticCurveTo(128 + x, 515 + y, 121 + x, 510 + y)
  ctx.quadraticCurveTo(115 + x, 514 + y, 115 + x, 514 + y)

  ctx.stroke()
  ctx.closePath()
}

const head = (ctx: CanvasRenderingContext2D, strokeColor: string, x: number, y: number): void => {
  ctx.lineWidth = 2.5
  ctx.strokeStyle = strokeColor // '#ccc'
  ctx.beginPath()
  ctx.moveTo(143 + x, 423 + y) // うなじ
  ctx.quadraticCurveTo(132 + x, 395 + y, 100 + x, 385 + y) // 左耳の横

  ctx.moveTo(103 + x, 393 + y) // 左耳
  ctx.quadraticCurveTo(102 + x, 383 + y, 95 + x, 376 + y)
  ctx.quadraticCurveTo(85 + x, 390 + y, 85 + x, 390 + y)

  // 左耳の右から鼻の上
  ctx.moveTo(89 + x, 383 + y)
  ctx.quadraticCurveTo(80 + x, 383 + y, 80 + x, 383 + y)
  ctx.quadraticCurveTo(74 + x, 374 + y, 74 + x, 374 + y)
  ctx.quadraticCurveTo(61 + x, 386 + y, 54 + x, 405 + y)

  ctx.moveTo(97 + x, 419 + y) // 左目の横
  ctx.quadraticCurveTo(77 + x, 403 + y, 53 + x, 405 + y)
  ctx.quadraticCurveTo(27 + x, 416 + y, 40 + x, 445 + y) // 鼻の下
  ctx.quadraticCurveTo(75 + x, 449 + y, 104 + x, 433 + y)
  ctx.quadraticCurveTo(110 + x, 423 + y, 125 + x, 426 + y)
  ctx.quadraticCurveTo(132 + x, 446 + y, 111 + x, 455 + y)
  ctx.quadraticCurveTo(95 + x, 470 + y, 74 + x, 469 + y)
  ctx.quadraticCurveTo(67 + x, 459 + y, 76 + x, 443 + y) // 口と鼻の結合部分＿左

  // 口の中の輪郭
  ctx.moveTo(77 + x, 443 + y) // 口と鼻の結合部分＿右
  ctx.quadraticCurveTo(69 + x, 460 + y, 73 + x, 466 + y)
  ctx.quadraticCurveTo(102 + x, 456 + y, 105 + x, 432 + y)
  // 口の中の舌
  ctx.moveTo(97 + x, 436 + y) // 口の中の舌
  ctx.quadraticCurveTo(96 + x, 445 + y, 96 + x, 445 + y)
  ctx.quadraticCurveTo(90 + x, 444 + y, 90 + x, 444 + y)
  ctx.quadraticCurveTo(91 + x, 450 + y, 91 + x, 450 + y)
  ctx.quadraticCurveTo(86 + x, 449 + y, 86 + x, 449 + y)
  ctx.quadraticCurveTo(86 + x, 454 + y, 86 + x, 454 + y)
  ctx.quadraticCurveTo(80 + x, 454 + y, 80 + x, 454 + y)
  ctx.quadraticCurveTo(81 + x, 461 + y, 81 + x, 461 + y)

  // 鼻の穴
  // 左
  ctx.moveTo(42 + x, 417 + y) //
  ctx.quadraticCurveTo(44 + x, 425 + y, 44 + x, 425 + y)
  ctx.moveTo(54 + x, 418 + y) //
  ctx.quadraticCurveTo(51 + x, 424 + y, 51 + x, 424 + y)
  ctx.stroke()
  ctx.closePath()

  // 右目
  ctx.beginPath()
  ctx.lineWidth = 2.5
  ctx.moveTo(55 + x, 404 + y) //
  ctx.quadraticCurveTo(62 + x, 390 + y, 64 + x, 390 + y)
  ctx.quadraticCurveTo(69 + x, 387 + y, 70 + x, 393 + y)
  ctx.quadraticCurveTo(71 + x, 406 + y, 71 + x, 406 + y)
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.lineWidth = 2.5
  ctx.moveTo(62 + x, 404 + y) //
  ctx.quadraticCurveTo(70 + x, 405 + y, 70 + x, 406 + y)
  ctx.quadraticCurveTo(69 + x, 397 + y, 69 + x, 396 + y)
  ctx.quadraticCurveTo(62 + x, 395 + y, 62 + x, 404 + y)
  ctx.fillStyle = strokeColor
  ctx.fill()
  ctx.closePath()

  // 右目
  ctx.beginPath()
  ctx.moveTo(74 + x, 406 + y) //
  ctx.quadraticCurveTo(82 + x, 395 + y, 89 + x, 392 + y)
  ctx.quadraticCurveTo(95 + x, 393 + y, 96 + x, 398 + y)
  ctx.quadraticCurveTo(98 + x, 404 + y, 94 + x, 415 + y)
  ctx.stroke()

  ctx.beginPath()
  ctx.lineWidth = 2.5
  ctx.moveTo(84 + x, 410 + y) //
  ctx.quadraticCurveTo(93 + x, 415 + y, 93 + x, 415 + y)
  ctx.quadraticCurveTo(96 + x, 404 + y, 95 + x, 400 + y)
  ctx.quadraticCurveTo(83 + x, 398 + y, 84 + x, 410 + y)
  ctx.fillStyle = strokeColor
  ctx.fill()
  ctx.closePath()

  ctx.closePath()
}

const text = (ctx: CanvasRenderingContext2D, strokeColor: string, x: number, y: number): void => {
  ctx.lineWidth = 2.5
  ctx.strokeStyle = strokeColor // '#ccc'

  const FIVE = 'FIVE'
  const GRAB_THE_FUTURE = 'Grab the Future'

  ctx.save()
  ctx.rotate((1 * Math.PI) / 180)

  ctx.strokeStyle = strokeColor
  ctx.beginPath()
  ctx.font = '20px serif'
  ctx.strokeText(FIVE, 185 + x, 580 + y)
  ctx.font = '18px serif'
  ctx.strokeText(GRAB_THE_FUTURE, 145 + x, 600 + y)
  ctx.closePath()

  ctx.restore()
}

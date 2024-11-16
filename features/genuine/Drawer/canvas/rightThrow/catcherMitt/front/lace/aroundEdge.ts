export const aroundEdge0 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 親指
  ctx.beginPath()
  ctx.moveTo(103, 333) // 左下
  ctx.quadraticCurveTo(105, 309, 124, 322) // 右下
  ctx.quadraticCurveTo(126, 319, 121, 314) // 右上
  ctx.quadraticCurveTo(113, 310, 107, 313) // 中央上
  ctx.quadraticCurveTo(95, 322, 103, 333) // 左下
  ctx.fill()
  // ctx.moveTo(104, 350) // 左
  // ctx.quadraticCurveTo(110, 335, 133, 340) // 右
  ctx.stroke()
  ctx.closePath()
}

export const aroundEdge1 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 親指
  ctx.beginPath()
  ctx.moveTo(100 + x, 342 + y) // 左上
  ctx.quadraticCurveTo(100 + x, 350 + y, 108 + x, 351 + y) // 左下＿外
  ctx.quadraticCurveTo(109 + x, 347 + y, 113 + x, 344 + y) //
  ctx.quadraticCurveTo(121 + x, 340 + y, 129 + x, 343 + y) // 右下
  ctx.quadraticCurveTo(141 + x, 338 + y, 136 + x, 335 + y) // 右上
  ctx.quadraticCurveTo(113 + x, 322 + y, 100 + x, 342 + y) // 左上
  ctx.fill()
  ctx.moveTo(104 + x, 350 + y) // 左
  ctx.quadraticCurveTo(110 + x, 335 + y, 133 + x, 340 + y) // 右
  ctx.stroke()
  ctx.closePath()
}

export const aroundEdge2 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 親指
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(167 + x, 442 + y) // 左上奥
  ctx.quadraticCurveTo(164 + x, 443 + y, 165 + x, 447 + y) // 左上
  ctx.quadraticCurveTo(171 + x, 456 + y, 172 + x, 457 + y) // 左下
  ctx.quadraticCurveTo(198 + x, 454 + y, 198 + x, 456 + y) // 右下
  ctx.quadraticCurveTo(207 + x, 449 + y, 196 + x, 442 + y) // 右上
  ctx.quadraticCurveTo(164 + x, 447 + y, 167 + x, 442 + y) // 左上
  ctx.fill()
  ctx.moveTo(164 + x, 445 + y) // 左上
  ctx.quadraticCurveTo(162 + x, 452 + y, 197 + x, 442 + y) // 右上
  ctx.moveTo(170 + x, 456 + y) // 左下
  ctx.quadraticCurveTo(201 + x, 450 + y, 198 + x, 456 + y) // 右下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const aroundEdge3 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 親指
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(374 + x, 611 + y) // 左上
  ctx.quadraticCurveTo(400 + x, 633 + y, 417 + x, 610 + y) // 右＿右
  ctx.quadraticCurveTo(422 + x, 601 + y, 404 + x, 606 + y) // 右＿左
  ctx.quadraticCurveTo(395 + x, 618 + y, 374 + x, 611 + y) // 左上
  ctx.fill()
  ctx.moveTo(378 + x, 615 + y) //
  ctx.quadraticCurveTo(402 + x, 623 + y, 409 + x, 605 + y) // 右上
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const aroundEdge4 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 親指
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(590 + x, 556 + y) // 左上
  ctx.quadraticCurveTo(587 + x, 561 + y, 591 + x, 573 + y) //
  ctx.quadraticCurveTo(593 + x, 585 + y, 583 + x, 598 + y) // 左下
  ctx.quadraticCurveTo(601 + x, 596 + y, 604 + x, 574 + y) //
  ctx.quadraticCurveTo(601 + x, 559 + y, 600 + x, 553 + y) //
  ctx.quadraticCurveTo(599 + x, 550 + y, 590 + x, 556 + y) //
  ctx.fill()
  ctx.moveTo(590 + x, 557 + y) // 上
  ctx.quadraticCurveTo(599 + x, 592 + y, 589 + x, 596 + y) // 下
  ctx.moveTo(599 + x, 552 + y) // 上
  ctx.quadraticCurveTo(601 + x, 568 + y, 603 + x, 579 + y) // 下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }

  ctx.closePath()
}

export const aroundEdge5 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 親指
  ctx.beginPath()
  ctx.moveTo(709 + x, 437 + y) // 左上_上
  ctx.quadraticCurveTo(708 + x, 445 + y, 708 + x, 445 + y) // 左上＿下
  ctx.quadraticCurveTo(713 + x, 453 + y, 707 + x, 462 + y) // 左下＿下
  ctx.quadraticCurveTo(715 + x, 460 + y, 715 + x, 455 + y) //
  ctx.quadraticCurveTo(725 + x, 446 + y, 714 + x, 431 + y) //
  ctx.quadraticCurveTo(709 + x, 437 + y, 709 + x, 437 + y) //
  ctx.fill()
  ctx.moveTo(709 + x, 440 + y) // 左
  ctx.quadraticCurveTo(715 + x, 448 + y, 715 + x, 455 + y) // 右
  ctx.stroke()
  ctx.closePath()
}

export const aroundEdge6 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number, scaleSize?: number): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 親指
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }

  ctx.moveTo(712 + x, 424 + y) // 左上
  ctx.quadraticCurveTo(705 + x, 431 + y, 708 + x, 437 + y) // 左下
  ctx.quadraticCurveTo(731 + x, 428 + y, 732 + x, 418 + y) //
  ctx.quadraticCurveTo(738 + x, 409 + y, 734 + x, 400 + y) // 右上
  ctx.quadraticCurveTo(734 + x, 416 + y, 712 + x, 424 + y) // 左上
  ctx.fill()
  ctx.moveTo(710 + x, 428 + y) // 左
  ctx.quadraticCurveTo(732 + x, 423 + y, 736 + x, 408 + y) // 右
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
    ctx.scale(1, 1)
  }
  ctx.closePath()
}

export const aroundEdge7 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 親指
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(723 + x, 287 + y) // 左上
  ctx.quadraticCurveTo(722 + x, 298 + y, 726 + x, 298 + y) // 左下
  ctx.quadraticCurveTo(740 + x, 285 + y, 734 + x, 276 + y) // 中間
  ctx.quadraticCurveTo(735 + x, 265 + y, 730 + x, 262 + y) // 上
  ctx.quadraticCurveTo(733 + x, 276 + y, 723 + x, 287 + y) // 上
  ctx.fill()
  ctx.moveTo(735 + x, 275 + y) // 上
  ctx.quadraticCurveTo(730 + x, 287 + y, 723 + x, 287 + y) // 下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const aroundEdge8 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 親指
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(577 + x, 81 + y) // 左上奥
  ctx.quadraticCurveTo(581 + x, 83 + y, 587 + x, 98 + y) // 左下
  ctx.quadraticCurveTo(591 + x, 105 + y, 596 + x, 100 + y) // 右下
  ctx.quadraticCurveTo(596 + x, 90 + y, 592 + x, 81 + y) // 右上
  ctx.quadraticCurveTo(587 + x, 81 + y, 582 + x, 79 + y) // 左上
  ctx.quadraticCurveTo(577 + x, 77 + y, 577 + x, 81 + y) // 左上奥
  ctx.fill()
  ctx.moveTo(582 + x, 79 + y) // 上
  ctx.quadraticCurveTo(584 + x, 85 + y, 587 + x, 98 + y) // 下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const aroundEdge9 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 親指
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(415 + x, 68 + y) // 左上
  ctx.quadraticCurveTo(416 + x, 81 + y, 423 + x, 91 + y) // 左下
  ctx.quadraticCurveTo(433 + x, 95 + y, 433 + x, 86 + y) // 右下
  ctx.quadraticCurveTo(429 + x, 78 + y, 426 + x, 68 + y) // 右上
  ctx.quadraticCurveTo(420 + x, 65 + y, 415 + x, 68 + y) // 左上
  ctx.fill()
  ctx.moveTo(424 + x, 68 + y) // 上
  ctx.quadraticCurveTo(424 + x, 78 + y, 432 + x, 89 + y) // 下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }

  ctx.closePath()
}

export const aroundEdge10 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 親指
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(348 + x, 140 + y) // 左上
  ctx.quadraticCurveTo(346 + x, 144 + y, 350 + x, 147 + y) // 左中間
  ctx.quadraticCurveTo(353 + x, 148 + y, 353 + x, 152 + y) // 左下
  ctx.quadraticCurveTo(357 + x, 155 + y, 364 + x, 153 + y) // 右下
  ctx.quadraticCurveTo(365 + x, 149 + y, 361 + x, 148 + y) // 右上
  ctx.quadraticCurveTo(353 + x, 147 + y, 348 + x, 140 + y) // 左上
  ctx.fill()
  ctx.moveTo(350 + x, 147 + y) // 上
  ctx.quadraticCurveTo(355 + x, 149 + y, 364 + x, 150 + y) // 下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }

  ctx.closePath()
}

export const aroundEdge11 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // aroundEdge10のjointer
  ctx.beginPath()
  ctx.moveTo(352, 127) // 左上
  ctx.quadraticCurveTo(351, 145, 366, 150) // 左下
  ctx.quadraticCurveTo(371, 151, 367, 145) // 右下
  ctx.quadraticCurveTo(362, 141, 360, 129) // 右上
  ctx.quadraticCurveTo(356, 125, 352, 127) // 左上
  ctx.fill()
  ctx.moveTo(357, 127) // 上
  ctx.quadraticCurveTo(356, 143, 368, 148) // 下
  ctx.stroke()
  ctx.closePath()

  // 小指芯＿ウェブ寄り＿ヘリ革上
  ctx.beginPath()
  ctx.moveTo(376, 178) // 左上
  ctx.quadraticCurveTo(379, 178, 379, 184) // 左下
  ctx.quadraticCurveTo(385, 184, 385, 184) // 左下奥
  ctx.quadraticCurveTo(384, 180, 391, 174) // 右下
  ctx.quadraticCurveTo(388, 170, 384, 170) // 右上
  ctx.quadraticCurveTo(377, 170, 376, 178) // 右上
  ctx.fill()
  ctx.moveTo(379, 184) // 左
  ctx.quadraticCurveTo(382, 175, 391, 174) // 右
  ctx.stroke()

  // 小指芯＿ウェブ寄り＿ヘリ革上
  ctx.beginPath()
  ctx.moveTo(387, 202) // 左上
  ctx.quadraticCurveTo(387, 215, 387, 215) // 左下
  ctx.quadraticCurveTo(392, 212, 392, 212) // 左下奥
  ctx.quadraticCurveTo(398, 203, 405, 201) // 右下
  ctx.quadraticCurveTo(411, 191, 404, 189) // 右上
  ctx.quadraticCurveTo(394, 192, 387, 202) //
  ctx.fill()
  ctx.moveTo(387, 215) // 左
  ctx.quadraticCurveTo(390, 203, 407, 198) // 右
  ctx.stroke()
  ctx.closePath()

  // 小指芯＿ウェブ寄り＿ヘリ革上
  ctx.beginPath()
  ctx.moveTo(392, 234) // 左上
  ctx.quadraticCurveTo(389, 241, 389, 241) // 左下
  ctx.quadraticCurveTo(395, 244, 413, 241) // 右下
  ctx.quadraticCurveTo(418, 233, 413, 231) // 右上
  ctx.quadraticCurveTo(409, 232, 392, 234) // 左上
  ctx.fill()
  ctx.moveTo(391, 235) // 左
  ctx.quadraticCurveTo(407, 237, 415, 234) // 右
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(254, 361) // 左上
  ctx.quadraticCurveTo(258, 370, 260, 379) // 左下
  ctx.quadraticCurveTo(265, 380, 268, 378) // 右下
  ctx.quadraticCurveTo(267, 365, 263, 361) // 右上
  ctx.quadraticCurveTo(256, 359, 254, 361) // 左上
  ctx.fill()
  ctx.moveTo(254, 361) // 左
  ctx.quadraticCurveTo(260, 366, 261, 379) // 右
  ctx.stroke()

  ctx.closePath()
}

export const aroundEdge12 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 小指芯＿ウェブ寄り＿ヘリ革上
  ctx.beginPath()
  ctx.moveTo(371, 173) // 左上
  ctx.quadraticCurveTo(374, 173, 374, 179) // 左下
  ctx.quadraticCurveTo(380, 179, 380, 179) // 左下奥
  ctx.quadraticCurveTo(379, 175, 386, 169) // 右下
  ctx.quadraticCurveTo(383, 165, 379, 165) // 右上
  ctx.quadraticCurveTo(372, 165, 371, 173) // 右上
  ctx.fill()
  ctx.moveTo(375, 179) // 左
  ctx.quadraticCurveTo(377, 169, 386, 169) // 右
  ctx.stroke()

  // 小指芯＿ウェブ寄り＿ヘリ革上
  ctx.beginPath()
  ctx.moveTo(387, 202) // 左上
  ctx.quadraticCurveTo(387, 215, 387, 215) // 左下
  ctx.quadraticCurveTo(392, 212, 392, 212) // 左下奥
  ctx.quadraticCurveTo(398, 203, 405, 201) // 右下
  ctx.quadraticCurveTo(411, 191, 404, 189) // 右上
  ctx.quadraticCurveTo(394, 192, 387, 202) //
  ctx.fill()
  ctx.moveTo(387, 215) // 左
  ctx.quadraticCurveTo(390, 203, 407, 198) // 右
  ctx.stroke()
  ctx.closePath()

  // 小指芯＿ウェブ寄り＿ヘリ革上
  ctx.beginPath()
  ctx.moveTo(378, 233) // 左上
  ctx.quadraticCurveTo(380, 241, 380, 241) // 左下
  ctx.quadraticCurveTo(398, 228, 398, 228) //
  ctx.quadraticCurveTo(397, 220, 397, 220) // 右上
  ctx.quadraticCurveTo(388, 218, 378, 233) // 右上
  ctx.fill()
  ctx.moveTo(380, 241) // 左下
  ctx.quadraticCurveTo(392, 227, 398, 228) //
  ctx.stroke()
  ctx.closePath()

  // 親指側1
  ctx.beginPath()
  ctx.moveTo(217, 342) // 左下
  ctx.quadraticCurveTo(229, 336, 229, 336) // 右下
  ctx.quadraticCurveTo(224, 332, 224, 332) // 右上
  ctx.quadraticCurveTo(216, 329, 211, 336) // 左上
  ctx.quadraticCurveTo(217, 342, 217, 342) // 左下
  ctx.fill()
  ctx.moveTo(217, 340) // 左下
  ctx.quadraticCurveTo(219, 335, 229, 336) // 右下
  ctx.stroke()
  ctx.closePath()

  // 親指側2
  ctx.beginPath()
  ctx.moveTo(243, 346) // 左下
  ctx.quadraticCurveTo(254, 343, 261, 337) // 右下
  ctx.quadraticCurveTo(255, 333, 255, 333) // 右上
  ctx.quadraticCurveTo(243, 334, 239, 340) // 左上
  ctx.quadraticCurveTo(243, 346, 243, 346) // 左下
  ctx.fill()
  ctx.moveTo(243, 346) // 左下
  ctx.quadraticCurveTo(249, 340, 261, 337) // 右下
  ctx.stroke()
  ctx.closePath()
}

export const littleEdge = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number, numerator?: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(608 + locationX, 565 + locationY) // 左上
  ctx.quadraticCurveTo(615 + locationX, 594 + locationY, 615 + locationX, 594 + locationY) //
  ctx.quadraticCurveTo(618 + locationX, 600 + locationY, 616 + locationX, 605 + locationY) // 左下
  ctx.quadraticCurveTo(623 + locationX, 605 + locationY, 627 + locationX, 595 + locationY) // 右下
  ctx.quadraticCurveTo(624 + locationX, 568 + locationY, 614 + locationX, 562 + locationY) // 右上
  ctx.quadraticCurveTo(610 + locationX, 562 + locationY, 608 + locationX, 565 + locationY) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(608 + locationX, 565 + locationY) // 左上
  ctx.quadraticCurveTo(618 + locationX, 585 + locationY, 621 + locationX, 602 + locationY) // 左下
  ctx.moveTo(614 + locationX, 562 + locationY) // 右上
  ctx.quadraticCurveTo(622 + locationX, 576 + locationY, 626 + locationX, 588 + locationY) // 右下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const littleEdge2 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(656, 472) // 左上左
  ctx.quadraticCurveTo(660, 506, 684, 520) // 右下
  ctx.quadraticCurveTo(692, 514, 688, 510) // 右上
  ctx.quadraticCurveTo(670, 493, 663, 472) // 左上右
  ctx.quadraticCurveTo(658, 466, 656, 472) // 左上左
  ctx.fill()
  // 側面ライン
  ctx.moveTo(661, 470) // 左上
  ctx.quadraticCurveTo(665, 494, 689, 514) //
  ctx.stroke()
  ctx.closePath()
}

export const littleEdge3 = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number, numerator?: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(611 + locationX, 555 + locationY) // 左上
  ctx.quadraticCurveTo(607 + locationX, 567 + locationY, 607 + locationX, 567 + locationY) // 左下
  ctx.quadraticCurveTo(615 + locationX, 562 + locationY, 633 + locationX, 566 + locationY) //
  ctx.quadraticCurveTo(656 + locationX, 568 + locationY, 663 + locationX, 556 + locationY) // 右下
  ctx.quadraticCurveTo(667 + locationX, 549 + locationY, 663 + locationX, 549 + locationY) // 右上
  ctx.quadraticCurveTo(659 + locationX, 558 + locationY, 645 + locationX, 555 + locationY) //
  ctx.quadraticCurveTo(618 + locationX, 552 + locationY, 611 + locationX, 555 + locationY) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(610 + locationX, 556 + locationY) // 左上
  ctx.quadraticCurveTo(633 + locationX, 556 + locationY, 656 + locationX, 559 + locationY) // 左下
  ctx.quadraticCurveTo(660 + locationX, 560 + locationY, 663 + locationX, 554 + locationY) // 左下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const littleEdge4 = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number, numerator?: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(637 + locationX, 100 + locationY) // 左上
  ctx.quadraticCurveTo(630 + locationX, 137 + locationY, 638 + locationX, 155 + locationY) // 左下
  ctx.quadraticCurveTo(646 + locationX, 156 + locationY, 645 + locationX, 151 + locationY) // 右下
  ctx.quadraticCurveTo(646 + locationX, 123 + locationY, 649 + locationX, 108 + locationY) // 右上
  ctx.quadraticCurveTo(642 + locationX, 97 + locationY, 637 + locationX, 100 + locationY) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(639 + locationX, 100 + locationY) // 左上
  ctx.quadraticCurveTo(638 + locationX, 113 + locationY, 634 + locationX, 135 + locationY) // 左下
  ctx.moveTo(647 + locationX, 104 + locationY) // 右上
  ctx.quadraticCurveTo(642 + locationX, 124 + locationY, 644 + locationX, 156 + locationY) // 左下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const littleEdge4_1 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.moveTo(559, 51) // 左上左
  ctx.quadraticCurveTo(555, 81, 575, 97) // 左下
  ctx.quadraticCurveTo(579, 96, 579, 90) // 右下
  ctx.quadraticCurveTo(567, 73, 570, 55) // 右上
  ctx.quadraticCurveTo(564, 49, 559, 51) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(568, 55) // 左上
  ctx.quadraticCurveTo(564, 80, 580, 92) //
  ctx.stroke()
  ctx.closePath()
}

export const littleEdge5 = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number, numerator?: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(474 + locationX, 40 + locationY) // 左上
  ctx.quadraticCurveTo(477 + locationX, 62 + locationY, 500 + locationX, 69 + locationY) // 左下
  ctx.quadraticCurveTo(503 + locationX, 68 + locationY, 500 + locationX, 62 + locationY) // 右下
  ctx.quadraticCurveTo(486 + locationX, 52 + locationY, 486 + locationX, 38 + locationY) // 右上
  ctx.quadraticCurveTo(486 + locationX, 34 + locationY, 483 + locationX, 35 + locationY) //
  ctx.quadraticCurveTo(475 + locationX, 35 + locationY, 474 + locationX, 40 + locationY) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(482 + locationX, 36 + locationY) // 左上
  ctx.quadraticCurveTo(480 + locationX, 51 + locationY, 500 + locationX, 65 + locationY) // 左下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const littleEdge6 = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number, numerator?: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(411 + locationX, 48 + locationY) // 左上
  ctx.quadraticCurveTo(417 + locationX, 69 + locationY, 438 + locationX, 72 + locationY) // 左下
  ctx.quadraticCurveTo(441 + locationX, 68 + locationY, 437 + locationX, 65 + locationY) // 右下
  ctx.quadraticCurveTo(423 + locationX, 59 + locationY, 423 + locationX, 44 + locationY) // 右上
  ctx.quadraticCurveTo(421 + locationX, 41 + locationY, 419 + locationX, 43 + locationY) //
  ctx.quadraticCurveTo(414 + locationX, 42 + locationY, 411 + locationX, 48 + locationY) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(419 + locationX, 42 + locationY) // 左上
  ctx.quadraticCurveTo(419 + locationX, 65 + locationY, 440 + locationX, 69 + locationY) // 左下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

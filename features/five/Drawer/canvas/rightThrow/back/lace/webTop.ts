export const webTops = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number, scaleSize?: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  ctx.moveTo(685 + x, 156 + y) // 左下
  ctx.quadraticCurveTo(686 + x, 163 + y, 692 + x, 163 + y) // 右下
  ctx.quadraticCurveTo(698 + x, 159 + y, 701 + x, 152 + y) // 右上
  ctx.quadraticCurveTo(700 + x, 146 + y, 696 + x, 144 + y) // 左上
  ctx.quadraticCurveTo(693 + x, 143 + y, 689 + x, 145 + y) // 左上奥
  ctx.quadraticCurveTo(690 + x, 148 + y, 685 + x, 156 + y) // 左下
  ctx.fill()
  // 断面ライン
  ctx.moveTo(686 + x, 157 + y) // 下
  ctx.quadraticCurveTo(693 + x, 152 + y, 696 + x, 144 + y) // 上
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const webTops2 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number, scaleSize?: number): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }

  ctx.moveTo(642 + x, 108 + y) // 左下
  ctx.quadraticCurveTo(644 + x, 115 + y, 652 + x, 114 + y) // 右下
  ctx.quadraticCurveTo(658 + x, 111 + y, 659 + x, 105 + y) // 右上
  ctx.quadraticCurveTo(655 + x, 97 + y, 651 + x, 98 + y) // 左上
  ctx.quadraticCurveTo(642 + x, 108 + y, 642 + x, 108 + y) // 左下
  ctx.fill()
  // 断面ライン
  ctx.moveTo(652 + x, 114 + y) // 下
  ctx.quadraticCurveTo(659 + x, 105 + y, 659 + x, 105 + y) // 上
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }

  // 手前側の結び目
  // 上記の1つ目をコピーする
}

export const webTopCross = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number, numerator?: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  // 左下＿右上
  webTopCrossSingleLeftDown(ctx, laceColor, x, y)
  // 左上＿右下
  webTopCrossSingleLeftUp(ctx, laceColor, x, y)
  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const webTopCrossSingleLeftDown = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  // 左下＿右上
  ctx.beginPath()
  ctx.moveTo(590 + x, 61 + y) // 左下
  ctx.quadraticCurveTo(589 + x, 65 + y, 599 + x, 67 + y) // 右下
  ctx.quadraticCurveTo(600 + x, 62 + y, 617 + x, 71 + y) // 右上左
  ctx.quadraticCurveTo(615 + x, 67 + y, 615 + x, 67 + y) // 右上左
  ctx.quadraticCurveTo(597 + x, 48 + y, 590 + x, 61 + y) // 左下
  ctx.fill()
  // // 断面ライン
  ctx.moveTo(596 + x, 66 + y) // 下
  ctx.quadraticCurveTo(599 + x, 56 + y, 615 + x, 69 + y) // 上
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const webTopCrossSingleLeftUp = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.beginPath()
  // 左上＿右下
  ctx.moveTo(598 + x, 55 + y) // 左上＿奥
  ctx.quadraticCurveTo(604 + x, 57 + y, 603 + x, 72 + y) // 左下
  ctx.quadraticCurveTo(607 + x, 75 + y, 613 + x, 78 + y) // 右下
  ctx.quadraticCurveTo(614 + x, 60 + y, 608 + x, 59 + y) // 右上
  ctx.quadraticCurveTo(603 + x, 53 + y, 603 + x, 53 + y) // 左上
  ctx.quadraticCurveTo(598 + x, 55 + y, 598 + x, 55 + y) // 左上奥
  ctx.fill()
  // // 断面ライン
  ctx.moveTo(603 + x, 53 + y) // 上
  ctx.quadraticCurveTo(607 + x, 62 + y, 606 + x, 74 + y) // 下
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}

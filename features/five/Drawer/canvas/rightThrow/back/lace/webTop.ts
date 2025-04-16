export const webTops = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number, scaleSize?: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
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
  ctx.strokeStyle = '#282828'
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

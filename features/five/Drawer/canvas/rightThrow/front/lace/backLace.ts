import { Position } from '@/types'

export const straightBackLace = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number, numerator: number): void => {
  ctx.strokeStyle = '#282828'
  ctx.lineWidth = 0.8
  ctx.fillStyle = laceColor
  // 人指し指 - 中指 上
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(456 + x, 136 + y) // 左上
  ctx.quadraticCurveTo(457 + x, 145 + y, 457 + x, 145 + y) // 左下
  ctx.quadraticCurveTo(471 + x, 143 + y, 487 + x, 149 + y) // 右下
  ctx.quadraticCurveTo(490 + x, 144 + y, 489 + x, 139 + y) // 右上
  ctx.quadraticCurveTo(473 + x, 132 + y, 456 + x, 136 + y) // 左上
  ctx.fill()
  ctx.moveTo(456 + x, 138 + y)
  ctx.quadraticCurveTo(470 + x, 135 + y, 489 + x, 142 + y) // 左上奥
  ctx.stroke()
  ctx.closePath()
  // 人指し指 - 中指 下
  ctx.beginPath()
  ctx.moveTo(456 + x, 156 + y) // 左上
  ctx.quadraticCurveTo(457 + x, 165 + y, 457 + x, 165 + y) // 左下
  ctx.quadraticCurveTo(471 + x, 163 + y, 487 + x, 169 + y) // 右下
  ctx.quadraticCurveTo(490 + x, 164 + y, 489 + x, 159 + y) // 右上
  ctx.quadraticCurveTo(473 + x, 152 + y, 456 + x, 156 + y) // 左上
  ctx.fill()
  ctx.moveTo(456 + x, 158 + y)
  ctx.quadraticCurveTo(473 + x, 156 + y, 489 + x, 162 + y) // 左上奥
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const crossBackLace = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number, numerator: number): void => {
  ctx.strokeStyle = '#282828'
  ctx.lineWidth = 0.8
  ctx.fillStyle = laceColor
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }

  // 人指し指ー中指繋ぎ
  // 左下-右上
  ctx.beginPath()

  ctx.moveTo(457 + x, 161 + y) // 左下_上
  ctx.quadraticCurveTo(454 + x, 166 + y, 457 + x, 171 + y) // 左下＿下
  ctx.quadraticCurveTo(478 + x, 162 + y, 490 + x, 152 + y) // 右上＿下
  ctx.quadraticCurveTo(490 + x, 142 + y, 490 + x, 142 + y) // 右上＿上
  ctx.quadraticCurveTo(472 + x, 155 + y, 457 + x, 161 + y) // 左下＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 左上-右下
  ctx.beginPath()
  ctx.moveTo(457 + x, 142 + y) // 左上_上
  ctx.quadraticCurveTo(453 + x, 147 + y, 457 + x, 152 + y) // 左上＿下
  ctx.quadraticCurveTo(470 + x, 165 + y, 490 + x, 177 + y) // 右下＿下
  ctx.quadraticCurveTo(490 + x, 167 + y, 490 + x, 167 + y) // 右下＿上
  ctx.quadraticCurveTo(476 + x, 157 + y, 457 + x, 142 + y) // 左上＿上
  ctx.fill()
  ctx.moveTo(457 + x, 144 + y) // 左上_左
  ctx.quadraticCurveTo(476 + x, 161 + y, 490 + x, 169 + y) // 右下＿左
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const backLaceDrawerOfFront = (ctx: CanvasRenderingContext2D, laceColor: string, position: Position): void => {
  switch (position) {
    case 'outfielder':
      crossBackLace(ctx, laceColor, 5, 0, 1)
      return
    default:
      return
  }
}

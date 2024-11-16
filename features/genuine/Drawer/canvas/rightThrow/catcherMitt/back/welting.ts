import { ColorItem } from '@/types'

export const weltingOfMiddleFingerRegularBackStyle = (ctx: CanvasRenderingContext2D, welting: ColorItem): void => {
  if (welting.value === 'none') return
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = welting.color

  // 中指袋のハミダシ
  ctx.beginPath()
  ctx.moveTo(274, 118) // 左上
  ctx.quadraticCurveTo(231, 280, 280, 444) // 左中間
  ctx.quadraticCurveTo(337, 640, 337, 640) // 左下
  ctx.quadraticCurveTo(344, 639, 342, 639) // 右下
  ctx.quadraticCurveTo(314, 548, 285, 444) // 中間
  ctx.quadraticCurveTo(238, 280, 278, 117) // 右上
  ctx.quadraticCurveTo(272, 118, 272, 118) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 小指袋の中
  ctx.beginPath()
  ctx.moveTo(191, 179) // 左上
  ctx.quadraticCurveTo(180, 275, 199, 396) // 左中間
  ctx.quadraticCurveTo(223, 514, 263, 623) // 左下
  ctx.quadraticCurveTo(269, 626, 269, 626) // 右下
  ctx.quadraticCurveTo(224, 502, 203, 392) // 中間
  ctx.quadraticCurveTo(184, 268, 196, 175) // 右上
  ctx.quadraticCurveTo(191, 179, 191, 179) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const weltingOfMiddleFingerBeltBackStyle = (ctx: CanvasRenderingContext2D, welting: ColorItem): void => {
  if (welting.value === 'none') return
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = welting.color
  // 中指袋の中
  ctx.beginPath()
  ctx.moveTo(274, 118) // 左上
  ctx.quadraticCurveTo(233, 280, 285, 444) // 左下
  ctx.quadraticCurveTo(289, 444, 289, 444) // 右下
  ctx.quadraticCurveTo(238, 280, 278, 117) // 右上
  ctx.quadraticCurveTo(272, 118, 272, 118) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

import { ColorItem } from '@/types'

export const palmWelting = (ctx: CanvasRenderingContext2D, welting: ColorItem): void => {
  if (welting.value === 'none') return
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  // 親指マチ内
  ctx.fillStyle = welting.color
  // 親指
  ctx.beginPath()
  ctx.moveTo(150, 290) // 左下
  ctx.quadraticCurveTo(170, 297, 187, 327) //
  ctx.quadraticCurveTo(230, 405, 300, 480) // 中間
  ctx.quadraticCurveTo(390, 569, 522, 584) //
  ctx.quadraticCurveTo(550, 585, 561, 603) // 右下
  ctx.quadraticCurveTo(562, 598, 562, 598) // 右上
  ctx.quadraticCurveTo(553, 586, 535, 581) //
  ctx.quadraticCurveTo(422, 570, 339, 508) //
  ctx.quadraticCurveTo(254, 435, 195, 331) //
  ctx.quadraticCurveTo(170, 291, 152, 287) //
  ctx.quadraticCurveTo(150, 290, 150, 290) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 小指
  ctx.beginPath()
  ctx.moveTo(605, 97) // 左上＿左
  ctx.quadraticCurveTo(598, 112, 614, 137) //
  ctx.quadraticCurveTo(663, 190, 684, 265) // 中間
  ctx.quadraticCurveTo(707, 350, 674, 459) //
  ctx.quadraticCurveTo(667, 477, 672, 503) // 右下＿左
  ctx.quadraticCurveTo(674, 498, 674, 498) // 右下＿右
  ctx.quadraticCurveTo(671, 477, 677, 461) //
  ctx.quadraticCurveTo(708, 360, 692, 280) // 中間
  ctx.quadraticCurveTo(672, 190, 617, 134) //
  ctx.quadraticCurveTo(605, 115, 608, 99) //
  ctx.quadraticCurveTo(605, 97, 605, 97) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  ctx.strokeStyle = '#282828'
}

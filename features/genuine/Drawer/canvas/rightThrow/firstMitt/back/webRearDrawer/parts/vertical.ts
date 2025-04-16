import { GenuineState } from '@/features/genuine/types'
import { allowLace } from '../../../../glove/back/lace/allowCenterOfCrossWeb'

export const verticalParts = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string) => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = leatherColor
  ctx.beginPath()
  ctx.moveTo(615, 98)
  ctx.quadraticCurveTo(505, 238, 505, 238)
  ctx.quadraticCurveTo(522, 266, 546, 285)
  ctx.quadraticCurveTo(647, 158, 647, 158) // 右上
  ctx.quadraticCurveTo(639, 123, 615, 98)
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.0
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(627, 117)
  ctx.quadraticCurveTo(519, 251, 519, 251) // 左下
  ctx.quadraticCurveTo(534, 265, 534, 265) // 右下
  ctx.quadraticCurveTo(636, 139, 636, 139) // 右上
  ctx.quadraticCurveTo(627, 117, 627, 117)
  // ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()

  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(626, 124)
  ctx.quadraticCurveTo(525, 254, 525, 254) // 左下
  ctx.quadraticCurveTo(532, 259, 532, 259) // 右下
  ctx.quadraticCurveTo(632, 137, 632, 137) // 右上
  ctx.quadraticCurveTo(626, 124, 626, 124)
  // ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(614, 101)
  ctx.quadraticCurveTo(638, 126, 645, 160)
  //   ctx.quadraticCurveTo()
  ctx.moveTo(611, 104)
  ctx.quadraticCurveTo(635, 129, 643, 163)
  // ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.closePath()

  ctx.setLineDash([])
  ctx.closePath()
}

export const verticalParts2 = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = state.web2.color
  ctx.beginPath()
  ctx.moveTo(615, 98) // 左上
  ctx.quadraticCurveTo(505, 238, 505, 238) // 左下
  ctx.quadraticCurveTo(496, 294, 546, 285) // 右下
  ctx.quadraticCurveTo(647, 158, 647, 158) // 右上
  ctx.quadraticCurveTo(639, 123, 615, 98)
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.0
  ctx.strokeStyle = state.stitch.color
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(616, 103)
  ctx.quadraticCurveTo(508, 240, 508, 240)
  ctx.quadraticCurveTo(500, 290, 544, 282)
  ctx.quadraticCurveTo(644, 158, 644, 158)
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()

  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(618, 106)
  ctx.quadraticCurveTo(510, 243, 510, 243)
  ctx.quadraticCurveTo(505, 285, 544, 279)
  ctx.quadraticCurveTo(641, 156, 641, 156)

  // //   ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()

  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(614, 101)
  ctx.quadraticCurveTo(638, 126, 645, 160)
  //   ctx.quadraticCurveTo()
  ctx.moveTo(611, 104)
  ctx.quadraticCurveTo(635, 129, 643, 163)
  // ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.closePath()

  ctx.setLineDash([])
  ctx.closePath()

  const laceColor = state.lace.color
  // laceここから
  allowLace(ctx, laceColor, -5, -130, 10, 1)
  allowLace(ctx, laceColor, -15, -112, 10, 1)
  allowLace(ctx, laceColor, -25, -94, 10, 1)
  allowLace(ctx, laceColor, -35, -76, 10, 1)
  allowLace(ctx, laceColor, -45, -58, 10, 1)
  allowLace(ctx, laceColor, -55, -40, 10, 1)
}

export const verticalParts3 = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string, laceColor: string) => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = leatherColor
  ctx.beginPath()
  ctx.moveTo(615, 98) // 左上
  ctx.quadraticCurveTo(484, 272, 484, 272) // 左下
  ctx.quadraticCurveTo(489, 308, 527, 312) // 右下
  ctx.quadraticCurveTo(647, 158, 647, 158) // 右上
  ctx.quadraticCurveTo(639, 123, 615, 98)
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.0
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(616, 103)
  ctx.quadraticCurveTo(508, 240, 508, 240)
  ctx.quadraticCurveTo(500, 290, 544, 282)
  ctx.quadraticCurveTo(644, 158, 644, 158)
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()

  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(618, 106)
  ctx.quadraticCurveTo(510, 243, 510, 243)
  ctx.quadraticCurveTo(505, 285, 544, 279)
  ctx.quadraticCurveTo(641, 156, 641, 156)

  // //   ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()

  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(614, 101)
  ctx.quadraticCurveTo(638, 126, 645, 160)
  //   ctx.quadraticCurveTo()
  ctx.moveTo(628, 145)
  ctx.quadraticCurveTo(541, 256, 541, 256)
  // ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.closePath()

  ctx.setLineDash([])
  ctx.closePath()

  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(627, 125)
  ctx.quadraticCurveTo(540, 240, 540, 240)
  ctx.moveTo(627, 125)
  // ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.closePath()

  ctx.setLineDash([])
  ctx.closePath()

  // laceここから
  allowLace(ctx, laceColor, -15, -112, 10, 1)
  allowLace(ctx, laceColor, -30, -86, 10, 1)
  allowLace(ctx, laceColor, -45, -60, 10, 1)
  allowLace(ctx, laceColor, -60, -34, 10, 1)
  allowLace(ctx, laceColor, -70, -20, 10, 1)
}

export const verticalParts4 = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string, laceColor: string) => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = leatherColor
  ctx.beginPath()
  ctx.moveTo(587, 135) // 左上
  ctx.quadraticCurveTo(484, 272, 484, 272) // 左下
  ctx.quadraticCurveTo(489, 308, 527, 312) // 右下
  ctx.quadraticCurveTo(621, 189, 621, 189) // 右上
  ctx.quadraticCurveTo(607, 159, 587, 135)
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.0
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(586, 141)
  ctx.quadraticCurveTo(508, 240, 508, 240)
  ctx.quadraticCurveTo(500, 290, 544, 282)
  ctx.quadraticCurveTo(616, 189, 616, 189)
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()

  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(588, 146)
  ctx.quadraticCurveTo(510, 243, 510, 243)
  ctx.quadraticCurveTo(506, 283, 541, 279)
  ctx.quadraticCurveTo(616, 183, 616, 183)

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()

  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(614, 101)
  ctx.quadraticCurveTo(638, 126, 645, 160)
  ctx.moveTo(607, 174)
  ctx.quadraticCurveTo(541, 256, 541, 256)
  ctx.stroke()
  ctx.closePath()
  ctx.setLineDash([])
  ctx.closePath()

  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(599, 160)
  ctx.quadraticCurveTo(530, 247, 530, 247)
  ctx.quadraticCurveTo(529, 262, 541, 257)
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()

  // ctx.closePath()

  // // laceここから
  allowLace(ctx, laceColor, -35, -74, 10, 1)
  allowLace(ctx, laceColor, -45, -56, 10, 1)
  allowLace(ctx, laceColor, -55, -38, 10, 1)
  allowLace(ctx, laceColor, -65, -20, 10, 1)
}

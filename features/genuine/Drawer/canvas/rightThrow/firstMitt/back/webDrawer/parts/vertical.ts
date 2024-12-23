import { GenuineState } from '@/features/genuine/types'
import { allowLace } from '../../../../glove/back/lace/allowCenterOfCrossWeb'

export const verticalParts = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = state.web.color
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
  ctx.strokeStyle = state.stitch.color
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
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = state.web.color
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

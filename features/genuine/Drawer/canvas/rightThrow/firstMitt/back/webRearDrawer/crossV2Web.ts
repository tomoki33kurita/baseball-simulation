import { GenuineState } from '@/features/genuine/types'
import { webBottom2, webTop2, webTopJoint } from '../web'
import { webKnots } from '@/util/canvas/lace/webKnots'
import { topLaces } from '../lace/webTop'

const verticalPartsLeft = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = state.web2.color
  ctx.beginPath()
  ctx.moveTo(562, 100) // 左上
  ctx.quadraticCurveTo(502, 203, 502, 203) // 左下
  ctx.quadraticCurveTo(527, 233, 527, 233) // 右下
  ctx.quadraticCurveTo(584, 128, 584, 128) // 右上
  ctx.quadraticCurveTo(562, 100, 562, 100)
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.5
  ctx.strokeStyle = state.stitch.color
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.lineWidth = 1.0
  ctx.moveTo(565, 102)
  ctx.quadraticCurveTo(507, 202, 507, 202) // 左下
  ctx.moveTo(580, 128)
  ctx.quadraticCurveTo(526, 225, 526, 225)
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

const verticalPartsRight = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = state.web2.color
  ctx.beginPath()
  ctx.moveTo(616, 179) // 左上
  ctx.quadraticCurveTo(557, 271, 557, 271) // 左下
  ctx.quadraticCurveTo(576, 296, 576, 296) // 右下
  ctx.quadraticCurveTo(633, 211, 633, 211) // 右上
  ctx.quadraticCurveTo(616, 179, 616, 179) // 左上
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.5
  ctx.strokeStyle = state.stitch.color
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(615, 186)
  ctx.quadraticCurveTo(560, 271, 560, 271) // 左下
  ctx.moveTo(630, 211)
  ctx.quadraticCurveTo(578, 288, 578, 288) // 左下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

const rootLeather = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = state.web.color
  ctx.beginPath()
  ctx.moveTo(455, 125) // 左上
  ctx.quadraticCurveTo(436, 169, 451, 206) // 左下
  ctx.quadraticCurveTo(457, 240, 506, 293) // 中央
  ctx.quadraticCurveTo(560, 345, 582, 351) // 右下
  ctx.quadraticCurveTo(623, 371, 643, 336) // 右上
  ctx.quadraticCurveTo(455, 125, 455, 125) // 左上
  //   ctx.quadraticCurveTo() // 左上
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.5
  ctx.strokeStyle = state.stitch.color
  ctx.beginPath()
  ctx.setLineDash([3, 3])

  // root
  ctx.moveTo(454, 151) // 左上
  ctx.quadraticCurveTo(437, 218, 508, 287) // 中央
  ctx.quadraticCurveTo(583, 365, 628, 347) // 右
  ctx.quadraticCurveTo(454, 151, 454, 151) // 左上

  ctx.moveTo(455, 160) // 左上
  ctx.quadraticCurveTo(440, 216, 511, 284) // 中央
  ctx.quadraticCurveTo(580, 356, 622, 346) // 右
  ctx.quadraticCurveTo(455, 160, 455, 160) // 左上
  //   ctx.quadraticCurveTo() // 中央

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const crossV2Web = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  webTopJoint(ctx, state.web.color, state.web2.color, state.stitch.color) // ウェブ先端側
  webBottom2(ctx, state.web.color, state.stitch.color) // ウェブ捕球面側
  topLaces(ctx, state.lace.color)
  rootLeather(ctx, state)
  verticalPartsLeft(ctx, state)
  verticalPartsRight(ctx, state)
  // ウェブ上の結び目
  const laceColor = state.lace.color
  webKnots(ctx, laceColor, -95, 50)
  //   webKnots(ctx, laceColor, -100, 45)
}

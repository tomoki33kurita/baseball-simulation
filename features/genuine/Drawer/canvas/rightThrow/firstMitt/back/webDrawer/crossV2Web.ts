import { GenuineState } from '@/features/genuine/types'
import { webBottom2, webTop2 } from '../web'
import { webKnots } from '@/util/canvas/lace/webKnots'

const stitchOfCrossV2Web = (ctx: CanvasRenderingContext2D, color: string) => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.setLineDash([3, 3])

  // webTop部分
  // 左辺
  ctx.moveTo(555, 52) // 上
  ctx.quadraticCurveTo(547, 61, 546, 73) // 下
  // 右辺
  ctx.moveTo(660, 222) // 上
  ctx.quadraticCurveTo(664, 238, 660, 243) // 下
  // 上辺＿上
  ctx.moveTo(555, 52) // 上
  ctx.quadraticCurveTo(617, 92, 632, 121) //
  ctx.quadraticCurveTo(655, 164, 660, 222) // 右下
  // 上辺＿下
  ctx.moveTo(551, 56) // 上
  ctx.quadraticCurveTo(588, 74, 624, 117) //
  ctx.quadraticCurveTo(651, 159, 659, 225) // 右下
  // 下辺＿上
  ctx.moveTo(547, 67) // 上
  ctx.quadraticCurveTo(640, 122, 651, 216) //
  ctx.quadraticCurveTo(648, 226, 665, 243) // 右下
  // 下辺＿下
  ctx.moveTo(545, 72) // 上
  ctx.quadraticCurveTo(635, 125, 648, 220) // 右下

  // webBottom部分
  // 左辺
  ctx.moveTo(523, 93) // 上
  ctx.lineTo(514, 119) // 下
  // 右辺
  ctx.moveTo(655, 269) // 上
  ctx.lineTo(640, 292) // 下
  // 上辺＿上
  ctx.moveTo(523, 93) // 上
  ctx.quadraticCurveTo(611, 167, 655, 269) // 右下
  // 上辺＿下
  ctx.moveTo(520, 98) // 上
  ctx.quadraticCurveTo(610, 171, 651, 273) // 右下
  // 下辺＿上
  ctx.moveTo(514, 119) // 上
  ctx.quadraticCurveTo(593, 193, 640, 292) // 右下
  // 下辺＿下
  ctx.moveTo(517, 113) // 上
  ctx.quadraticCurveTo(597, 190, 645, 285) // 右下

  // root
  ctx.moveTo(466, 164)
  ctx.quadraticCurveTo(457, 203, 522, 274) // 中央
  ctx.quadraticCurveTo(594, 351, 607, 334) // 右
  ctx.quadraticCurveTo(466, 164, 466, 164) // 中央
  //   ctx.quadraticCurveTo() // 中央

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

const verticalPartsLeft = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = state.web.color
  ctx.beginPath()
  ctx.moveTo(578, 65) // 左上
  ctx.quadraticCurveTo(502, 203, 502, 203) // 左下
  ctx.quadraticCurveTo(527, 233, 527, 233) // 右下
  ctx.quadraticCurveTo(605, 88, 605, 88) // 右上
  ctx.quadraticCurveTo(605, 88, 578, 65)
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.5
  ctx.strokeStyle = state.stitch.color
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.lineWidth = 1.0
  ctx.moveTo(580, 69)
  ctx.quadraticCurveTo(507, 202, 507, 202) // 左下
  ctx.quadraticCurveTo(525, 226, 525, 226) // 右下
  ctx.quadraticCurveTo(600, 89, 600, 89) // 右上
  ctx.quadraticCurveTo(580, 69, 580, 69)
  // ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

const verticalPartsRight = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = state.web.color
  ctx.beginPath()
  ctx.moveTo(638, 134) // 左上
  ctx.quadraticCurveTo(557, 271, 557, 271) // 左下
  ctx.quadraticCurveTo(576, 296, 576, 296) // 右下
  ctx.quadraticCurveTo(653, 172, 653, 172) // 右上
  ctx.quadraticCurveTo(648, 154, 638, 134) // 左上
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.5
  ctx.strokeStyle = state.stitch.color
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(638, 144)
  ctx.quadraticCurveTo(560, 271, 560, 271) // 左下
  ctx.quadraticCurveTo(574, 290, 574, 290) // 右下
  ctx.quadraticCurveTo(649, 171, 649, 171) // 右上
  ctx.quadraticCurveTo(638, 144, 638, 144)
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

const rootLeather = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = state.web.color
  ctx.beginPath()
  ctx.moveTo(470, 132) // 左上
  ctx.quadraticCurveTo(445, 190, 491, 244) // 左下
  ctx.quadraticCurveTo(523, 285, 523, 285) // 中央
  ctx.quadraticCurveTo(606, 367, 623, 322) // 右下
  ctx.quadraticCurveTo(470, 132, 470, 132) // 右上
  //   ctx.quadraticCurveTo() // 左上
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const crossV2Web = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  webTop2(ctx, state.web.color, state.baseModel) // ウェブ先端側
  webBottom2(ctx, state.web.color, state.baseModel) // ウェブ捕球面側

  rootLeather(ctx, state)
  stitchOfCrossV2Web(ctx, state.stitch.color)
  verticalPartsLeft(ctx, state)
  verticalPartsRight(ctx, state)
  // ウェブ上の結び目
  const laceColor = state.lace.color
  webKnots(ctx, laceColor, -85, 30)
  //   webKnots(ctx, laceColor, -100, 45)
}

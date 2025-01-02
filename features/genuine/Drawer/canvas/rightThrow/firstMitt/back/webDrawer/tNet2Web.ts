import { webKnots } from '@/util/canvas/lace/webKnots'
import { webTop2 } from '../web'
import { GenuineState } from '@/features/genuine/types'
import { verticalParts2, verticalParts3 } from './parts/vertical'
import { topLaces } from '../lace/webTop'

const stitchOfTNet2Web = (ctx: CanvasRenderingContext2D, color: string) => {
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

  // // webBottom部分
  // // 左辺
  // ctx.moveTo(523, 93) // 上
  // ctx.lineTo(514, 119) // 下
  // // 右辺
  // ctx.moveTo(655, 269) // 上
  // ctx.lineTo(640, 292) // 下
  // // 上辺＿上
  // ctx.moveTo(523, 93) // 上
  // ctx.quadraticCurveTo(611, 167, 655, 269) // 右下
  // // 上辺＿下
  // ctx.moveTo(520, 98) // 上
  // ctx.quadraticCurveTo(610, 171, 651, 273) // 右下
  // // 下辺＿上
  // ctx.moveTo(514, 119) // 上
  // ctx.quadraticCurveTo(593, 193, 640, 292) // 右下
  // // 下辺＿下
  // ctx.moveTo(517, 113) // 上
  // ctx.quadraticCurveTo(597, 190, 645, 285) // 右下

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const tNet2Web = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  webTop2(ctx, state.web.color, state.baseModel) // ウェブ先端側
  stitchOfTNet2Web(ctx, state.stitch.color)

  verticalParts3(ctx, state)

  topLaces(ctx, state.lace.color)

  //   // ウェブ上の結び目
  const laceColor = state.lace.color
  webKnots(ctx, laceColor, -85, 30)
  webKnots(ctx, laceColor, 5, -85)
}

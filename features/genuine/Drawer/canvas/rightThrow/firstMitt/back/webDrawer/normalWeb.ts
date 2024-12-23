import { GenuineState } from '@/features/genuine/types'
import { webBottom, webTop } from '../web'
import { webCross } from '../lace/webCross'
import { webKnots } from '@/util/canvas/lace/webKnots'

export const normalWeb = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  webTop(ctx, state.web.color, state.baseModel) // ウェブ先端側
  webBottom(ctx, state.web.color, state.baseModel) // ウェブ捕球面側
  const laceColor = state.lace.color
  // ウェブとウェブを結ぶバツ紐
  webCross(ctx, laceColor, 0, 0) // 左下
  webCross(ctx, laceColor, 62, 70) // 右下
  webCross(ctx, laceColor, 50, -70) // 左上
  webCross(ctx, laceColor, 100, 10) // 右上

  // ウェブ上の結び目
  webKnots(ctx, laceColor, -20, -25)
  webKnots(ctx, laceColor, -80, 35)

  ctx.lineWidth = 1.5
  ctx.strokeStyle = state.stitch.color
  ctx.beginPath()
  ctx.setLineDash([3, 3])

  // webBottom部分
  // 左辺
  ctx.moveTo(515, 102) // 上
  ctx.lineTo(506, 129) // 下
  // 右辺
  ctx.moveTo(645, 273) // 上
  ctx.lineTo(638, 295) // 下
  // 上辺＿上
  ctx.moveTo(515, 102) // 上
  ctx.quadraticCurveTo(573, 166, 645, 273) // 右下
  // 上辺＿下
  ctx.moveTo(512, 108) // 上
  ctx.quadraticCurveTo(553, 145, 644, 277) // 右下
  // 下辺＿上
  ctx.moveTo(507, 126) // 上
  ctx.quadraticCurveTo(531, 146, 638, 290) // 右下
  // 下辺＿下
  ctx.moveTo(505, 129) // 上
  ctx.quadraticCurveTo(537, 158, 637, 294) // 右下

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
  ctx.quadraticCurveTo(625, 135, 646, 216) //
  ctx.quadraticCurveTo(648, 226, 660, 243) // 右下
  // 下辺＿下
  ctx.moveTo(545, 72) // 上
  ctx.quadraticCurveTo(615, 130, 644, 220) // 右下

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

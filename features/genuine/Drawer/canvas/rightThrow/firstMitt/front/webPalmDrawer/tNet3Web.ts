import { GenuineState } from '@/features/genuine/types'
import { webTopJoint } from './parts/side'
import { webTopCrossLaces, webTopLaces } from '../lace/webTop'
import { verticalParts4 } from './parts/vertical'

const leftRearParts = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = leatherColor
  ctx.beginPath()
  ctx.moveTo(253 + x, 228 + y) // 左上
  ctx.quadraticCurveTo(259 + x, 237 + y, 259 + x, 237 + y) // 左下
  ctx.quadraticCurveTo(263 + x, 225 + y, 289 + x, 200 + y) // 右下
  ctx.quadraticCurveTo(295 + x, 195 + y, 289 + x, 191 + y) // 右上
  ctx.quadraticCurveTo(253 + x, 220 + y, 253 + x, 228 + y) // 左上
  ctx.fill()
  ctx.moveTo(259 + x, 237 + y) // 左上
  ctx.quadraticCurveTo(260 + x, 221 + y, 279 + x, 208 + y) // 左上
  ctx.stroke()
  ctx.closePath()
}
const rightRearParts = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#282828'
  // ctx.strokeStyle = 'red'
  ctx.beginPath()
  ctx.moveTo(350 + x, 164 + y) // 左_右
  ctx.quadraticCurveTo(341 + x, 173 + y, 341 + x, 173 + y) // 左_左
  ctx.quadraticCurveTo(355 + x, 166 + y, 377 + x, 175 + y) // 中間
  ctx.quadraticCurveTo(388 + x, 185 + y, 419 + x, 178 + y) // 右下
  ctx.quadraticCurveTo(425 + x, 171 + y, 416 + x, 169 + y) // 右上
  ctx.quadraticCurveTo(385 + x, 178 + y, 375 + x, 163 + y) // 中間
  ctx.quadraticCurveTo(358 + x, 158 + y, 350 + x, 164 + y) // 左上
  ctx.fill()
  ctx.moveTo(344 + x, 171 + y) //
  ctx.quadraticCurveTo(368 + x, 168 + y, 381 + x, 181 + y) //
  ctx.quadraticCurveTo(405 + x, 185 + y, 415 + x, 177 + y) //
  ctx.stroke()
  ctx.closePath()
}
const rightRearParts2 = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#282828'
  ctx.beginPath()
  ctx.moveTo(353 + x, 162 + y) // 左_右
  ctx.quadraticCurveTo(341 + x, 173 + y, 341 + x, 173 + y) // 左_左
  ctx.quadraticCurveTo(364 + x, 179 + y, 411 + x, 148 + y) // 右_右
  ctx.quadraticCurveTo(415 + x, 145 + y, 407 + x, 145 + y) // 右_左
  ctx.quadraticCurveTo(358 + x, 168 + y, 353 + x, 162 + y) //  左_右
  ctx.fill()
  ctx.moveTo(341 + x, 173 + y) //
  ctx.quadraticCurveTo(364 + x, 174 + y, 411 + x, 147 + y) // 右_左
  ctx.stroke()
  ctx.closePath()
}

export const tNet3Web = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const stitchColor = state.stitch.color
  const laceColor = state.lace.color

  leftRearParts(ctx, laceColor, stitchColor, 0, 0) // 左1
  leftRearParts(ctx, laceColor, stitchColor, 10, 30) // 左1
  leftRearParts(ctx, laceColor, stitchColor, 20, 60) // 左1
  leftRearParts(ctx, laceColor, stitchColor, 40, 85) // 左1
  leftRearParts(ctx, laceColor, stitchColor, 55, 120) // 左1
  rightRearParts(ctx, laceColor, stitchColor, -5, 5) // 右1
  rightRearParts2(ctx, laceColor, stitchColor, 0, 0) // 右1
  rightRearParts(ctx, laceColor, stitchColor, 10, 35) // 右1
  rightRearParts2(ctx, laceColor, stitchColor, 10, 35) // 右1
  rightRearParts(ctx, laceColor, stitchColor, 25, 63) // 右1
  rightRearParts2(ctx, laceColor, stitchColor, 25, 63) // 右1
  rightRearParts(ctx, laceColor, stitchColor, 40, 90) // 右1
  rightRearParts2(ctx, laceColor, stitchColor, 40, 94) // 右1
  rightRearParts(ctx, laceColor, stitchColor, 50, 125) // 右1
  rightRearParts2(ctx, laceColor, stitchColor, 48, 129) // 右1

  verticalParts4(ctx, state.web.color, state.lace.color, stitchColor) // 縦部分

  webTopJoint(ctx, state.web.color, state.web2.color, stitchColor) // ウェブ先端側

  if (state.webLaceStyle.value === 'cross') {
    webTopCrossLaces(ctx, state.lace.color) // 革紐＿ウェブ先端側
  } else {
    webTopLaces(ctx, state.lace.color) // 革紐＿ウェブ先端側
  }
}

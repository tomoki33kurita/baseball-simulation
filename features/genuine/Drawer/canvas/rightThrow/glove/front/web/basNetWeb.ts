import { topSidePartOfWeb } from './parts/sideParts'
import { verticalPartsOfWebWithCenterStitch } from './parts/verticalParts'

const laceOfVerticalPartsLeft = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.lineWidth = 0.8
  ctx.beginPath()
  ctx.moveTo(265 + x, 208 + y) // 右上
  ctx.quadraticCurveTo(268 + x, 217 + y, 253 + x, 234 + y) // 左上
  ctx.quadraticCurveTo(252 + x, 238 + y, 257 + x, 240 + y) // 左下
  ctx.quadraticCurveTo(275 + x, 227 + y, 265 + x, 208 + y) // 右上
  ctx.fill()
  // 上側面
  ctx.moveTo(265 + x, 208 + y) // 右上
  ctx.quadraticCurveTo(270 + x, 221 + y, 253 + x, 236 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}
const laceOfNetWebDouble2 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.lineWidth = 0.8
  ctx.beginPath()
  ctx.moveTo(259 + x, 239 + y) // 右上
  ctx.quadraticCurveTo(261 + x, 243 + y, 261 + x, 245 + y) // 右下
  ctx.quadraticCurveTo(249 + x, 249 + y, 238 + x, 247 + y) // 左下
  ctx.quadraticCurveTo(241 + x, 238 + y, 241 + x, 240 + y) // 左上
  ctx.quadraticCurveTo(250 + x, 242 + y, 259 + x, 239 + y) // 右上
  ctx.fill()
  // // 上側面
  ctx.moveTo(241 + x, 242 + y) // 右上
  ctx.quadraticCurveTo(250 + x, 244 + y, 259 + x, 241 + y) // 右上
  ctx.stroke()
  ctx.closePath()
}

const laceOfNetWebDouble3 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.lineWidth = 0.8
  ctx.beginPath()
  ctx.moveTo(309 + x, 140 + y) // 左下
  ctx.quadraticCurveTo(323 + x, 147 + y, 345 + x, 150 + y) // 右下＿外
  ctx.quadraticCurveTo(367 + x, 150 + y, 361 + x, 122 + y) // 右_上＿外
  ctx.quadraticCurveTo(358 + x, 127 + y, 358 + x, 127 + y) // 右_上＿内
  ctx.quadraticCurveTo(357 + x, 143 + y, 351 + x, 143 + y) // 右下＿内
  ctx.quadraticCurveTo(332 + x, 141 + y, 317 + x, 133 + y) // 左上
  ctx.quadraticCurveTo(309 + x, 132 + y, 309 + x, 140 + y) // 左上
  ctx.fill()
  // // 上側面
  ctx.moveTo(315 + x, 135 + y) // 右上
  ctx.quadraticCurveTo(338 + x, 146 + y, 355 + x, 145 + y) // 右下
  ctx.quadraticCurveTo(363 + x, 134 + y, 360 + x, 124 + y) // 右上
  ctx.stroke()
  ctx.closePath()
}

const laceOfNetWebDouble4 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.lineWidth = 0.8
  ctx.beginPath()
  ctx.moveTo(303 + x, 196 + y) // 左上
  ctx.quadraticCurveTo(307 + x, 204 + y, 307 + x, 204 + y) // 左下
  ctx.quadraticCurveTo(341 + x, 158 + y, 349 + x, 156 + y) // 右下
  ctx.quadraticCurveTo(355 + x, 150 + y, 355 + x, 144 + y) // 右上
  ctx.quadraticCurveTo(338 + x, 150 + y, 303 + x, 196 + y) // 左上
  ctx.fill()
  // 上側面
  ctx.moveTo(303 + x, 200 + y) // 右上
  ctx.quadraticCurveTo(338 + x, 154 + y, 355 + x, 146 + y) // 左上
  ctx.stroke()
  ctx.closePath()
}

const laceOfNetWebDouble5 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.lineWidth = 0.8
  ctx.beginPath()
  ctx.moveTo(295 + x, 154 + y) // 左上
  ctx.quadraticCurveTo(297 + x, 163 + y, 297 + x, 163 + y) // 左下
  ctx.quadraticCurveTo(302 + x, 159 + y, 310 + x, 165 + y) // 右下
  ctx.quadraticCurveTo(315 + x, 157 + y, 315 + x, 155 + y) // 右上
  ctx.quadraticCurveTo(306 + x, 151 + y, 295 + x, 154 + y) // 右上
  ctx.fill()
  // // 上側面
  ctx.moveTo(295 + x, 157 + y) // 左上
  ctx.quadraticCurveTo(306 + x, 153 + y, 315 + x, 159 + y) // 右上
  ctx.stroke()
  ctx.closePath()
}

const laceOfVerticalPartsRight = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.lineWidth = 0.8
  ctx.beginPath()
  ctx.moveTo(289 + x, 195 + y) // 左上
  ctx.quadraticCurveTo(288 + x, 198 + y, 291 + x, 204 + y) // 左下
  ctx.quadraticCurveTo(309 + x, 206 + y, 309 + x, 206 + y) // 右下
  ctx.quadraticCurveTo(310 + x, 199 + y, 307 + x, 197 + y) // 右上
  ctx.quadraticCurveTo(289 + x, 195 + y, 289 + x, 195 + y) // 左上
  ctx.fill()
  // 上側面
  ctx.moveTo(289 + x, 196 + y) // 右上
  ctx.quadraticCurveTo(295 + x, 199 + y, 309 + x, 198 + y) // 左下
  // // 下側面
  ctx.moveTo(291 + x, 204 + y) // 右上
  ctx.quadraticCurveTo(308 + x, 202 + y, 309 + x, 206 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const basNetWeb = (ctx: CanvasRenderingContext2D, webColor: string, web2Color: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  // ウェブ_縦
  verticalPartsOfWebWithCenterStitch(ctx, web2Color, stitchColor) // ウェブ_縦
  // ウェブ先端
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)

  // 縦パーツ周りの革紐
  laceOfVerticalPartsLeft(ctx, laceColor, -5, -24)
  laceOfVerticalPartsLeft(ctx, laceColor, 0, 0)
  laceOfVerticalPartsLeft(ctx, laceColor, 10, 28)
  laceOfVerticalPartsLeft(ctx, laceColor, 20, 60)
  laceOfVerticalPartsLeft(ctx, laceColor, 29, 83)
  laceOfVerticalPartsLeft(ctx, laceColor, 40, 111)

  // MEMO：基本前面にしておきたい部分の内、一部背面に持っていきたい部分↓
  // ネットウェブ
  // 6段目
  laceOfNetWebDouble3(ctx, laceColor, 18, 138)
  // 縦パーツ右
  laceOfVerticalPartsRight(ctx, laceColor, 38, 110)
  // ネット部分
  laceOfNetWebDouble5(ctx, laceColor, 0, 0)
  laceOfNetWebDouble5(ctx, laceColor, 5, 27)
  laceOfNetWebDouble5(ctx, laceColor, 12, 55)

  laceOfNetWebDouble2(ctx, laceColor, 0, 0)
  laceOfNetWebDouble2(ctx, laceColor, 10, 28)
  laceOfNetWebDouble2(ctx, laceColor, 23, 58)
  laceOfNetWebDouble2(ctx, laceColor, 34, 80)
  laceOfNetWebDouble2(ctx, laceColor, 49, 107)
  laceOfNetWebDouble4(ctx, laceColor, -100, 82)
  laceOfNetWebDouble4(ctx, laceColor, -89, 110)
  laceOfNetWebDouble4(ctx, laceColor, -78, 140)
  laceOfNetWebDouble4(ctx, laceColor, -68, 164)
  laceOfNetWebDouble4(ctx, laceColor, -55, 190)
}

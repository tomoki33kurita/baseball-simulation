import { laceOfLiningAllow } from '../lace/arrow'
import { laceOfVerticalPartsRight, laceParts1, laceParts7 } from './parts/laceParts'
import { topSidePartOfWebWithJoint2 } from './parts/sideParts'

const laceOfVerticalPartsLeft = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#282828'
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

const laceOfNetWebDouble3 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#282828'
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

const laceOfNetWebDouble5 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#282828'
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

const laceOfNetWebDouble2 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#282828'
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

const laceOfNetWebDouble4 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#282828'
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

export const tNet3Web = (ctx: CanvasRenderingContext2D, webColor: string, web2Color: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  // lace_1 ここから
  ctx.fillStyle = laceColor

  // ウェブ_縦
  ctx.fillStyle = web2Color
  ctx.beginPath()
  ctx.moveTo(250, 212) // 左＿上
  ctx.quadraticCurveTo(273, 285, 312, 354) // 左＿下
  ctx.quadraticCurveTo(332, 331, 342, 306) // 右＿下
  ctx.quadraticCurveTo(313, 241, 293, 150) // 右＿上
  ctx.quadraticCurveTo(265, 189, 251, 212) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  ctx.fillStyle = webColor

  // stitchここから
  ctx.lineWidth = 1.1
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 縦＿左＿外
  ctx.moveTo(253, 212) // 右上
  ctx.quadraticCurveTo(273, 277, 315, 353) // 左下
  // 縦＿左＿内
  ctx.moveTo(256, 209) // 右上
  ctx.quadraticCurveTo(276, 277, 318, 353) // 左下
  // 縦＿右＿外
  ctx.moveTo(291, 157) // 右上
  ctx.quadraticCurveTo(307, 234, 340, 308) // 左下
  // 縦＿右＿内
  ctx.moveTo(288, 159) // 右上
  ctx.quadraticCurveTo(304, 234, 337, 311) // 左下

  // 縦＿中央＿左
  ctx.moveTo(266, 186) // 右上
  ctx.quadraticCurveTo(277, 246, 322, 335) // 左下
  // 縦＿中央＿右
  ctx.moveTo(280, 179) // 右上
  ctx.quadraticCurveTo(291, 246, 331, 326) // 左下

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()

  // laceここから
  ctx.fillStyle = laceColor
  // 縦パーツ中央の革紐
  laceOfLiningAllow(ctx, laceColor, -9, -28)
  laceOfLiningAllow(ctx, laceColor, 0, 0)
  laceOfLiningAllow(ctx, laceColor, 10, 29)
  laceOfLiningAllow(ctx, laceColor, 19, 54)
  laceOfLiningAllow(ctx, laceColor, 31, 81)
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

export const laceOfNetWebDoubleWithJoint = (
  ctx: CanvasRenderingContext2D,
  webColor: string,
  web2Color: string,
  laceColor: string,
  stitchColor: string
): void => {
  // 1段目
  laceOfNetWebDouble3(ctx, laceColor, 0, 0)
  // 2段目
  laceOfNetWebDouble3(ctx, laceColor, 3, 25)
  // 3段目
  laceOfNetWebDouble3(ctx, laceColor, 6, 50)
  // 4段目
  laceOfNetWebDouble3(ctx, laceColor, 9, 80)
  // 5段目
  laceOfNetWebDouble3(ctx, laceColor, 12, 110)
  // // 6段目
  // 別の場所に記述
  // ネット部分右
  // 1段目
  laceOfNetWebDouble4(ctx, laceColor, -3, -27)
  // 2段目
  laceOfNetWebDouble4(ctx, laceColor, 0, 0)
  // 3段目
  laceOfNetWebDouble4(ctx, laceColor, 7, 25)
  // 4段目
  laceOfNetWebDouble4(ctx, laceColor, 14, 48)
  // 5段目
  laceOfNetWebDouble4(ctx, laceColor, 23, 77)
  // 縦パーツ周りの革紐
  laceOfVerticalPartsRight(ctx, laceColor, -7, -27)
  laceOfVerticalPartsRight(ctx, laceColor, 0, 0)
  laceOfVerticalPartsRight(ctx, laceColor, 8, 30)
  laceOfVerticalPartsRight(ctx, laceColor, 18, 58)
  laceOfVerticalPartsRight(ctx, laceColor, 28, 85)
  // ウェブ先端
  ctx.fillStyle = web2Color
  ctx.beginPath()
  ctx.moveTo(242, 277) // 左上
  ctx.quadraticCurveTo(252, 291, 250, 290) // 左下
  ctx.quadraticCurveTo(275, 180, 368, 135) // 右下
  ctx.quadraticCurveTo(356, 122, 356, 122) // 右上
  ctx.quadraticCurveTo(258, 175, 242, 277) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // ウェブ先端
  topSidePartOfWebWithJoint2(ctx, webColor, web2Color, laceColor, stitchColor)

  // ネットウェブ用の革紐最右
  laceParts7(ctx, laceColor, -5, -35) // 上1
  laceParts7(ctx, laceColor, -3, -10) // 上2
  laceParts7(ctx, laceColor, 0, 15) // 上3
  laceParts7(ctx, laceColor, 4, 46) // 上4
  laceParts7(ctx, laceColor, 9, 75) // 上5
  // 親指側＿一番手前の革紐
  laceParts1(ctx, laceColor, 45, 75) // 上4
  laceParts1(ctx, laceColor, 32, 50) // 上3
  laceParts1(ctx, laceColor, 20, 30) // 上2
  laceParts1(ctx, laceColor, -2, -5) // 上1
}

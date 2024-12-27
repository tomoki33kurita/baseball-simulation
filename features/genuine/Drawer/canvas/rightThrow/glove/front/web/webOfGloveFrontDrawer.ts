import { flatWeb } from './flatWeb'
import { flat2Web } from './flat2Web'
import { basketWeb } from './basketWeb'
import { basket2Web } from './basket2Web'
import { twoPeaceWeb } from './twoPeaceWeb'
import { twoPeace2Web } from './twoPeace2Web'
import { crossWeb } from './crossWeb'
import { cross2Web } from './cross2Web'
import { cross3Web } from './cross3Web'
import { crossVWeb } from './crossVWeb'
import { crossV2Web } from './crossV2Web'
import { hWeb } from './hWeb'

import { tNetWeb } from './tNetWeb'
import { tNet2Web } from './tNet2Web'
import { laceOfNetWebDoubleWithJoint, tNet3Web } from './tNet3Web'

import { underWeb } from '../lace/underWeb'
import { indexWrapBack } from '../lace/connectIndexToWeb'
import { webDrawUtil } from '@/util/canvas'
import { laceOfVerticalPartsRight, laceParts1, laceParts6, laceParts7 } from './parts/laceParts'
import { topCrossLaceFront, topSidePartOfWeb, topStraightLaceFront } from './parts/sideParts'
import { GenuineState } from '@/features/genuine/types'
import { genuineWeb } from './genuineWeb'
import { uNet2Web } from './uNet2Web'
import { uNetWeb } from './uNetWeb'
import { iNetWeb } from './iNetWeb'
import { dragonflyWeb } from './dragonflyWeb'
import { dragonfly2Web } from './dragonfly2Web'
import { ladderWeb } from './ladderWeb'
import { onePeaceWeb } from './onePeaceWeb'
import { basNetWeb } from './basNetWeb'
import { flat3Web } from './flat3Web'
import { flat4Web } from './flat4Web'
import { flat5Web } from './flat5Web'
import { flat6Web } from './flat6Web'

export const webOfGloveFrontDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const webColor = state.web.color
  const web2Color = state.web2.color
  const laceColor = state.lace.color
  const stitchColor = state.stitch.color
  const { webMatcher } = webDrawUtil(state)
  if (webMatcher(['flat'])) flatWeb(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['flat2'])) flat2Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['flat3'])) flat3Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['flat4'])) flat4Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['flat5'])) flat5Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['flat6'])) flat6Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['basket'])) basketWeb(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['basket2'])) basket2Web(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['twoPeace'])) twoPeaceWeb(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['twoPeace2'])) twoPeace2Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['genuine'])) genuineWeb(ctx, webColor, laceColor, stitchColor)

  if (webMatcher(['cross'])) crossWeb(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['cross2'])) cross2Web(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['cross3'])) cross3Web(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['crossV'])) crossVWeb(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['crossV2'])) crossV2Web(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['h'])) hWeb(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['onePeace'])) onePeaceWeb(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['uNet'])) uNetWeb(ctx, state)
  if (webMatcher(['uNet2'])) uNet2Web(ctx, state)

  if (webMatcher(['tNet'])) tNetWeb(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['tNet2'])) tNet2Web(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['tNet3'])) tNet3Web(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['iNet'])) iNetWeb(ctx, webColor, laceColor, state.binding.color, stitchColor)
  if (webMatcher(['basNet'])) basNetWeb(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['dragonfly'])) dragonflyWeb(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['dragonfly2'])) dragonfly2Web(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['ladder'])) ladderWeb(ctx, webColor, web2Color, laceColor, stitchColor)
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

const laceOfNetWebDouble = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
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

  // ウェブ先端
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
}

const underWebForNetWeb1 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 小指芯固定用の紐
  ctx.beginPath()
  ctx.moveTo(355 + x, 279 + y) // 左
  ctx.quadraticCurveTo(377 + x, 269 + y, 382 + x, 272 + y) // 右下
  ctx.quadraticCurveTo(389 + x, 266 + y, 384 + x, 261 + y) // 右上
  ctx.quadraticCurveTo(365 + x, 261 + y, 355 + x, 279 + y) // 左
  ctx.fill()
  ctx.moveTo(355 + x, 279 + y) // 左下
  ctx.quadraticCurveTo(377 + x, 264 + y, 382 + x, 272 + y) // 右下
  ctx.stroke()
  ctx.closePath()
}

const underWebForNetWeb2 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.save()
  ctx.rotate((numerator * Math.PI) / 180)
  ctx.beginPath()
  ctx.moveTo(325 + x, 331 + y) // 左上
  ctx.quadraticCurveTo(332 + x, 330 + y, 342 + x, 347 + y) // 左下
  ctx.quadraticCurveTo(350 + x, 343 + y, 347 + x, 337 + y) // 右下
  ctx.quadraticCurveTo(339 + x, 324 + y, 331 + x, 323 + y) // 右上
  ctx.quadraticCurveTo(325 + x, 322 + y, 325 + x, 331 + y) // 左上
  ctx.fill()
  ctx.moveTo(325 + x, 330 + y) // 左上
  ctx.quadraticCurveTo(335 + x, 325 + y, 344 + x, 347 + y) // 左下
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
}

const laceOfNetWeb = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  // ネットウェブ用の革紐最右
  laceParts6(ctx, laceColor, -2 + x, -25 + y) // 上1
  laceParts6(ctx, laceColor, 0 + x, 0 + y) // 上2
  laceParts6(ctx, laceColor, 5 + x, 27 + y) // 上3
  laceParts6(ctx, laceColor, 8 + x, 55 + y) // 上4
  laceParts6(ctx, laceColor, 14 + x, 84 + y) // 上5
}

const laceOfNetWeb2 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  // ネットウェブ用の革紐最右
  laceParts6(ctx, laceColor, -4 + x, -50 + y) // 上0
  laceParts6(ctx, laceColor, -2 + x, -25 + y) // 上1
  laceParts6(ctx, laceColor, 0 + x, 0 + y) // 上2
  laceParts6(ctx, laceColor, 5 + x, 27 + y) // 上3
  laceParts6(ctx, laceColor, 8 + x, 55 + y) // 上4
  laceParts6(ctx, laceColor, 14 + x, 84 + y) // 上5
}

export const rightLaceOfNetWebDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const { webMatcher } = webDrawUtil(state)
  const webColor = state.web.color
  const web2Color = state.web.color
  const laceColor = state.lace.color
  const stitchColor = state.stitch.color

  if (webMatcher(['cross2'])) {
    underWeb(ctx, laceColor, 10, 0) // ウェブ下＿右
    underWeb(ctx, laceColor, -11, 32) // ウェブ下＿中央
    underWeb(ctx, laceColor, -32, 64) // ウェブ下＿左
    indexWrapBack(ctx, laceColor, -10, -100) // 上
    indexWrapBack(ctx, laceColor, 0, 0) // 下
    return
  }

  if (webMatcher(['tNet', 'tNet2'])) {
    laceOfNetWeb(ctx, laceColor, 0, 0)
    underWeb(ctx, laceColor, 10, 0) // ウェブ下＿右
    underWeb(ctx, laceColor, -32, 64) // ウェブ下＿左
    indexWrapBack(ctx, laceColor, -10, -100) // 上
    // 親指側＿一番手前の革紐
    laceParts1(ctx, laceColor, 45, 75) // 上4
    laceParts1(ctx, laceColor, 32, 50) // 上3
    laceParts1(ctx, laceColor, 20, 30) // 上2
    laceParts1(ctx, laceColor, -2, -5) // 上1
    return
  }
  if (webMatcher(['tNet3'])) {
    laceOfNetWebDoubleWithJoint(ctx, webColor, web2Color, laceColor, stitchColor)
    // laceOfNetWebDouble(ctx, webColor, laceColor, stitchColor)
    underWebForNetWeb1(ctx, laceColor, 0, 0)
    underWebForNetWeb1(ctx, laceColor, -17, 30)
    underWebForNetWeb2(ctx, laceColor, -133, 95, -20)
    underWebForNetWeb2(ctx, laceColor, -15, 28, 0)
    return
  }
  if (webMatcher(['iNet'])) {
    laceOfNetWeb2(ctx, laceColor, 0, 0)
    underWeb(ctx, laceColor, 10, 0) // ウェブ下＿右
    underWeb(ctx, laceColor, -32, 64) // ウェブ下＿左
    // 親指側＿一番手前の革紐
    laceParts1(ctx, laceColor, 45, 75) // 上4
    laceParts1(ctx, laceColor, 32, 50) // 上3
    laceParts1(ctx, laceColor, 20, 30) // 上2
    laceParts1(ctx, laceColor, -2, -5) // 上1
    return
  }
  if (webMatcher(['basNet'])) {
    laceOfNetWeb(ctx, laceColor, 5, -5)
    underWeb(ctx, laceColor, 10, 0) // ウェブ下＿右
    underWeb(ctx, laceColor, -32, 64) // ウェブ下＿左
    indexWrapBack(ctx, laceColor, -10, -100) // 上
    // 親指側＿一番手前の革紐
    laceParts1(ctx, laceColor, 41, 75) // 上4
    laceParts1(ctx, laceColor, 28, 50) // 上3
    laceParts1(ctx, laceColor, 16, 30) // 上2
    laceParts1(ctx, laceColor, -6, -5) // 上1
    return
  }

  if (webMatcher(['dragonfly', 'dragonfly2'])) {
    underWeb(ctx, laceColor, 10, 0) // ウェブ下＿右
    underWeb(ctx, laceColor, -32, 64) // ウェブ下＿左
    indexWrapBack(ctx, laceColor, -10, -100) // 上
    indexWrapBack(ctx, laceColor, 0, 0) // 下
    return
  }
  if (webMatcher(['flat', 'flat2', 'flat3', 'flat4', 'flat5', 'basket', 'basket2', 'genuine'])) {
    underWeb(ctx, laceColor, 27, -24) // ウェブ下＿右
    underWeb(ctx, laceColor, -2, 28) // ウェブ下＿中
    underWeb(ctx, laceColor, -35, 72) // ウェブ下＿左
    indexWrapBack(ctx, laceColor, -10, -100) // 上
    indexWrapBack(ctx, laceColor, -5, -35) // 上
    indexWrapBack(ctx, laceColor, 0, 30) // 下
    return
  }
  if (webMatcher(['twoPeace', 'twoPeace2'])) {
    underWeb(ctx, laceColor, 17, -10) // ウェブ下＿右
    underWeb(ctx, laceColor, -5, 28) // ウェブ下＿中
    underWeb(ctx, laceColor, -28, 65) // ウェブ下＿左
    indexWrapBack(ctx, laceColor, -10, -100) // 上
    indexWrapBack(ctx, laceColor, -4, -40) // 中
    indexWrapBack(ctx, laceColor, 3, 20) // 下
    return
  }
  underWeb(ctx, laceColor, 10, 0) // ウェブ下＿右
  underWeb(ctx, laceColor, -32, 64) // ウェブ下＿左
  indexWrapBack(ctx, laceColor, -10, -100) // 上
  indexWrapBack(ctx, laceColor, 0, 0) // 下
}

export const topLaceDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const laceColor = state.lace.color
  if (state.webParts.value === 'iNet') return
  if (state.webLaceStyle.value === 'cross') {
    topCrossLaceFront(ctx, laceColor)
  } else {
    topStraightLaceFront(ctx, laceColor)
  }
}

// const standardLine = (ctx: CanvasRenderingContext2D): void => {
//   // 基準線
//   ctx.strokeStyle = 'blue'
//   ctx.beginPath()
//   // x方向
//   ctx.moveTo(268, 314)
//   ctx.quadraticCurveTo(303, 232, 363, 185)
//   // y方向
//   ctx.moveTo(280, 174)
//   ctx.quadraticCurveTo(339, 311, 339, 311)

//   ctx.stroke()
//   ctx.strokeStyle = '#383838'
//   ctx.closePath()
// }

// stitchここから
// ctx.beginPath()
// ctx.lineWidth = 1.3
// ctx.strokeStyle = stitchColor
// ctx.setLineDash([3, 3])
// // ctx.moveTo() // 左端
// // ctx.quadraticCurveTo()

// // 上部
// ctx.moveTo(233, 261) // 左上
// ctx.quadraticCurveTo(270, 159, 355, 112) // 右上

// ctx.stroke()
// ctx.setLineDash([])
// ctx.closePath()
// ctx.strokeStyle = '#383838'

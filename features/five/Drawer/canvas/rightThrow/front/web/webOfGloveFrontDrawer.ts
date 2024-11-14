import { FiveState } from '@/features/five/types'
import { p01Web } from './p01Web'
import { p02Web } from './p02Web'
import { p03Web } from './p03Web'
import { p04Web } from './p04Web'
import { p05Web } from './p05Web'
import { p06Web } from './p06Web'
import { in01Web } from './in01Web'
import { in02Web } from './in02Web'
import { in03Web } from './in03Web'
import { in04Web } from './in04Web'
import { in05Web } from './in05Web'
import { in06Web } from './in06Web'

import { ou01Web } from './ou01Web'
import { ou02Web } from './ou02Web'
import { ou03Web } from './ou03Web'

import { underWeb } from '../lace/underWeb'
import { indexWrapBack } from '../lace/connectIndexToWeb'
import { webDrawUtil } from '@/util/canvas'
import { laceOfVerticalPartsRight, laceParts1, laceParts7 } from './parts/laceParts'
import { topSidePartOfWeb } from './parts/sideParts'
import { getOrderType } from '@/features/five/Components/Setters/logic'
import { positionChecker } from '@/util/logic'

export const webOfGloveFrontDrawer = (
  ctx: CanvasRenderingContext2D,
  state: FiveState,
  webColor: string,
  laceColor: string,
  stitchColor: string
): void => {
  const { webMatcher } = webDrawUtil(state)
  if (webMatcher(['p01'])) p01Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['p02'])) p02Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['p03'])) p03Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['p04'])) p04Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['p05'])) p05Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['p06'])) p06Web(ctx, webColor, laceColor, stitchColor)

  if (webMatcher(['in01'])) in01Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['in02'])) in02Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['in03'])) in03Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['in04'])) in04Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['in05'])) in05Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['in06'])) in06Web(ctx, webColor, laceColor, stitchColor)

  if (webMatcher(['ou01'])) ou01Web(ctx, laceColor, stitchColor, webColor)
  if (webMatcher(['ou02'])) ou02Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['ou03'])) ou03Web(ctx, webColor, laceColor, stitchColor)
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

export const rightLaceOfNetWebDrawer = (ctx: CanvasRenderingContext2D, state: FiveState): void => {
  const { webMatcher } = webDrawUtil(state)
  const { isBasicOrder } = getOrderType(state.orderType)
  const { isPitcher } = positionChecker(state.baseModel.position)
  const baseModel = state.baseModel
  const basicColors = baseModel.basicColors
  const webLeatherColor = isBasicOrder ? basicColors.leather.color : state.web.color
  const laceColor = isBasicOrder ? basicColors.lace.color : state.lace.color
  const stitchColor = isBasicOrder ? basicColors.stitch.color : state.stitch.color

  if (isPitcher || webMatcher(['in06'])) {
    underWeb(ctx, laceColor, 17, -12) // ウェブ下＿右
    underWeb(ctx, laceColor, -11, 32) // ウェブ下＿中
    underWeb(ctx, laceColor, -38, 73) // ウェブ下＿左
    indexWrapBack(ctx, laceColor, -10, -100) // 上
    indexWrapBack(ctx, laceColor, -3, -30) // 中
    indexWrapBack(ctx, laceColor, 5, 35) // 下
    return
  }
  if (webMatcher(['ou01'])) {
    laceOfNetWebDouble(ctx, webLeatherColor, laceColor, stitchColor)
    underWebForNetWeb1(ctx, laceColor, 0, 0)
    underWebForNetWeb1(ctx, laceColor, -17, 30)
    underWebForNetWeb2(ctx, laceColor, -133, 95, -20)
    underWebForNetWeb2(ctx, laceColor, -15, 28, 0)
    return
  }
  if (webMatcher(['ou02'])) {
    underWeb(ctx, laceColor, 10, 0) // ウェブ下＿右
    underWeb(ctx, laceColor, -32, 64) // ウェブ下＿左
    indexWrapBack(ctx, laceColor, -10, -100) // 上
    indexWrapBack(ctx, laceColor, -3, -30) // 中
    indexWrapBack(ctx, laceColor, 5, 35) // 下
    return
  }
  underWeb(ctx, laceColor, 10, 0) // ウェブ下＿右
  underWeb(ctx, laceColor, -32, 64) // ウェブ下＿左
  indexWrapBack(ctx, laceColor, -10, -100) // 上
  indexWrapBack(ctx, laceColor, 0, 0) // 下
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

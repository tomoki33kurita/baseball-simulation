import { GenuineState } from '@/features/genuine/types'

const commonLace = (ctx: CanvasRenderingContext2D) => {
  // 右_親指芯とウェブ先端を繋ぐところ1
  ctx.beginPath()
  ctx.moveTo(90, 265) // 左上
  ctx.quadraticCurveTo(72, 289, 85, 321) //
  ctx.quadraticCurveTo(91, 343, 112, 353) // 右下
  ctx.quadraticCurveTo(107, 341, 107, 341) // 右上
  ctx.quadraticCurveTo(95, 334, 88, 308) //
  ctx.quadraticCurveTo(83, 286, 96, 266) //
  ctx.quadraticCurveTo(90, 265, 90, 265) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 右_親指芯とウェブ先端を繋ぐところ2
  ctx.beginPath()
  ctx.moveTo(99, 268) // 左上
  ctx.quadraticCurveTo(87, 281, 85, 303) //
  ctx.quadraticCurveTo(81, 322, 101, 329) // 右下左
  ctx.quadraticCurveTo(102, 319, 102, 319) // 右下右
  ctx.quadraticCurveTo(87, 320, 107, 280) // 右上
  ctx.quadraticCurveTo(109, 270, 99, 268) // 右上
  ctx.fill()
  ctx.moveTo(90, 298) // 左上
  ctx.quadraticCurveTo(83, 316, 100, 323) // 左下
  ctx.stroke()
  ctx.closePath()

  // 右_親指芯とウェブ先端を繋ぐところ3
  ctx.beginPath()
  ctx.moveTo(92, 265) // 左上
  ctx.quadraticCurveTo(76, 285, 89, 297) //
  ctx.quadraticCurveTo(112, 301, 122, 313) // 右下左
  ctx.quadraticCurveTo(134, 304, 135, 306) // 右下右
  ctx.quadraticCurveTo(115, 292, 102, 294) //
  ctx.quadraticCurveTo(85, 295, 103, 270) // 右上
  ctx.quadraticCurveTo(100, 262, 92, 265) //
  ctx.fill()
  ctx.moveTo(95, 265) // 左上
  ctx.quadraticCurveTo(79, 288, 95, 296) //
  ctx.quadraticCurveTo(111, 298, 125, 311) //
  ctx.stroke()
  ctx.closePath()

  // 右_小指芯とウェブ先端を繋ぐところ1
  ctx.beginPath()
  ctx.moveTo(309, 70) // 左下
  ctx.quadraticCurveTo(314, 80, 314, 80) // 左下
  ctx.quadraticCurveTo(337, 65, 377, 78) // 右左
  ctx.quadraticCurveTo(392, 73, 392, 73) // 右右
  ctx.quadraticCurveTo(340, 52, 308, 68) // 左上
  ctx.quadraticCurveTo(309, 70, 309, 70) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 右_小指芯とウェブ先端を繋ぐところ2
  ctx.beginPath()
  ctx.moveTo(304, 62) // 左上
  ctx.quadraticCurveTo(309, 69, 309, 69) // 左下
  ctx.quadraticCurveTo(340, 58, 365, 83) // 右左
  ctx.quadraticCurveTo(376, 79, 376, 79) // 右右
  ctx.quadraticCurveTo(357, 59, 332, 56) // 中央上
  ctx.quadraticCurveTo(316, 53, 304, 62) // 左上
  ctx.fill()
  ctx.moveTo(306, 64) // 左上
  ctx.quadraticCurveTo(328, 52, 363, 68) // 左下
  ctx.stroke()
  ctx.closePath()

  // 右_小指芯とウェブ先端を繋ぐところ3
  ctx.beginPath()
  ctx.moveTo(308, 68) // 左上
  ctx.quadraticCurveTo(311, 73, 311, 73) // 左下
  ctx.quadraticCurveTo(345, 64, 347, 98) // 右左
  ctx.quadraticCurveTo(355, 91, 355, 91) // 右右
  ctx.quadraticCurveTo(346, 66, 335, 62) // 中央上
  ctx.quadraticCurveTo(318, 58, 308, 68) // 左上
  ctx.fill()
  ctx.moveTo(309, 70) // 左上
  ctx.quadraticCurveTo(341, 58, 348, 85) // 左下
  ctx.stroke()
  ctx.closePath()
}

const shallowWebCommonLace = (ctx: CanvasRenderingContext2D) => {
  // ウェブ右下→人差指芯への繋ぎ1
  ctx.beginPath()
  ctx.moveTo(334, 186) // 左上
  ctx.quadraticCurveTo(343, 192, 343, 192) // 左下
  ctx.quadraticCurveTo(382, 177, 382, 177) // 右下
  ctx.quadraticCurveTo(373, 170, 373, 170) // 右上
  ctx.quadraticCurveTo(334, 182, 334, 186) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // ctx.quadraticCurveTo()

  // ウェブ左下→親指芯への繋ぎ1
  ctx.beginPath()
  ctx.moveTo(195, 298) // 右上
  ctx.quadraticCurveTo(193, 327, 193, 327) // 左上
  ctx.quadraticCurveTo(202, 331, 202, 331) // 左下
  ctx.quadraticCurveTo(210, 303, 210, 303) // 右下
  ctx.quadraticCurveTo(195, 298, 195, 298)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

const laceOfNormalWeb = (ctx: CanvasRenderingContext2D) => {
  // 左_親指芯とウェブを繋ぐところ1
  ctx.beginPath()
  ctx.moveTo(124, 272) // 左上
  ctx.quadraticCurveTo(112, 292, 111, 313) // 左下
  ctx.quadraticCurveTo(124, 315, 124, 315) // 右下
  ctx.quadraticCurveTo(121, 298, 136, 274) // 右上
  ctx.quadraticCurveTo(129, 267, 124, 272) // 左上
  ctx.fill()
  ctx.moveTo(127, 273) // 左上
  ctx.quadraticCurveTo(116, 288, 113, 313) // 左下
  ctx.stroke()
  ctx.closePath()

  // 右_小指芯とウェブを繋ぐところ1
  ctx.beginPath()
  ctx.moveTo(308, 121) // 左下
  ctx.quadraticCurveTo(332, 95, 344, 103) // 右下
  ctx.quadraticCurveTo(344, 98, 348, 95) //
  ctx.quadraticCurveTo(346, 92, 346, 92) // 右上
  ctx.quadraticCurveTo(337, 88, 323, 95) // 左上
  ctx.quadraticCurveTo(324, 98, 324, 98) //
  ctx.quadraticCurveTo(310, 110, 308, 121) //
  ctx.fill()
  ctx.moveTo(324, 98) // 左上
  ctx.quadraticCurveTo(336, 91, 347, 95) // 左下
  ctx.stroke()
  ctx.closePath()
  // 右_小指芯とウェブを繋ぐところ2
  ctx.beginPath()
  ctx.moveTo(308, 143) // 左上
  ctx.quadraticCurveTo(309, 148, 314, 154) // 左下
  ctx.quadraticCurveTo(329, 136, 345, 132) // 右下
  ctx.quadraticCurveTo(341, 123, 342, 123) // 右上
  ctx.quadraticCurveTo(326, 125, 308, 143) // 右上
  ctx.fill()
  ctx.moveTo(309, 146) // 左上
  ctx.quadraticCurveTo(323, 131, 341, 124) // 左下
  ctx.stroke()
  ctx.closePath()
  // 右_小指芯とウェブを繋ぐところ3
  ctx.beginPath()
  ctx.moveTo(330, 176) // 左上
  ctx.quadraticCurveTo(336, 186, 335, 187) // 左下
  ctx.quadraticCurveTo(345, 174, 365, 165) // 右下
  ctx.quadraticCurveTo(358, 156, 358, 156) // 右上
  ctx.quadraticCurveTo(339, 162, 330, 176) // 左上
  ctx.fill()
  ctx.moveTo(330, 178) // 左上
  ctx.quadraticCurveTo(342, 164, 359, 158) // 左下
  ctx.stroke()
  ctx.closePath()
}

const laceOfUnderNormalWeb = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
  // ウェブと捕球面を繋ぐところ左
  ctx.beginPath()
  ctx.moveTo(250 + x, 260 + y) // 左上
  ctx.quadraticCurveTo(267 + x, 279 + y, 282 + x, 287 + y) // 左下
  ctx.quadraticCurveTo(292 + x, 278 + y, 290 + x, 278 + y) // 右下
  ctx.quadraticCurveTo(276 + x, 273 + y, 258 + x, 253 + y) // 右上
  ctx.quadraticCurveTo(260 + x, 270 + y, 250 + x, 260 + y) // 左上
  ctx.fill()
  ctx.moveTo(260 + x, 260 + y) // 左上
  ctx.quadraticCurveTo(271 + x, 272 + y, 288 + x, 281 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  // ウェブと捕球面を繋ぐところ右
  ctx.beginPath()
  ctx.moveTo(262 + x, 255 + y) // 左上
  ctx.quadraticCurveTo(282 + x, 265 + y, 291 + x, 278 + y) // 左下
  ctx.quadraticCurveTo(298 + x, 271 + y, 298 + x, 271 + y) // 右下
  ctx.quadraticCurveTo(295 + x, 258 + y, 278 + x, 249 + y) // 右上
  ctx.quadraticCurveTo(272 + x, 253 + y, 262 + x, 255 + y) // 左上
  ctx.fill()
  ctx.moveTo(268 + x, 254 + y) // 左上
  ctx.quadraticCurveTo(285 + x, 265 + y, 293 + x, 278 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}

const laceOfUnderShallowWeb = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
  // ウェブと捕球面を繋ぐところ左
  ctx.beginPath()
  ctx.moveTo(260 + x, 260 + y) // 左上
  ctx.quadraticCurveTo(298 + x, 261 + y, 298 + x, 261 + y) // 左下
  ctx.quadraticCurveTo(307 + x, 253 + y, 307 + x, 253 + y) // 右下
  ctx.quadraticCurveTo(298 + x, 245 + y, 277 + x, 250 + y) // 右上
  ctx.quadraticCurveTo(260 + x, 260 + y, 260 + x, 260 + y) // 左上
  ctx.fill()
  ctx.moveTo(260 + x, 260 + y) // 左上
  ctx.quadraticCurveTo(290 + x, 253 + y, 300 + x, 261 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  // // ウェブと捕球面を繋ぐところ右
  ctx.beginPath()
  ctx.moveTo(278 + x, 245 + y) // 左上
  ctx.quadraticCurveTo(282 + x, 265 + y, 291 + x, 278 + y) // 左下
  ctx.quadraticCurveTo(298 + x, 271 + y, 298 + x, 271 + y) // 右下
  ctx.quadraticCurveTo(295 + x, 258 + y, 290 + x, 235 + y) // 右上
  ctx.quadraticCurveTo(272 + x, 253 + y, 278 + x, 245 + y) // 左上
  ctx.fill()
  ctx.moveTo(280 + x, 245 + y) // 左上
  ctx.quadraticCurveTo(284 + x, 265 + y, 294 + x, 278 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}

const laceOfUnderShallowWeb2 = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
  // ウェブと捕球面を繋ぐところ左
  ctx.strokeStyle = '#383838'
  ctx.beginPath()
  ctx.moveTo(303 + x, 220 + y) // 左上
  ctx.quadraticCurveTo(325 + x, 245 + y, 325 + x, 245 + y) // 左下
  ctx.quadraticCurveTo(331 + x, 232 + y, 331 + x, 232 + y) // 右下
  ctx.quadraticCurveTo(311 + x, 211 + y, 311 + x, 211 + y) // 右上
  ctx.quadraticCurveTo(303 + x, 220 + y, 303 + x, 220 + y) // 左上
  ctx.fill()
  ctx.moveTo(303 + x, 220 + y) // 左上
  ctx.quadraticCurveTo(315 + x, 225 + y, 327 + x, 245 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const laceOfBackOfAroundWebDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const isShallowWebModel = ['YT-22'].includes(state.baseModel.productNumber)
  const isStraightLace = state.palmToWebConnectLaceStyle.value === 'straight'

  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = state.lace.color

  commonLace(ctx)
  if (isShallowWebModel) {
    shallowWebCommonLace(ctx)
    if (isStraightLace) {
      laceOfUnderShallowWeb2(ctx, 0, 0)
      laceOfUnderShallowWeb2(ctx, -25, 25)
      laceOfUnderShallowWeb2(ctx, -50, 50)
      laceOfUnderShallowWeb2(ctx, -75, 75)
    } else {
      laceOfUnderShallowWeb(ctx, 15, -15)
      laceOfUnderShallowWeb(ctx, -30, 30)
    }
  }

  if (!isShallowWebModel) {
    laceOfNormalWeb(ctx)
    laceOfUnderNormalWeb(ctx, -40, 40)
    laceOfUnderNormalWeb(ctx, 0, 0)
    laceOfUnderNormalWeb(ctx, 40, -40)
  }
}

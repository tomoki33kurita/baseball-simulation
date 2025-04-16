import { allowLace } from '../../lace/allowCenterOfCrossWeb'

export const verticalPartOfVWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.fillStyle = webColor
  // 縦パーツ_左
  ctx.beginPath()
  ctx.moveTo(593, 83) //左上
  ctx.quadraticCurveTo(545, 176, 490, 311) //左下
  ctx.quadraticCurveTo(512, 335, 512, 335) //右下
  ctx.quadraticCurveTo(579, 205, 630, 120) //右上
  ctx.quadraticCurveTo(614, 97, 593, 83) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 縦パーツ_右
  ctx.beginPath()
  ctx.moveTo(668, 176) //左上
  ctx.quadraticCurveTo(615, 246, 514, 335) //左下
  ctx.quadraticCurveTo(538, 355, 538, 355) //右下
  ctx.quadraticCurveTo(635, 285, 689, 222) //右上
  ctx.quadraticCurveTo(681, 195, 668, 176) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])

  // 縦向き＿左
  // 左
  ctx.moveTo(596, 88) // 上
  ctx.quadraticCurveTo(554, 168, 495, 309) // 下
  // 右
  ctx.moveTo(625, 118) // 上
  ctx.quadraticCurveTo(573, 205, 511, 328) // 下
  // 縦向き＿左
  // 左
  ctx.moveTo(669, 183) // 上
  ctx.quadraticCurveTo(612, 257, 518, 335) // 下
  // 右
  ctx.moveTo(685, 221) // 上
  ctx.quadraticCurveTo(626, 287, 539, 348) // 下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
}

export const verticalPartOfWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.fillStyle = webColor
  // 縦パーツ
  ctx.beginPath()
  ctx.moveTo(630, 120) //左上
  ctx.quadraticCurveTo(587, 214, 482, 330) //左下
  ctx.quadraticCurveTo(520, 370, 520, 370) //右下
  ctx.quadraticCurveTo(658, 225, 668, 175) //右上
  ctx.quadraticCurveTo(650, 141, 630, 120) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])

  // 縦向き＿左＿外側
  ctx.moveTo(642, 143) // 上
  ctx.quadraticCurveTo(605, 230, 501, 343) // 下
  // 縦向き＿左＿内側
  ctx.moveTo(645, 145) // 上
  ctx.quadraticCurveTo(608, 233, 505, 345) // 下
  // 縦向き＿右＿内側
  ctx.moveTo(650, 151) // 上
  ctx.quadraticCurveTo(610, 245, 508, 351) // 下
  // // 縦向き＿右＿外側
  ctx.moveTo(652, 155) // 上
  ctx.quadraticCurveTo(613, 250, 512, 352) // 下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
}

export const verticalPartOfOutfielderWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.fillStyle = webColor
  // 縦パーツ
  ctx.beginPath()
  ctx.moveTo(630, 120) //左上
  ctx.quadraticCurveTo(587, 214, 487, 320) //左下
  ctx.quadraticCurveTo(479, 365, 530, 362) //右下
  ctx.quadraticCurveTo(658, 225, 668, 175) //右上
  ctx.quadraticCurveTo(650, 141, 630, 120) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 縦向き＿左＿外側
  ctx.moveTo(632, 125) // 上
  ctx.quadraticCurveTo(597, 205, 497, 315) // 下
  // 縦向き＿左＿内側
  ctx.moveTo(635, 127) // 上
  ctx.quadraticCurveTo(600, 207, 502, 315) // 下
  // 縦向き＿右＿内側
  ctx.moveTo(662, 171) // 上
  ctx.quadraticCurveTo(638, 239, 528, 347) // 下
  // 縦向き＿右＿外側
  ctx.moveTo(664, 174) // 上
  ctx.quadraticCurveTo(640, 242, 534, 349) // 下
  // 縦向き 下部の半円ステッチ＿外側
  ctx.moveTo(497, 315) // 左
  ctx.quadraticCurveTo(503, 355, 534, 349) // 右
  // // 縦向き 下部の半円ステッチ＿内側
  ctx.moveTo(502, 315) // 左
  ctx.quadraticCurveTo(505, 343, 528, 347) // 右
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
}

export const verticalPartOfWebWithLace = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.fillStyle = webColor
  // 縦パーツ
  ctx.beginPath()
  ctx.moveTo(630, 120) //左上
  ctx.quadraticCurveTo(587, 214, 494, 311) //左下
  ctx.quadraticCurveTo(493, 353, 534, 355) //右下
  ctx.quadraticCurveTo(658, 225, 668, 175) //右上
  ctx.quadraticCurveTo(650, 141, 630, 120) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 縦向き＿左＿外側
  ctx.moveTo(632, 125) // 上
  ctx.quadraticCurveTo(597, 205, 497, 315) // 下
  // 縦向き＿左＿内側
  ctx.moveTo(635, 127) // 上
  ctx.quadraticCurveTo(600, 207, 502, 315) // 下
  // 縦向き＿右＿内側
  ctx.moveTo(662, 171) // 上
  ctx.quadraticCurveTo(638, 239, 528, 347) // 下
  // 縦向き＿右＿外側
  ctx.moveTo(664, 174) // 上
  ctx.quadraticCurveTo(640, 242, 534, 349) // 下
  // 縦向き 下部の半円ステッチ＿外側
  ctx.moveTo(497, 315) // 左
  ctx.quadraticCurveTo(503, 355, 534, 349) // 右
  // // 縦向き 下部の半円ステッチ＿内側
  ctx.moveTo(502, 315) // 左
  ctx.quadraticCurveTo(505, 343, 528, 347) // 右
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで

  // laceここから
  allowLace(ctx, laceColor, -2, -5, 1, 1)
  allowLace(ctx, laceColor, -19, 33, 0, 1)
  allowLace(ctx, laceColor, -34, 58, 0, 1)
  allowLace(ctx, laceColor, -53, 85, 0, 1)
  allowLace(ctx, laceColor, -73, 110, 0, 1)
}
export const verticalPartOfWebWithLaceOfOutfielder = (
  ctx: CanvasRenderingContext2D,
  webColor: string,
  laceColor: string,
  stitchColor: string
): void => {
  ctx.lineWidth = 0.8
  ctx.fillStyle = webColor
  // 縦パーツ
  ctx.beginPath()
  ctx.moveTo(630, 120) //左上
  ctx.quadraticCurveTo(587, 214, 494, 311) //左下
  ctx.quadraticCurveTo(493, 353, 534, 355) //右下
  ctx.quadraticCurveTo(658, 225, 668, 175) //右上
  ctx.quadraticCurveTo(650, 141, 630, 120) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 縦向き＿左＿外側
  ctx.moveTo(632, 125) // 上
  ctx.quadraticCurveTo(597, 205, 497, 315) // 下
  // 縦向き＿左＿内側
  ctx.moveTo(635, 127) // 上
  ctx.quadraticCurveTo(600, 207, 502, 315) // 下
  // 縦向き＿右＿内側
  ctx.moveTo(662, 171) // 上
  ctx.quadraticCurveTo(638, 239, 528, 347) // 下
  // 縦向き＿右＿外側
  ctx.moveTo(664, 174) // 上
  ctx.quadraticCurveTo(640, 242, 534, 349) // 下
  // 縦向き 下部の半円ステッチ＿外側
  ctx.moveTo(497, 315) // 左
  ctx.quadraticCurveTo(503, 355, 534, 349) // 右
  // // 縦向き 下部の半円ステッチ＿内側
  ctx.moveTo(502, 315) // 左
  ctx.quadraticCurveTo(505, 343, 528, 347) // 右
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで

  // laceここから
  allowLace(ctx, laceColor, 2, -14, 1, 1)
  allowLace(ctx, laceColor, -13, 23, 0, 1)
  allowLace(ctx, laceColor, -27, 45, 0, 1)
  allowLace(ctx, laceColor, -40, 67, 0, 1)
  allowLace(ctx, laceColor, -57, 89, 0, 1)
  allowLace(ctx, laceColor, -74, 110, 0, 1)
}

export const verticalPartOfWebWithLaceWithJointForOutfielder = (
  ctx: CanvasRenderingContext2D,
  webColor: string,
  laceColor: string,
  stitchColor: string
): void => {
  ctx.fillStyle = webColor
  // 縦パーツ
  ctx.beginPath()
  ctx.moveTo(613, 157) //左上
  ctx.quadraticCurveTo(567, 242, 494, 311) //左下
  ctx.quadraticCurveTo(493, 353, 534, 355) //右下
  ctx.quadraticCurveTo(603, 285, 647, 209) //右上
  ctx.quadraticCurveTo(633, 178, 613, 157) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 縦向き＿左＿外側
  ctx.moveTo(613, 162) // 上
  ctx.quadraticCurveTo(563, 255, 497, 313) // 下
  // 縦向き＿左＿内側
  ctx.moveTo(616, 166) // 上
  ctx.quadraticCurveTo(570, 253, 502, 315) // 下
  // 縦向き＿右＿内側
  ctx.moveTo(642, 205) // 上
  ctx.quadraticCurveTo(596, 284, 532, 348) // 下
  // 縦向き＿右＿外側
  ctx.moveTo(643, 209) // 上
  ctx.quadraticCurveTo(596, 289, 535, 350) // 下
  // 縦向き 下部の半円ステッチ＿外側
  ctx.moveTo(497, 315) // 左
  ctx.quadraticCurveTo(503, 355, 535, 350) // 右
  // 縦向き 下部の半円ステッチ＿内側
  ctx.moveTo(502, 315) // 左
  ctx.quadraticCurveTo(505, 346, 532, 348) // 右
  // 中央
  ctx.moveTo(626, 178) // 左上
  ctx.quadraticCurveTo(586, 260, 541, 306) // 左下
  ctx.quadraticCurveTo(547, 314, 547, 314) // 右下
  ctx.quadraticCurveTo(600, 262, 635, 189) // 右上
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで

  // laceここから
  allowLace(ctx, laceColor, -27, 48)
  allowLace(ctx, laceColor, -43, 70)
  allowLace(ctx, laceColor, -63, 95)
  allowLace(ctx, laceColor, -83, 120)
}

export const verticalPartsOfWebCircleEnd = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.fillStyle = webColor
  // 縦パーツ
  ctx.beginPath()
  ctx.moveTo(630, 120) //左上
  ctx.quadraticCurveTo(573, 211, 492, 310) //左下
  ctx.quadraticCurveTo(482, 357, 532, 359) //右下
  ctx.quadraticCurveTo(668, 176, 668, 176) //右上
  ctx.quadraticCurveTo(650, 141, 630, 120) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // フチ＿内側
  ctx.moveTo(638, 128) // 左上
  ctx.quadraticCurveTo(569, 235, 501, 314) // 左下
  ctx.quadraticCurveTo(502, 353, 529, 346) // 右下
  ctx.quadraticCurveTo(599, 270, 662, 167) // 右上
  // フチ＿外側
  ctx.moveTo(633, 124) // 左上
  ctx.quadraticCurveTo(567, 230, 497, 310)
  ctx.quadraticCurveTo(492, 358, 530, 351)
  ctx.quadraticCurveTo(607, 270, 664, 171)

  // 中央＿左
  ctx.moveTo(648, 144) // 上
  ctx.quadraticCurveTo(506, 338, 506, 338) // 下
  // 中央＿右
  ctx.moveTo(652, 148) // 上
  ctx.quadraticCurveTo(510, 340, 510, 340) // 下

  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
}

export const verticalPartsOfWebCircleEndWithEdge = (
  ctx: CanvasRenderingContext2D,
  webColor: string,
  bindingColor: string,
  stitchColor: string,
  x: number,
  y: number,
  rotate: number
): void => {
  ctx.fillStyle = bindingColor
  ctx.save()
  ctx.rotate((rotate * Math.PI) / 180)

  // 縦パーツ
  ctx.beginPath()
  ctx.moveTo(630 + x, 120 + y) //左上
  ctx.quadraticCurveTo(492 + x, 310 + y, 492 + x, 310 + y) //左下
  ctx.quadraticCurveTo(482 + x, 357 + y, 536 + x, 356 + y) //右下
  ctx.quadraticCurveTo(668 + x, 176 + y, 668 + x, 176 + y) //右上
  ctx.quadraticCurveTo(682 + x, 163 + y, 673 + x, 137 + y) // 中央＿上
  ctx.quadraticCurveTo(650 + x, 103 + y, 630 + x, 120 + y) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 縦パーツ_ヘリ革想定ここから
  ctx.beginPath()
  ctx.fillStyle = webColor
  ctx.moveTo(639 + x, 124 + y) //左上
  ctx.quadraticCurveTo(503 + x, 311 + y, 503 + x, 311 + y)
  ctx.quadraticCurveTo(490 + x, 345 + y, 529 + x, 348 + y)
  ctx.quadraticCurveTo(665 + x, 161 + y, 665 + x, 161 + y)
  ctx.quadraticCurveTo(670 + x, 130 + y, 639 + x, 124 + y)
  // ctx.quadraticCurveTo()
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // // ヘリ革想定ここまで
  ctx.fillStyle = webColor

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 縦＿ヘリ革の内側
  ctx.moveTo(640 + x, 127 + y) // 左上
  ctx.quadraticCurveTo(505 + x, 315 + y, 505 + x, 315 + y) // 左下
  ctx.quadraticCurveTo(498 + x, 347 + y, 529 + x, 343 + y) // 右下
  ctx.quadraticCurveTo(662 + x, 161 + y, 662 + x, 161 + y) // 右上
  ctx.quadraticCurveTo(667 + x, 133 + y, 640 + x, 127 + y) // 右上

  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = '#282828'
  ctx.closePath()
  // stitchここまで
  ctx.restore()
  ctx.lineWidth = 0.8
}

export const verticalPartForBasNet = (
  ctx: CanvasRenderingContext2D,
  webColor: string,
  web2Color: string,
  laceColor: string,
  stitchColor: string
): void => {
  const web2Parts = (ctx: CanvasRenderingContext2D, web2Color: string, x: number, y: number) => {
    ctx.strokeStyle = '#282828'
    ctx.fillStyle = web2Color
    ctx.beginPath()
    ctx.moveTo(601 + x, 151 + y) // 左上
    ctx.quadraticCurveTo(589 + x, 168 + y, 589 + x, 168 + y) // 左下
    ctx.quadraticCurveTo(600 + x, 173 + y, 605 + x, 188 + y) // 右下
    ctx.quadraticCurveTo(615 + x, 172 + y, 615 + x, 172 + y) // 右上
    ctx.quadraticCurveTo(610 + x, 157 + y, 601 + x, 151 + y)
    // ctx.quadraticCurveTo()
    ctx.fill()
    ctx.stroke()

    ctx.closePath()
  }

  const web2EndParts = (ctx: CanvasRenderingContext2D, web2Color: string, x: number, y: number) => {
    ctx.strokeStyle = '#282828'
    ctx.fillStyle = web2Color
    ctx.beginPath()
    ctx.moveTo(512 + x, 277 + y) // 左上
    ctx.quadraticCurveTo(507 + x, 280 + y, 500 + x, 291 + y) // 左下
    ctx.quadraticCurveTo(502 + x, 300 + y, 512 + x, 306 + y) // 右下
    ctx.quadraticCurveTo(522 + x, 302 + y, 524 + x, 292 + y) // 右上
    ctx.quadraticCurveTo(512 + x, 277 + y, 512 + x, 277 + y)
    // ctx.quadraticCurveTo()
    ctx.fill()
    ctx.stroke()

    ctx.closePath()
  }

  ctx.fillStyle = webColor
  ctx.strokeStyle = '#282828'
  // 縦パーツ_土台
  ctx.beginPath()
  ctx.moveTo(617, 93) //左上
  ctx.quadraticCurveTo(545, 180, 485, 285) //左下
  ctx.quadraticCurveTo(479, 356, 547, 357) //右下
  ctx.quadraticCurveTo(625, 275, 681, 185) //右上
  ctx.quadraticCurveTo(658, 130, 617, 90) //左上
  // ctx.quadraticCurveTo()
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 縦パーツ_中央の模様
  ctx.beginPath()
  ctx.moveTo(621, 123) //左上
  ctx.quadraticCurveTo(554, 207, 504, 291) //左下
  ctx.quadraticCurveTo(511, 322, 541, 335) //右下
  ctx.quadraticCurveTo(609, 262, 661, 184) // 右上
  ctx.quadraticCurveTo(644, 143, 621, 123) //左上
  // ctx.quadraticCurveTo()
  // ctx.fill()
  ctx.stroke()
  ctx.strokeStyle = '#282828'
  ctx.closePath()
  // ctx.fill()
  ctx.stroke()
  ctx.strokeStyle = '#282828'
  ctx.closePath()

  web2Parts(ctx, web2Color, 22, -30) // 左_1
  web2Parts(ctx, web2Color, 0, 0) // 左_2
  web2Parts(ctx, web2Color, -22, 30) // 左_3
  web2Parts(ctx, web2Color, -44, 60) // 左_4
  web2Parts(ctx, web2Color, -66, 90) // 左_5
  web2EndParts(ctx, web2Color, 0, 0) // 左_6

  web2Parts(ctx, web2Color, 24, 5) // 中央_1
  web2Parts(ctx, web2Color, 2, 35) // 中央_2
  web2Parts(ctx, web2Color, -20, 65) // 中央_3
  web2Parts(ctx, web2Color, -42, 95) // 中央_4
  web2Parts(ctx, web2Color, -64, 125) // 中央_5

  web2Parts(ctx, web2Color, 47, 12) // 右_1
  web2Parts(ctx, web2Color, 26, 40) // 右_2
  web2Parts(ctx, web2Color, 5, 68) // 右_3
  web2Parts(ctx, web2Color, -16, 96) // 右_4
  web2Parts(ctx, web2Color, -38, 124) // 右_5
  web2EndParts(ctx, web2Color, 28, 30) // 右_6

  // stitchここから
  ctx.beginPath()
  ctx.strokeStyle = stitchColor
  ctx.lineWidth = 1.3
  ctx.setLineDash([3, 3])

  // 縦向き＿左＿外側
  ctx.moveTo(620, 97) // 左上
  ctx.quadraticCurveTo(556, 169, 488, 287)
  ctx.quadraticCurveTo(485, 352, 547, 353)
  ctx.quadraticCurveTo(623, 271, 678, 184)
  ctx.quadraticCurveTo(657, 138, 620, 97)
  // 縦向き＿左＿外側
  ctx.moveTo(620, 102) // 左上
  ctx.quadraticCurveTo(560, 169, 493, 284)
  ctx.quadraticCurveTo(485, 347, 546, 349)
  ctx.quadraticCurveTo(620, 269, 675, 182)
  ctx.quadraticCurveTo(652, 139, 620, 102)

  ctx.moveTo(622, 118)
  ctx.quadraticCurveTo(558, 198, 498, 292)
  ctx.quadraticCurveTo(507, 330, 543, 339)
  ctx.quadraticCurveTo(612, 264, 665, 182)
  // ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.lineWidth = 0.8
  ctx.closePath()
  // stitchここまで
}

// クロスウェブ等の縦パーツ
export const verticalPartsOfWeb = (ctx: CanvasRenderingContext2D, webColor: string, stitchColor: string): void => {
  ctx.fillStyle = webColor
  // 縦パーツ
  ctx.beginPath()
  ctx.moveTo(250, 212) // 左＿上
  ctx.quadraticCurveTo(273, 285, 315, 355) // 左＿下
  ctx.quadraticCurveTo(347, 322, 347, 309) // 右＿下
  ctx.quadraticCurveTo(313, 241, 293, 150) // 右＿上
  ctx.quadraticCurveTo(265, 189, 251, 212) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 左＿外
  ctx.moveTo(255, 213) // 上
  ctx.quadraticCurveTo(272, 270, 313, 346) // 下
  // 左上＿内
  ctx.moveTo(257, 208) // 上
  ctx.quadraticCurveTo(276, 270, 316, 344) // 下
  // 右上＿外
  ctx.moveTo(291, 162) // 上
  ctx.quadraticCurveTo(303, 222, 342, 310) // 下
  // 右上＿内
  ctx.moveTo(288, 165) // 上
  ctx.quadraticCurveTo(305, 238, 339, 313) // 下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
  // stitchここまで
}

export const verticalPartsOfWebWithCenterStitch = (ctx: CanvasRenderingContext2D, webColor: string, stitchColor: string): void => {
  ctx.fillStyle = webColor
  // 縦パーツ
  ctx.beginPath()
  ctx.moveTo(250, 212) // 左＿上
  ctx.quadraticCurveTo(273, 285, 315, 355) // 左＿下
  ctx.quadraticCurveTo(347, 322, 347, 309) // 右＿下
  ctx.quadraticCurveTo(313, 241, 293, 150) // 右＿上
  ctx.quadraticCurveTo(265, 189, 251, 212) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 左＿外
  ctx.moveTo(266, 191) // 上
  ctx.quadraticCurveTo(289, 270, 323, 332) // 下
  // 左上＿内
  ctx.moveTo(269, 188) // 上
  ctx.quadraticCurveTo(294, 275, 326, 329) // 下
  // 右上＿外
  ctx.moveTo(276, 177) // 上
  ctx.quadraticCurveTo(297, 260, 334, 322) // 下
  // 右上＿内
  ctx.moveTo(273, 180) // 上
  ctx.quadraticCurveTo(292, 258, 330, 324) // 下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
  // stitchここまで
}

export const verticalPartsForBasNet = (ctx: CanvasRenderingContext2D, webColor: string, web2Color: string, stitchColor: string): void => {
  const web2Parts = (ctx: CanvasRenderingContext2D, webColor: string, x: number, y: number): void => {
    ctx.fillStyle = webColor
    ctx.beginPath()
    ctx.moveTo(259 + x, 213 + y) // 左＿上
    ctx.quadraticCurveTo(266 + x, 226 + y, 266 + x, 226 + y) // 左下
    ctx.quadraticCurveTo(278 + x, 213 + y, 278 + x, 213 + y) // 右下
    ctx.quadraticCurveTo(276 + x, 200 + y, 271 + x, 197 + y) // 右上
    ctx.quadraticCurveTo(263 + x, 202 + y, 259 + x, 213 + y) // 左上
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
    ctx.beginPath()
    ctx.fillStyle = 'white'
    ctx.moveTo(261 + x, 213 + y) // 左＿上
    ctx.quadraticCurveTo(265 + x, 225 + y, 265 + x, 225 + y) // 左下
    ctx.quadraticCurveTo(265 + x, 213 + y, 261 + x, 213 + y) // 左上
    ctx.fill()
    // ctx.stroke()
    ctx.closePath()
    ctx.fillStyle = webColor
  }

  ctx.fillStyle = web2Color
  // 縦パーツ_土台
  ctx.beginPath()
  ctx.moveTo(241, 234) // 左＿上
  ctx.quadraticCurveTo(305, 364, 305, 364) // 左＿下
  ctx.quadraticCurveTo(347, 320, 367, 262) // 右＿下
  ctx.quadraticCurveTo(319, 132, 319, 132) // 右＿上
  ctx.quadraticCurveTo(267, 168, 241, 234) // 左＿上
  // ctx.quadraticCurveTo() // 下
  // ctx.quadraticCurveTo() // 下
  // ctx.quadraticCurveTo() // 下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // // 縦パーツ_補助線ここから
  // ctx.beginPath()
  // // 縦ライン
  // ctx.moveTo(254, 210) // 左＿上
  // ctx.quadraticCurveTo(320, 348, 320, 348) // 下
  // ctx.moveTo(301, 152) // 左＿上
  // ctx.quadraticCurveTo(356, 288, 356, 288) // 下
  // ctx.strokeStyle = 'red'
  // // 横ライン
  // ctx.moveTo(257, 215) // 左＿上
  // ctx.quadraticCurveTo(304, 159, 304, 159) // 下
  // ctx.moveTo(247, 247) // 左＿上
  // ctx.quadraticCurveTo(327, 153, 327, 153) //
  // ctx.moveTo(275, 255) // 左＿上
  // ctx.quadraticCurveTo(320, 202, 320, 202) // 下
  // ctx.moveTo(275, 304) // 左＿上
  // ctx.quadraticCurveTo(349, 213, 349, 213)
  // ctx.moveTo(267, 243) // 左＿上
  // ctx.quadraticCurveTo(314, 188, 314, 188) // 下
  // ctx.moveTo(283, 269) // 左＿上
  // ctx.quadraticCurveTo(326, 217, 326, 217) // 下
  // ctx.moveTo(303, 315) // 左＿上
  // ctx.quadraticCurveTo(344, 260, 344, 260) // 下
  // ctx.moveTo(297, 301) // 左＿上
  // ctx.quadraticCurveTo(338, 246, 338, 246) // 下
  // ctx.moveTo(311, 328) // 左＿上
  // ctx.quadraticCurveTo(349, 275, 349, 275) // 下
  // ctx.fill()
  // ctx.stroke()
  // ctx.closePath()

  // // 縦
  // ctx.strokeStyle = '#383838'
  // ctx.beginPath()
  // ctx.moveTo(270, 188) // 左＿上
  // ctx.quadraticCurveTo(331, 324, 331, 324) // 下
  // ctx.moveTo(286, 167) // 左＿上
  // ctx.quadraticCurveTo(343, 302, 343, 302) // 下
  // ctx.fill()
  // ctx.stroke()
  // ctx.closePath()
  // // 縦パーツ_補助線ここまで

  web2Parts(ctx, webColor, 0, 0) // 左1
  web2Parts(ctx, webColor, 11, 26) // 左2
  web2Parts(ctx, webColor, 25, 58) // 左3
  web2Parts(ctx, webColor, 39, 84) // 左4
  web2Parts(ctx, webColor, 53, 114) // 左5
  web2Parts(ctx, webColor, 10, -32) // 中央1
  web2Parts(ctx, webColor, 22, -6) // 中央2
  web2Parts(ctx, webColor, 34, 24) // 中央3
  web2Parts(ctx, webColor, 48, 54) // 中央4
  web2Parts(ctx, webColor, 60, 82) // 中央5
  web2Parts(ctx, webColor, 32, -36) // 右1
  web2Parts(ctx, webColor, 42, -8) // 右2
  web2Parts(ctx, webColor, 54, 23) // 右3
  web2Parts(ctx, webColor, 68, 51) // 右4
  web2Parts(ctx, webColor, 78, 78) // 右5

  ctx.strokeStyle = '#383838'

  // stitchここから
  ctx.beginPath()
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  ctx.moveTo(244, 231) // 上
  ctx.quadraticCurveTo(307, 361, 307, 361) // 下
  ctx.moveTo(247, 231) // 上
  ctx.quadraticCurveTo(310, 361, 310, 361) // 下
  ctx.moveTo(252, 210) // 上
  ctx.quadraticCurveTo(315, 343, 315, 343) // 下
  ctx.moveTo(303, 147) // 上
  ctx.quadraticCurveTo(359, 282, 359, 282) // 下
  ctx.moveTo(318, 137) // 上
  ctx.quadraticCurveTo(365, 263, 365, 263) // 下
  ctx.moveTo(315, 137) // 上
  ctx.quadraticCurveTo(363, 265, 363, 265) // 下
  // ctx.moveTo() // 上
  // ctx.quadraticCurveTo() // 下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
  // stitchここまで
}

export const verticalPartsOfWebWithCenterBinding = (
  ctx: CanvasRenderingContext2D,
  webColor: string,
  bindingColor: string,
  stitchColor: string
): void => {
  ctx.fillStyle = bindingColor
  ctx.strokeStyle = '#383838'
  // 縦パーツ＿ヘリ革
  ctx.beginPath()
  ctx.moveTo(237, 175) // 左＿上
  ctx.quadraticCurveTo(273, 285, 310, 355) // 左＿下
  ctx.quadraticCurveTo(347, 322, 347, 309) // 右＿下
  ctx.quadraticCurveTo(316, 241, 284, 134) // 右＿上
  ctx.quadraticCurveTo(268, 111, 246, 127) // 中央＿上
  ctx.quadraticCurveTo(227, 140, 237, 175) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 縦パーツ本体
  ctx.fillStyle = webColor
  ctx.beginPath()
  ctx.moveTo(247, 167) // 左＿上
  ctx.quadraticCurveTo(270, 254, 319, 349) // 左＿下
  ctx.quadraticCurveTo(338, 312, 338, 312) // 右＿下
  ctx.quadraticCurveTo(308, 243, 277, 147) // 右＿上
  ctx.quadraticCurveTo(268, 124, 254, 136) // 中央＿上
  ctx.quadraticCurveTo(239, 145, 247, 167) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  ctx.moveTo(249, 167) // 左＿上
  ctx.quadraticCurveTo(272, 254, 321, 349) // 左＿下
  ctx.moveTo(274, 146) // 右＿上
  ctx.quadraticCurveTo(332, 314, 336, 314) // 右＿下
  ctx.moveTo(249, 167) // 左
  ctx.quadraticCurveTo(243, 146, 254, 138) // 中央
  ctx.quadraticCurveTo(270, 130, 274, 146)
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  // stitchここまで
}

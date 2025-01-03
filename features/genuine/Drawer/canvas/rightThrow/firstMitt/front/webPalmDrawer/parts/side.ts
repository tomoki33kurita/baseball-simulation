export const webTop = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor

  ctx.beginPath()
  ctx.moveTo(187, 187) // 左上
  ctx.quadraticCurveTo(206, 178, 216, 190) //
  ctx.quadraticCurveTo(247, 211, 260, 239) // 左下
  ctx.quadraticCurveTo(288, 221, 313, 197) // 下辺中央
  ctx.quadraticCurveTo(370, 153, 383, 147) // 右下
  ctx.quadraticCurveTo(370, 130, 366, 107) // 右辺中央
  ctx.quadraticCurveTo(356, 68, 351, 64) // 右上
  ctx.quadraticCurveTo(294, 82, 263, 110) // 上辺中央
  ctx.quadraticCurveTo(219, 139, 187, 187) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // webTop
  ctx.moveTo(223, 188) // 左下
  ctx.quadraticCurveTo(276, 134, 355, 99)
  ctx.moveTo(227, 192) // 左下
  ctx.quadraticCurveTo(277, 136, 360, 104)
  ctx.moveTo(243, 214) // 左下
  ctx.quadraticCurveTo(299, 163, 365, 127)
  ctx.moveTo(246, 219) // 左下
  ctx.quadraticCurveTo(298, 168, 368, 131)
  // 右辺
  ctx.moveTo(354, 100) // 右上
  ctx.quadraticCurveTo(364, 100, 365, 128) // 右下

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const webTop2 = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor

  ctx.beginPath()
  ctx.moveTo(187, 187) // 左上
  ctx.quadraticCurveTo(206, 178, 216, 190) //
  ctx.quadraticCurveTo(247, 211, 247, 222) // 左下
  ctx.quadraticCurveTo(288, 197, 313, 173) // 下辺中央
  ctx.quadraticCurveTo(370, 136, 383, 130) // 右下
  ctx.quadraticCurveTo(370, 130, 366, 107) // 右辺中央
  ctx.quadraticCurveTo(356, 68, 351, 64) // 右上
  ctx.quadraticCurveTo(294, 82, 263, 114) // 上辺中央
  ctx.quadraticCurveTo(219, 139, 187, 187) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // webTop
  ctx.moveTo(223, 188) // 左下
  ctx.quadraticCurveTo(276, 134, 355, 99)
  ctx.moveTo(227, 192) // 左下
  ctx.quadraticCurveTo(277, 136, 360, 104)
  ctx.moveTo(243, 214) // 左下
  ctx.quadraticCurveTo(299, 163, 365, 127)
  ctx.moveTo(246, 219) // 左下
  ctx.quadraticCurveTo(298, 168, 368, 131)
  // 右辺
  ctx.moveTo(354, 100) // 右上
  ctx.quadraticCurveTo(364, 100, 365, 128) // 右下

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const webTopJoint = (ctx: CanvasRenderingContext2D, webColor: string, web2Color: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColor
  ctx.beginPath()
  ctx.moveTo(187, 187) // 左上
  ctx.quadraticCurveTo(206, 178, 216, 190) //
  ctx.quadraticCurveTo(247, 211, 260, 239) // 左下
  ctx.quadraticCurveTo(288, 221, 313, 197) // 下辺中央
  ctx.quadraticCurveTo(370, 153, 383, 147) // 右下
  ctx.quadraticCurveTo(370, 130, 366, 107) // 右辺中央
  ctx.quadraticCurveTo(356, 68, 351, 64) // 右上
  ctx.quadraticCurveTo(294, 82, 263, 110) // 上辺中央
  ctx.quadraticCurveTo(219, 139, 187, 187) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // ctx.beginPath()
  // ctx.moveTo(238, 220) //
  // ctx.quadraticCurveTo(282, 166, 372, 127) //
  // ctx.fill()
  // ctx.stroke()
  // ctx.closePath()

  ctx.fillStyle = web2Color
  ctx.beginPath()
  ctx.moveTo(238, 220) //
  ctx.quadraticCurveTo(248, 211, 248, 211) //
  ctx.quadraticCurveTo(241, 196, 241, 196) // 上_左
  ctx.quadraticCurveTo(255, 182, 255, 182) // 上_右
  ctx.quadraticCurveTo(264, 194, 264, 194) // 下_左
  ctx.quadraticCurveTo(281, 180, 281, 180) // 下_右
  ctx.quadraticCurveTo(276, 163, 276, 163) // 上_左
  ctx.quadraticCurveTo(293, 151, 293, 151) // 上_右
  ctx.quadraticCurveTo(305, 165, 305, 165) // 下_左
  ctx.quadraticCurveTo(323, 152, 323, 152) // 下_右
  ctx.quadraticCurveTo(319, 134, 319, 134) // 上_左
  ctx.quadraticCurveTo(339, 123, 339, 123) // 上_右
  ctx.quadraticCurveTo(349, 140, 349, 140) // 下_左
  ctx.quadraticCurveTo(370, 128, 370, 128) // 下_右
  ctx.quadraticCurveTo(370, 130, 383, 147) // ウェブ右下
  ctx.quadraticCurveTo(370, 153, 313, 197) // 下辺中央
  ctx.quadraticCurveTo(288, 221, 260, 239) // 左下
  ctx.quadraticCurveTo(238, 220, 238, 220) //
  // ctx.quadraticCurveTo() //
  // ctx.quadraticCurveTo() //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // webTop
  ctx.moveTo(223, 188) // 左下
  ctx.quadraticCurveTo(276, 134, 355, 99)
  ctx.moveTo(227, 192) // 左下
  ctx.quadraticCurveTo(277, 136, 360, 104)

  // joint部分
  ctx.moveTo(252, 221) // 左下
  ctx.quadraticCurveTo(299, 177, 372, 137)
  ctx.moveTo(255, 224) // 左下
  ctx.quadraticCurveTo(302, 180, 375, 140)

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const webBottom = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor

  // ヘリ革
  ctx.beginPath()
  ctx.moveTo(262, 246) // 左上
  ctx.quadraticCurveTo(286, 282, 301, 313) // 左下
  ctx.quadraticCurveTo(413, 224, 416, 221) // 右下
  ctx.quadraticCurveTo(411, 207, 406, 204) //
  ctx.quadraticCurveTo(400, 170, 400, 170) //
  ctx.quadraticCurveTo(395, 152, 387, 152) // 右上
  ctx.quadraticCurveTo(343, 181, 332, 196) // 上辺中央
  ctx.quadraticCurveTo(283, 238, 262, 246) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])

  // webBottom
  ctx.moveTo(281, 266) // 左下
  ctx.quadraticCurveTo(320, 241, 394, 179)
  ctx.moveTo(284, 271) // 左下
  ctx.quadraticCurveTo(396, 186, 396, 182)
  ctx.moveTo(290, 287) // 左下
  ctx.quadraticCurveTo(399, 202, 399, 202)
  ctx.moveTo(294, 290) // 左下
  ctx.quadraticCurveTo(335, 263, 401, 207)
  // 右辺
  ctx.moveTo(394, 181) // 右上
  ctx.quadraticCurveTo(401, 206, 401, 206) // 右下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const webBottom2 = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string, x: number, y: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor

  ctx.beginPath()
  ctx.moveTo(267 + x, 254 + y) // 左上
  ctx.quadraticCurveTo(277 + x, 265 + y, 293 + x, 296 + y) // 左下
  ctx.quadraticCurveTo(351 + x, 263 + y, 424 + x, 201 + y) // 右下
  ctx.quadraticCurveTo(420 + x, 170 + y, 410 + x, 170 + y) //
  ctx.quadraticCurveTo(405 + x, 152 + y, 395 + x, 160 + y) // 右上
  ctx.quadraticCurveTo(350 + x, 185 + y, 332 + x, 205 + y) // 上辺中央
  ctx.quadraticCurveTo(300 + x, 230 + y, 267 + x, 254 + y) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])

  // webBottom
  ctx.moveTo(281 + x, 266 + y) // 左下
  ctx.quadraticCurveTo(320 + x, 241 + y, 394 + x, 179 + y)
  ctx.moveTo(284 + x, 271 + y) // 左下
  ctx.quadraticCurveTo(396 + x, 186 + y, 396 + x, 182 + y)

  ctx.moveTo(290 + x, 277 + y) // 左下
  ctx.quadraticCurveTo(399 + x, 192 + y, 399 + x, 192 + y)
  ctx.moveTo(294 + x, 280 + y) // 左下
  ctx.quadraticCurveTo(335 + x, 253 + y, 401 + x, 197 + y)
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const webBottom3 = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor

  ctx.beginPath()
  ctx.moveTo(312, 335) // 左上
  ctx.quadraticCurveTo(297, 358, 336, 358) // 左下
  ctx.quadraticCurveTo(397, 319, 397, 319) // 中央下
  ctx.quadraticCurveTo(440, 250, 440, 250) // 右下
  ctx.quadraticCurveTo(312, 335, 312, 335)
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // ctx.strokeStyle = stitchColor
  // ctx.beginPath()
  // ctx.setLineDash([3, 3])

  // // webBottom
  // ctx.moveTo(281, 266) // 左下
  // ctx.quadraticCurveTo(320, 241, 394, 179)
  // ctx.moveTo(284, 271) // 左下
  // ctx.quadraticCurveTo(396, 186, 396, 182)

  // ctx.moveTo(290, 277) // 左下
  // ctx.quadraticCurveTo(399, 192, 399, 192)
  // ctx.moveTo(294, 280) // 左下
  // ctx.quadraticCurveTo(335, 253, 401, 197)
  // ctx.stroke()
  // ctx.setLineDash([])
  // ctx.closePath()
}

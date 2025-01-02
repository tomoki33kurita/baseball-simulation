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

export const webBottom2 = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
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

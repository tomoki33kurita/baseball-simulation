export const palm2 = (ctx: CanvasRenderingContext2D, catchFaceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = catchFaceColor
  ctx.beginPath()
  ctx.moveTo(436, 361) // 左下_ヘリ革接着点
  ctx.quadraticCurveTo(459, 367, 478, 384) // 折り返し中央_ヘリ革接着点
  ctx.quadraticCurveTo(500, 403, 498, 434) // 右下
  ctx.quadraticCurveTo(546, 421, 570, 382) // 右中間
  ctx.quadraticCurveTo(574, 363, 574, 363) // 右上の右上
  ctx.quadraticCurveTo(518, 326, 482, 258) // 左上
  ctx.quadraticCurveTo(462, 270, 462, 270) // 左中間
  ctx.quadraticCurveTo(430, 323, 435, 361) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // ステッチここから
  ctx.lineWidth = 1.1
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(465, 274) // 折り返し左上_外
  ctx.quadraticCurveTo(436, 321, 438, 358) // 折り返し左下_外
  ctx.moveTo(461, 287) // 折り返し左上_内
  ctx.quadraticCurveTo(439, 327, 442, 358) // 折り返し左下_内

  ctx.moveTo(465, 274) // 折り返し左上_外
  ctx.quadraticCurveTo(460, 390, 566, 380) // 折り返し右上_外
  ctx.moveTo(461, 287) // 折り返し左上_内
  ctx.quadraticCurveTo(465, 393, 560, 383) // 折り返し右上_内

  ctx.moveTo(566, 380) // 折り返し右上_外
  ctx.quadraticCurveTo(543, 417, 500, 429) // 折り返し右下_外
  ctx.moveTo(560, 383) // 折り返し右上_内
  ctx.quadraticCurveTo(537, 415, 504, 423) // 折り返し右下_内
  // ステッチここまで
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
}

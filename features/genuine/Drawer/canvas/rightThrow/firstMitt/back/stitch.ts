export const stitch = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.setLineDash([3, 3])

  // ウェブ下の半径部分＿外側
  ctx.moveTo(378, 121) // 左上
  ctx.quadraticCurveTo(343, 182, 381, 250)
  ctx.quadraticCurveTo(424, 313, 490, 368)
  ctx.quadraticCurveTo(524, 400, 571, 428)
  ctx.quadraticCurveTo(590, 433, 604, 420) // 右下
  // ウェブ下の半径部分＿内側
  ctx.moveTo(384, 116) // 左上
  ctx.quadraticCurveTo(348, 179, 384, 247)
  ctx.quadraticCurveTo(427, 310, 493, 365)
  ctx.quadraticCurveTo(527, 397, 574, 425)
  ctx.quadraticCurveTo(593, 430, 607, 417) // 右下

  // ブーメラン右＿ウェブ下
  ctx.moveTo(522, 44) //
  ctx.quadraticCurveTo(503, 60, 503, 60)
  ctx.moveTo(481, 73) //
  ctx.quadraticCurveTo(473, 76, 476, 81)
  ctx.moveTo(432, 160) //
  ctx.quadraticCurveTo(439, 210, 478, 264)
  ctx.moveTo(491, 275) //
  ctx.quadraticCurveTo(507, 284, 519, 305)
  ctx.moveTo(529, 316) //
  ctx.quadraticCurveTo(540, 320, 551, 333)
  ctx.moveTo(564, 342) //
  ctx.quadraticCurveTo(583, 357, 584, 356)

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

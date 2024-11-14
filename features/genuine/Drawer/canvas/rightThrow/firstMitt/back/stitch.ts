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

  // 捕球面折り返し部分
  // 上辺
  ctx.moveTo(467, 183) // 左
  ctx.quadraticCurveTo(489, 198, 595, 333)
  // 下辺
  ctx.moveTo(461, 188) // 左
  ctx.quadraticCurveTo(482, 203, 593, 342)
  // 左辺
  ctx.moveTo(467, 183) //
  ctx.quadraticCurveTo(461, 188, 461, 188)
  // 右辺
  ctx.moveTo(595, 333) // 左下
  ctx.quadraticCurveTo(593, 342, 593, 342)

  // webBottom部分
  // 左辺
  ctx.moveTo(515, 102) // 上
  ctx.lineTo(506, 129) // 下
  // 右辺
  ctx.moveTo(645, 273) // 上
  ctx.lineTo(638, 295) // 下
  // 上辺＿上
  ctx.moveTo(515, 102) // 上
  ctx.quadraticCurveTo(573, 166, 645, 273) // 右下
  // 上辺＿下
  ctx.moveTo(512, 108) // 上
  ctx.quadraticCurveTo(553, 145, 644, 277) // 右下
  // 下辺＿上
  ctx.moveTo(507, 126) // 上
  ctx.quadraticCurveTo(531, 146, 638, 290) // 右下
  // 下辺＿下
  ctx.moveTo(505, 129) // 上
  ctx.quadraticCurveTo(537, 158, 637, 294) // 右下

  // webTop部分
  // 左辺
  ctx.moveTo(555, 52) // 上
  ctx.quadraticCurveTo(547, 61, 546, 73) // 下
  // 右辺
  ctx.moveTo(660, 222) // 上
  ctx.quadraticCurveTo(664, 238, 660, 243) // 下
  // 上辺＿上
  ctx.moveTo(555, 52) // 上
  ctx.quadraticCurveTo(617, 92, 632, 121) //
  ctx.quadraticCurveTo(655, 164, 660, 222) // 右下
  // 上辺＿下
  ctx.moveTo(551, 56) // 上
  ctx.quadraticCurveTo(588, 74, 624, 117) //
  ctx.quadraticCurveTo(651, 159, 659, 225) // 右下
  // 下辺＿上
  ctx.moveTo(547, 67) // 上
  ctx.quadraticCurveTo(625, 135, 646, 216) //
  ctx.quadraticCurveTo(648, 226, 660, 243) // 右下
  // 下辺＿下
  ctx.moveTo(545, 72) // 上
  ctx.quadraticCurveTo(615, 130, 644, 220) // 右下

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const verticalParts = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.strokeStyle = '#383838'
  ctx.beginPath()
  ctx.moveTo(276, 187) // 左上
  ctx.quadraticCurveTo(345, 308, 345, 308) // 左下
  ctx.quadraticCurveTo(389, 282, 389, 282) // 右下
  ctx.quadraticCurveTo(321, 149, 321, 149) // 右上
  ctx.quadraticCurveTo(276, 187, 276, 187) // 左上
  //   ctx.quadraticCurveTo()
  ctx.fillStyle = leatherColor
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // webTop
  ctx.moveTo(299, 189) // 左下
  ctx.quadraticCurveTo(353, 283, 353, 283)
  ctx.moveTo(302, 187) // 左下
  ctx.quadraticCurveTo(356, 281, 356, 281)
  ctx.moveTo(307, 179) // 左下
  ctx.quadraticCurveTo(361, 274, 361, 274)
  ctx.moveTo(310, 177) // 左下
  ctx.quadraticCurveTo(364, 272, 364, 272)
  //   ctx.moveTo() // 左下
  //   ctx.quadraticCurveTo()

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const verticalParts2 = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.strokeStyle = '#383838'
  ctx.beginPath()
  ctx.moveTo(276, 187) // 左上
  ctx.quadraticCurveTo(345, 308, 345, 308) // 左下
  ctx.quadraticCurveTo(389, 282, 389, 282) // 右下
  ctx.quadraticCurveTo(321, 149, 321, 149) // 右上
  ctx.quadraticCurveTo(276, 187, 276, 187) // 左上
  //   ctx.quadraticCurveTo()
  ctx.fillStyle = leatherColor
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // webTop
  ctx.moveTo(283, 191) // 左-外
  ctx.quadraticCurveTo(341, 294, 341, 294)
  ctx.moveTo(286, 189) // 左-内
  ctx.quadraticCurveTo(344, 292, 344, 292)
  ctx.moveTo(322, 161) // 右-外
  ctx.quadraticCurveTo(374, 262, 374, 262)
  ctx.moveTo(319, 163) // 右-内
  ctx.quadraticCurveTo(371, 264, 371, 264)

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const verticalParts3 = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.strokeStyle = '#383838'

  // 親指寄り
  ctx.beginPath()
  ctx.moveTo(259, 205) // 左上
  ctx.quadraticCurveTo(322, 314, 322, 314) // 左下
  ctx.quadraticCurveTo(346, 291, 346, 291) // 右下
  ctx.quadraticCurveTo(287, 187, 287, 187) // 右上
  ctx.quadraticCurveTo(259, 205, 259, 205) // 左上
  //   ctx.quadraticCurveTo()
  ctx.fillStyle = leatherColor
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(324, 157) // 左上
  ctx.quadraticCurveTo(376, 263, 376, 263) // 左下
  ctx.quadraticCurveTo(401, 241, 401, 241) // 右下
  ctx.quadraticCurveTo(353, 139, 353, 139) // 右上
  ctx.quadraticCurveTo(327, 157, 327, 157) // 左上
  //   ctx.quadraticCurveTo()
  ctx.fillStyle = leatherColor
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // webTop
  ctx.moveTo(267, 212) // 左-外
  ctx.quadraticCurveTo(322, 307, 322, 307)
  ctx.moveTo(286, 192) // 左-内
  ctx.quadraticCurveTo(341, 291, 341, 291)
  ctx.moveTo(330, 161) // 右-外
  ctx.quadraticCurveTo(377, 256, 377, 256)
  ctx.moveTo(351, 145) // 右-内
  ctx.quadraticCurveTo(396, 239, 396, 239)

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const palm = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(465, 143) // 左上
  ctx.quadraticCurveTo(459, 163, 455, 190) // 左下
  ctx.quadraticCurveTo(470, 252, 533, 307) //
  ctx.quadraticCurveTo(562, 329, 582, 336) //
  ctx.quadraticCurveTo(610, 347, 621, 327) // 右下
  ctx.quadraticCurveTo(574, 253, 527, 201) //
  ctx.quadraticCurveTo(494, 158, 472, 140) //
  ctx.quadraticCurveTo(465, 143, 465, 143) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.moveTo(472, 140) // 左上
  ctx.quadraticCurveTo(466, 147, 455, 189) // 左下
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.5
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])

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

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

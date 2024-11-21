import { generateLiningsGradient } from '@/util/canvas'

export const loopOfRingFinger = (ctx: CanvasRenderingContext2D, loopOfRingColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = loopOfRingColor
  ctx.beginPath()
  ctx.moveTo(277, 424) // 左上
  ctx.quadraticCurveTo(292, 455, 292, 455) // 左下
  ctx.quadraticCurveTo(322, 446, 337, 423) // 右下
  ctx.quadraticCurveTo(324, 394, 324, 394) // 右上
  ctx.quadraticCurveTo(305, 414, 277, 424) // 左上
  const coordinates = { x0: 150, y0: 300, x1: 700, y1: 400 }
  const gradient = generateLiningsGradient(ctx, loopOfRingColor, coordinates)
  ctx.fillStyle = gradient

  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.lineWidth = 1.2
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 横方向
  // 内側
  ctx.moveTo(285, 438) // 左下
  ctx.quadraticCurveTo(311, 427, 327, 406) // 右下
  // 外側
  ctx.moveTo(287, 442) // 左下
  ctx.quadraticCurveTo(313, 431, 328, 411) // 右下
  // 縦方向
  //
  ctx.moveTo(326, 392) // 左下
  ctx.quadraticCurveTo(342, 426, 342, 426) // 右下
  //
  ctx.moveTo(328, 390) // 左下
  ctx.quadraticCurveTo(345, 426, 345, 426) // 右下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

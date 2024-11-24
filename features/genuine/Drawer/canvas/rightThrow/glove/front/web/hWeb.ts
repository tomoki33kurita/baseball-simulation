import { topSidePartOfWeb } from './parts/sideParts'

const checkCellParts = (ctx: CanvasRenderingContext2D, webColor: string, x: number, y: number, numerator?: number) => {
  ctx.fillStyle = webColor
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(313 + x, 175 + y) //
  ctx.quadraticCurveTo(314 + x, 186 + y, 317 + x, 195 + y)
  ctx.quadraticCurveTo(328 + x, 185 + y, 338 + x, 174 + y)
  ctx.quadraticCurveTo(338 + x, 163 + y, 333 + x, 153 + y)
  ctx.quadraticCurveTo(320 + x, 170 + y, 313 + x, 175 + y)
  ctx.stroke()
  ctx.fill()
  ctx.strokeStyle = '#383838'
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const hWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColor
  // ウェブ本体
  ctx.beginPath()
  ctx.moveTo(300, 376) // 左下
  ctx.quadraticCurveTo(339, 334, 373, 252) // 右下
  ctx.quadraticCurveTo(384, 159, 359, 92) // 右上
  ctx.quadraticCurveTo(269, 153, 210, 260) // 左上
  ctx.quadraticCurveTo(300, 376, 300, 376) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // バスケット部分
  ctx.beginPath()
  ctx.moveTo(250, 264) // 左上
  ctx.quadraticCurveTo(288, 333, 295, 348) // 左下1
  ctx.quadraticCurveTo(322, 305, 360, 245) // 右下1
  ctx.quadraticCurveTo(342, 151, 332, 151) // 右上1
  ctx.quadraticCurveTo(284, 198, 250, 264) // 左上1
  ctx.stroke()
  ctx.closePath()

  // 1段目
  checkCellParts(ctx, webColor, 0, 0, 0)
  checkCellParts(ctx, webColor, -52, 59, -5)
  checkCellParts(ctx, webColor, -100, 113, -8)
  // 2段目
  checkCellParts(ctx, webColor, -12, 38, 0)
  checkCellParts(ctx, webColor, -64, 100, -5)
  // 3段目
  checkCellParts(ctx, webColor, 14, 39, 0)
  checkCellParts(ctx, webColor, -39, 100, -5)
  checkCellParts(ctx, webColor, -88, 150, -8)
  // 4段目
  checkCellParts(ctx, webColor, -17, 103, -5)
  checkCellParts(ctx, webColor, -50, 140, -5)
  // 5段目
  checkCellParts(ctx, webColor, 5, 105, -4)
  checkCellParts(ctx, webColor, -45, 158, -8)
  checkCellParts(ctx, webColor, -75, 189, -8)

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // バスケットの周り
  // 内側
  ctx.moveTo(247, 265) //左上
  ctx.quadraticCurveTo(288, 337, 295, 355) // 左下
  ctx.quadraticCurveTo(323, 307, 363, 248) // 右下
  ctx.quadraticCurveTo(344, 146, 334, 146) // 右上
  ctx.quadraticCurveTo(281, 194, 247, 265) // 左上
  // 外側
  ctx.moveTo(242, 265) //左上
  ctx.quadraticCurveTo(290, 341, 293, 360) // 左下
  ctx.quadraticCurveTo(328, 305, 366, 250) // 右下
  ctx.quadraticCurveTo(345, 140, 338, 144) // 右上
  ctx.quadraticCurveTo(278, 191, 242, 265) // 左上
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
  // ウェブ先端
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
}

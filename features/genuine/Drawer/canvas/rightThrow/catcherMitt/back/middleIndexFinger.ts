// DxMのミットでは必要なパーツ
export const middleFingerLeft = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(280, 119) // 頂点
  ctx.quadraticCurveTo(235, 122, 237, 216) //
  ctx.quadraticCurveTo(238, 322, 257, 455) // 左下
  ctx.quadraticCurveTo(276, 448, 275, 448) // 右下
  ctx.quadraticCurveTo(213, 169, 280, 119) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

// DxMのミットでは必要なパーツ
export const middleIndexFinger = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(280, 119) // 頂点
  ctx.quadraticCurveTo(257, 130, 241, 221) //
  ctx.quadraticCurveTo(231, 270, 237, 331) //
  ctx.quadraticCurveTo(239, 392, 258, 460) // 左下
  ctx.quadraticCurveTo(377, 420, 434, 442) // 右下
  ctx.quadraticCurveTo(474, 381, 474, 381) // 右上
  ctx.quadraticCurveTo(402, 340, 384, 234) //
  ctx.quadraticCurveTo(370, 168, 388, 118) //
  ctx.quadraticCurveTo(395, 93, 360, 96) // 人差し指中央上
  ctx.quadraticCurveTo(324, 102, 315, 125) //
  ctx.quadraticCurveTo(311, 133, 306, 156) // 人差し指と中指の溝
  ctx.quadraticCurveTo(315, 110, 280, 119) //
  ctx.fill()
  ctx.moveTo(306, 156) // 左上
  ctx.quadraticCurveTo(295, 205, 298, 270) // 左下
  ctx.stroke()
  ctx.closePath()
}

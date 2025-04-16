// 小指側
export const middleBackRingSide = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 輪郭
  ctx.beginPath()
  ctx.moveTo(544, 62) // 左上
  ctx.quadraticCurveTo(578, 84, 571, 123) // 革紐手前
  ctx.quadraticCurveTo(548, 275, 548, 277) // 左下
  ctx.quadraticCurveTo(555, 276, 559, 271) // 右下
  ctx.quadraticCurveTo(570, 244, 571, 234) // 薬指との溝
  ctx.quadraticCurveTo(578, 182, 581, 137) // 革紐の上
  ctx.quadraticCurveTo(590, 73, 548, 60)
  ctx.quadraticCurveTo(544, 62, 544, 62) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const middleBackIndexSide = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 輪郭
  ctx.beginPath()
  ctx.moveTo(522, 54) // 左上
  ctx.quadraticCurveTo(532, 58, 532, 58) // 革紐手前
  ctx.quadraticCurveTo(540, 56, 540, 56) // 革紐手前
  ctx.quadraticCurveTo(522, 54, 522, 54) // 革紐手前
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

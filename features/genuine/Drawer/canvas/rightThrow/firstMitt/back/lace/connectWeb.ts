export const connectWeb = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(485, 86) // 左上
  ctx.quadraticCurveTo(496, 92, 506, 95) // 右下
  ctx.quadraticCurveTo(512, 90, 512, 84) // 右上
  ctx.quadraticCurveTo(508, 82, 504, 81) // 左上
  ctx.quadraticCurveTo(497, 82, 485, 86) // 左上
  ctx.fill()
  ctx.moveTo(489, 85) // 左上
  ctx.quadraticCurveTo(503, 86, 507, 94) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const connectWeb2 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(453, 111) // 左上
  ctx.quadraticCurveTo(465, 106, 485, 141) // 右下
  ctx.quadraticCurveTo(487, 136, 492, 136) //
  ctx.quadraticCurveTo(493, 128, 493, 128) // 右下
  ctx.quadraticCurveTo(482, 111, 469, 102) //
  ctx.quadraticCurveTo(450, 103, 453, 111) //
  ctx.fill()
  ctx.moveTo(452, 110) // 左上
  ctx.quadraticCurveTo(465, 98, 488, 138) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const connectWeb3 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(449, 150) // 左上
  ctx.quadraticCurveTo(447, 154, 450, 157) // 左下
  ctx.quadraticCurveTo(456, 156, 461, 158) // 右下
  ctx.quadraticCurveTo(461, 154, 465, 146) // 右上
  ctx.quadraticCurveTo(457, 150, 449, 150) // 左上) // 左上
  ctx.fill()
  ctx.moveTo(452, 110) // 左上
  ctx.quadraticCurveTo(465, 98, 488, 138) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const connectWeb4 = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(606 + locationX, 338 + locationY) // 左上
  ctx.quadraticCurveTo(612 + locationX, 348 + locationY, 612 + locationX, 348 + locationY) // 左下
  ctx.quadraticCurveTo(618 + locationX, 347 + locationY, 618 + locationX, 347 + locationY) // 右下
  ctx.quadraticCurveTo(619 + locationX, 341 + locationY, 612 + locationX, 336 + locationY) // 右上
  ctx.quadraticCurveTo(612 + locationX, 337 + locationY, 606 + locationX, 338 + locationY) // 左上) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

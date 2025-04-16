export const bankMaterial = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  // 右から２番目
  ctx.moveTo(394, 475) // 左上
  ctx.quadraticCurveTo(394, 484, 396, 482) // 左下
  ctx.quadraticCurveTo(406, 488, 404, 506) // 右下
  ctx.quadraticCurveTo(409, 510, 412, 504) // 右上
  ctx.quadraticCurveTo(412, 481, 394, 475) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(394, 476) // 左上
  ctx.quadraticCurveTo(410, 485, 407, 507) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const bankMaterial2 = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  // 右から２番目
  ctx.moveTo(444 + locationX, 526 + locationY) // 左上
  ctx.quadraticCurveTo(441 + locationX, 533 + locationY, 447 + locationX, 536 + locationY) // 左下
  ctx.quadraticCurveTo(462 + locationX, 533 + locationY, 477 + locationX, 540 + locationY) // 右下
  ctx.quadraticCurveTo(487 + locationX, 536 + locationY, 485 + locationX, 531 + locationY) // 右上
  ctx.quadraticCurveTo(468 + locationX, 522 + locationY, 444 + locationX, 526 + locationY) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(443 + locationX, 534 + locationY) // 左上
  ctx.quadraticCurveTo(462 + locationX, 530 + locationY, 482 + locationX, 538 + locationY) // 右下
  ctx.stroke()
  ctx.closePath()
}

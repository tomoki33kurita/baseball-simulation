export const thumbIndexMiddleFinger = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(375, 37) // 中指先端
  ctx.quadraticCurveTo(285, 400, 400, 593) // 左下
  ctx.quadraticCurveTo(460, 597, 530, 585) // 右下
  ctx.quadraticCurveTo(569, 549, 569, 549)
  ctx.quadraticCurveTo(625, 400, 739, 283) // 親指＿右上
  ctx.quadraticCurveTo(757, 283, 715, 260) // 親指頂点
  ctx.quadraticCurveTo(667, 280, 573, 361) // ウェブ右下
  ctx.quadraticCurveTo(512, 331, 482, 257) // ウェブ左下
  ctx.quadraticCurveTo(485, 209, 559, 68) // 人差し指＿右上
  ctx.quadraticCurveTo(563, 48, 553, 32)
  ctx.quadraticCurveTo(537, 21, 515, 20) // 人差し指_中央上
  ctx.quadraticCurveTo(486, 22, 470, 41) // 人差し指_左上
  ctx.quadraticCurveTo(380, 177, 377, 360) // 人差し指_左下
  ctx.quadraticCurveTo(378, 260, 406, 173)
  ctx.quadraticCurveTo(422, 87, 421, 47) // 中指_右上
  ctx.quadraticCurveTo(410, 26, 375, 37) // 中指_中央上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

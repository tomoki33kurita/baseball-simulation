// 指股
export const fingerCrotch = (ctx: CanvasRenderingContext2D, palmColor: string, weltingColor: string, isFingerCrotch: boolean): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  if (isFingerCrotch) {
    // 指股ありバージョン
    // 指股本体ここから
    ctx.fillStyle = palmColor
    ctx.beginPath()
    ctx.moveTo(384, 269) // 上
    ctx.quadraticCurveTo(368, 324, 367, 360) // 左下
    ctx.quadraticCurveTo(385, 355, 388, 357) // 右下
    ctx.quadraticCurveTo(378, 328, 384, 269) // 上
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
    // 指股ここまで

    // ハミダシここから
    ctx.fillStyle = weltingColor
    ctx.beginPath()
    ctx.moveTo(384, 269) // 上＿内
    ctx.quadraticCurveTo(368, 324, 367, 360) // 左下＿内
    ctx.quadraticCurveTo(363, 360, 363, 362) // 左下＿外
    ctx.quadraticCurveTo(365, 314, 384, 263) // 上＿外
    ctx.quadraticCurveTo(384, 269, 384, 269) // 上＿内
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
    ctx.beginPath()
    ctx.moveTo(385, 264) // 上
    ctx.quadraticCurveTo(378, 328, 388, 357) // 右下＿内
    ctx.quadraticCurveTo(392, 357, 392, 357) // 右下＿外
    ctx.quadraticCurveTo(382, 328, 385, 264) // 上
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
    // ハミダシここまで
  } else {
    // 指股なしバージョン（ハミダシのみ）
    ctx.fillStyle = weltingColor
    ctx.beginPath()
    ctx.moveTo(391, 225) // 先端＿左
    ctx.quadraticCurveTo(373, 290, 375, 360) // 末端＿左
    ctx.quadraticCurveTo(378, 360, 378, 360) // 末端＿右
    ctx.quadraticCurveTo(377, 290, 393, 225) // 先端＿右
    ctx.quadraticCurveTo(391, 225, 391, 225) // 先端＿左
    ctx.stroke()
    ctx.fill()
    ctx.closePath()
  }
}

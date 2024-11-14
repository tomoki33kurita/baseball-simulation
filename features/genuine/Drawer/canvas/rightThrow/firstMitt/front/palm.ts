export const palm = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // ヘリ革
  ctx.beginPath()
  ctx.moveTo(307, 323) // 左上
  ctx.quadraticCurveTo(410, 583, 410, 583) // 左下
  ctx.quadraticCurveTo(500, 625, 605, 589) // 右下
  ctx.quadraticCurveTo(722, 487, 711, 304) // ブーメラン部分突入
  ctx.quadraticCurveTo(683, 135, 608, 87) //
  ctx.quadraticCurveTo(516, 29, 404, 54) //
  ctx.quadraticCurveTo(373, 94, 373, 94) //
  ctx.quadraticCurveTo(370, 132, 404, 165) //
  ctx.quadraticCurveTo(414, 184, 419, 182) // ここまで、ヘリ革の下で雑把に描画
  ctx.quadraticCurveTo(445, 210, 437, 248)
  ctx.quadraticCurveTo(438, 227, 422, 218) // ウェブ下＿右上
  ctx.quadraticCurveTo(384, 244, 361, 273) // ウェブ下＿中央
  ctx.quadraticCurveTo(331, 295, 307, 323) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // ブーメラン下のライン
  ctx.beginPath()
  ctx.moveTo(419, 182) //
  ctx.quadraticCurveTo(447, 171, 447, 171) //
  ctx.quadraticCurveTo(507, 150, 573, 184) //
  ctx.quadraticCurveTo(578, 189, 581, 200) //
  ctx.quadraticCurveTo(602, 231, 609, 275) //
  ctx.stroke()
  ctx.closePath()
}

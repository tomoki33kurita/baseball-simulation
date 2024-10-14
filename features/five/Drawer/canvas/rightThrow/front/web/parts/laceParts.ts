export const laceParts1 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.lineWidth = 0.8
  ctx.beginPath()
  ctx.moveTo(234 + x, 261 + y) // 左上＿上
  ctx.quadraticCurveTo(234 + x, 271 + y, 234 + x, 271 + y) // 左上＿上
  ctx.quadraticCurveTo(252 + x, 270 + y, 250 + x, 288 + y) // 左下＿上
  ctx.quadraticCurveTo(255 + x, 295 + y, 255 + x, 295 + y) // 左下＿下
  ctx.quadraticCurveTo(265 + x, 279 + y, 253 + x, 267 + y) // 右＿中間
  ctx.quadraticCurveTo(243 + x, 258 + y, 234 + x, 261 + y) // 左上＿上
  ctx.fill()
  ctx.moveTo(234 + x, 267 + y) // 左上
  ctx.quadraticCurveTo(255 + x, 267 + y, 253 + x, 289 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const laceParts6 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.lineWidth = 0.8
  ctx.beginPath()
  ctx.moveTo(332 + x, 153 + y) // 左左＿奥
  ctx.quadraticCurveTo(340 + x, 151 + y, 349 + x, 164 + y) // 左右＿奥
  ctx.quadraticCurveTo(367 + x, 177 + y, 372 + x, 174 + y) // 右下
  ctx.quadraticCurveTo(376 + x, 169 + y, 373 + x, 165 + y) // 右上
  ctx.quadraticCurveTo(359 + x, 160 + y, 355 + x, 153 + y) // 中間＿右
  ctx.quadraticCurveTo(343 + x, 149 + y, 343 + x, 149 + y) // 中間＿左
  ctx.quadraticCurveTo(338 + x, 146 + y, 332 + x, 153 + y) // 左左＿奥
  ctx.fill()
  ctx.moveTo(343 + x, 149 + y) // 左上
  ctx.quadraticCurveTo(342 + x, 155 + y, 369 + x, 174 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const laceParts7 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.lineWidth = 0.8
  ctx.beginPath()
  ctx.moveTo(372 + x, 136 + y) // 右上
  ctx.quadraticCurveTo(357 + x, 148 + y, 352 + x, 165 + y) // 左下＿左
  ctx.quadraticCurveTo(354 + x, 174 + y, 363 + x, 173 + y) // 左下＿右
  ctx.quadraticCurveTo(357 + x, 162 + y, 377 + x, 144 + y) // 右上
  ctx.quadraticCurveTo(378 + x, 136 + y, 372 + x, 136 + y) // 左上
  ctx.fill()
  // 下側面
  ctx.moveTo(377 + x, 142 + y) // 右上
  ctx.quadraticCurveTo(356 + x, 157 + y, 360 + x, 172 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const laceOfVerticalPartsRight = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.lineWidth = 0.8
  ctx.beginPath()
  ctx.moveTo(289 + x, 195 + y) // 左上
  ctx.quadraticCurveTo(288 + x, 198 + y, 291 + x, 204 + y) // 左下
  ctx.quadraticCurveTo(309 + x, 206 + y, 309 + x, 206 + y) // 右下
  ctx.quadraticCurveTo(310 + x, 199 + y, 307 + x, 197 + y) // 右上
  ctx.quadraticCurveTo(289 + x, 195 + y, 289 + x, 195 + y) // 左上
  ctx.fill()
  // 上側面
  ctx.moveTo(289 + x, 196 + y) // 右上
  ctx.quadraticCurveTo(295 + x, 199 + y, 309 + x, 198 + y) // 左下
  // // 下側面
  ctx.moveTo(291 + x, 204 + y) // 右上
  ctx.quadraticCurveTo(308 + x, 202 + y, 309 + x, 206 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}

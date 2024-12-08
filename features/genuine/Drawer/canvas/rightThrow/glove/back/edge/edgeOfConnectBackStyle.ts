export const bindingOfConnectBackStyle = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.fillStyle = leatherColor

  ctx.strokeStyle = '#383838'
  ctx.beginPath()
  ctx.moveTo(251, 490) //
  ctx.quadraticCurveTo(286, 429, 307, 413)
  ctx.quadraticCurveTo(324, 396, 327, 410)
  ctx.quadraticCurveTo(353, 460, 481, 449)
  ctx.quadraticCurveTo(492, 441, 486, 438)
  ctx.quadraticCurveTo(408, 440, 376, 428)
  ctx.quadraticCurveTo(341, 418, 340, 402)
  ctx.quadraticCurveTo(333, 384, 311, 390)
  ctx.quadraticCurveTo(257, 443, 243, 482)
  ctx.quadraticCurveTo(243, 489, 251, 490)
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 指根元
  ctx.beginPath()
  ctx.moveTo(242, 481) // 左下＿（小指部分）
  ctx.quadraticCurveTo(278, 428, 278, 426)
  ctx.quadraticCurveTo(299, 395, 342, 375) // 中指中央ハミダシ
  ctx.quadraticCurveTo(368, 366, 404, 369) // 人差し指中央ハミダシ
  ctx.quadraticCurveTo(434, 367, 468, 384) // 捕球面折り返し中央ハミダシ
  ctx.quadraticCurveTo(484, 395, 489, 418) // 捕球面折り返し右下
  ctx.quadraticCurveTo(492, 437, 475, 463)
  ctx.quadraticCurveTo(463, 491, 465, 517) // 親指中央_左
  ctx.quadraticCurveTo(472, 573, 520, 586) // 右下_左
  ctx.quadraticCurveTo(530, 582, 530, 582) // 右下_右
  ctx.quadraticCurveTo(480, 553, 479, 513) // 親指中央_右
  ctx.quadraticCurveTo(480, 474, 500, 441) // 捕球面折り返し右下
  ctx.quadraticCurveTo(510, 405, 478, 378) // 捕球面折り返し中央ハミダシ
  ctx.quadraticCurveTo(446, 355, 405, 355) // 人差し指中央ハミダシ
  ctx.quadraticCurveTo(372, 353, 341, 363) // 中指中央ハミダシ
  ctx.quadraticCurveTo(299, 379, 272, 422)
  ctx.quadraticCurveTo(237, 473, 237, 473)
  ctx.quadraticCurveTo(235, 479, 242, 481)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // ctx.quadraticCurveTo()

  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 手窓
  // ctx.moveTo(292, 490) // 手口＿左
  // ctx.quadraticCurveTo(450, 477, 450, 475) // 折り返し前
  // ctx.quadraticCurveTo(490, 465, 501, 435) // 折り返し
  // ctx.quadraticCurveTo(500, 383, 446, 364) // 折り返し
  // ctx.quadraticCurveTo(400, 343, 342, 369) // 中指中央ハミダシ
  // ctx.quadraticCurveTo(296, 388, 271, 427) // 薬指＿小指の間ハミダシ
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

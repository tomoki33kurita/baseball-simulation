export const littleRingMergedFingerOfBeltBackStyle = (ctx: CanvasRenderingContext2D, color: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(195, 175) // 上
  ctx.quadraticCurveTo(145, 230, 145, 319) //
  ctx.quadraticCurveTo(146, 383, 169, 449) //
  ctx.quadraticCurveTo(174, 470, 190, 494) //
  ctx.quadraticCurveTo(193, 502, 191, 510) //
  ctx.quadraticCurveTo(205, 534, 226, 546) // 中央下
  ctx.quadraticCurveTo(244, 558, 243, 609) //
  ctx.quadraticCurveTo(249, 618, 267, 614) // 右下
  ctx.quadraticCurveTo(280, 562, 261, 521) //
  ctx.quadraticCurveTo(251, 498, 255, 462) //
  ctx.quadraticCurveTo(289, 448, 289, 448) // 中指右下
  ctx.quadraticCurveTo(235, 278, 276, 118) // 中指頂点
  ctx.quadraticCurveTo(240, 128, 235, 188) // 中指袋_小指袋＿間の頂点
  ctx.quadraticCurveTo(228, 164, 195, 175) // 小指袋頂点
  ctx.fill()
  ctx.moveTo(235, 188) //  中指袋_小指袋＿間の頂点
  ctx.quadraticCurveTo(228, 250, 238, 325) // 中指袋_小指袋＿間の溝
  ctx.stroke()
  ctx.closePath()
  // 通気用＿穴
  ctx.beginPath()
  ctx.lineWidth = 1.4
  ctx.fillStyle = '#fff'
  // 左列
  ctx.moveTo(174, 261)
  ctx.arc(174, 261, 4, 0, 2 * Math.PI)
  ctx.moveTo(175, 321)
  ctx.arc(175, 321, 4, 0, 2 * Math.PI)
  ctx.moveTo(180, 379)
  ctx.arc(180, 379, 4, 0, 2 * Math.PI)
  // 右列
  ctx.moveTo(202, 238)
  ctx.arc(202, 238, 4, 0, 2 * Math.PI)
  ctx.moveTo(206, 306)
  ctx.arc(206, 306, 4, 0, 2 * Math.PI)
  ctx.moveTo(213, 364)
  ctx.arc(213, 364, 4, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 中指＿左列
  ctx.moveTo(244, 218)
  ctx.arc(244, 218, 4, 0, 2 * Math.PI)
  ctx.moveTo(243, 276)
  ctx.arc(243, 276, 4, 0, 2 * Math.PI)
  ctx.moveTo(245, 339)
  ctx.arc(245, 339, 4, 0, 2 * Math.PI)
  ctx.moveTo(252, 393)
  ctx.arc(252, 393, 4, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // stitch
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 中指袋の繋ぎ目_左側
  ctx.moveTo(265, 134) // 頂点
  ctx.quadraticCurveTo(225, 278, 277, 444) // 下
  // 中指袋_左
  // 内側
  ctx.moveTo(271, 127) // 上
  ctx.quadraticCurveTo(245, 148, 243, 194) //下
  ctx.quadraticCurveTo(234, 257, 245, 330) //下
  ctx.quadraticCurveTo(235, 330, 235, 332) //下
  // // 外側
  ctx.moveTo(269, 124) // 上
  ctx.quadraticCurveTo(239, 146, 237, 215) //下
  ctx.quadraticCurveTo(234, 257, 241, 327) //下
  ctx.quadraticCurveTo(235, 327, 235, 327) //下

  // 薬指袋
  // 内側
  ctx.moveTo(193, 185) // 上
  ctx.quadraticCurveTo(200, 178, 207, 177) //
  ctx.quadraticCurveTo(227, 177, 228, 195) //
  ctx.quadraticCurveTo(221, 237, 233, 332) // 下
  // // 外側
  ctx.moveTo(193, 179) // 上
  ctx.quadraticCurveTo(203, 176, 210, 174) //
  ctx.quadraticCurveTo(229, 172, 231, 193) //
  ctx.quadraticCurveTo(225, 237, 235, 327) // 下
  // 内側
  ctx.moveTo(191, 186) // 上
  ctx.quadraticCurveTo(145, 247, 152, 346) //
  ctx.quadraticCurveTo(159, 423, 193, 492) //
  ctx.quadraticCurveTo(200, 494, 195, 510) //
  // 外側
  ctx.moveTo(193, 179) // 上
  ctx.quadraticCurveTo(142, 244, 149, 346) //
  ctx.quadraticCurveTo(155, 423, 191, 492) //
  ctx.quadraticCurveTo(196, 494, 193, 510) //

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}

// 小指袋にハミダシが必要な時は以下を使う
export const littleOutFinger = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(195, 175) // 上
  ctx.quadraticCurveTo(145, 230, 145, 319) //
  ctx.quadraticCurveTo(146, 383, 169, 449) //
  ctx.quadraticCurveTo(174, 470, 190, 494) //
  ctx.quadraticCurveTo(193, 502, 191, 510) //
  ctx.quadraticCurveTo(205, 534, 226, 546) //
  ctx.quadraticCurveTo(235, 523, 228, 499) //
  ctx.quadraticCurveTo(209, 465, 194, 417) //
  ctx.quadraticCurveTo(187, 322, 192, 219) //
  ctx.quadraticCurveTo(187, 197, 195, 175) //
  // ctx.quadraticCurveTo() //
  ctx.fill()
  // ctx.moveTo(472, 140) // 左上
  // ctx.quadraticCurveTo(466, 147, 455, 189) // 左下
  ctx.stroke()
  ctx.closePath()
}
// 小指袋にハミダシが必要な時は以下を使う
export const ringFinger = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(226, 546) // 左下
  ctx.quadraticCurveTo(235, 523, 228, 499) //
  ctx.quadraticCurveTo(209, 465, 194, 417) //
  ctx.quadraticCurveTo(187, 322, 192, 219) //
  ctx.quadraticCurveTo(187, 197, 195, 173) // 上/頂点
  ctx.quadraticCurveTo(206, 165, 225, 169) //
  ctx.quadraticCurveTo(240, 173, 241, 199) //
  ctx.quadraticCurveTo(241, 332, 256, 454) // 中指袋の影_ヘリ革まで
  ctx.quadraticCurveTo(260, 518, 260, 518) //
  ctx.quadraticCurveTo(287, 578, 268, 615) //
  ctx.quadraticCurveTo(259, 633, 240, 615) //
  ctx.quadraticCurveTo(227, 572, 226, 546) //
  // ctx.quadraticCurveTo() //
  ctx.fill()
  // ctx.moveTo(472, 140) // 左上
  // ctx.quadraticCurveTo(466, 147, 455, 189) // 左下
  ctx.stroke()
  ctx.closePath()
}
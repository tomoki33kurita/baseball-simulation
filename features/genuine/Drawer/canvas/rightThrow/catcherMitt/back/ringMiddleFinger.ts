export const ringRightMiddleLeftFingerOfRegularBackStyle = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = leatherColor
  ctx.beginPath()
  ctx.moveTo(195, 175) // 上
  ctx.quadraticCurveTo(170, 369, 269, 630) // 左下
  ctx.quadraticCurveTo(311, 648, 340, 639) // 右下
  ctx.quadraticCurveTo(318, 576, 283, 448) // 右側面＿中間
  ctx.quadraticCurveTo(235, 278, 276, 118) // 右上（中指_頂点）
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

  // 右列
  ctx.moveTo(212, 238)
  ctx.arc(212, 238, 4, 0, 2 * Math.PI)
  ctx.moveTo(216, 306)
  ctx.arc(216, 306, 4, 0, 2 * Math.PI)
  ctx.moveTo(223, 364)
  ctx.arc(223, 364, 4, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // stitch
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
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
  // 中指袋の繋ぎ目_左側
  ctx.moveTo(267, 134) // 頂点
  ctx.quadraticCurveTo(232, 278, 277, 444) // 中間
  ctx.quadraticCurveTo(333, 639, 333, 639) // 中間

  // 薬指袋
  // 内側
  ctx.moveTo(193, 185) // 上
  ctx.quadraticCurveTo(200, 178, 207, 177) //
  ctx.quadraticCurveTo(227, 177, 228, 195) //
  ctx.quadraticCurveTo(221, 237, 233, 332) // 下
  // 外側
  ctx.moveTo(193, 179) // 上
  ctx.quadraticCurveTo(203, 176, 210, 174) //
  ctx.quadraticCurveTo(229, 172, 231, 193) //
  ctx.quadraticCurveTo(225, 237, 235, 327) // 下
  // 薬指袋の繋ぎ目_左側
  ctx.moveTo(200, 180) // 頂点
  ctx.quadraticCurveTo(190, 285, 208, 383) // 中間
  ctx.quadraticCurveTo(222, 485, 274, 627) // 中間

  // 手口部分
  ctx.moveTo(267, 626) // 左
  ctx.quadraticCurveTo(305, 638, 345, 639) //

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#282828'
}

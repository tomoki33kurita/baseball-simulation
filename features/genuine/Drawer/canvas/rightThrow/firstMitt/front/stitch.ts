export const stitch = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.setLineDash([3, 3])

  // 親指
  ctx.moveTo(205, 205) // 手口＿左
  ctx.quadraticCurveTo(189, 228, 198, 261)
  ctx.quadraticCurveTo(205, 289, 220, 313)

  // 親指_縦
  ctx.moveTo(194, 198) // 手口＿左
  ctx.quadraticCurveTo(226, 209, 244, 256)
  ctx.quadraticCurveTo(271, 303, 291, 350)

  // webTop
  ctx.moveTo(223, 188) // 左下
  ctx.quadraticCurveTo(276, 134, 355, 99)
  ctx.moveTo(227, 192) // 左下
  ctx.quadraticCurveTo(277, 136, 360, 104)
  ctx.moveTo(243, 214) // 左下
  ctx.quadraticCurveTo(299, 163, 365, 127)
  ctx.moveTo(246, 219) // 左下
  ctx.quadraticCurveTo(298, 168, 368, 131)
  // 右辺
  ctx.moveTo(354, 100) // 右上
  ctx.quadraticCurveTo(364, 100, 365, 128) // 右下

  // webBottom
  ctx.moveTo(281, 266) // 左下
  ctx.quadraticCurveTo(320, 241, 394, 179)
  ctx.moveTo(284, 271) // 左下
  ctx.quadraticCurveTo(396, 186, 396, 182)
  ctx.moveTo(290, 287) // 左下
  ctx.quadraticCurveTo(399, 202, 399, 202)
  ctx.moveTo(294, 290) // 左下
  ctx.quadraticCurveTo(335, 263, 401, 207)
  // 右辺
  ctx.moveTo(394, 181) // 右上
  ctx.quadraticCurveTo(401, 206, 401, 206) // 右下

  // ウェブ直下の捕球面
  ctx.moveTo(319, 349) // 左下
  ctx.quadraticCurveTo(366, 305, 424, 250)
  ctx.moveTo(325, 351) // 左下
  ctx.quadraticCurveTo(428, 254, 428, 254)
  // 右辺
  ctx.moveTo(424, 250) // 右上
  ctx.quadraticCurveTo(428, 254, 428, 254) // 右下

  // ウェブ隣接のブーメラン部分_上から下
  ctx.moveTo(383, 88) //
  ctx.quadraticCurveTo(373, 113, 389, 139) //
  ctx.quadraticCurveTo(411, 163, 411, 163) //
  ctx.quadraticCurveTo(408, 173, 417, 180) //

  // ウェブ隣接のブーメラン部分_左から右
  ctx.moveTo(383, 88) //
  ctx.quadraticCurveTo(434, 48, 524, 63) //
  ctx.quadraticCurveTo(589, 77, 632, 128) //
  ctx.quadraticCurveTo(677, 182, 695, 266) //
  ctx.quadraticCurveTo(708, 369, 675, 463) //
  ctx.quadraticCurveTo(656, 515, 636, 543) //
  ctx.quadraticCurveTo(619, 576, 589, 588) // 土手右下
  ctx.quadraticCurveTo(511, 600, 435, 589) // 土手左下
  ctx.quadraticCurveTo(411, 579, 397, 544) //

  // ブーメラン下の左辺
  ctx.moveTo(434, 197) // 右上
  ctx.quadraticCurveTo(439, 208, 439, 208) // 右下
  ctx.moveTo(441, 218) // 右上
  ctx.quadraticCurveTo(439, 227, 444, 236) // 右下
  ctx.quadraticCurveTo(451, 251, 437, 251) // 右下

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const thumbFingerOfRegularBackStyle = (ctx: CanvasRenderingContext2D, color: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(473, 381) // 左上
  ctx.quadraticCurveTo(411, 352, 389, 268) //
  ctx.quadraticCurveTo(367, 188, 386, 117) // 人差指＿右上
  ctx.quadraticCurveTo(388, 99, 376, 97) // 人差指＿右上2
  ctx.quadraticCurveTo(355, 93, 332, 106) // 人差指＿左上
  ctx.quadraticCurveTo(316, 116, 307, 144) // 人差指＿中指＿溝
  ctx.quadraticCurveTo(308, 113, 276, 118) // 中指＿頂点
  ctx.quadraticCurveTo(235, 278, 281, 448) // 中指＿中間
  ctx.quadraticCurveTo(336, 640, 340, 640) // 手口ベルト上＿中指ハミダシ
  ctx.quadraticCurveTo(438, 645, 447, 607) // 手口ベルト＿右下＿手前
  ctx.quadraticCurveTo(474, 583, 474, 583) // 手口ベルト＿右下＿奥
  ctx.quadraticCurveTo(477, 579, 477, 579) // 最下部
  ctx.quadraticCurveTo(585, 505, 659, 402) //
  ctx.quadraticCurveTo(676, 384, 688, 356) // 右上
  ctx.quadraticCurveTo(700, 327, 660, 351) //
  ctx.quadraticCurveTo(603, 391, 567, 395) //
  ctx.quadraticCurveTo(515, 405, 473, 381) //
  ctx.fill()
  ctx.moveTo(307, 144) // 人差指＿中指＿溝
  ctx.quadraticCurveTo(293, 252, 303, 317) // 左下
  ctx.stroke()
  ctx.closePath()

  // 中指＿右列
  ctx.beginPath()
  ctx.lineWidth = 1.4
  ctx.fillStyle = '#fff'
  ctx.moveTo(283, 175)
  ctx.arc(283, 175, 4, 0, 2 * Math.PI)
  ctx.moveTo(277, 235)
  ctx.arc(277, 235, 4, 0, 2 * Math.PI)
  ctx.moveTo(279, 291)
  ctx.arc(279, 291, 4, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // stitch
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 中指・人差し指・親指袋
  // 内側
  ctx.moveTo(272, 125) // 中指袋の頂点
  ctx.quadraticCurveTo(301, 122, 297, 149) //
  ctx.quadraticCurveTo(283, 258, 297, 325) //
  ctx.quadraticCurveTo(313, 320, 313, 322) // 中指と人差し指の溝
  ctx.quadraticCurveTo(307, 196, 316, 151) //
  ctx.quadraticCurveTo(324, 105, 355, 105) // 人差し指の頂点
  ctx.quadraticCurveTo(380, 98, 375, 118) //
  ctx.quadraticCurveTo(358, 179, 376, 253) //
  ctx.quadraticCurveTo(400, 358, 469, 394) //
  ctx.quadraticCurveTo(551, 424, 617, 389) //
  ctx.quadraticCurveTo(646, 368, 683, 349) //
  ctx.quadraticCurveTo(688, 348, 681, 364) // 親指先端の先
  ctx.quadraticCurveTo(660, 405, 597, 473) //
  ctx.quadraticCurveTo(555, 513, 555, 513) // 親指掛けひもの上
  // 外側
  ctx.moveTo(272, 122) // 中指袋の頂点
  ctx.quadraticCurveTo(307, 117, 302, 147) //
  ctx.quadraticCurveTo(289, 246, 299, 320) //
  ctx.quadraticCurveTo(308, 317, 308, 317) // 中指と人差し指の溝
  ctx.quadraticCurveTo(303, 194, 312, 149) //
  ctx.quadraticCurveTo(322, 103, 355, 101) // 人差し指の頂点
  ctx.quadraticCurveTo(385, 94, 382, 116) //
  ctx.quadraticCurveTo(363, 177, 382, 251) //
  ctx.quadraticCurveTo(404, 356, 472, 388) // 人差し指袋と親指袋のつなぎ目部分
  ctx.quadraticCurveTo(551, 419, 617, 385) //
  ctx.quadraticCurveTo(646, 363, 682, 346) //
  ctx.quadraticCurveTo(690, 344, 684, 359) // 親指先端の先
  // 中指袋の繋ぎ目_右側
  ctx.moveTo(280, 126) // 頂点
  ctx.quadraticCurveTo(244, 278, 286, 437) // 中間
  ctx.quadraticCurveTo(343, 640, 350, 642) // 下
  // 手口部分
  ctx.moveTo(349, 639) // 左
  ctx.quadraticCurveTo(423, 642, 445, 610) //

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}

export const thumbFingerOfBeltBackStyle = (ctx: CanvasRenderingContext2D, color: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(473, 381) // 左上
  ctx.quadraticCurveTo(411, 352, 389, 268) //
  ctx.quadraticCurveTo(367, 188, 386, 117) // 人差指＿右上
  ctx.quadraticCurveTo(388, 99, 376, 97) // 人差指＿右上2
  ctx.quadraticCurveTo(355, 93, 332, 106) // 人差指＿左上
  ctx.quadraticCurveTo(316, 116, 307, 144) // 人差指＿中指＿溝
  ctx.quadraticCurveTo(308, 113, 276, 118) // 中指＿頂点
  ctx.quadraticCurveTo(235, 278, 289, 448) //
  ctx.quadraticCurveTo(376, 415, 433, 441) //
  ctx.quadraticCurveTo(464, 470, 464, 470) //
  ctx.quadraticCurveTo(464, 502, 464, 505) //
  ctx.quadraticCurveTo(449, 525, 426, 530) //
  ctx.quadraticCurveTo(352, 538, 265, 529) // 手口ベルト＿左上
  ctx.quadraticCurveTo(277, 564, 272, 601) //
  ctx.quadraticCurveTo(275, 621, 257, 622) // 手口ベルト＿左下
  ctx.quadraticCurveTo(298, 650, 347, 647) //
  ctx.quadraticCurveTo(438, 645, 447, 607) // 手口ベルト＿右下＿手前
  ctx.quadraticCurveTo(474, 583, 474, 583) // 手口ベルト＿右下＿奥
  ctx.quadraticCurveTo(477, 579, 477, 579) // 最下部
  ctx.quadraticCurveTo(585, 505, 659, 402) //
  ctx.quadraticCurveTo(676, 384, 688, 356) // 右上
  ctx.quadraticCurveTo(700, 327, 660, 351) //
  ctx.quadraticCurveTo(603, 391, 567, 395) //
  ctx.quadraticCurveTo(515, 405, 473, 381) //
  ctx.fill()
  ctx.moveTo(307, 144) // 人差指＿中指＿溝
  ctx.quadraticCurveTo(295, 205, 298, 265) // 左下
  ctx.stroke()
  ctx.closePath()

  // 中指＿右列
  ctx.beginPath()
  ctx.lineWidth = 1.4
  ctx.fillStyle = '#fff'
  ctx.moveTo(282, 192)
  ctx.arc(282, 192, 4, 0, 2 * Math.PI)
  ctx.moveTo(277, 255)
  ctx.arc(277, 255, 4, 0, 2 * Math.PI)
  ctx.moveTo(283, 316)
  ctx.arc(283, 316, 4, 0, 2 * Math.PI)
  ctx.moveTo(292, 374)
  ctx.arc(292, 374, 4, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // ベルト左
  ctx.beginPath()
  ctx.lineWidth = 1.4
  ctx.fillStyle = '#fff'
  ctx.moveTo(301, 564)
  ctx.arc(301, 564, 4, 0, 2 * Math.PI)
  ctx.moveTo(297, 610)
  ctx.arc(297, 610, 4, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // stitch
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 平裏下
  ctx.beginPath()
  ctx.moveTo(273, 537) // 左
  ctx.quadraticCurveTo(300, 544, 392, 544) //
  ctx.quadraticCurveTo(447, 546, 468, 512) //
  // 中指・人差し指・親指袋
  // 内側
  ctx.moveTo(272, 125) // 中指袋の頂点
  ctx.quadraticCurveTo(301, 122, 297, 149) //
  ctx.quadraticCurveTo(289, 192, 288, 273) //
  ctx.quadraticCurveTo(306, 270, 306, 270) // 中指と人差し指の溝
  ctx.quadraticCurveTo(307, 196, 316, 151) //
  ctx.quadraticCurveTo(324, 105, 355, 105) // 人差し指の頂点
  ctx.quadraticCurveTo(380, 98, 375, 118) //
  ctx.quadraticCurveTo(358, 179, 376, 253) //
  ctx.quadraticCurveTo(400, 358, 469, 394) // 人差し指袋と親指袋のつなぎ目部分
  ctx.quadraticCurveTo(551, 424, 617, 389) //
  ctx.quadraticCurveTo(646, 368, 683, 349) //
  ctx.quadraticCurveTo(688, 348, 681, 364) // 親指先端の先
  ctx.quadraticCurveTo(660, 405, 597, 473) //
  ctx.quadraticCurveTo(555, 513, 555, 513) // 親指掛けひもの上
  // // 外側
  ctx.moveTo(272, 122) // 中指袋の頂点
  ctx.quadraticCurveTo(307, 117, 300, 147) //
  ctx.quadraticCurveTo(296, 190, 292, 268) //
  ctx.quadraticCurveTo(306, 269, 302, 263) // 中指と人差し指の溝
  ctx.quadraticCurveTo(303, 194, 312, 149) //
  ctx.quadraticCurveTo(322, 103, 355, 101) // 人差し指の頂点
  ctx.quadraticCurveTo(385, 94, 382, 116) //
  ctx.quadraticCurveTo(363, 177, 382, 251) //
  ctx.quadraticCurveTo(404, 356, 472, 388) // 人差し指袋と親指袋のつなぎ目部分
  ctx.quadraticCurveTo(551, 419, 617, 385) //
  ctx.quadraticCurveTo(646, 363, 682, 346) //
  ctx.quadraticCurveTo(690, 344, 684, 359) // 親指先端の先
  // 中指袋の繋ぎ目_右側
  ctx.moveTo(283, 126) // 頂点
  ctx.quadraticCurveTo(245, 278, 297, 437) // 下
  // 手口部分
  ctx.moveTo(267, 626) // 左
  ctx.quadraticCurveTo(305, 638, 345, 639) //
  ctx.quadraticCurveTo(423, 642, 445, 610) //

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}

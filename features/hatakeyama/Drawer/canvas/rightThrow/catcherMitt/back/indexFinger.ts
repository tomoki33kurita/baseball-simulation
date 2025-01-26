import { HatakeyamaState } from '@/features/hatakeyama/types'

export const indexFingerCover = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(318, 444) // 左下
  ctx.quadraticCurveTo(327, 460, 415, 425) // 右下
  ctx.quadraticCurveTo(375, 268, 375, 268) // 右上
  ctx.quadraticCurveTo(316, 295, 300, 281) // 左上
  ctx.quadraticCurveTo(318, 444, 318, 444) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.lineWidth = 1.0
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 外側
  ctx.moveTo(372, 275) // 左下
  ctx.quadraticCurveTo(410, 423, 410, 423) //
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}

export const indexFingerCoverLong = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(318, 444) // 左下
  ctx.quadraticCurveTo(360, 500, 415, 425) // 右下
  ctx.quadraticCurveTo(375, 268, 375, 268) // 右上
  ctx.quadraticCurveTo(316, 295, 300, 281) // 左上
  ctx.quadraticCurveTo(318, 444, 318, 444) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.lineWidth = 1.0
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 外側
  ctx.moveTo(372, 275) // 左下
  ctx.quadraticCurveTo(410, 423, 410, 423) //
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}

export const indexForASBackStyle = (ctx: CanvasRenderingContext2D, state: HatakeyamaState): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = state.thumbIndexMiddleRight.color
  ctx.beginPath()
  ctx.moveTo(389, 268) // 左上
  ctx.quadraticCurveTo(367, 188, 386, 117) // 人差指＿右上
  ctx.quadraticCurveTo(388, 99, 376, 97) // 人差指＿右上2
  ctx.quadraticCurveTo(355, 93, 332, 106) // 人差指＿左上
  ctx.quadraticCurveTo(316, 116, 307, 144) // 人差指＿中指＿溝

  ctx.quadraticCurveTo(280, 252, 306, 361) //
  ctx.quadraticCurveTo(164, 426, 164, 426) // 小指の下地＿左下
  ctx.quadraticCurveTo(187, 504, 187, 504) //
  ctx.quadraticCurveTo(231, 543, 231, 543) //
  ctx.quadraticCurveTo(244, 615, 244, 615) // 一番左下
  ctx.quadraticCurveTo(268, 616, 268, 616) //
  ctx.quadraticCurveTo(272, 555, 272, 555) //
  ctx.quadraticCurveTo(253, 462, 253, 462) //
  ctx.quadraticCurveTo(289, 448, 289, 448) //

  ctx.quadraticCurveTo(376, 415, 433, 441) //
  ctx.quadraticCurveTo(400, 298, 400, 298) //
  // ctx.quadraticCurveTo() //
  ctx.quadraticCurveTo(389, 268, 389, 268) //
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
  ctx.strokeStyle = state.stitch.color
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
  // // 外側
  ctx.moveTo(272, 122) // 中指袋の頂点
  ctx.quadraticCurveTo(307, 117, 300, 147) //
  ctx.quadraticCurveTo(296, 190, 292, 268) //
  ctx.quadraticCurveTo(306, 269, 302, 263) // 中指と人差し指の溝
  ctx.quadraticCurveTo(303, 194, 312, 149) //
  ctx.quadraticCurveTo(322, 103, 355, 101) // 人差し指の頂点
  ctx.quadraticCurveTo(385, 94, 382, 116) //
  ctx.quadraticCurveTo(363, 177, 382, 251) //
  // 手口部分
  ctx.moveTo(267, 626) // 左
  ctx.quadraticCurveTo(305, 638, 345, 639) //
  ctx.quadraticCurveTo(423, 642, 445, 610) //

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}

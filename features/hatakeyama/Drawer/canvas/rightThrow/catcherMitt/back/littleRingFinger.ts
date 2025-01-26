import { GenuineState } from '@/features/genuine/types'

export const littleRingMergedFingerOfBeltBackStyle = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const middleLeftRingLittleColor = state.middleLeftRingLittle.color
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = middleLeftRingLittleColor
  ctx.beginPath()
  ctx.moveTo(195, 175) // 上
  ctx.quadraticCurveTo(145, 230, 145, 319) //
  ctx.quadraticCurveTo(146, 383, 169, 449) //
  ctx.quadraticCurveTo(174, 470, 190, 494) //
  ctx.quadraticCurveTo(193, 502, 191, 510) //
  ctx.quadraticCurveTo(205, 534, 226, 546) // 中央下
  ctx.quadraticCurveTo(244, 558, 243, 609) //
  ctx.quadraticCurveTo(249, 618, 255, 614) // 右下
  ctx.quadraticCurveTo(255, 618, 255, 618) // 右下
  ctx.quadraticCurveTo(275, 608, 268, 574)

  ctx.quadraticCurveTo(280, 562, 261, 521) //
  ctx.quadraticCurveTo(251, 498, 255, 462) //
  ctx.quadraticCurveTo(289, 448, 289, 448) // 中指右下
  ctx.quadraticCurveTo(235, 278, 276, 118) // 中指頂点
  ctx.quadraticCurveTo(240, 128, 235, 188) // 中指袋_小指袋＿間の頂点
  ctx.quadraticCurveTo(228, 164, 195, 175) // 小指袋頂点
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(235, 188) //  中指袋_小指袋＿間の頂点
  ctx.quadraticCurveTo(228, 250, 238, 325) // 中指袋_小指袋＿間の溝
  ctx.stroke()
  ctx.closePath()

  // 通気用＿穴
  ctx.beginPath()
  ctx.lineWidth = 1.4
  ctx.fillStyle = '#fff'

  const isChildEmbroidery = state.embroideries.some((embroidery) => embroidery.position.value === 'childFinger')
  const isGenuineBrandMark = state.genuineBrandMark.value === 'genuineEmbroidery'
  if (!isChildEmbroidery && !isGenuineBrandMark) {
    // 小指 // 右列
    ctx.moveTo(209, 231)
    ctx.arc(209, 231, 4, 0, 2 * Math.PI)
    ctx.moveTo(205, 291)
    ctx.arc(205, 291, 4, 0, 2 * Math.PI)
    ctx.moveTo(210, 349)
    ctx.arc(210, 349, 4, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fill()

    // 小指 // 左列
    ctx.moveTo(179, 245)
    ctx.arc(179, 245, 4, 0, 2 * Math.PI)
    ctx.moveTo(175, 301)
    ctx.arc(175, 301, 4, 0, 2 * Math.PI)
    ctx.moveTo(180, 360)
    ctx.arc(180, 360, 4, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fill()
  }
  // 中指 // 左列
  ctx.moveTo(246, 200)
  ctx.arc(246, 200, 4, 0, 2 * Math.PI)
  ctx.moveTo(245, 258)
  ctx.arc(245, 258, 4, 0, 2 * Math.PI)
  ctx.moveTo(250, 322)
  ctx.arc(250, 322, 4, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()

  // stitch
  ctx.lineWidth = 1.0
  const stitchColor = state.stitch.color
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

export const otherThanThumbFingerOfTMBackStyle = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const color = state.indexMiddleRingLittle.color
  const stitchColor = state.stitch.color
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(195, 175) // 小指袋頂点
  ctx.quadraticCurveTo(145, 230, 145, 319) // 小指袋左
  ctx.quadraticCurveTo(146, 383, 169, 449) //
  ctx.quadraticCurveTo(174, 470, 190, 494) //
  ctx.quadraticCurveTo(193, 502, 191, 510) //
  ctx.quadraticCurveTo(213, 528, 213, 528) //
  ctx.quadraticCurveTo(205, 523, 205, 523) // 小指袋左下 左
  ctx.quadraticCurveTo(214, 498, 241, 477) //
  ctx.quadraticCurveTo(321, 417, 432, 449) //人差指下
  ctx.quadraticCurveTo(470, 385, 470, 385) // 右上
  ctx.quadraticCurveTo(411, 352, 389, 268) //
  ctx.quadraticCurveTo(367, 188, 386, 117) // 人差指＿右上
  ctx.quadraticCurveTo(388, 99, 376, 97) // 人差指＿右上2
  ctx.quadraticCurveTo(355, 93, 332, 106) // 人差指＿左上
  ctx.quadraticCurveTo(316, 116, 307, 144) // 人差指＿中指＿溝
  ctx.quadraticCurveTo(308, 113, 276, 118) // 中指＿頂点
  ctx.quadraticCurveTo(240, 128, 235, 188) // 中指袋_小指袋＿間の頂点
  ctx.quadraticCurveTo(228, 164, 195, 175) // 小指袋頂点

  // ctx.quadraticCurveTo()
  // ctx.quadraticCurveTo()

  ctx.quadraticCurveTo(228, 164, 195, 175) // 小指袋頂点
  ctx.fill()
  ctx.moveTo(307, 144) // 人差指＿中指＿溝
  ctx.quadraticCurveTo(295, 205, 298, 265) // 左下

  ctx.moveTo(235, 188) //  中指袋_小指袋＿間の頂点
  ctx.quadraticCurveTo(228, 250, 238, 325) // 中指袋_小指袋＿間の溝
  ctx.stroke()
  ctx.closePath()

  // 通気用＿穴
  ctx.beginPath()
  ctx.lineWidth = 1.4
  ctx.fillStyle = '#fff'

  const isChildEmbroidery = state.embroideries.some((embroidery) => embroidery.position.value === 'childFinger')
  const isGenuineBrandMark = state.genuineBrandMark.value === 'genuineEmbroidery'
  if (!isChildEmbroidery && !isGenuineBrandMark) {
    // 小指
    ctx.moveTo(194, 231)
    ctx.arc(194, 231, 4, 0, 2 * Math.PI)
    ctx.moveTo(190, 291)
    ctx.arc(190, 291, 4, 0, 2 * Math.PI)
    ctx.moveTo(195, 349)
    ctx.arc(195, 349, 4, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fill()
  }

  // 中指
  ctx.moveTo(269, 168)
  ctx.arc(269, 168, 4, 0, 2 * Math.PI)
  ctx.moveTo(260, 226)
  ctx.arc(260, 226, 4, 0, 2 * Math.PI)
  ctx.moveTo(264, 289)
  ctx.arc(264, 289, 4, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // stitch
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])

  // 中指袋_右-人差指
  ctx.moveTo(272, 122) // 中指袋の頂点
  ctx.quadraticCurveTo(307, 117, 300, 147) //
  ctx.quadraticCurveTo(296, 190, 292, 268) //
  ctx.quadraticCurveTo(306, 269, 302, 263) // 中指と人差し指の溝
  ctx.quadraticCurveTo(303, 194, 312, 149) //
  ctx.quadraticCurveTo(322, 103, 355, 101) // 人差し指の頂点
  ctx.quadraticCurveTo(385, 94, 382, 116) //
  ctx.quadraticCurveTo(363, 177, 382, 251) //
  ctx.quadraticCurveTo(404, 356, 467, 391) // 人差し指袋と親指袋のつなぎ目部分
  ctx.moveTo(461, 387) // 人差し指袋と親指袋のつなぎ目部分＿上
  ctx.lineTo(432, 440) // // 人差し指袋と親指袋のつなぎ目部分＿下
  ctx.moveTo(456, 383) // 人差し指袋と親指袋のつなぎ目部分＿上
  ctx.lineTo(426, 439) // // 人差し指袋と親指袋のつなぎ目部分＿下

  // 中指袋_左
  // // 外側
  ctx.moveTo(269, 124) // 上
  ctx.quadraticCurveTo(239, 146, 237, 215) //下
  ctx.quadraticCurveTo(234, 257, 241, 327) //下
  ctx.quadraticCurveTo(235, 327, 235, 327) //下

  // 薬指袋
  // // 外側
  ctx.moveTo(193, 179) // 上
  ctx.quadraticCurveTo(203, 176, 210, 174) //
  ctx.quadraticCurveTo(229, 172, 231, 193) //
  ctx.quadraticCurveTo(225, 237, 235, 327) // 下
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

export const littleRingFingerOfASBackStyle = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const color = state.middleLeftRingLittle.color
  const stitchColor = state.stitch.color
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(195, 175) // 小指袋頂点
  ctx.quadraticCurveTo(145, 230, 145, 319) // 小指袋左
  ctx.quadraticCurveTo(146, 383, 169, 449) //
  ctx.quadraticCurveTo(200, 384, 249, 406)
  ctx.quadraticCurveTo(272, 358, 311, 371)
  // ctx.quadraticCurveTo()

  // ctx.quadraticCurveTo(261, 467, 261, 467) //
  // ctx.quadraticCurveTo(339, 431, 339, 431) //中指＿右下
  ctx.quadraticCurveTo(287, 288, 307, 144) // 人差指＿中指＿溝
  ctx.quadraticCurveTo(308, 113, 276, 118) // 中指＿頂点
  ctx.quadraticCurveTo(240, 128, 235, 188) // 中指袋_小指袋＿間の頂点
  ctx.quadraticCurveTo(228, 164, 195, 175) // 小指袋頂点

  // ctx.quadraticCurveTo()

  ctx.quadraticCurveTo(228, 164, 195, 175) // 小指袋頂点
  ctx.fill()
  ctx.moveTo(307, 144) // 人差指＿中指＿溝
  ctx.quadraticCurveTo(295, 205, 298, 265) // 左下

  ctx.moveTo(235, 188) //  中指袋_小指袋＿間の頂点
  ctx.quadraticCurveTo(228, 250, 238, 325) // 中指袋_小指袋＿間の溝
  ctx.stroke()
  ctx.closePath()

  // 通気用＿穴
  ctx.beginPath()
  ctx.lineWidth = 1.4
  ctx.fillStyle = '#fff'

  const isChildEmbroidery = state.embroideries.some((embroidery) => embroidery.position.value === 'childFinger')
  const isGenuineBrandMark = state.genuineBrandMark.value === 'genuineEmbroidery'
  if (!isChildEmbroidery && !isGenuineBrandMark) {
    // 小指
    ctx.moveTo(194, 231)
    ctx.arc(194, 231, 4, 0, 2 * Math.PI)
    ctx.moveTo(190, 291)
    ctx.arc(190, 291, 4, 0, 2 * Math.PI)
    ctx.moveTo(195, 349)
    ctx.arc(195, 349, 4, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fill()
  }

  // 中指
  ctx.moveTo(269, 168)
  ctx.arc(269, 168, 4, 0, 2 * Math.PI)
  ctx.moveTo(260, 226)
  ctx.arc(260, 226, 4, 0, 2 * Math.PI)
  ctx.moveTo(264, 289)
  ctx.arc(264, 289, 4, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // stitch
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])

  // 中指袋_右-人差指
  ctx.moveTo(272, 122) // 中指袋の頂点
  ctx.quadraticCurveTo(307, 117, 300, 147) //
  ctx.quadraticCurveTo(296, 190, 292, 268) //
  ctx.quadraticCurveTo(306, 269, 302, 263) // 中指と人差し指の溝
  ctx.quadraticCurveTo(303, 194, 312, 149) //
  ctx.quadraticCurveTo(322, 103, 355, 101) // 人差し指の頂点
  ctx.quadraticCurveTo(385, 94, 382, 116) //
  ctx.quadraticCurveTo(363, 177, 382, 251) //
  // ctx.quadraticCurveTo(404, 356, 467, 391) // 人差し指袋と親指袋のつなぎ目部分

  // 中指袋_左
  // // 外側
  ctx.moveTo(269, 124) // 上
  ctx.quadraticCurveTo(239, 146, 237, 215) //下
  ctx.quadraticCurveTo(234, 257, 241, 327) //下
  ctx.quadraticCurveTo(235, 327, 235, 327) //下

  // 薬指袋
  // // 外側
  ctx.moveTo(193, 179) // 上
  ctx.quadraticCurveTo(203, 176, 210, 174) //
  ctx.quadraticCurveTo(229, 172, 231, 193) //
  ctx.quadraticCurveTo(225, 237, 235, 327) // 下
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

import { laceParts0, laceParts2, laceParts3, laceParts4, laceParts5 } from './parts/laceParts'
import { verticalPartsOfWebWithCenterBinding } from './parts/verticalParts'

const thumbSideLaceTop = (ctx: CanvasRenderingContext2D, laceColor: string): void => {
  //   ctx.fillStyle = laceColor
  ctx.strokeStyle = '#383838'
  ctx.beginPath()
  ctx.moveTo(203, 251) // 左上
  ctx.quadraticCurveTo(215, 257, 215, 257) // 左上
  ctx.quadraticCurveTo(232, 237, 222, 213)
  ctx.quadraticCurveTo(224, 178, 238, 177) // 右下
  ctx.quadraticCurveTo(242, 168, 232, 163) // 右上
  ctx.quadraticCurveTo(206, 165, 205, 206)
  ctx.quadraticCurveTo(202, 222, 205, 222)
  ctx.quadraticCurveTo(211, 239, 203, 251)
  ctx.fill()
  ctx.moveTo(222, 168)
  ctx.quadraticCurveTo(234, 169, 230, 180)
  ctx.moveTo(214, 175)
  ctx.quadraticCurveTo(224, 172, 226, 189)
  ctx.moveTo(208, 187)
  ctx.quadraticCurveTo(221, 183, 222, 197)
  ctx.moveTo(206, 198)
  ctx.quadraticCurveTo(216, 195, 221, 207)
  ctx.moveTo(205, 211)
  ctx.quadraticCurveTo(216, 209, 223, 220)
  ctx.moveTo(205, 217)
  ctx.quadraticCurveTo(218, 217, 225, 231)
  ctx.moveTo(206, 227)
  ctx.quadraticCurveTo(219, 226, 223, 240)
  ctx.moveTo(208, 238)
  ctx.quadraticCurveTo(218, 239, 220, 249)
  //   ctx.moveTo()
  //   ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.closePath()
}

const indexSideLaceTop = (ctx: CanvasRenderingContext2D, laceColor: string): void => {
  //   ctx.fillStyle = laceColor
  ctx.strokeStyle = 'red'
  ctx.strokeStyle = '#383838'
  ctx.beginPath()
  ctx.moveTo(270, 121) // 左上
  ctx.quadraticCurveTo(281, 121, 284, 137) // 左下
  ctx.quadraticCurveTo(292, 118, 313, 106)
  ctx.quadraticCurveTo(328, 91, 353, 85) // 右下
  ctx.quadraticCurveTo(358, 81, 349, 70) // 右上
  ctx.quadraticCurveTo(325, 66, 303, 88)
  ctx.quadraticCurveTo(280, 103, 270, 121)
  //   ctx.quadraticCurveTo()
  ctx.fill()

  ctx.moveTo(276, 113)
  ctx.quadraticCurveTo(284, 110, 288, 127)
  ctx.moveTo(283, 105)
  ctx.quadraticCurveTo(295, 109, 293, 120)
  ctx.moveTo(291, 99)
  ctx.quadraticCurveTo(301, 100, 300, 116)
  ctx.moveTo(300, 91)
  ctx.quadraticCurveTo(311, 92, 306, 109)
  ctx.moveTo(308, 83)
  ctx.quadraticCurveTo(320, 82, 316, 103)
  ctx.moveTo(320, 76)
  ctx.quadraticCurveTo(327, 74, 327, 95)
  ctx.moveTo(331, 72)
  ctx.quadraticCurveTo(337, 70, 337, 91)
  ctx.moveTo(343, 71)
  ctx.quadraticCurveTo(350, 71, 347, 86)
  // ctx.moveTo()
  //   ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.closePath()
}

export const iNetWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, bindingColor: string, stitchColor: string): void => {
  ctx.fillStyle = webColor
  ctx.strokeStyle = webColor
  ctx.lineWidth = 1
  verticalPartsOfWebWithCenterBinding(ctx, webColor, bindingColor, stitchColor)
  // laceここから
  laceParts0(ctx, laceColor, -9, -42)
  laceParts0(ctx, laceColor, -3, -15)
  laceParts2(ctx, laceColor, 7, 9)
  laceParts2(ctx, laceColor, 22, 38)
  laceParts2(ctx, laceColor, 32, 67)
  laceParts2(ctx, laceColor, 37, 80)

  laceParts3(ctx, laceColor, 25, 73) // 上5
  laceParts3(ctx, laceColor, 17, 49) // 上4
  laceParts3(ctx, laceColor, 8, 22) // 上3
  laceParts3(ctx, laceColor, -3, -8) // 上2
  laceParts3(ctx, laceColor, -12, -36) // 上1
  laceParts3(ctx, laceColor, -16, -66) // 上1

  laceParts4(ctx, laceColor, 29, 80) // 上5
  laceParts4(ctx, laceColor, 21, 57) // 上4
  laceParts4(ctx, laceColor, 11, 28) // 上3
  laceParts4(ctx, laceColor, 0, 0) // 上2
  laceParts4(ctx, laceColor, -8, -27) // 上1
  laceParts4(ctx, laceColor, -8, -77) // 上1

  laceParts5(ctx, laceColor, -8, -30) // 上1
  laceParts5(ctx, laceColor, 0, 0) // 上2
  laceParts5(ctx, laceColor, 11, 27) // 上3
  laceParts5(ctx, laceColor, 21, 55) // 上4
  laceParts5(ctx, laceColor, 29, 83) // 上5
  laceParts4(ctx, laceColor, -10, -52) // 上0
  // laceParts6(ctx, laceColor, 0, 0) // 上2
  thumbSideLaceTop(ctx, laceColor)
  indexSideLaceTop(ctx, laceColor)
  //   ctx.beginPath()
  //   ctx.moveTo(0, 0)
  //   ctx.quadraticCurveTo(0, 0, 0, 0)
  //   ctx.stroke()
  //   ctx.closePath()
}

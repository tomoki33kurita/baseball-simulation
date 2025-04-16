import { BankLaceDirection } from '@/types'
import {
  onBindingTojiCenter,
  onBindingTojiCenter2,
  onBindingTojiLittle,
  onBindingTojiLittle2,
  onBindingTojiLittle3,
  onBindingTojiLittle4,
  onBindingTojiThumb,
  onBindingTojiThumb1
} from './lace/onEdgeToji'

export const bindings = (
  ctx: CanvasRenderingContext2D,
  bindingColor: string,
  laceColor: string,
  stitchColor: string,
  bankLaceDirection: BankLaceDirection
): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = bindingColor

  // ヘリ革
  ctx.beginPath()
  ctx.moveTo(278, 487) //
  ctx.quadraticCurveTo(262, 486, 263, 468) //
  ctx.quadraticCurveTo(266, 458, 282, 454) //
  ctx.quadraticCurveTo(294, 451, 299, 467) // // 左上円部分＿内側
  ctx.quadraticCurveTo(318, 524, 358, 548) // // 左上円部分
  ctx.quadraticCurveTo(417, 570, 507, 568) // //
  ctx.quadraticCurveTo(544, 568, 575, 550) // //
  ctx.quadraticCurveTo(611, 523, 635, 441) // //
  ctx.quadraticCurveTo(638, 423, 652, 430) // 小指側＿頂点
  ctx.quadraticCurveTo(670, 445, 655, 462) //
  ctx.quadraticCurveTo(647, 519, 614, 555) //
  ctx.quadraticCurveTo(560, 600, 495, 581) //
  ctx.quadraticCurveTo(395, 585, 339, 558) //
  ctx.quadraticCurveTo(340, 583, 328, 587) //
  ctx.quadraticCurveTo(317, 588, 318, 580) //
  ctx.quadraticCurveTo(325, 575, 322, 562) //
  ctx.quadraticCurveTo(290, 535, 277, 488) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 左側＿つなぎ目の線
  ctx.beginPath()
  ctx.moveTo(274, 470) //
  ctx.quadraticCurveTo(283, 474, 286, 467) //
  ctx.quadraticCurveTo(302, 525, 340, 560) //
  ctx.stroke()
  ctx.closePath()

  // 右側＿つなぎ目の線
  ctx.beginPath()
  ctx.moveTo(643, 446) //
  ctx.quadraticCurveTo(645, 450, 649, 448) //
  ctx.quadraticCurveTo(617, 588, 497, 582) //
  ctx.stroke()
  ctx.closePath()

  // 左下
  ctx.beginPath()
  ctx.moveTo(320, 587) // 左下
  ctx.quadraticCurveTo(364, 591, 395, 576) // 右下
  ctx.quadraticCurveTo(373, 572, 373, 572) // 右上
  ctx.quadraticCurveTo(350, 577, 339, 571) // 左上
  ctx.quadraticCurveTo(338, 585, 320, 587) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath() // 土手紐＿ヘリ革周り

  ctx.strokeStyle = stitchColor
  ctx.lineWidth = 1.3
  ctx.beginPath()
  ctx.setLineDash([3, 3])

  // 土手親指〜小指
  ctx.moveTo(262, 472) // 親指外
  ctx.quadraticCurveTo(261, 459, 273, 456)
  ctx.quadraticCurveTo(288, 445, 296, 460)
  ctx.quadraticCurveTo(304, 470, 309, 494)
  ctx.quadraticCurveTo(325, 530, 358, 548)
  ctx.quadraticCurveTo(405, 567, 466, 566)
  ctx.quadraticCurveTo(517, 573, 572, 553)
  ctx.quadraticCurveTo(595, 532, 608, 507)
  ctx.quadraticCurveTo(635, 444, 631, 444) //小指内
  ctx.moveTo(649, 427) // 小指外
  ctx.quadraticCurveTo(673, 438, 657, 459)
  ctx.quadraticCurveTo(647, 498, 637, 520)

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()

  bankLaceAroundBinding(ctx, laceColor, bankLaceDirection)
}

const bankLaceAroundBinding = (ctx: CanvasRenderingContext2D, color: string, bankLaceDirection: BankLaceDirection): void => {
  // 逆巻き
  const isReverseRollLace = bankLaceDirection === 'reverseRoll'
  if (isReverseRollLace) {
    onBindingTojiThumb(ctx, color, 0, 0) // 親指側＿根元側
    onBindingTojiThumb(ctx, color, -22, -25)
    onBindingTojiThumb(ctx, color, 115, -180, 20) // 親指側＿先端
    onBindingTojiThumb(ctx, color, 165, -265, 30)
    onBindingTojiCenter(ctx, color, 0, 2)
    onBindingTojiCenter(ctx, color, -65, 74, -10)
    onBindingTojiCenter(ctx, color, -35, 81, -10)
    onBindingTojiCenter(ctx, color, 7, 90, -10)
    onBindingTojiCenter(ctx, color, -45, 155, -18)
    onBindingTojiCenter(ctx, color, -12, 157, -18)
    onBindingTojiCenter(ctx, color, -410, 255, -50)
    onBindingTojiLittle(ctx, color, 0, 0)
    onBindingTojiLittle(ctx, color, -83, 75, -10)
    onBindingTojiLittle2(ctx, color)
    onBindingTojiLittle(ctx, color, -65, 50, -10)
  }
  // 順巻き
  if (bankLaceDirection === 'sequentialRoll') {
    onBindingTojiThumb1(ctx, color, -14, -30) // 親指2
    onBindingTojiThumb(ctx, color, 160, -270, 30) // 親指1
    onBindingTojiThumb1(ctx, color, -4, -9)
    onBindingTojiThumb1(ctx, color, -145, 50, -15, 1.05)
    onBindingTojiCenter2(ctx, color, -49, -10, 0) //
    onBindingTojiCenter2(ctx, color, -5, -2, 0) //
    onBindingTojiCenter2(ctx, color, -65, 70, -10) //
    onBindingTojiCenter2(ctx, color, -135, 135, -20) //
    onBindingTojiCenter2(ctx, color, -87, 152, -20) //
    onBindingTojiLittle4(ctx, color, -80, 73, -10)
    onBindingTojiLittle4(ctx, color, 0, 0)
    onBindingTojiLittle3(ctx, color, -23, 32)
    onBindingTojiLittle3(ctx, color, 108, -180, 20)
    onBindingTojiLittle2(ctx, color) // 小指1
    onBindingTojiLittle4(ctx, color, -70, 53, -10)
  }
}

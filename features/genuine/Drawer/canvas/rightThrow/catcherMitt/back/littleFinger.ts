import { GenuineState } from '@/features/genuine/types'

export const littleFingerOfRegularBackStyle = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const color = state.littleOut.color
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
  ctx.quadraticCurveTo(249, 618, 269, 630) // 右下
  ctx.quadraticCurveTo(170, 369, 195, 175) // 小指袋頂点
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 通気用＿穴
  ctx.beginPath()
  ctx.lineWidth = 1.4
  ctx.fillStyle = '#fff'

  if (state.genuineBrandMark.value !== 'genuineEmbroidery') {
    // 左列
    ctx.moveTo(174, 261)
    ctx.arc(174, 261, 4, 0, 2 * Math.PI)
    ctx.moveTo(170, 321)
    ctx.arc(170, 321, 4, 0, 2 * Math.PI)
    ctx.moveTo(175, 379)
    ctx.arc(175, 379, 4, 0, 2 * Math.PI)
  }
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // stitch
  const stitchColor = state.stitch.color
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 内側
  ctx.moveTo(191, 186) // 小指袋＿頂点
  ctx.quadraticCurveTo(145, 247, 152, 346) //
  ctx.quadraticCurveTo(159, 423, 193, 492) //
  ctx.quadraticCurveTo(200, 494, 195, 510) //
  // 外側
  ctx.moveTo(193, 179) // 小指袋＿頂点
  ctx.quadraticCurveTo(142, 244, 149, 346) //
  ctx.quadraticCurveTo(155, 423, 191, 492) //
  ctx.quadraticCurveTo(196, 494, 193, 510) //
  //小指袋_左下
  ctx.moveTo(191, 511) // 小指袋_左下
  ctx.quadraticCurveTo(238, 542, 238, 557) //
  ctx.quadraticCurveTo(246, 569, 245, 610) // ベルト部分＿左下
  ctx.quadraticCurveTo(250, 616, 268, 624) //
  // 右側面
  ctx.moveTo(187, 190) // 小指袋_ハミダシ＿右上
  ctx.quadraticCurveTo(175, 303, 201, 422) // ハミダシ＿中間
  ctx.quadraticCurveTo(221, 520, 259, 621) // ハミダシ＿下

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}

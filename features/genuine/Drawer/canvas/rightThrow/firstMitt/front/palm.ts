import { GenuineState } from '@/features/genuine/types'
import { webDrawUtil } from '@/util/canvas'
import { underCenter, underLeft, underRight, underWeb } from './lace/underWeb'

export const palm = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = state.palm.color

  const { webMatcher } = webDrawUtil(state)
  const isOmission = webMatcher(['crossV2', 'tNet2', 'tNet3']) // このウェブの場合、捕球面を狭くする

  if (isOmission) {
    ctx.beginPath()
    ctx.moveTo(321, 351) // 左上
    ctx.quadraticCurveTo(410, 583, 410, 583) // 左下
    ctx.quadraticCurveTo(500, 625, 605, 589) // 右下
    ctx.quadraticCurveTo(722, 487, 711, 304) // ブーメラン部分突入
    ctx.quadraticCurveTo(683, 135, 608, 87) //
    ctx.quadraticCurveTo(516, 29, 404, 54) //
    ctx.quadraticCurveTo(373, 94, 373, 94) //
    ctx.quadraticCurveTo(370, 132, 404, 165) //
    ctx.quadraticCurveTo(414, 184, 419, 182) // ここまで、ヘリ革の下で雑把に描画
    ctx.quadraticCurveTo(445, 210, 437, 248)
    // ctx.quadraticCurveTo(438, 227, 422, 218) // ウェブ下＿右上
    // ctx.quadraticCurveTo(384, 244, 361, 273) // ウェブ下＿中央
    ctx.quadraticCurveTo(415, 319, 321, 351) // 左上
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
  } else {
    ctx.beginPath()
    ctx.moveTo(307, 323) // 左上
    ctx.quadraticCurveTo(410, 583, 410, 583) // 左下
    ctx.quadraticCurveTo(500, 625, 605, 589) // 右下
    ctx.quadraticCurveTo(722, 487, 711, 304) // ブーメラン部分突入
    ctx.quadraticCurveTo(683, 135, 608, 87) //
    ctx.quadraticCurveTo(516, 29, 404, 54) //
    ctx.quadraticCurveTo(373, 94, 373, 94) //
    ctx.quadraticCurveTo(370, 132, 404, 165) //
    ctx.quadraticCurveTo(414, 184, 419, 182) // ここまで、ヘリ革の下で雑把に描画
    ctx.quadraticCurveTo(445, 210, 437, 248)
    ctx.quadraticCurveTo(438, 227, 422, 218) // ウェブ下＿右上
    ctx.quadraticCurveTo(384, 244, 361, 273) // ウェブ下＿中央
    ctx.quadraticCurveTo(331, 295, 307, 323) // 左上
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
  }
  // ブーメラン下のライン
  ctx.beginPath()
  ctx.moveTo(419, 182) //
  ctx.quadraticCurveTo(447, 171, 447, 171) //
  ctx.quadraticCurveTo(507, 150, 573, 184) //
  ctx.quadraticCurveTo(578, 189, 581, 200) //
  ctx.quadraticCurveTo(602, 231, 609, 275) //
  ctx.stroke()
  ctx.closePath()

  const laceColor = state.lace.color
  if (!isOmission) {
    ctx.strokeStyle = state.stitch.color
    ctx.beginPath()
    ctx.setLineDash([3, 3])
    // ウェブ直下の捕球面
    ctx.moveTo(319, 349) // 左下
    ctx.quadraticCurveTo(366, 305, 424, 250)
    ctx.moveTo(325, 351) // 左下
    ctx.quadraticCurveTo(428, 254, 428, 254)
    // 右辺
    ctx.moveTo(424, 250) // 右上
    ctx.quadraticCurveTo(428, 254, 428, 254) // 右下
    ctx.stroke()
    ctx.setLineDash([])
    ctx.closePath()

    underLeft(ctx, laceColor, 0, 0)
    underLeft(ctx, laceColor, 25, -12)
    underCenter(ctx, laceColor)
    underRight(ctx, laceColor, 0, 0)
    underRight(ctx, laceColor, 15, -27)
  } else {
    if (webMatcher(['crossV2'])) {
      underWeb(ctx, laceColor, 75, 0, 0)
      underWeb(ctx, laceColor, 120, -110, 20)
      underWeb(ctx, laceColor, 130, -230, 40)
    }

    if (webMatcher(['tNet2', 'tNet3'])) {
      underWeb(ctx, laceColor, 65, 20, 0)
      underWeb(ctx, laceColor, 120, -110, 25)
    }
  }
}

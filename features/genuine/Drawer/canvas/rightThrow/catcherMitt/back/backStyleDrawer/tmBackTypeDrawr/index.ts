import { GenuineState } from '@/features/genuine/types'
import { bindingOfTMBackStyle } from '../../edge'
// import { listCross } from '../../lace/listCross'

export const tmBackTypeDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  // レザー
  ctx.beginPath()
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = state.listBelt.color
  ctx.moveTo(198, 517) // 左上
  ctx.quadraticCurveTo(232, 543, 241, 598) // 左下1
  ctx.quadraticCurveTo(246, 620, 263, 624) // 左下2
  ctx.quadraticCurveTo(345, 674, 443, 618) // 右下
  ctx.quadraticCurveTo(436, 549, 454, 523) // 右上
  ctx.quadraticCurveTo(300, 551, 329, 445) // 左の右上
  ctx.quadraticCurveTo(253, 455, 198, 517) // 左上
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // ヘリ革
  ctx.beginPath()
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = state.binding.color
  ctx.moveTo(322, 447) // 左上
  ctx.quadraticCurveTo(300, 551, 454, 527) // 右上
  ctx.quadraticCurveTo(454, 520, 454, 517)
  ctx.quadraticCurveTo(315, 540, 336, 441)
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

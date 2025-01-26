import { GenuineState } from '@/features/genuine/types'
import { indexFingerCover, indexFingerCoverLong } from '../indexFinger'

const indexFingerPadOfFTypeOnStand = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor
  ctx.beginPath()
  ctx.moveTo(329, 433) // 左下
  ctx.quadraticCurveTo(374, 424, 419, 430) // 右下
  ctx.quadraticCurveTo(431, 375, 464, 328) // 右上1
  ctx.quadraticCurveTo(447, 317, 421, 269) // 右上2
  ctx.quadraticCurveTo(378, 265, 300, 293) // 左上
  ctx.quadraticCurveTo(307, 372, 329, 433) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // stitchここから
  ctx.lineWidth = 1.0
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 左側面＿外
  ctx.moveTo(304, 296) // 左下
  ctx.quadraticCurveTo(310, 369, 332, 430) // 右下
  // 左側面＿内
  ctx.moveTo(307, 296) // 左下
  ctx.quadraticCurveTo(313, 369, 335, 430) // 右下
  // 上側面
  ctx.moveTo(307, 296) // 左下
  ctx.quadraticCurveTo(370, 270, 420, 272) // 右下
  // 右上側面
  ctx.moveTo(420, 272) // 左下
  ctx.quadraticCurveTo(438, 315, 476, 339) // 右下
  // 右下側面
  ctx.moveTo(460, 329) // 左下
  ctx.quadraticCurveTo(425, 382, 416, 430) // 左下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}

const indexFingerPadOfFTypeOnIndexFinger = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor
  ctx.beginPath()
  ctx.moveTo(329, 433) // 左下
  // ctx.quadraticCurveTo(377, 430, 417, 440) // 右下
  ctx.quadraticCurveTo(374, 424, 419, 430) // 右下
  ctx.quadraticCurveTo(431, 375, 443, 360) // 右上1
  ctx.quadraticCurveTo(405, 329, 389, 269) // 右上2
  ctx.quadraticCurveTo(378, 265, 300, 293) // 左上
  ctx.quadraticCurveTo(307, 372, 329, 433) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // stitchここから
  ctx.lineWidth = 1.0
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 左側面＿外
  ctx.moveTo(304, 296) // 左下
  ctx.quadraticCurveTo(310, 369, 332, 430) // 右下
  // 左側面＿内
  ctx.moveTo(307, 296) // 左下
  ctx.quadraticCurveTo(313, 369, 335, 430) // 右下
  // 上側面
  ctx.moveTo(307, 296) // 左下
  ctx.quadraticCurveTo(370, 270, 385, 272) // 右下
  // 右上側面
  ctx.moveTo(385, 272) // 左下
  ctx.quadraticCurveTo(400, 334, 438, 360) // 右下
  // 右下側面
  ctx.moveTo(439, 361) // 右上
  ctx.quadraticCurveTo(425, 382, 416, 430) // 左下

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}

const specialIndexFingerPadOfFTypeOnIndexFinger = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor
  ctx.beginPath()
  ctx.moveTo(336, 516) // 左下
  ctx.quadraticCurveTo(383, 540, 425, 512) // 右下1
  ctx.quadraticCurveTo(417, 440, 417, 440) // 右下2
  ctx.quadraticCurveTo(431, 375, 464, 328) // 右上1
  ctx.quadraticCurveTo(447, 317, 421, 269) // 右上2
  // ctx.quadraticCurveTo(431, 375, 443, 360) // 右上1
  // ctx.quadraticCurveTo(405, 329, 389, 269) // 右上2
  ctx.quadraticCurveTo(378, 265, 300, 293) // 左上
  ctx.quadraticCurveTo(307, 372, 336, 516) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // stitchここから
  ctx.lineWidth = 1.0
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 左側面
  ctx.moveTo(304, 296) // 左下
  ctx.quadraticCurveTo(317, 407, 338, 512) // 右下
  // 上側面
  ctx.moveTo(307, 296) // 左下
  ctx.quadraticCurveTo(370, 270, 420, 272) // 右下
  // 右上側面
  ctx.moveTo(420, 272) // 左下
  ctx.quadraticCurveTo(438, 315, 476, 339) // 右下
  // 右下側面
  ctx.moveTo(460, 329) // 左下
  ctx.quadraticCurveTo(425, 382, 413, 438) // 左下
  ctx.quadraticCurveTo(420, 508, 420, 508) // 左下
  // 下辺
  ctx.moveTo(338, 512) // 左
  ctx.quadraticCurveTo(381, 537, 420, 510) // 右

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}

export const fingerGuardDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  switch (state.fingerGuard.value) {
    case 'indexCoverStandard':
      // 指カバー
      indexFingerCover(ctx, state.fingerGuardColor.color, state.stitch.color)
      break
    case 'indexCoverLong':
      // 指当て // 台まで
      indexFingerCoverLong(ctx, state.fingerGuardColor.color, state.stitch.color)
      break
    case 'specialIndexPad':
      // 指当て
      specialIndexFingerPadOfFTypeOnIndexFinger(ctx, state.fingerGuardColor.color, state.stitch.color)
      break
  }
}

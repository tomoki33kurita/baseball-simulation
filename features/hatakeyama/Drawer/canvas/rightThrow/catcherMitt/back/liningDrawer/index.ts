import { GenuineState } from '@/features/genuine/types'
import { lining } from '../lining'
import { catcherLiningDrawerLeftThrow, catcherLiningEmbroideryDrawer } from '@/util/canvas/embroidery'
import { startInversion, undoInversion } from '@/util/canvas'
import { HatakeyamaState } from '@/features/hatakeyama/types'

export const liningDrawer = (ctx: CanvasRenderingContext2D, state: HatakeyamaState, width: number): void => {
  lining(ctx, state.linings.color)

  if (state.dominantArm.value === 'rightThrow') {
    catcherLiningEmbroideryDrawer(ctx, state.embroideries, 'first') // 裏革の刺繍
    catcherLiningEmbroideryDrawer(ctx, state.embroideries, 'second') // 裏革の刺繍
  }
  if (state.dominantArm.value === 'leftThrow') {
    undoInversion(ctx, width)
    catcherLiningDrawerLeftThrow(ctx, state) // 裏革
    startInversion(ctx, width)
  }
}

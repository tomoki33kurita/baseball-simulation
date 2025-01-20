import { GenuineState } from '@/features/genuine/types'
import { lining } from '../lining'
import { catcherLiningEmbroideryDrawer } from '@/util/canvas/embroidery'

export const liningDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  lining(ctx, state.linings.color)

  catcherLiningEmbroideryDrawer(ctx, state.embroideries, 'first') // 裏革の刺繍
  catcherLiningEmbroideryDrawer(ctx, state.embroideries, 'second') // 裏革の刺繍
}

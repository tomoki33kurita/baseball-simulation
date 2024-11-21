import { beltBackStyleDrawer } from './beltBackStyleDrawer'
import { GenuineState } from '@/features/genuine/types'
import { firstBackStyleDrawer } from './firstBackStyleDrawer'
import { crownBackStyleDrawer } from './crownBackStyleDrawer'
import { backLaceDrawer } from '../lace/backLaceDrawer'

export const backStyleOfGloveBackDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const needPalmWrap = !state.baseModel?.isUBack || false
  beltBackStyleDrawer(ctx, state, needPalmWrap)
  firstBackStyleDrawer(ctx, state)
  crownBackStyleDrawer(ctx, state)

  backLaceDrawer(ctx, state)
}

import { GenuineState } from '@/features/genuine/types'
import { beltBackStyleDrawer } from './beltBackStyleDrawer'
import { firstBackStyleDrawer } from './firstBackStyleDrawer'
import { crownBackStyleDrawer } from './crownBackStyleDrawer'
import { backLaceDrawer } from '../lace/backLaceDrawer'
import { connectBackStyleDrawer } from './connectBackStyleDrawer'

export const backStyleOfGloveBackDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const needPalmWrap = !state.baseModel.isUBack || false
  beltBackStyleDrawer(ctx, state, needPalmWrap)
  firstBackStyleDrawer(ctx, state)
  crownBackStyleDrawer(ctx, state)
  connectBackStyleDrawer(ctx, state, needPalmWrap)
  backLaceDrawer(ctx, state)
}

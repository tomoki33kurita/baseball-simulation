import { GenuineState } from '@/features/genuine/types'
import { beltBackStyleDrawer } from './beltBackStyleDrawer'
import { firstBackStyleDrawer } from './firstBackStyleDrawer'
import { crownBackStyleDrawer } from './crownBackStyleDrawer'
import { backLaceDrawer } from '../lace/backLaceDrawer'
import { connectBackStyleDrawer } from './connectBackStyleDrawer'
import { genuineEmbroideryForRingFinger } from '../../front/engraving'

export const backStyleOfGloveBackDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const needPalmWrap = !state.baseModel.isUBack || false
  beltBackStyleDrawer(ctx, state, needPalmWrap)
  firstBackStyleDrawer(ctx, state)
  crownBackStyleDrawer(ctx, state)
  connectBackStyleDrawer(ctx, state, needPalmWrap)
  backLaceDrawer(ctx, state)
  const isIntegratedRing = state.leatherIntegratedRing.value === 'atRingFinger'
  if (isIntegratedRing) genuineEmbroideryForRingFinger(ctx, state.ringMiddle, state.leatherIntegratedRingColor.color)
}

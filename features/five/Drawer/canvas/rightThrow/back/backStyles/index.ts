import { positionChecker } from '@/app/util/logic'
import { beltBackStyleDrawer, beltBackStyleDrawerForBasic } from './beltBackStyleDrawer'
import { outfielderDefaultBackLace } from '../lace/outfielderDefaultBackLace'
import { State } from '@/features/five/types'
import { getOrderType } from '@/features/five/Setters/logic'

export const backStyleOfGloveBackDrawer = (ctx: CanvasRenderingContext2D, state: State): void => {
  const needPalmWrap = !state.baseModel?.isUBack || false
  const { isBasicOrder, isBasicWithEmbroideryOrder } = getOrderType(state.orderType)
  const laceColor = isBasicOrder || isBasicWithEmbroideryOrder ? state.baseModel.basicColors.lace.color : state.lace.color
  const position = state.baseModel?.position
  const { isOutfielder } = positionChecker(position)

  switch (isBasicOrder || isBasicWithEmbroideryOrder) {
    case true:
      beltBackStyleDrawerForBasic(ctx, state, needPalmWrap)
      break
    case false:
      beltBackStyleDrawer(ctx, state, needPalmWrap)
      break
  }
  // 背面紐通し(外野手のみ)
  isOutfielder && outfielderDefaultBackLace(ctx, laceColor)
}

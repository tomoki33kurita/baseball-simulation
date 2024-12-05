import { webTop1, webTop2, webTop3 } from './web'
import { connectCatchFace } from './connectCatchFace'
import { GenuineState } from '@/features/genuine/types'
import {
  aroundEdge0,
  aroundEdge1,
  aroundEdge10,
  aroundEdge11,
  aroundEdge12,
  aroundEdge2,
  aroundEdge3,
  aroundEdge4,
  aroundEdge5,
  aroundEdge6,
  aroundEdge7,
  aroundEdge8,
  aroundEdge9
} from './aroundEdge'
import { hinge } from './hinge'
import { inMachiOfCommon, inMachiOfNormalPocket, inMachiOfShallowPocket } from './inMachi'

export const laceDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const color = state.lace.color
  const isShallowWebModel = ['YT-22'].includes(state.baseModel.productNumber)

  aroundEdge0(ctx, color)
  aroundEdge1(ctx, color, 2, 0)
  aroundEdge1(ctx, color, 19, 32)
  aroundEdge2(ctx, color, 15, -65, 7)
  aroundEdge2(ctx, color, 0, 0, 0)
  aroundEdge2(ctx, color, -30, 60, -7)
  aroundEdge2(ctx, color, -96, 123, -17)
  aroundEdge2(ctx, color, -35, 150, -13)
  aroundEdge3(ctx, color, -80, -38)
  aroundEdge3(ctx, color, -40, -15)
  aroundEdge3(ctx, color, 0, 0)
  aroundEdge3(ctx, color, -132, 103, -15)
  aroundEdge3(ctx, color, -92, 119, -15)
  aroundEdge3(ctx, color, -387, 200, -40)
  aroundEdge4(ctx, color, -27, 19)
  aroundEdge4(ctx, color, 0, 0)
  aroundEdge4(ctx, color, 32, -25)
  aroundEdge4(ctx, color, 60, -51)
  aroundEdge5(ctx, color, 14, -42)
  aroundEdge5(ctx, color, 1, 0)
  aroundEdge5(ctx, color, -23, 40)
  aroundEdge6(ctx, color, -46, 192, -15, 0.9)
  aroundEdge6(ctx, color, 0, 0)
  aroundEdge7(ctx, color, 49, -83, 10)
  aroundEdge7(ctx, color, 0, 0)
  aroundEdge7(ctx, color, -34, 13, -5)
  aroundEdge7(ctx, color, -102, 78, -15)
  aroundEdge7(ctx, color, -183, 133, -25)
  aroundEdge8(ctx, color, 52, -148, 15)
  aroundEdge8(ctx, color, 0, 0)
  aroundEdge8(ctx, color, -43, -10)
  aroundEdge8(ctx, color, -85, -14)
  aroundEdge9(ctx, color, 38, -3)
  aroundEdge9(ctx, color, 0, 0)
  aroundEdge9(ctx, color, -36, 5)
  aroundEdge9(ctx, color, -90, 77, -10)
  aroundEdge10(ctx, color, 7, -213, 30)
  aroundEdge10(ctx, color, 0, 0)
  webTop3(ctx, color)
  webTop1(ctx, color, 180, -260, 20)
  webTop2(ctx, color, 138, -178, 13)
  webTop2(ctx, color, 122, -158, 13)
  webTop2(ctx, color, 106, -138, 13)
  webTop2(ctx, color, 88, -108, 10)
  webTop2(ctx, color, 60, -70, 5)
  webTop2(ctx, color, 30, -37)
  webTop2(ctx, color, 12, -17)
  webTop2(ctx, color, 0, 0)
  webTop2(ctx, color, -14, 18)
  webTop1(ctx, color, 0, 0)

  if (isShallowWebModel) {
    hinge(ctx, color, -20, 20) // 左
    hinge(ctx, color, 20, -20) // 右
    inMachiOfCommon(ctx, color)
    inMachiOfShallowPocket(ctx, color)
    aroundEdge12(ctx, color)
  }
  if (!isShallowWebModel) {
    connectCatchFace(ctx, color)
    hinge(ctx, color, -30, 30) // 左
    hinge(ctx, color, 0, 0) // 中央
    hinge(ctx, color, 33, -30) // 右
    inMachiOfCommon(ctx, color)
    inMachiOfNormalPocket(ctx, color)
    aroundEdge11(ctx, color)
  }
}

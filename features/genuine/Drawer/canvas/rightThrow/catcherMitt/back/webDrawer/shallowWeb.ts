import { webOfShallowPocket, webTop } from '../web'
import { webTop0, webTop1, webTop2, webTop3 } from '../lace/web'
import {
  laceOfConnectWebToCatchFace,
  laceOfLeftConnectWebToCatchFace,
  laceOfRightConnectWebToCatchFace,
  laceOfWebTopToIndexFinger,
  laceOfWebTopToThumbFinger
} from '../lace/connectWeb'
import { GenuineState } from '@/features/genuine/types'
import { aroundEdge3, aroundEdge4, aroundEdge5, aroundEdge6, aroundEdge8 } from '../lace/aroundEdge'

export const shallowWeb = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  // 革紐パーツ
  laceOfWebTopToIndexFinger(ctx, state.lace.color) //
  laceOfWebTopToThumbFinger(ctx, state.lace.color) //

  // 本体パーツ
  webTop(ctx, state.web.color, state.stitch.color) // 残す
  webOfShallowPocket(ctx, state.web.color, state.stitch.color) // 変更

  webTop3(ctx, state.lace.color)
  webTop2(ctx, state.lace.color, 12, 18)
  webTop2(ctx, state.lace.color, 0, 0)
  webTop2(ctx, state.lace.color, -14, -17)
  webTop1(ctx, state.lace.color, 110, -73, 13)
  webTop1(ctx, state.lace.color, 89, -28, 8)
  webTop1(ctx, state.lace.color, 69, -42, 8)
  webTop1(ctx, state.lace.color, 40, 30)
  webTop1(ctx, state.lace.color, 20, 14)
  webTop1(ctx, state.lace.color, 0, 0)
  webTop1(ctx, state.lace.color, -20, -13)
  webTop0(ctx, state.lace.color)

  // 順番が大事なのでこの中でaroundEdgeも一部描画
  aroundEdge4(ctx, state.lace.color)
  aroundEdge5(ctx, state.lace.color)
  aroundEdge6(ctx, state.lace.color, 5, 0)
  aroundEdge6(ctx, state.lace.color, -5, 0)
  // webToThumbFinger(ctx, state.lace.color)
  laceOfConnectWebToCatchFace(ctx, state.lace.color, 0, 0)
  laceOfConnectWebToCatchFace(ctx, state.lace.color, 70, 55)

  // 順番が大事なのでこの中でaroundEdgeも一部描画
  aroundEdge8(ctx, state.lace.color)
  laceOfLeftConnectWebToCatchFace(ctx, state.lace.color)
  aroundEdge3(ctx, state.lace.color, -55, 111, -12)
  laceOfRightConnectWebToCatchFace(ctx, state.lace.color)
}
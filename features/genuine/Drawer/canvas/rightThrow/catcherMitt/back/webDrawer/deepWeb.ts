import { web, webTop } from '../web'
import { webTop0, webTop1, webTop2, webTop3 } from '../lace/web'
import { laceOfWebTopToIndexFinger, laceOfWebTopToThumbFinger, webToCatchFace, webToIndexFinger, webToThumbFinger } from '../lace/connectWeb'
import { GenuineState } from '@/features/genuine/types'
import { webKnots } from '@/util/canvas/lace/webKnots'
import { aroundEdge4, aroundEdge5, aroundEdge6 } from '../lace/aroundEdge'
import { webKnotDownward } from '@/util/canvas/lace/webKnotSingle'

export const deepWeb = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  laceOfWebTopToIndexFinger(ctx, state.lace.color)
  laceOfWebTopToThumbFinger(ctx, state.lace.color)

  webTop(ctx, state.web.color, state.stitch.color)
  web(ctx, state.web.color, state.stitch.color)

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
  webToCatchFace(ctx, state.lace.color, 0, 0)
  webToCatchFace(ctx, state.lace.color, 45, 37)
  webToCatchFace(ctx, state.lace.color, 93, 80)
  webToIndexFinger(ctx, state.lace.color)
  webKnots(ctx, state.lace.color, -18, -19)

  // 順番が大事なのでこの中でaroundEdgeも一部描画
  aroundEdge4(ctx, state.lace.color)
  aroundEdge5(ctx, state.lace.color)
  aroundEdge6(ctx, state.lace.color, 5, 0)
  aroundEdge6(ctx, state.lace.color, -5, 0)
  webToThumbFinger(ctx, state.lace.color)

  webKnotDownward(ctx, state.lace.color, -3, -160, 20) //親指袋の隣
  webKnotDownward(ctx, state.lace.color, -480, -630, 70) // 人差し指袋の右隣
}

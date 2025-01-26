import { twoPeaceWebCore2, twoPeaceWebCore1, web, webTop } from '../web'
import { webTop0, webTop1, webTop2, webTop3, webTopCrossLace } from '../lace/web'
import { laceOfWebTopToIndexFinger, laceOfWebTopToThumbFinger, webToCatchFace, webToIndexFinger, webToThumbFinger } from '../lace/connectWeb'
import { webKnots } from '@/util/canvas/lace/webKnots'
import { aroundEdge4, aroundEdge5, aroundEdge6 } from '../lace/aroundEdge'
import { webKnotDownward } from '@/util/canvas/lace/webKnotSingle'
import { HatakeyamaState } from '@/features/hatakeyama/types'

export const towPeaceWeb = (ctx: CanvasRenderingContext2D, state: HatakeyamaState): void => {
  laceOfWebTopToIndexFinger(ctx, state.lace.color)
  laceOfWebTopToThumbFinger(ctx, state.lace.color)

  webTop(ctx, state.web2.color, state.stitch.color)
  twoPeaceWebCore1(ctx, state.web.color, state.stitch.color)

  if (state.webLaceStyle.value === 'cross') {
    webTop3(ctx, state.lace.color)
    webTopCrossLace(ctx, state.lace.color, -275, -105, -6, 1.25)
    webTopCrossLace(ctx, state.lace.color, -250, -88, -6, 1.25)
    webTopCrossLace(ctx, state.lace.color, -186, -82, -3, 1.17)
    webTopCrossLace(ctx, state.lace.color, -150, -83, 0, 1.17)
    webTopCrossLace(ctx, state.lace.color, -88, -48, 0, 1.1)
    webTopCrossLace(ctx, state.lace.color, 0, 0, 0, 1)
  } else {
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
  }
  webToIndexFinger(ctx, state.lace.color)

  // 順番が大事なのでこの中でaroundEdgeも一部描画
  aroundEdge4(ctx, state.lace.color)
  aroundEdge5(ctx, state.lace.color)
  aroundEdge6(ctx, state.lace.color, 5, 0)
  aroundEdge6(ctx, state.lace.color, -5, 0)
  webToThumbFinger(ctx, state.lace.color)

  twoPeaceWebCore2(ctx, state.web3.color, state.lace.color, state.stitch.color) // 捕球面との接続部分
  webToCatchFace(ctx, state.lace.color, 0, 0)
  webToCatchFace(ctx, state.lace.color, 45, 37)
  webToCatchFace(ctx, state.lace.color, 93, 80)

  webKnotDownward(ctx, state.lace.color, -3, -160, 20) //親指袋の隣
  webKnotDownward(ctx, state.lace.color, -480, -630, 70) // 人差し指袋の右隣
}

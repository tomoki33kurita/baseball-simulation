import { webKnots } from '@/util/canvas/lace/webKnots'
import { webCross } from './webCross'
import { webTop, webTop0 } from './webTop'
import { listKnot } from './listKnot'
import { underBoomerang } from './underBoomerang'
import { webKnotDownward, webKnotUpward } from '@/util/canvas/lace/webKnotSingle'
import { aroundEdge, aroundEdge0, aroundEdge1, aroundEdge2, aroundEdge3, aroundEdge4, aroundEdge5, aroundEdge6 } from './aroundEdge'
import { connectWeb, connectWeb2, connectWeb3, connectWeb4 } from './connectWeb'
import { onTheBoomerang, onTheBoomerang2, onTheBoomerang3 } from './onTheBoomerang'

export const laces = (ctx: CanvasRenderingContext2D, color: string): void => {
  // 親指＿単結びの革紐
  webKnotUpward(ctx, color, -55, 80, -15)

  onTheBoomerang(ctx, color)
  onTheBoomerang2(ctx, color, 0, 0)
  onTheBoomerang2(ctx, color, -97, 109, -10)
  onTheBoomerang2(ctx, color, -235, 227, -23)
  onTheBoomerang2(ctx, color, -440, 310, -43)
  onTheBoomerang3(ctx, color)

  // ウェブとウェブを結ぶバツ紐
  webCross(ctx, color, 0, 0) // 左下
  webCross(ctx, color, 62, 70) // 右下
  webCross(ctx, color, 50, -70) // 左上
  webCross(ctx, color, 100, 10) // 右上

  // ブーメラン左下の結び目
  webKnots(ctx, color, -220, -650, 90, 0.6)

  // 手首ベルト
  listKnot(ctx, color)

  // ブーメラン下の逆「く」の字
  underBoomerang(ctx, color)

  webKnotDownward(ctx, color, -2, -215, 25)

  webKnotUpward(ctx, color, -465, -20, -15)
  webKnotUpward(ctx, color, -690, 40, -40)

  webTop(ctx, color, 400, -98, 20, 0.7) // 左から12番目
  webTop(ctx, color, 390, -115, 20, 0.7) // 左から11番目
  webTop(ctx, color, 383, -133, 20, 0.7) // 左から10番目
  webTop(ctx, color, 377, -154, 20, 0.7) // 左から9番目
  webTop(ctx, color, 225, -275, 28, 0.8) // 左から8番目
  webTop(ctx, color, 50, -242, 28) // 左から7番目
  webTop(ctx, color, 52, -200, 23) // 左から6番目
  webTop(ctx, color, 45, -180, 20) // 左から5番目
  webTop(ctx, color, 36, 28) // 左から4番目
  webTop(ctx, color, 18, 15) // 左から3番目
  webTop(ctx, color, 0, -2) // 左から2番目
  webTop0(ctx, color)

  connectWeb(ctx, color)
  connectWeb2(ctx, color)
  connectWeb3(ctx, color)
  connectWeb4(ctx, color, 0, 0)
  connectWeb4(ctx, color, 25, -20)
  // connectWeb4(ctx, color, 40, -55)

  aroundEdge(ctx, color)
  aroundEdge0(ctx, color, 10, -15)
  aroundEdge0(ctx, color, 0, 0)
  aroundEdge0(ctx, color, -105, -3, 1, 1.2)
  aroundEdge0(ctx, color, 95, 30, 1, 0.8)

  aroundEdge1(ctx, color, 0, 0)
  aroundEdge1(ctx, color, -77, 167, -20)
  aroundEdge1(ctx, color, -182, 277, -35)

  aroundEdge2(ctx, color, -18, -40)
  aroundEdge2(ctx, color, 0, 0)
  aroundEdge3(ctx, color)
  aroundEdge4(ctx, color, 0, 0)
  aroundEdge4(ctx, color, 30, 27)
  aroundEdge4(ctx, color, -50, 187, -15)
  aroundEdge5(ctx, color, 0, 0)
  aroundEdge5(ctx, color, -17, -695, 60)
  aroundEdge6(ctx, color, -10, 20)
  aroundEdge5(ctx, color, 234, -88, 10, 0.8)
  aroundEdge6(ctx, color, 0, 0)
  aroundEdge6(ctx, color, 9, -27)
  aroundEdge6(ctx, color, 25, 290, -20, 0.8)
  // ウェブ上の結び目
  webKnots(ctx, color, -20, -25)
  webKnots(ctx, color, -80, 35)
}

import { webKnots } from '@/util/canvas/lace/webKnots'
import { listKnot } from './listKnot'
import { underBoomerang } from './underBoomerang'
import { webKnotDownward, webKnotUpward } from '@/util/canvas/lace/webKnotSingle'
import { aroundEdge, aroundEdge0, aroundEdge1, aroundEdge2, aroundEdge3, aroundEdge4, aroundEdge5, aroundEdge6 } from './aroundEdge'
import { connectWeb, connectWeb2, connectWeb3, connectWeb4 } from './connectWeb'
import { onTheBoomerang, onTheBoomerang2, onTheBoomerang3 } from './onTheBoomerang'
import { webDrawUtil } from '@/util/canvas'
import { GenuineState } from '@/features/genuine/types'

export const laces = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const laceColor = state.lace.color
  // 親指＿単結びの革紐
  webKnotUpward(ctx, laceColor, -55, 80, -15)

  onTheBoomerang(ctx, laceColor)
  onTheBoomerang2(ctx, laceColor, 0, 0)
  onTheBoomerang2(ctx, laceColor, -97, 109, -10)
  onTheBoomerang2(ctx, laceColor, -235, 227, -23)
  onTheBoomerang2(ctx, laceColor, -440, 310, -43)
  onTheBoomerang3(ctx, laceColor)

  // ブーメラン左下の結び目
  webKnots(ctx, laceColor, -220, -650, 90, 0.6)

  // 手首ベルト
  listKnot(ctx, laceColor)

  // ブーメラン下の逆「く」の字
  underBoomerang(ctx, laceColor)

  webKnotDownward(ctx, laceColor, -2, -215, 25)

  webKnotUpward(ctx, laceColor, -465, -20, -15)
  webKnotUpward(ctx, laceColor, -690, 40, -40)

  connectWeb(ctx, laceColor)
  connectWeb2(ctx, laceColor)
  connectWeb3(ctx, laceColor)
  connectWeb4(ctx, laceColor, 0, 0)
  connectWeb4(ctx, laceColor, 25, -20)
  // connectWeb4(ctx, laceColor, 40, -55)
  const { webMatcher } = webDrawUtil(state)
  const isOmission = webMatcher(['crossV2', 'tNet2', 'tNet3']) // このウェブの場合、捕球面を狭くする

  if (!isOmission) {
    aroundEdge(ctx, laceColor)
    aroundEdge0(ctx, laceColor, 10, -15)
    aroundEdge0(ctx, laceColor, 0, 0)
    aroundEdge0(ctx, laceColor, -105, -3, 1, 1.2)
    aroundEdge0(ctx, laceColor, 95, 30, 1, 0.8)
    aroundEdge1(ctx, laceColor, 0, 0)
    aroundEdge1(ctx, laceColor, -77, 167, -20)
    aroundEdge1(ctx, laceColor, -182, 277, -35)
    aroundEdge2(ctx, laceColor, -18, -40)
    aroundEdge2(ctx, laceColor, 0, 0)
    aroundEdge3(ctx, laceColor)
    aroundEdge4(ctx, laceColor, 0, 0)
    aroundEdge4(ctx, laceColor, 30, 27)
    aroundEdge4(ctx, laceColor, -50, 187, -15)
    aroundEdge5(ctx, laceColor, 0, 0)
    aroundEdge5(ctx, laceColor, -17, -695, 60)
    aroundEdge6(ctx, laceColor, -10, 20)
    aroundEdge5(ctx, laceColor, 234, -88, 10, 0.8)
    aroundEdge6(ctx, laceColor, 0, 0)
    aroundEdge6(ctx, laceColor, 9, -27)
    aroundEdge6(ctx, laceColor, 25, 290, -20, 0.8)
  }
}

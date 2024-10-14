import { indexToMiddle, middleToRing } from './fingerToFinger'
import { fingerTop, littleTop } from './fingerTop'
import { webKnots } from '@/app/util/canvas/lace/webKnots'
import { webKnotDownward, webKnotUpward } from '@/app/util/canvas/lace/webKnotSingle'

export const lace = (ctx: CanvasRenderingContext2D, color: string): void => {
  webKnots(ctx, color, 70, -910, 75, 0.8) // 親指の結び目

  webKnotDownward(ctx, color, 0, 0) // 親指先端の下向きの1つ結びの紐

  fingerTop(ctx, color, 0, 0) // 人差し指先端
  fingerTop(ctx, color, -160, 115, -15) // 中指先端
  fingerTop(ctx, color, -343, 218, -35) // 薬指先端
  littleTop(ctx, color) // 小指先端

  indexToMiddle(ctx, color) // 人差し指と中指の連結
  middleToRing(ctx, color, 10, 0) // 中指と薬指の連結
  middleToRing(ctx, color, -10, 100, 0.8) // 薬指と小指の連結

  // 親指とウェブの間の上向きの1つ結びの紐
  webKnotUpward(ctx, color, -55, 10)
}

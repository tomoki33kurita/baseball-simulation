import { listCross } from './listCross'
import { webKnots } from '@/util/canvas/lace/webKnots'

export const laceOfWristBeltCrossDrawer = (ctx: CanvasRenderingContext2D, color: string): void => {
  listCross(ctx, color) // 手口左のクロス部分
  webKnots(ctx, color, -170, 400, 10, 0.8) // 手首ベルト左の結び目
}

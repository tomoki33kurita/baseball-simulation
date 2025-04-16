import { webKnotDownward, webKnotUpward } from '@/util/canvas/lace/webKnotSingle'
import { tiedLittleMachiMaterialDiagonal, tiedLittleMachiMaterialSide } from './tiedLittleMachi'
import { verticalKnotForCatcher } from '@/util/canvas/lace/webKnots'
import { aroundEdge1, aroundEdge10, aroundEdge11, aroundEdge12, aroundEdge13, aroundEdge2, aroundEdge3, aroundEdge7, aroundEdge9 } from './aroundEdge'

export const laceDrawer = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  webKnotDownward(ctx, color, -560, 211, 0, 0.8) // 小指掛け紐の右下
  webKnotDownward(ctx, color, -588, 150, 0, 0.8) // 小指掛け紐の左上

  tiedLittleMachiMaterialSide(ctx, color, 0, 0)
  tiedLittleMachiMaterialSide(ctx, color, 70, -10)
  tiedLittleMachiMaterialDiagonal(ctx, color, 0, 0)
  tiedLittleMachiMaterialDiagonal(ctx, color, -130, 85, -20, 1.1)
  tiedLittleMachiMaterialDiagonal(ctx, color, -47, 140, -35, 1.2)

  // 捕球面＿真下＿右
  aroundEdge1(ctx, color, 0, 0)
  aroundEdge1(ctx, color, 33, 18)
  aroundEdge2(ctx, color)
  aroundEdge3(ctx, color, 0, 0, 0)

  // 捕球面＿真下＿左
  aroundEdge7(ctx, color, 0, 0, 0)
  aroundEdge7(ctx, color, 48, -195, 20)
  aroundEdge7(ctx, color, 17, -234, 20)
  aroundEdge7(ctx, color, -15, -430, 40)
  aroundEdge9(ctx, color, 0, 0)
  aroundEdge9(ctx, color, -17, -12)
  aroundEdge10(ctx, color, 68, -253, 35)
  aroundEdge10(ctx, color, 53, -200, 30)
  aroundEdge10(ctx, color, 43, -65, 10)
  aroundEdge10(ctx, color, 0, 0, 0)
  aroundEdge10(ctx, color, -38, 13, 0)
  aroundEdge11(ctx, color, 77, -200, 40, 0.9)
  aroundEdge11(ctx, color, 0, 0, 0, 1)
  aroundEdge11(ctx, color, -70, 47, -11, 1.1)
  aroundEdge11(ctx, color, -144, 93, -24, 1.1)
  aroundEdge12(ctx, color, 0, 0, 0, 1)
  aroundEdge12(ctx, color, -5, 45, 0, 1)
  aroundEdge12(ctx, color, -53, 100, -8, 1)
  aroundEdge12(ctx, color, -160, 150, -23, 1)
  aroundEdge13(ctx, color, 0, 0)
  aroundEdge13(ctx, color, 20, 16)

  verticalKnotForCatcher(ctx, color, 0, 0, 1)

  webKnotDownward(ctx, color, 365, -150, 20, 0.7) //親指袋の先端
  webKnotUpward(ctx, color, 130, -220, 20)
}

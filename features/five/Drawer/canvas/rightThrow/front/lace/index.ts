import { FiveState } from '@/features/five/types'
import { bankLace } from './bank'
import { indexTop, indexTopOver } from './connectIndexToWeb'
import { thumbTop, thumbTopOver, thumbWrapBack } from './connectThumbToWeb'
import { connectIndexToMiddle, connectMiddleToRing, connectRingToLittle } from './fingerTop'
import { knotDownward, knotUpward } from './knotSingle'
import { littleUpper } from './littleUpper'

export const lace = (ctx: CanvasRenderingContext2D, laceColor: string, state: FiveState): void => {
  // 土手レース
  bankLace(ctx, laceColor, state.materialPack, state.baseModel.position)
  thumbWrapBack(ctx, laceColor, -215, 20, -30) // 先端側の折り返し
  thumbWrapBack(ctx, laceColor, 0, 0) // 根元側の折り返し
  thumbWrapBack(ctx, laceColor, -50, 80, -10) // 根元側の折り返しの下
  thumbWrapBack(ctx, laceColor, -110, 165, -20) // 根元側の折り返しの下の下
  thumbTopOver(ctx, laceColor)
  thumbTop(ctx, laceColor)
  indexTopOver(ctx, laceColor) // 人差し指先端＿ウェブ繋ぎこみ奥
  indexTop(ctx, laceColor) // 人差し指先端＿ウェブ繋ぎこみ手前
  knotUpward(ctx, laceColor)
  knotDownward(ctx, laceColor)
  connectIndexToMiddle(ctx, laceColor) // 指先端の繋ぎ
  connectMiddleToRing(ctx, laceColor) // 指先端の繋ぎ
  connectRingToLittle(ctx, laceColor) // 指先端の繋ぎ
  littleUpper(ctx, laceColor) // 薬指と小指の溝直下の1つの革紐
}

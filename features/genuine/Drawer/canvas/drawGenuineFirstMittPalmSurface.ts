import { canvasResetter } from './canvasResetter'
import { thumbBackOut } from './rightThrow/front/back/thumbFinger'
import { genuineEngravedOfPalm } from './rightThrow/front/engraving'
import { GenuineState } from '../../types'
import { webCross } from './rightThrow/firstMitt/front/lace/webCross'
import { palm } from './rightThrow/firstMitt/front/palm'
import { webTop } from './rightThrow/firstMitt//front/lace/webTop'
import { webBottom } from './rightThrow/firstMitt/front/web'
import { backAroundWeb } from './rightThrow/firstMitt/front/thumbBack'
import { thumbHook } from './rightThrow/firstMitt/front/hook'
import { binding } from './rightThrow/firstMitt/front/binding'
import { stitch } from './rightThrow/firstMitt/front/stitch'
import { laces } from './rightThrow/firstMitt/front/lace'

export const drawGenuineFirstMittPalmSurface = (ctx: CanvasRenderingContext2D | null, state: GenuineState): void => {
  if (!state.underWeb) return
  if (!state.thumb) return
  if (!ctx) return
  canvasResetter(ctx) // リセット
  webCross(ctx, state.lace.color as string, 0, 0) // 革紐＿ウェブ間クロス＿上段
  webCross(ctx, state.lace.color as string, 60, -50)
  webCross(ctx, state.lace.color as string, -40, -75) // 革紐＿ウェブ間クロス＿下段
  webCross(ctx, state.lace.color as string, 20, -120)
  palm(ctx, state.palm.color as string) // 捕球面
  webTop(ctx, state.web.color) // ウェブ先端側
  webBottom(ctx, state.web.color as string) // ウェブ捕球面側
  backAroundWeb(ctx, state.underWeb.color as string) // 背面＿ウェブ周り
  thumbBackOut(ctx, state.thumb.color as string) // 親指背面＿外側
  thumbHook(ctx, state.thumbHook.color as string) // 親指掛け紐
  binding(ctx, state.binding.color as string) // ヘリ革
  stitch(ctx, state.stitch.color as string) // ステッチ
  laces(ctx, state.lace.color) // 革紐
  genuineEngravedOfPalm(ctx, state.palm, 0, 0) // メーカー捕球面の刻印
}
import { canvasResetter } from './canvasResetter'
import { genuineEngravedOfPalm, pseudoDrawingEngraved } from './rightThrow/glove/front/engraving'
import { GenuineState } from '../../types'
import { webCross } from './rightThrow/firstMitt/front/lace/webCross'
import { palm } from './rightThrow/firstMitt/front/palm'
import { webTop, webBottom } from './rightThrow/firstMitt/front/web'
import { backAroundWeb, thumbBackOut } from './rightThrow/firstMitt/front/thumbBack'
import { thumbHook } from './rightThrow/firstMitt/front/hook'
import { binding } from './rightThrow/firstMitt/front/binding'
import { stitch } from './rightThrow/firstMitt/front/stitch'
import { laces } from './rightThrow/firstMitt/front/lace'
import { paisleySelected } from './paisleySelected'

export const drawGenuineFirstMittPalmSurface = (ctx: CanvasRenderingContext2D | null, state: GenuineState): void => {
  if (!state.underWeb) return
  if (!state.thumb) return
  if (!ctx) return
  pseudoDrawingEngraved(ctx)
  canvasResetter(ctx) // リセット
  webCross(ctx, state.lace.color, 0, 0) // 革紐＿ウェブ間クロス＿上段
  webCross(ctx, state.lace.color, 60, -50)
  webCross(ctx, state.lace.color, -40, -75) // 革紐＿ウェブ間クロス＿下段
  webCross(ctx, state.lace.color, 20, -120)
  palm(ctx, state.palm.color) // 捕球面
  webTop(ctx, state.web2.color) // ウェブ先端側
  webBottom(ctx, state.web.color) // ウェブ捕球面側
  backAroundWeb(ctx, state.underWeb.color) // 背面＿ウェブ周り
  thumbBackOut(ctx, state.thumb.color) // 親指背面＿外側
  thumbHook(ctx, state.thumbHook.color) // 親指掛け紐
  binding(ctx, state.binding.color) // ヘリ革
  stitch(ctx, state.stitch.color) // ステッチ
  laces(ctx, state) // 革紐
  genuineEngravedOfPalm(ctx, state.palm, 0, 0) // メーカー捕球面の刻印
  paisleySelected(ctx, state)
}

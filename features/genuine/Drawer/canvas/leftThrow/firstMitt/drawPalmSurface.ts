import { GenuineState } from '@/features/genuine/types'
import { pseudoDrawingEngraved } from '@/util/canvas'
import { canvasResetter } from '../../canvasResetter'
import { webPalmDrawerOfFirstMitt } from '../../rightThrow/firstMitt/front/webPalmDrawer'
import { palm } from '../../rightThrow/firstMitt/front/palm'
import { backAroundWeb, thumbBackOut } from '../../rightThrow/firstMitt/front/thumbBack'
import { thumbHook } from '../../rightThrow/firstMitt/front/hook'
import { binding } from '../../rightThrow/firstMitt/front/binding'
import { stitch } from '../../rightThrow/firstMitt/front/stitch'
import { laces } from '../../rightThrow/firstMitt/front/lace'
import { genuineEngravedOfPalm } from '../../genuineMark'
import { paisleySelected } from '../../paisleySelected'

export const drawLeftThrowGenuineFirstMittPalmSurface = (ctx: CanvasRenderingContext2D | null, state: GenuineState): void => {
  if (!state.underWeb) return
  if (!state.thumb) return
  if (!ctx) return
  pseudoDrawingEngraved(ctx)
  canvasResetter(ctx) // リセット
  webPalmDrawerOfFirstMitt(ctx, state) // ウェブ捕球面側
  palm(ctx, state) // 捕球面
  backAroundWeb(ctx, state.underWeb.color) // 背面＿ウェブ周り
  thumbBackOut(ctx, state.thumb.color) // 親指背面＿外側
  thumbHook(ctx, state.thumbHook.color) // 親指掛け紐
  binding(ctx, state.binding.color) // ヘリ革
  stitch(ctx, state.stitch.color) // ステッチ
  laces(ctx, state) // 革紐
  genuineEngravedOfPalm(ctx, state.palm, 0, 0) // メーカー捕球面の刻印
  paisleySelected(ctx, state)
}

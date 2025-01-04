import { GenuineState } from '@/features/genuine/types'
import { canvasResetter } from '../../canvasResetter'
import { palm } from './front/palm'
import { thumbHook } from './front/hook'
import { binding } from './front/binding'
import { backAroundWeb, thumbBackOut } from './front/thumbBack'
import { webPalmDrawerOfFirstMitt } from './front/webPalmDrawer'
import { stitch } from './front/stitch'
import { laces } from './front/lace'
import { paisleySelected } from '../../paisleySelected'
import { pseudoDrawingEngraved } from '@/util/canvas'
import { genuineEngravedOfPalm } from '../../genuineMark'

export const drawGenuineFirstMittPalmSurface = (ctx: CanvasRenderingContext2D | null, state: GenuineState): void => {
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

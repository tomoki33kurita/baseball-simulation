import { GenuineState } from '../../../../types'
import { canvasResetter } from '../../canvasResetter'
import { fingerGuardDrawer } from './back/fingerGuardDrawer'
import { backOfIndexToLittle } from './back/backOfIndexToLittle'
import { boomerang } from './back/boomerang'
import { palm } from './back/palm'
import { liningLeather } from './back/liningLeather'
import { backOfThumbDrawer } from './back/thumbDrawer'
import { thumbHook } from './back/thumbHook'
import { littleHook } from './back/littleHook'
import { wristBeltDrawer } from './back/wristBeltDrawer'
import { backAroundWeb } from './back/backAroundWeb'
import { edgeDrawer } from './back/edgeDrawer'
import { stitch } from './back/stitch'
import { laces } from './back/lace'
import { loopOfRingFingerDrawer } from '../glove/back/loopOfFingerDrawer'
import { webRearDrawerOfFirstMitt } from './back/webRearDrawer'
import { paisleySelected } from '../../paisleySelected'
import { genuineFirstMittLabelDrawer } from '../../label/drawer'
import { pseudoDrawingEngraved } from '@/util/canvas'
import { genuineBrandMarkEmbroideryDrawer } from '../../genuineMark'
import {
  bandSideEmbroideryDrawer,
  firstMittChildFingerEmbroideryDrawer,
  firstMittThumbEmbroideryDrawer,
  liningEmbroideryDrawer
} from '@/util/canvas/embroidery'

export const drawGenuineFirstMittRearSurface = (ctx: CanvasRenderingContext2D | null, state: GenuineState): void => {
  if (!ctx) return

  const baseModel = state.baseModel

  pseudoDrawingEngraved(ctx)
  canvasResetter(ctx) // リセット
  ctx.font = '24px serif'
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = '#383838'
  ctx.strokeText('型番：' + baseModel.productNumber, 50, 70)

  liningLeather(ctx, state.linings.color)
  loopOfRingFingerDrawer(ctx, state) // 薬指ループ
  liningEmbroideryDrawer(ctx, state.embroideries, 'first') // 裏革の刺繍
  liningEmbroideryDrawer(ctx, state.embroideries, 'second') // 裏革の刺繍

  palm(ctx, state) // 捕球面
  boomerang(ctx, state.boomerang.color) // ブーメラン部分
  backOfIndexToLittle(ctx, state.boomerang.color) //  // 背面＿人差し指-小指

  firstMittChildFingerEmbroideryDrawer(ctx, state.embroideries) // 小指の刺繍

  backOfThumbDrawer(ctx, state.thumb.color, state.stitch.color) // 背面＿親指_
  const isFrontSide = ['normalFront', 'directEmbroideryFront'].includes(state.genuineLabel.value)
  if (isFrontSide) wristBeltDrawer(ctx, state) // 手首ベルト
  littleHook(ctx, state.littleHook.color) // 小指掛け紐
  thumbHook(ctx, state.thumbHook.color) // 親指掛け紐
  backAroundWeb(ctx, state.underWeb.color) //背面＿ウェブ周り

  firstMittThumbEmbroideryDrawer(ctx, state.embroideries) // 親指の刺繍
  edgeDrawer(ctx, state) // ヘリ革
  stitch(ctx, state.stitch.color) // ステッチ
  fingerGuardDrawer(ctx, state) // 指カバー
  bandSideEmbroideryDrawer(ctx, state) // バンド横の刺繍

  genuineFirstMittLabelDrawer(ctx, state)
  laces(ctx, state) // 革紐
  webRearDrawerOfFirstMitt(ctx, state) // ウェブ
  paisleySelected(ctx, state)
  genuineBrandMarkEmbroideryDrawer(ctx, state)
}

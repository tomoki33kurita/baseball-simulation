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
import { genuineLabelDrawer } from '../../label/drawer'
import { pseudoDrawingEngraved } from '@/util/canvas'
import { genuineBrandMarkEmbroideryDrawer } from '../../genuineMark'

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
  // const isEmbroideryOfLining = state.embroideries.some((x) => x.position.value === 'leatherLiningFirst')
  // if (isEmbroideryOfLining) {
  //   liningEmbroidery(
  //     ctx,
  //     state.embroideries.find((e) => e.position.value === 'leatherLiningFirst'),
  //     110,
  //     -65
  //   )
  // }

  // const isEmbroideryOfLiningSecond = state.embroideries.some((x) => x.position.value === 'leatherLiningSecond')
  // // 平裏への刺繍
  // if (isEmbroideryOfLiningSecond) {
  //   liningEmbroidery(
  //     ctx,
  //     state.embroideries.find((e) => e.position.value === 'leatherLiningSecond'),
  //     110,
  //     -25
  //   )
  // }

  palm(ctx, state) // 捕球面
  boomerang(ctx, state.boomerang.color) // ブーメラン部分
  backOfIndexToLittle(ctx, state.boomerang.color) //  // 背面＿人差し指-小指

  // // 小指への刺繍
  // const isEmbroideryOfChild = state.embroideries.some((x) => x.position.value === 'pinkyFingerSideBack')
  // if (isEmbroideryOfChild) {
  //   firstMittChildFingerEmbroidery(
  //     ctx,
  //     state.embroideries.find((embroidery) => embroidery.position.value === 'pinkyFingerSideBack'),
  //     -100,
  //     580
  //   )
  // }
  backOfThumbDrawer(ctx, state.thumb.color, state.stitch.color) // 背面＿親指_
  const isFrontSide = ['normalFront', 'directEmbroideryFront'].includes(state.genuineLabel.value)
  if (isFrontSide) wristBeltDrawer(ctx, state) // 手首ベルト
  littleHook(ctx, state.littleHook.color) // 小指掛け紐
  thumbHook(ctx, state.thumbHook.color) // 親指掛け紐
  // // 親指への刺繍
  // const isEmbroideryOfThumb = state.embroideries.some((x) => x.position.value === 'thumbFinger')
  // if (isEmbroideryOfThumb) {
  //   thumbEmbroidery(
  //     ctx,
  //     state.embroideries.find((embroidery) => embroidery.position.value === 'thumbFinger'),
  //     -220,
  //     40,
  //     -20
  //   )
  // }
  backAroundWeb(ctx, state.underWeb.color) //背面＿ウェブ周り
  edgeDrawer(ctx, state) // ヘリ革
  stitch(ctx, state.stitch.color) // ステッチ
  fingerGuardDrawer(ctx, state) // 指カバー

  genuineLabelDrawer(ctx, state)
  laces(ctx, state) // 革紐
  webRearDrawerOfFirstMitt(ctx, state) // ウェブ
  paisleySelected(ctx, state)
  genuineBrandMarkEmbroideryDrawer(ctx, state)
}

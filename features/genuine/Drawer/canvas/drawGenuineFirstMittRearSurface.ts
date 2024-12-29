import { GenuineState } from '../../types'
import { canvasResetter } from './canvasResetter'
import { fingerGuardDrawer } from './rightThrow/firstMitt/back/fingerGuardDrawer'
import { backOfIndexToLittle } from './rightThrow/firstMitt/back/backOfIndexToLittle'
import { boomerang } from './rightThrow/firstMitt/back/boomerang'
import { palm } from './rightThrow/firstMitt/back/palm'
import { liningLeather } from './rightThrow/firstMitt/back/liningLeather'
import { backOfThumbDrawer } from './rightThrow/firstMitt/back/thumbDrawer'
import { thumbHook } from './rightThrow/firstMitt/back/thumbHook'
import { littleHook } from './rightThrow/firstMitt/back/littleHook'
import { wristBeltDrawer } from './rightThrow/firstMitt/back/wristBeltDrawer'
import { backAroundWeb } from './rightThrow/firstMitt/back/backAroundWeb'
import { edgeDrawer } from './rightThrow/firstMitt/back/edgeDrawer'
import { stitch } from './rightThrow/firstMitt/back/stitch'
import { laces } from './rightThrow/firstMitt/back/lace'
import { loopOfRingFingerDrawer } from './rightThrow/glove/back/loopOfFingerDrawer'
import { webDrawerOfFirstMitt } from './rightThrow/firstMitt/back/webDrawer'
import { paisleySelected } from './paisleySelected'
import { genuineBrandMarkEmbroideryDrawer, pseudoDrawingEngraved } from './rightThrow/glove/front/engraving'
import { genuineLabelDrawer } from './label/drawer'

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

  palm(ctx, state.palm.color, state.stitch.color) // 捕球面
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
  if (isFrontSide) {
    wristBeltDrawer(ctx, state) // 手首ベルト
  }
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
  webDrawerOfFirstMitt(ctx, state) // ウェブ
  laces(ctx, state.lace.color) // 革紐
  paisleySelected(ctx, state)
  genuineBrandMarkEmbroideryDrawer(ctx, state)
}

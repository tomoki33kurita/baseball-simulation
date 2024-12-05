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
import { webBottom, webTop } from './rightThrow/firstMitt/back/web'
import { wristBeltDrawer } from './rightThrow/firstMitt/back/wristBeltDrawer'
import { backAroundWeb } from './rightThrow/firstMitt/back/backAroundWeb'
import { edgeDrawer } from './rightThrow/firstMitt/back/edgeDrawer'
import { stitch } from './rightThrow/firstMitt/back/stitch'
import { laces } from './rightThrow/firstMitt/back/lace'
import { genuineLabel } from './label'
import { loopOfRingFingerDrawer } from './rightThrow/glove/back/loopOfFingerDrawer'

export const drawGenuineFirstMittRearSurface = (ctx: CanvasRenderingContext2D | null, state: GenuineState): void => {
  if (!ctx) return

  const baseModel = state.baseModel

  canvasResetter(ctx) // リセット
  ctx.font = '40px serif'
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

  palm(ctx, state.palm.color) // 捕球面
  webTop(ctx, state.web.color, state.baseModel) // ウェブ先端側
  webBottom(ctx, state.web.color, state.baseModel) // ウェブ捕球面側
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

  wristBeltDrawer(ctx, state) // 手首ベルト
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

  genuineLabel(ctx, state, 40, 85, 0, 0.9)
  laces(ctx, state.lace.color) // 革紐
}

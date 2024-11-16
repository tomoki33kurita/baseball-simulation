// import { liningEmbroidery } from 'src/features/brands/atoms/canvas/common/back/embroidery'
import { GenuineState } from '@/features/genuine/types'
import { lining } from '../lining'

export const liningDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  lining(ctx, state.linings.color)

  // const isEmbroideryOfLiningFirst = state.embroideries.some((x) => x.position.value === 'leatherLiningFirst')
  // // 平裏への刺繍
  // if (isEmbroideryOfLiningFirst) {
  //   liningEmbroidery(
  //     ctx,
  //     state.embroideries.find((embroidery) => embroidery.position.value === 'leatherLiningFirst'),
  //     100,
  //     -15
  //   )
  // }
  // const isEmbroideryOfLiningSecond = state.embroideries.some((x) => x.position.value === 'leatherLiningSecond')
  // // 平裏への刺繍
  // if (isEmbroideryOfLiningSecond) {
  //   liningEmbroidery(
  //     ctx,
  //     state.embroideries.find((embroidery) => embroidery.position.value === 'leatherLiningSecond'),
  //     100,
  //     30
  //   )
  // }
}

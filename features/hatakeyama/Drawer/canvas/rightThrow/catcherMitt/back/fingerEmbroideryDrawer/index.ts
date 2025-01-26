import { Embroidery } from '@/types'
// import { thumbEmbroidery } from '../../../../back/embroidery'
// import { notThumbEmbroidery, thumbEmbroidery } from 'src/features/brands/atoms/canvas/common/back/embroidery'

// const finder = (positionKey: 'thumbFinger' | 'childFinger') => (embroidery: Embroidery) => embroidery.position.value === positionKey
export const fingerEmbroideryDrawer = (ctx: CanvasRenderingContext2D, embroideries: Embroidery[]): void => {
  // // 親指への刺繍
  // if (embroideries.some(finder('thumbFinger'))) {
  //   thumbEmbroidery(
  //     ctx,
  //     embroideries.find(finder(('thumbFinger')),
  //     -20,
  //     20,
  //     -5
  //   )
  // }
  // // 小指への刺繍
  // const isEmbroideryOfChild = embroideries.some(finder('childFinger'))
  // if (isEmbroideryOfChild) {
  //   notThumbEmbroidery(
  //     ctx,
  //     embroideries.find((embroidery) => embroidery.position.value === 'childFinger'),
  //     80,
  //     25,
  //     -5
  //   )
  // }
}

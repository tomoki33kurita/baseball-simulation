import { catchFaceOfDeepWeb } from './catchFaceOfDeepWeb'
import { catchFaceOfShallowWeb } from './catchFaceOfShallowWeb'
import { catchFaceOfThumbParts } from './catchFaceOfThumbParts'

// 浅めのウェブ時の捕球面
const shallowWebCatchFaceDrawer = (ctx: CanvasRenderingContext2D, catchFaceColor: string, stitchColor: string): void => {
  catchFaceOfThumbParts(ctx, catchFaceColor)
  catchFaceOfShallowWeb(ctx, catchFaceColor, stitchColor)
}
// 普通・深めのウェブ時の捕球面
const normalWebCatchFaceDrawer = (ctx: CanvasRenderingContext2D, catchFaceColor: string, stitchColor: string): void => {
  catchFaceOfThumbParts(ctx, catchFaceColor)
  catchFaceOfDeepWeb(ctx, catchFaceColor, stitchColor)
}

export const catchFaceDrawer = (ctx: CanvasRenderingContext2D, catchFaceColor: string, stitchColor: string, productNumber: string): void => {
  const isShallowWeb = productNumber === 'AKG-JS2'

  if (isShallowWeb) {
    shallowWebCatchFaceDrawer(ctx, catchFaceColor, stitchColor)
  } else {
    normalWebCatchFaceDrawer(ctx, catchFaceColor, stitchColor)
  }
}

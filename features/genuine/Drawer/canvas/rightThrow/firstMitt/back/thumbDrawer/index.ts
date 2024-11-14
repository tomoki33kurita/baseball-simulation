import { backOfThumb } from './backOfThumb'

export const backOfThumbDrawer = (ctx: CanvasRenderingContext2D, thumbColor: string, stitchColor: string): void => {
  backOfThumb(ctx, thumbColor, stitchColor)
}

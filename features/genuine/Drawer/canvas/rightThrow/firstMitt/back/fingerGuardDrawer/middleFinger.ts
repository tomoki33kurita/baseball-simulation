import { fingerCover, fingerPad } from './fingerGuard'

export const middleFingerCover = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  fingerCover(ctx, leatherColor, stitchColor, -50, 10)
}

export const middleFingerPad = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.save()
  ctx.rotate((-10 * Math.PI) / 180)
  fingerPad(ctx, leatherColor, stitchColor, -110, 60)
  ctx.restore()
}

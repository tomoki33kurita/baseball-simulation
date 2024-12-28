import { fingerCover, fingerPad } from './fingerGuard'

export const indexFingerPad = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  fingerPad(ctx, leatherColor, stitchColor, 0, 0)
}

export const indexFingerCover = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  fingerCover(ctx, leatherColor, stitchColor, 0, 0)
}

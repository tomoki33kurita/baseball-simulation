import { GenuineState } from '@/features/genuine/types'

export const genuineLabel = (ctx: CanvasRenderingContext2D, state: GenuineState, x: number, y: number, rotate: number, scaleSize: number): void => {
  ctx.save()
  ctx.rotate((rotate * Math.PI) / 180)
  ctx.scale(scaleSize, scaleSize)

  const label = { core: '#eeeeee', binding: '#eeeeee', secondary: '#eeeeee' }

  // parts1(ctx, label.binding, label.core, x, y)
  // parts2(ctx, label.binding, label.secondary, x, y)
  // parts3(ctx, label.binding, label.core, x, y)
  // parts4(ctx, label.binding, label.secondary, x, y)
  ctx.restore()
}

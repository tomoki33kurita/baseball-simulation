export const getCtx = (canvasId: string) => {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement
  if (!canvas) return null
  return canvas.getContext('2d') as CanvasRenderingContext2D
}

export const getCtx = (canvasId: string) => {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement
  if (!canvas) return { ctx: null, canvasWidth: 0 }
  return { ctx: canvas.getContext('2d') as CanvasRenderingContext2D, canvasWidth: canvas.width }
}

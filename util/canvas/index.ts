import { State } from '@/types'
import { fontFamilySetter } from './embroidery'

const darkenColor = (colorCode: string, ratio: number) => {
  if (colorCode === '#fff') return colorCode
  // カラーコードをRGB値に変換
  const hex = colorCode.replace(/^#/, '')
  const bigint = parseInt(hex, 16)
  const red = (bigint >> 16) & 255
  const green = (bigint >> 8) & 255
  const blue = bigint & 255

  // 色を濃くする処理
  const darkerRed = Math.floor(red * (1 - ratio))
  const darkerGreen = Math.floor(green * (1 - ratio))
  const darkerBlue = Math.floor(blue * (1 - ratio))

  // 新しい色を16進数に変換
  const darkerHex = ((darkerRed << 16) + (darkerGreen << 8) + darkerBlue).toString(16)

  // 16進数をカラーコード形式に整形
  return `#${darkerHex.padStart(6, '0')}`
}

export const generateLiningsGradient = (
  ctx: CanvasRenderingContext2D,
  color: string,
  coordinates: { x0: number; y0: number; x1: number; y1: number }
) => {
  const { x0, y0, x1, y1 } = coordinates
  /**
   * x0: グラデーションの開始位置の x 座標
   * y0: グラデーションの開始位置の y 座標
   * x1: グラデーションの終了位置の x 座標
   * y1: グラデーションの終了位置の y 座標
   */
  const gradient = ctx.createLinearGradient(x0, y0, x1, y1)

  // 'color' が undefinedになるケースがあるので、初期値を設定
  const initializedColor = color ? color : '#fff'
  gradient.addColorStop(0, initializedColor)
  gradient.addColorStop(0, darkenColor(initializedColor, 0.25))
  gradient.addColorStop(1, initializedColor)
  return gradient
}

export const webDrawUtil = (state: State) => {
  // const isUnselectedWeb2 = state?.web2?.value === 'unselected'
  // const web2Color = isUnselectedWeb2 ? state?.web?.color : state?.web2?.color
  const { webParts, web, lace, stitch, baseModel } = state
  const webColor = web.color
  const laceColor = lace.color
  const stitchColor = stitch.color
  const defaultWeb = webParts.value === 'unselected' && baseModel.webParts
  const productNumber = baseModel.productNumber
  const webMatcher = (webs: string[]) => webs.some((web) => [webParts.value, defaultWeb].includes(web))
  return { webMatcher, webColor, /*web2Color,*/ laceColor, stitchColor, webParts, defaultWeb, productNumber }
}
export const pseudoDrawingEngraved = (ctx: CanvasRenderingContext2D): void => {
  // google web font を事前に読み込むためのダミー描画
  const isReady = document.fonts.check('56px Alex Brush')
  fontFamilySetter(ctx, 'cursiveJa')
  fontFamilySetter(ctx, 'oldEnglish')
  const isNotReady = !isReady
  ctx.font = '56px Alex Brush'
  isNotReady && ctx.strokeText(``, 0, 0)
}

export const startInversion = (ctx: CanvasRenderingContext2D, canvasWidth: number) => {
  ctx.translate(canvasWidth, 0)
  ctx.scale(-1, 1)
}

export const undoInversion = (ctx: CanvasRenderingContext2D, canvasWidth: number) => {
  ctx.scale(-1, 1) // 元に戻す
  ctx.translate(-canvasWidth, 0)
}

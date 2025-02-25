import { Embroidery, Position, State } from '@/types'
import { startInversion, undoInversion } from '.'

export const fontFamilySetter = (ctx: CanvasRenderingContext2D, selectedFontValue: string): void => {
  const fontSize = selectedFontValue === 'Brush Script MT' ? '44px' : '32px'
  // 非同期でフォントを反映させるための関数
  if (selectedFontValue === 'cursiveJa') {
    const cursiveJaFont = new FontFace(selectedFontValue, `url(/font/embroidery/${selectedFontValue}.otf)`)
    cursiveJaFont.load().then((font) => {
      document.fonts.add(font) // DOMにfont情報を読み込ませるの必須
      ctx.font = `${fontSize} ${font.family}`
    })
  }
  if (selectedFontValue === 'oldEnglish') {
    const oldEnglishFont = new FontFace(selectedFontValue, `url(/font/embroidery/${selectedFontValue}.ttf)`)
    oldEnglishFont.load().then((font) => {
      document.fonts.add(font) // DOMにfont情報を読み込ませるの必須
      ctx.font = `${fontSize} ${font.family}`
    })
  }
}

const sideOfBeltEmbroidery = (ctx: CanvasRenderingContext2D, embroidery: Embroidery, x: number, y: number): void => {
  fontFamilySetter(ctx, embroidery.typeFace.value)
  const typeFace = embroidery.typeFace.value
  const fontSize = typeFace === 'Brush Script MT' ? '30px' : typeFace === 'Zapfino, cursive' ? '14px' : '22px'
  ctx.font = `${fontSize} ${embroidery.typeFace.value}`
  ctx.lineWidth = 0.8
  ctx.fillStyle = embroidery.color.color // '#383838'
  // 手入れ口部分
  ctx.beginPath()
  const isShadowColor = !['none', 'unselected'].includes(embroidery.shadowColor.value)
  const isEdgeColor = !['none', 'unselected'].includes(embroidery.edgeColor.value)

  // 影カラー
  if (isShadowColor) {
    ctx.shadowColor = embroidery?.shadowColor?.color
    ctx.shadowOffsetX = 3
    ctx.shadowOffsetY = 3
    ctx.shadowBlur = 3
  }
  // フチカラー
  if (isEdgeColor) {
    ctx.lineWidth = 3.0
    ctx.strokeStyle = embroidery.edgeColor.color
  }
  ctx.strokeText(embroidery.content, 470 + x, 575 + y)
  ctx.fillText(embroidery.content, 470 + x, 575 + y)
  ctx.closePath()
  // 影カラーリセット
  if (isShadowColor) {
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 0
  }
  // フチカラーリセット
  if (isEdgeColor) {
    ctx.lineWidth = 0.8
    ctx.strokeStyle = '#383838'
  }
}

const notThumbEmbroidery = (ctx: CanvasRenderingContext2D, embroidery: Embroidery, x: number, y: number, numerator?: number): void => {
  fontFamilySetter(ctx, embroidery.typeFace.value)
  const typeFace = embroidery.typeFace.value
  const fontSize = typeFace === 'Brush Script MT' ? '30px' : typeFace === 'Zapfino, cursive' ? '14px' : '22px'
  ctx.font = `${fontSize} ${embroidery.typeFace.value}`
  ctx.textAlign = 'start'
  ctx.lineWidth = 0.8
  ctx.fillStyle = embroidery.color.color // '#383838'
  // 手入れ口部分
  ctx.save()
  ctx.rotate(((90 + (numerator || 0)) * Math.PI) / 180)
  ctx.beginPath()

  const isShadowColor = !['none', 'unselected'].includes(embroidery.shadowColor.value)
  const isEdgeColor = !['none', 'unselected'].includes(embroidery.edgeColor.value)

  // 影カラー
  if (isShadowColor) {
    ctx.shadowColor = embroidery?.shadowColor?.color
    ctx.shadowOffsetX = 3
    ctx.shadowOffsetY = 3
    ctx.shadowBlur = 3
  }
  // フチカラー
  if (isEdgeColor) {
    ctx.lineWidth = 2.5
    ctx.strokeStyle = embroidery.edgeColor.color
  }
  ctx.strokeText(embroidery.content, 265 + x, -160 + y)
  ctx.fillText(embroidery.content, 265 + x, -160 + y)
  ctx.closePath()
  // 影カラーリセット
  if (isShadowColor) {
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 0
  }
  // フチカラーリセット
  if (isEdgeColor) {
    ctx.lineWidth = 0.8
    ctx.strokeStyle = '#383838'
  }
  ctx.restore()
}

const drawThumbEmbroidery = (ctx: CanvasRenderingContext2D, embroidery: Embroidery, x: number, y: number, numerator?: number): void => {
  ctx.lineWidth = 0.8
  ctx.fillStyle = embroidery.color.color // '#383838'
  ctx.textAlign = 'start'
  ctx.save()
  ctx.rotate(((-35 + (numerator || 0)) * Math.PI) / 180)
  ctx.beginPath()

  const isShadowColor = !['none', 'unselected'].includes(embroidery.shadowColor.value)
  const isEdgeColor = !['none', 'unselected'].includes(embroidery.edgeColor.value)

  // 影カラー
  if (isShadowColor) {
    ctx.shadowColor = embroidery?.shadowColor?.color
    ctx.shadowOffsetX = 3
    ctx.shadowOffsetY = 3
    ctx.shadowBlur = 3
  }
  // フチカラー
  if (isEdgeColor) {
    ctx.lineWidth = 2.5
    ctx.strokeStyle = embroidery.edgeColor.color
  }
  fontFamilySetter(ctx, embroidery.typeFace.value)
  const typeFace = embroidery.typeFace.value
  const fontSize = typeFace === 'Brush Script MT' ? '30px' : typeFace === 'Zapfino, cursive' ? '14px' : '22px'
  ctx.font = `${fontSize} ${embroidery.typeFace.value}`
  ctx.strokeText(embroidery.content, 110 + x, 710 + y)
  ctx.fillText(embroidery.content, 110 + x, 710 + y)
  ctx.closePath()
  // 影カラーリセット
  if (isShadowColor) {
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 0
  }
  // フチカラーリセット
  if (isEdgeColor) {
    ctx.lineWidth = 0.8
    ctx.strokeStyle = '#383838'
  }
  ctx.restore()
}

const underWebEmbroidery = (ctx: CanvasRenderingContext2D, embroidery: Embroidery, x: number, y: number, numerator = 0): void => {
  fontFamilySetter(ctx, embroidery.typeFace.value)
  // 以下の font 再宣言必須
  const typeFace = embroidery.typeFace.value
  const fontSize = typeFace === 'Brush Script MT' ? '39px' : typeFace === 'cursive' ? '18px' : '24px'
  ctx.font = `${fontSize} ${embroidery.typeFace.value}`
  ctx.textAlign = 'center'
  ctx.lineWidth = 0.8
  ctx.fillStyle = embroidery.color.color // '#383838'
  ctx.save()
  ctx.rotate((numerator * Math.PI) / 180)

  // 手入れ口部分
  ctx.beginPath()
  // 影カラー
  const isShadowColor = !['none', 'unselected'].includes(embroidery.shadowColor.value)
  const isEdgeColor = !['none', 'unselected'].includes(embroidery.edgeColor.value)
  if (isShadowColor) {
    ctx.shadowColor = embroidery?.shadowColor?.color
    ctx.shadowOffsetX = 3
    ctx.shadowOffsetY = 3
    ctx.shadowBlur = 3
  }
  // フチカラー
  if (isEdgeColor) {
    ctx.lineWidth = 3.0
    ctx.strokeStyle = embroidery.edgeColor.color
  }
  ctx.strokeText(embroidery.content, 280 + x, 500 + y)
  ctx.fillText(embroidery.content, 280 + x, 500 + y)
  ctx.closePath()
  // 影カラーリセット
  if (isShadowColor) {
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 0
  }
  // フチカラーリセット
  if (isEdgeColor) {
    ctx.lineWidth = 0.8
    ctx.strokeStyle = '#383838'
  }
  ctx.textAlign = 'start'

  ctx.restore()
}

const liningEmbroidery = (ctx: CanvasRenderingContext2D, embroidery: Embroidery, x: number, y: number): void => {
  fontFamilySetter(ctx, embroidery.typeFace.value)
  // 以下の font 再宣言必須
  const typeFace = embroidery.typeFace.value
  const fontSize = typeFace === 'Brush Script MT' ? '39px' : typeFace === 'cursive' ? '18px' : '28px'
  ctx.font = `${fontSize} ${embroidery.typeFace.value}`
  ctx.textAlign = 'center'
  ctx.lineWidth = 0.8
  ctx.fillStyle = embroidery.color.color // '#383838'
  // 手入れ口部分
  ctx.beginPath()
  // 影カラー
  const isShadowColor = !['none', 'unselected'].includes(embroidery.shadowColor.value)
  const isEdgeColor = !['none', 'unselected'].includes(embroidery.edgeColor.value)
  if (isShadowColor) {
    ctx.shadowColor = embroidery?.shadowColor?.color
    ctx.shadowOffsetX = 3
    ctx.shadowOffsetY = 3
    ctx.shadowBlur = 3
  }
  // フチカラー
  if (isEdgeColor) {
    ctx.lineWidth = 3.0
    ctx.strokeStyle = embroidery.edgeColor.color
  }
  ctx.strokeText(embroidery.content, 280 + x, 500 + y)
  ctx.fillText(embroidery.content, 280 + x, 500 + y)
  ctx.closePath()
  // 影カラーリセット
  if (isShadowColor) {
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 0
  }
  // フチカラーリセット
  if (isEdgeColor) {
    ctx.lineWidth = 0.8
    ctx.strokeStyle = '#383838'
  }
  ctx.textAlign = 'start'
}

// ベルト横の刺繍
export const sideOfBeltEmbroideryDrawer = (ctx: CanvasRenderingContext2D, embroideries: Embroidery[], x: number, y: number): void => {
  const filterFunction = (x: Embroidery) => x.position.value === 'belt'
  const isEmbroideryOfLining = embroideries.some(filterFunction)
  const embroidery = embroideries.find(filterFunction)
  if (embroidery && isEmbroideryOfLining) sideOfBeltEmbroidery(ctx, embroidery, x, y)
}

// 親指の刺繍
export const thumbEmbroideryDrawer = (ctx: CanvasRenderingContext2D, embroideries: Embroidery[]): void => {
  const isEmbroideryDraw = embroideries?.some((x) => x.position.value === 'thumbFinger')
  const embroidery = embroideries.find((embroidery) => embroidery.position.value === 'thumbFinger')
  if (isEmbroideryDraw && embroidery) drawThumbEmbroidery(ctx, embroidery, -145, 47, -17)
}

export const underWebEmbroideryDrawer = (ctx: CanvasRenderingContext2D, embroideries: Embroidery[]): void => {
  const isEmbroideryDraw = embroideries.some((x) => x.position.value === 'underWeb')
  const embroidery = embroideries.find((embroidery) => embroidery.position.value === 'underWeb')
  if (isEmbroideryDraw && embroidery) underWebEmbroidery(ctx, embroidery, 315, -170, 12)
}

export const firstMittThumbEmbroideryDrawer = (ctx: CanvasRenderingContext2D, embroideries: Embroidery[]): void => {
  const isEmbroideryDraw = embroideries?.some((x) => x.position.value === 'thumbFinger')
  const embroidery = embroideries.find((embroidery) => embroidery.position.value === 'thumbFinger')
  if (isEmbroideryDraw && embroidery) drawThumbEmbroidery(ctx, embroidery, -250, 35, -20)
}

// 親指以外の刺繍
export const nonThumbEmbroideryDrawer = (
  ctx: CanvasRenderingContext2D,
  fingerType: 'middleFinger' | 'ringFinger' | 'childFinger',
  embroideries: Embroidery[]
): void => {
  const nonThumbEmbroideryObject = {
    middleFinger: {
      x: -140,
      y: -190,
      numerator: 5
    },
    ringFinger: {
      x: -60,
      y: -80,
      numerator: -5
    },
    childFinger: {
      x: -70,
      y: -45,
      numerator: -2
    }
  }
  const isEmbroideryDraw = embroideries?.some((x) => x.position.value === fingerType)
  const embroidery = embroideries.find((embroidery) => embroidery.position.value === fingerType)
  if (isEmbroideryDraw && embroidery) {
    notThumbEmbroidery(
      ctx,
      embroidery,
      nonThumbEmbroideryObject[fingerType].x,
      nonThumbEmbroideryObject[fingerType].y,
      nonThumbEmbroideryObject[fingerType].numerator
    )
  }
}

// 裏平の刺繍
export const liningEmbroideryDrawer = (ctx: CanvasRenderingContext2D, embroideries: Embroidery[], step: 'first' | 'second'): void => {
  const liningEmbroideryObject = {
    first: {
      x: 115,
      y: -75,
      position: 'leatherLiningFirst'
    },
    second: {
      x: 120,
      y: -30,
      position: 'leatherLiningSecond'
    }
  }
  const isEmbroideryOfLining = embroideries.some((e) => e.position.value === liningEmbroideryObject[step].position)
  const embroidery = embroideries.find((e) => e.position.value === liningEmbroideryObject[step].position)
  if (isEmbroideryOfLining && embroidery) {
    liningEmbroidery(ctx, embroidery, liningEmbroideryObject[step].x, liningEmbroideryObject[step].y)
  }
}

const firstMittChildFingerEmbroidery = (ctx: CanvasRenderingContext2D, embroidery: Embroidery, x: number, y: number): void => {
  fontFamilySetter(ctx, embroidery.typeFace.value)
  const typeFace = embroidery.typeFace.value
  const fontSize = typeFace === 'Brush Script MT' ? '30px' : typeFace === 'Zapfino, cursive' ? '14px' : '20px'
  ctx.font = `${fontSize} ${embroidery.typeFace.value}`
  ctx.textAlign = 'start'
  ctx.lineWidth = 0.8
  ctx.fillStyle = embroidery.color.color // '#383838'
  // 手入れ口部分
  ctx.save()
  ctx.rotate((-10 * Math.PI) / 180)
  ctx.beginPath()

  // 影カラー
  if (embroidery?.shadowColor?.value !== 'none') {
    ctx.shadowColor = embroidery?.shadowColor?.color
    ctx.shadowOffsetX = 3
    ctx.shadowOffsetY = 3
    ctx.shadowBlur = 3
  }
  // フチカラー
  if (embroidery?.edgeColor?.value !== 'none') {
    ctx.lineWidth = 2.5
    ctx.strokeStyle = embroidery.edgeColor.color
  }
  ctx.strokeText(embroidery.content, 265 + x, -160 + y)
  ctx.fillText(embroidery.content, 265 + x, -160 + y)
  ctx.closePath()
  // 影カラーリセット
  if (embroidery?.shadowColor?.value !== 'none') {
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 0
  }
  // フチカラーリセット
  if (embroidery?.edgeColor?.value !== 'none') {
    ctx.lineWidth = 0.8
    ctx.strokeStyle = '#383838'
  }
  ctx.restore()
}

export const firstMittChildFingerEmbroideryDrawer = (ctx: CanvasRenderingContext2D, embroideries: Embroidery[]): void => {
  const isEmbroidery = embroideries?.some((x) => x.position.value === 'childFinger')
  const embroidery = embroideries.find((embroidery) => embroidery.position.value === 'childFinger')
  if (isEmbroidery && embroidery) {
    firstMittChildFingerEmbroidery(ctx, embroidery, -100, 580)
  }
}

export const fingerEmbroideryDrawer = (ctx: CanvasRenderingContext2D, embroideries: Embroidery[]): void => {
  // 親指への刺繍
  const isEmbroideryOfThumb = embroideries.some((x) => x.position.value === 'thumbFinger')
  const thumbEmbroidery = embroideries.find((embroidery) => embroidery.position.value === 'thumbFinger')
  if (isEmbroideryOfThumb && thumbEmbroidery) {
    drawThumbEmbroidery(ctx, thumbEmbroidery, -20, 20, -5)
  }
  // 小指への刺繍
  const isEmbroideryOfChild = embroideries.some((x) => x.position.value === 'childFinger')
  const childEmbroidery = embroideries.find((embroidery) => embroidery.position.value === 'childFinger')
  if (isEmbroideryOfChild && childEmbroidery) {
    notThumbEmbroidery(ctx, childEmbroidery, 0, 10, -5)
  }
}

export const catcherLiningEmbroideryDrawer = (ctx: CanvasRenderingContext2D, embroideries: Embroidery[], step: 'first' | 'second'): void => {
  const liningEmbroideryObject = {
    first: {
      x: 95,
      y: -25,
      position: 'leatherLiningFirst'
    },
    second: {
      x: 100,
      y: 20,
      position: 'leatherLiningSecond'
    }
  }
  const isEmbroideryOfLining = embroideries.some((e) => e.position.value === liningEmbroideryObject[step].position)
  const embroidery = embroideries.find((e) => e.position.value === liningEmbroideryObject[step].position)
  if (isEmbroideryOfLining && embroidery) {
    liningEmbroidery(ctx, embroidery, liningEmbroideryObject[step].x, liningEmbroideryObject[step].y)
  }
}

const thumbEmbroideryLeftThrow = (ctx: CanvasRenderingContext2D, embroidery: Embroidery, x: number, y: number, numerator?: number): void => {
  ctx.lineWidth = 0.8
  ctx.fillStyle = embroidery.color.color // '#383838'
  ctx.strokeStyle = embroidery.color.color
  ctx.textAlign = 'start'
  ctx.save()
  ctx.rotate(((50 + (numerator || 0)) * Math.PI) / 180)
  ctx.beginPath()
  // 影カラー
  if (embroidery?.shadowColor?.value !== 'none') {
    ctx.shadowColor = embroidery?.shadowColor?.color
    ctx.shadowOffsetX = 3
    ctx.shadowOffsetY = 3
    ctx.shadowBlur = 3
  }
  // フチカラー
  if (embroidery?.edgeColor?.value !== 'none') {
    ctx.lineWidth = 2.5
    ctx.strokeStyle = embroidery.edgeColor.color
  }
  fontFamilySetter(ctx, embroidery.typeFace.value)
  // 以下の font 再宣言必須
  const typeFace = embroidery.typeFace.value
  const fontSize = typeFace === 'Brush Script MT' ? '30px' : typeFace === 'Zapfino, cursive' ? '14px' : '22px'
  const textCount = embroidery.content.length
  const width = textCount > 7 ? 380 : textCount > 4 ? 480 : 500
  ctx.font = `${fontSize} ${embroidery.typeFace.value}`
  ctx.strokeText(embroidery.content, width + x, 70 + y)
  ctx.fillText(embroidery.content, width + x, 70 + y)
  ctx.closePath()
  // 影カラーリセット
  if (embroidery?.shadowColor?.value !== 'none') {
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 0
  }
  // フチカラーリセット
  if (embroidery?.edgeColor?.value !== 'none') {
    ctx.lineWidth = 0.8
    ctx.strokeStyle = '#383838'
  }
  ctx.restore()
}

const underWebEmbroideryLeftThrow = (ctx: CanvasRenderingContext2D, embroidery: Embroidery, x: number, y: number, numerator: number = 0): void => {
  fontFamilySetter(ctx, embroidery.typeFace.value)
  // 以下の font 再宣言必須
  const typeFace = embroidery.typeFace.value
  const fontSize = typeFace === 'Brush Script MT' ? '39px' : typeFace === 'cursive' ? '18px' : '24px'
  ctx.font = `${fontSize} ${embroidery.typeFace.value}`
  ctx.textAlign = 'center'
  ctx.lineWidth = 0.8
  ctx.fillStyle = embroidery.color.color // '#383838'

  ctx.save()
  ctx.rotate((numerator * Math.PI) / 180)
  ctx.beginPath()
  // 影カラー
  const isShadowColor = !['none', 'unselected'].includes(embroidery.shadowColor.value)
  const isEdgeColor = !['none', 'unselected'].includes(embroidery.edgeColor.value)
  if (isShadowColor) {
    ctx.shadowColor = embroidery?.shadowColor?.color
    ctx.shadowOffsetX = 3
    ctx.shadowOffsetY = 3
    ctx.shadowBlur = 3
  }
  // フチカラー
  if (isEdgeColor) {
    ctx.lineWidth = 3.0
    ctx.strokeStyle = embroidery.edgeColor.color
  }
  ctx.strokeText(embroidery.content, 280 + x, 500 + y)
  ctx.fillText(embroidery.content, 280 + x, 500 + y)
  ctx.closePath()
  // 影カラーリセット
  if (isShadowColor) {
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 0
  }
  // フチカラーリセット
  if (isEdgeColor) {
    ctx.lineWidth = 0.8
    ctx.strokeStyle = '#383838'
  }
  ctx.textAlign = 'start'
  ctx.restore()
}

const notThumbEmbroideryLeftThrow = (ctx: CanvasRenderingContext2D, embroidery: Embroidery, x: number, y: number, numerator?: number): void => {
  fontFamilySetter(ctx, embroidery.typeFace.value)
  // 以下の font 再宣言必須
  const fontSize = embroidery.typeFace.value === 'Brush Script MT' ? '44px' : '26px'
  ctx.font = `${fontSize} ${embroidery.typeFace.value}`
  ctx.textAlign = 'start'
  ctx.lineWidth = 0.8
  ctx.fillStyle = embroidery.color.color // '#383838'
  // 手入れ口部分
  ctx.save()
  ctx.rotate(((-85 + (numerator || 0)) * Math.PI) / 180)
  ctx.beginPath()

  // 影カラー
  if (embroidery?.shadowColor?.value !== 'none') {
    ctx.shadowColor = embroidery?.shadowColor?.color
    ctx.shadowOffsetX = 3
    ctx.shadowOffsetY = 3
    ctx.shadowBlur = 3
  }
  // フチカラー
  if (embroidery?.edgeColor?.value !== 'none') {
    ctx.lineWidth = 2.5
    ctx.strokeStyle = embroidery.edgeColor.color
  }
  ctx.strokeText(embroidery.content, -300 + x, 710 + y)
  ctx.fillText(embroidery.content, -300 + x, 710 + y)
  ctx.closePath()
  // 影カラーリセット
  if (embroidery?.shadowColor?.value !== 'none') {
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 0
  }
  // フチカラーリセット
  if (embroidery?.edgeColor?.value !== 'none') {
    ctx.lineWidth = 0.8
    ctx.strokeStyle = '#383838'
  }
  ctx.restore()
}

export const fingerEmbroideryDrawerLeftThrow = (ctx: CanvasRenderingContext2D, embroideries: Embroidery[], canvasWidth: number): void => {
  undoInversion(ctx, canvasWidth)
  // 親指への刺繍
  const isEmbroideryOfThumb = embroideries.some((x) => x.position.value === 'thumbFinger')
  const thumbEmbroidery = embroideries.find((embroidery) => embroidery.position.value === 'thumbFinger')
  if (isEmbroideryOfThumb && thumbEmbroidery) {
    thumbEmbroideryLeftThrow(ctx, thumbEmbroidery, 0, 40, -5)
  }
  // 小指への刺繍
  const isEmbroideryOfChild = embroideries.some((x) => x.position.value === 'childFinger')
  const childEmbroidery = embroideries.find((embroidery) => embroidery.position.value === 'childFinger')
  if (isEmbroideryOfChild && childEmbroidery) {
    notThumbEmbroideryLeftThrow(ctx, childEmbroidery, -20, 50, 3)
  }
  startInversion(ctx, canvasWidth)
}

export const catcherLiningDrawerLeftThrow = (ctx: CanvasRenderingContext2D, state: State): void => {
  const isEmbroideryOfLiningFirst = state.embroideries.some((x) => x.position.value === 'leatherLiningFirst')
  // 平裏への刺繍
  const liningEmbroideryFirst = state.embroideries.find((x) => x.position.value === 'leatherLiningFirst')
  if (isEmbroideryOfLiningFirst && liningEmbroideryFirst) {
    liningEmbroidery(ctx, liningEmbroideryFirst, 250, -15)
  }
  const isEmbroideryOfLiningSecond = state.embroideries.some((x) => x.position.value === 'leatherLiningSecond')
  const liningEmbroiderySecond = state.embroideries.find((x) => x.position.value === 'leatherLiningSecond')
  // 平裏への刺繍
  if (isEmbroideryOfLiningSecond && liningEmbroiderySecond) {
    liningEmbroidery(ctx, liningEmbroiderySecond, 255, 30)
  }
}

export const firstBasemanLiningDrawerLeftThrow = (ctx: CanvasRenderingContext2D, state: State, width: number): void => {
  undoInversion(ctx, width)
  const isEmbroideryOfLiningFirst = state.embroideries.some((x) => x.position.value === 'leatherLiningFirst')
  // 平裏への刺繍
  const liningEmbroideryFirst = state.embroideries.find((x) => x.position.value === 'leatherLiningFirst')
  if (isEmbroideryOfLiningFirst && liningEmbroideryFirst) {
    liningEmbroidery(ctx, liningEmbroideryFirst, 210, -65)
  }
  const isEmbroideryOfLiningSecond = state.embroideries.some((x) => x.position.value === 'leatherLiningSecond')
  const liningEmbroiderySecond = state.embroideries.find((x) => x.position.value === 'leatherLiningSecond')
  // 平裏への刺繍
  if (isEmbroideryOfLiningSecond && liningEmbroiderySecond) {
    liningEmbroidery(ctx, liningEmbroiderySecond, 215, -25)
  }
  startInversion(ctx, width)
}

const firstMittChildFingerEmbroideryLeftThrow = (
  ctx: CanvasRenderingContext2D,
  embroidery: Embroidery,
  x: number,
  y: number,
  numerator?: number
): void => {
  fontFamilySetter(ctx, embroidery.typeFace.value)
  // 以下の font 再宣言必須
  const fontSize = embroidery.typeFace.value === 'Brush Script MT' ? '25px' : '18px'
  ctx.font = `${fontSize} ${embroidery.typeFace.value}`
  ctx.textAlign = 'start'
  ctx.lineWidth = 0.8
  ctx.fillStyle = embroidery.color.color // '#383838'
  // 手入れ口部分
  ctx.save()
  ctx.rotate(((10 + (numerator || 0)) * Math.PI) / 180)
  ctx.beginPath()

  // 影カラー
  if (embroidery?.shadowColor?.value !== 'none') {
    ctx.shadowColor = embroidery?.shadowColor?.color
    ctx.shadowOffsetX = 3
    ctx.shadowOffsetY = 3
    ctx.shadowBlur = 3
  }
  // フチカラー
  if (embroidery?.edgeColor?.value !== 'none') {
    ctx.lineWidth = 2.5
    ctx.strokeStyle = embroidery.edgeColor.color
  }
  ctx.strokeText(embroidery.content, -300 + x, 710 + y)
  ctx.fillText(embroidery.content, -300 + x, 710 + y)
  ctx.closePath()
  // 影カラーリセット
  if (embroidery?.shadowColor?.value !== 'none') {
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 0
  }
  // フチカラーリセット
  if (embroidery?.edgeColor?.value !== 'none') {
    ctx.lineWidth = 0.8
    ctx.strokeStyle = '#383838'
  }
  ctx.restore()
}

export const firstMittChildFingerEmbroideryDrawerLeftThrow = (
  ctx: CanvasRenderingContext2D,
  embroideries: Embroidery[],
  canvasWidth: number
): void => {
  undoInversion(ctx, canvasWidth)
  // 小指への刺繍
  const isEmbroideryOfChild = embroideries.some((x) => x.position.value === 'childFinger')
  const embroidery = embroideries.find((embroidery) => embroidery.position.value === 'childFinger')
  if (isEmbroideryOfChild && embroidery) {
    firstMittChildFingerEmbroideryLeftThrow(ctx, embroidery, 890, -440)
  }

  startInversion(ctx, canvasWidth)
}

export const firstMittThumbFingerEmbroideryDrawerLeftThrow = (
  ctx: CanvasRenderingContext2D,
  embroideries: Embroidery[],
  canvasWidth: number
): void => {
  undoInversion(ctx, canvasWidth)
  // 親指への刺繍
  const isEmbroideryOfThumb = embroideries.some((x) => x.position.value === 'thumbFinger')
  const thumbEmbroidery = embroideries.find((embroidery) => embroidery.position.value === 'thumbFinger')
  if (isEmbroideryOfThumb && thumbEmbroidery) {
    thumbEmbroideryLeftThrow(ctx, thumbEmbroidery, -5, -70, 8)
  }
  startInversion(ctx, canvasWidth)
}

export const liningEmbroideryDrawerLeftThrow = (ctx: CanvasRenderingContext2D, embroideries: Embroidery[], step: 'first' | 'second'): void => {
  const liningEmbroideryObjectLeftThrow = {
    first: {
      x: 210,
      y: -75,
      position: 'leatherLiningFirst'
    },
    second: {
      x: 215,
      y: -35,
      position: 'leatherLiningSecond'
    }
  }

  const isEmbroideryOfLining = embroideries?.some((x) => x.position.value === liningEmbroideryObjectLeftThrow[step].position)
  const embroidery = embroideries.find((x) => x.position.value === liningEmbroideryObjectLeftThrow[step].position)
  if (isEmbroideryOfLining && embroidery) {
    liningEmbroidery(ctx, embroidery, liningEmbroideryObjectLeftThrow[step].x, liningEmbroideryObjectLeftThrow[step].y)
  }
}

export const nonThumbEmbroideryDrawerLeftThrow = (
  ctx: CanvasRenderingContext2D,
  fingerType: 'middleFinger' | 'ringFinger' | 'childFinger',
  embroideries: Embroidery[]
): void => {
  const nonThumbEmbroideryObjectLeftThrow = {
    middleFinger: {
      x: 0,
      y: 0,
      numerator: 1
    },
    ringFinger: {
      x: 0,
      y: 0,
      numerator: 1
    },
    childFinger: {
      x: 10,
      y: -20,
      numerator: -3
    }
  }

  const isEmbroideryDraw = embroideries?.some((x) => x.position.value === fingerType)
  const embroidery = embroideries.find((embroidery) => embroidery.position.value === fingerType)
  if (isEmbroideryDraw && embroidery) {
    notThumbEmbroideryLeftThrow(
      ctx,
      embroidery,
      nonThumbEmbroideryObjectLeftThrow[fingerType].x,
      nonThumbEmbroideryObjectLeftThrow[fingerType].y,
      nonThumbEmbroideryObjectLeftThrow[fingerType].numerator
    )
  }
}

const positionCompare = (e: Embroidery) => (target: string) => e.position.value === target
export const thumbEmbroideryDrawerLeftThrow = (ctx: CanvasRenderingContext2D, state: State): void => {
  const embroideries = state.embroideries
  const matcher = (e: Embroidery) => positionCompare(e)('thumbFinger')
  const embroidery = embroideries?.find(matcher)
  if (!embroidery) return
  if (state.baseModel.brand === 'genuine') {
    if (state.baseModel.productNumber === 'MIU-T4') {
      thumbEmbroideryLeftThrow(ctx, embroidery, -95, 0, 0)
    } else {
      thumbEmbroideryLeftThrow(ctx, embroidery, 0, 0, 0)
    }
  }
}

export const underWebEmbroideryDrawerLeftThrow = (ctx: CanvasRenderingContext2D, embroideries: Embroidery[]): void => {
  const isEmbroideryDraw = embroideries.some((x) => x.position.value === 'underWeb')
  const embroidery = embroideries.find((embroidery) => embroidery.position.value === 'underWeb')
  if (isEmbroideryDraw && embroidery) underWebEmbroideryLeftThrow(ctx, embroidery, 10, 0, -8)
}

const drawBandSideEmbroidery = (ctx: CanvasRenderingContext2D, embroidery: Embroidery, x: number, y: number, numerator?: number): void => {
  ctx.lineWidth = 0.8
  ctx.fillStyle = embroidery.color.color // '#383838'
  ctx.textAlign = 'start'
  ctx.save()
  ctx.rotate(((numerator || 0) * Math.PI) / 180)
  ctx.beginPath()

  const isShadowColor = !['none', 'unselected'].includes(embroidery.shadowColor.value)
  const isEdgeColor = !['none', 'unselected'].includes(embroidery.edgeColor.value)

  // 影カラー
  if (isShadowColor) {
    ctx.shadowColor = embroidery.shadowColor.color
    ctx.shadowOffsetX = 3
    ctx.shadowOffsetY = 3
    ctx.shadowBlur = 3
  }
  // フチカラー
  if (isEdgeColor) {
    ctx.lineWidth = 2.5
    ctx.strokeStyle = embroidery.edgeColor.color
  }
  fontFamilySetter(ctx, embroidery.typeFace.value)
  const typeFace = embroidery.typeFace.value
  const fontSize = typeFace === 'sanserif' ? '48px' : typeFace === 'engraving' ? '54px' : '60px'
  ctx.font = `${fontSize} ${embroidery.typeFace.value}`
  ctx.strokeText(embroidery.content, 355 + x, 555 + y)
  ctx.fillText(embroidery.content, 355 + x, 555 + y)
  ctx.closePath()
  // 影カラーリセット
  if (isShadowColor) {
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 0
  }
  // フチカラーリセット
  if (isEdgeColor) {
    ctx.lineWidth = 0.8
    ctx.strokeStyle = '#383838'
  }
  ctx.restore()
}

export const bandSideEmbroideryDrawer = (ctx: CanvasRenderingContext2D, state: State): void => {
  const defaultLocale = { x: 0, y: 0, numerator: 0 }
  const defaultThrowLocale = { rightThrow: defaultLocale, leftThrow: defaultLocale }
  const gloveLeftThrow = { x: 110, y: 0, numerator: 0 }

  type SecondKey = 'rightThrow' | 'leftThrow'
  const object: {
    [key in Position]: {
      [key in SecondKey]: {
        x: number
        y: number
        numerator: number
      }
    }
  } = {
    firstBaseman: {
      rightThrow: {
        x: -30,
        y: 25,
        numerator: 0
      },
      leftThrow: {
        x: 140,
        y: 25,
        numerator: 0
      }
    },
    catcher: defaultThrowLocale,
    pitcher: { ...defaultThrowLocale, leftThrow: gloveLeftThrow },
    infielder: { ...defaultThrowLocale, leftThrow: gloveLeftThrow },
    outfielder: { ...defaultThrowLocale, leftThrow: gloveLeftThrow }
  }
  const { embroideries, dominantArm, baseModel } = state
  const isEmbroidery = embroideries.some((x) => x.position.value === 'bandSide')
  const embroidery = embroideries.find((e) => e.position.value === 'bandSide')
  if (isEmbroidery && embroidery) {
    const throwHand = dominantArm.value as SecondKey
    const position = baseModel.position
    const locale = object[position][throwHand]
    drawBandSideEmbroidery(ctx, embroidery, locale.x, locale.y, locale.numerator)
  }
}

const drawOnWebEmbroidery = (ctx: CanvasRenderingContext2D, embroidery: Embroidery, x: number, y: number, numerator: number): void => {
  ctx.lineWidth = 0.8
  ctx.fillStyle = embroidery.color.color // '#383838'
  ctx.strokeStyle = embroidery.color.color
  ctx.textAlign = 'start'
  ctx.save()
  ctx.rotate((numerator * Math.PI) / 180)
  ctx.beginPath()

  const isShadowColor = !['none', 'unselected'].includes(embroidery.shadowColor.value)
  const isEdgeColor = !['none', 'unselected'].includes(embroidery.edgeColor.value)

  // 影カラー
  if (isShadowColor) {
    ctx.strokeStyle = embroidery.shadowColor.color
    ctx.shadowOffsetX = 3
    ctx.shadowOffsetY = 3
    ctx.shadowBlur = 3
  }
  // フチカラー
  if (isEdgeColor) {
    ctx.lineWidth = 2.5
    ctx.strokeStyle = embroidery.edgeColor.color
  }
  fontFamilySetter(ctx, embroidery.typeFace.value)
  const typeFace = embroidery.typeFace.value
  const fontSize = typeFace === 'sanserif' ? '48px' : '60px'
  ctx.font = `${fontSize} ${embroidery.typeFace.value}`
  ctx.strokeText(embroidery.content, 0 + x, 0 + y)
  ctx.fillText(embroidery.content, 0 + x, 0 + y)
  ctx.closePath()
  // 影カラーリセット
  if (isShadowColor) {
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 0
  }
  // フチカラーリセット
  if (isEdgeColor) {
    ctx.lineWidth = 0.8
    ctx.strokeStyle = '#383838'
  }
  ctx.restore()
}

export const onWebEmbroideryDrawer = (ctx: CanvasRenderingContext2D, state: State): void => {
  const embroidery = state.embroideries.find((e) => e.position.value === 'onWeb')
  const dominantArm = state.dominantArm.value
  if (!embroidery) return
  if (dominantArm === 'rightThrow') {
    drawOnWebEmbroidery(ctx, embroidery, 580, -185, 35)
  } else {
    drawOnWebEmbroidery(ctx, embroidery, 105, 320, -35)
  }
}

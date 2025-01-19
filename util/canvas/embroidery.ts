import { Embroidery } from '@/types'

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

const thumbEmbroidery = (ctx: CanvasRenderingContext2D, embroidery: Embroidery, x: number, y: number, numerator?: number): void => {
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
  if (isEmbroideryDraw && embroidery) thumbEmbroidery(ctx, embroidery, -115, 30, -15)
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
  const isEmbroideryOfLining = embroideries?.some((x) => x.position.value === liningEmbroideryObject[step].position)
  const embroidery = embroideries.find((embroidery) => embroidery.position.value === liningEmbroideryObject[step].position)
  if (isEmbroideryOfLining && embroidery) {
    liningEmbroidery(ctx, embroidery, liningEmbroideryObject[step].x, liningEmbroideryObject[step].y)
  }
}

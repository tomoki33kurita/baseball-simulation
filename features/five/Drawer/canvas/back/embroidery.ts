import { Embroidery } from '@/types'

export const liningEmbroidery = (ctx: CanvasRenderingContext2D, embroidery: Embroidery, x: number, y: number, fontSizeValue?: string): void => {
  fontFamilySetter(ctx, embroidery.typeFace.value)
  // 以下の font 再宣言必須
  const typeFace = embroidery.typeFace.value
  const fontSize = fontSizeValue || typeFace === 'Brush Script MT' ? '39px' : typeFace === 'Zapfino, cursive' ? '18px' : '28px'
  ctx.font = `${fontSize} ${embroidery.typeFace.value}`
  ctx.textAlign = 'center'
  ctx.lineWidth = 0.8
  ctx.fillStyle = embroidery.color.color // '#383838'
  // 手入れ口部分
  ctx.beginPath()
  ctx.letterSpacing = '-2.5px'

  // 影カラー
  if (embroidery?.shadowColor?.value !== 'none') {
    ctx.shadowColor = embroidery?.shadowColor?.color
    ctx.shadowOffsetX = 3
    ctx.shadowOffsetY = 3
    ctx.shadowBlur = 3
  }
  // フチカラー
  if (embroidery?.edgeColor?.value !== 'none') {
    ctx.lineWidth = 3.0
    ctx.strokeStyle = embroidery.edgeColor.color
  }
  ctx.strokeText(embroidery.content, 275 + x, 500 + y)
  ctx.fillText(embroidery.content, 275 + x, 500 + y)
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
  ctx.textAlign = 'start'
}

export const thumbEmbroideryLeftThrow = (ctx: CanvasRenderingContext2D, embroidery: Embroidery, x: number, y: number, numerator?: number): void => {
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

export const circleHollowOutEmbroidery = (ctx: CanvasRenderingContext2D, embroidery: Embroidery, x: number, y: number): void => {
  fontFamilySetter(ctx, embroidery.typeFace.value)
  const typeFace = embroidery.typeFace.value
  const fontSize = typeFace === 'Brush Script MT' ? '30px' : typeFace === 'Zapfino, cursive' ? '14px' : '22px'
  ctx.font = `${fontSize} ${embroidery.typeFace.value}`
  ctx.lineWidth = 0.8
  ctx.fillStyle = embroidery.color.color // '#383838'
  // 手入れ口部分
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
    ctx.lineWidth = 3.0
    ctx.strokeStyle = embroidery.edgeColor.color
  }
  ctx.strokeText(embroidery.content, 470 + x, 575 + y)
  ctx.fillText(embroidery.content, 470 + x, 575 + y)
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
}

export const bottomRightOfBeltEmbroidery = (ctx: CanvasRenderingContext2D, embroidery: Embroidery, x: number, y: number): void => {
  fontFamilySetter(ctx, embroidery.typeFace.value)
  const typeFace = embroidery.typeFace.value
  const fontSize = typeFace === 'Brush Script MT' ? '30px' : typeFace === 'Zapfino, cursive' ? '14px' : '22px'
  ctx.font = `${fontSize} ${embroidery.typeFace.value}`
  ctx.lineWidth = 0.8
  ctx.fillStyle = embroidery.color.color // '#383838'
  // 手入れ口部分
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
    ctx.lineWidth = 3.0
    ctx.strokeStyle = embroidery.edgeColor.color
  }
  ctx.strokeText(embroidery.content, 470 + x, 575 + y)
  ctx.fillText(embroidery.content, 470 + x, 575 + y)
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
}

export const sideOfLabelEmbroidery = (ctx: CanvasRenderingContext2D, embroidery: Embroidery, x: number, y: number): void => {
  fontFamilySetter(ctx, embroidery.typeFace.value)
  const typeFace = embroidery.typeFace.value
  const fontSize = typeFace === 'Brush Script MT' ? '30px' : typeFace === 'Zapfino, cursive' ? '14px' : '22px'
  ctx.font = `${fontSize} ${embroidery.typeFace.value}`
  ctx.lineWidth = 0.8
  ctx.fillStyle = embroidery.color.color // '#383838'
  // 手入れ口部分
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
    ctx.lineWidth = 3.0
    ctx.strokeStyle = embroidery.edgeColor.color
  }
  ctx.strokeText(embroidery.content, 325 + x, 550 + y)
  ctx.fillText(embroidery.content, 325 + x, 550 + y)
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
}

export const thumbEmbroidery = (ctx: CanvasRenderingContext2D, embroidery: Embroidery, x: number, y: number, numerator?: number): void => {
  ctx.lineWidth = 0.8
  ctx.fillStyle = embroidery.color.color // '#383838'
  ctx.textAlign = 'start'
  ctx.save()
  ctx.rotate(((-35 + (numerator || 0)) * Math.PI) / 180)
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
  ctx.font = `${fontSize} ${embroidery.typeFace.value}`
  // ctx.fontStretch = 'ultra-condensed'
  ctx.letterSpacing = '-1.5px'
  ctx.strokeText(embroidery.content, 100 + x, 710 + y)
  ctx.fillText(embroidery.content, 100 + x, 710 + y)
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

export const notThumbEmbroidery = (ctx: CanvasRenderingContext2D, embroidery: Embroidery, x: number, y: number, numerator?: number): void => {
  fontFamilySetter(ctx, embroidery.typeFace.value)
  // 以下の font 再宣言必須
  const fontSize = embroidery.typeFace.value === 'Brush Script MT' ? '40px' : '28px'
  ctx.font = `${fontSize} ${embroidery.typeFace.value}`
  ctx.textAlign = 'start'
  ctx.lineWidth = 0.8
  ctx.fillStyle = embroidery.color.color // '#383838'
  // 手入れ口部分
  ctx.save()
  ctx.rotate(((90 + (numerator || 0)) * Math.PI) / 180)
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
  ctx.letterSpacing = '-2.5px'
  ctx.strokeText(embroidery.content, 265 + x, -152 + y)
  ctx.fillText(embroidery.content, 265 + x, -152 + y)
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

export const dWaveEmbroidery = (ctx: CanvasRenderingContext2D, embroidery: Embroidery, x: number, y: number): void => {
  fontFamilySetter(ctx, embroidery.typeFace.value)
  // 以下の font 再宣言必須
  const fontSize = embroidery.typeFace.value === 'Brush Script MT' ? '40px' : '32px'
  ctx.font = `${fontSize} ${embroidery.typeFace.value}`
  ctx.textAlign = 'start'
  ctx.lineWidth = 0.8
  ctx.fillStyle = embroidery.color.color // '#383838'
  // 手入れ口部分
  ctx.save()
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
  ctx.strokeText(embroidery.content, 340 + x, 522 + y)
  ctx.fillText(embroidery.content, 340 + x, 522 + y)
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

const fontFamilySetter = (ctx: CanvasRenderingContext2D, selectedFontValue: string): void => {
  const fontSize = selectedFontValue === 'Brush Script MT' ? '40px' : '32px'
  // 非同期でフォントを反映させるための関数
  const fontLoader = () => {
    const oldEnglishFont = new FontFace(selectedFontValue, `url(/fontFamily/embroidery/${selectedFontValue}.ttf)`)
    oldEnglishFont.load().then((font) => {
      document.fonts.add(font) // DOMにfont情報を読み込ませるの必須
      ctx.font = `${fontSize} ${font.family}`
    })
  }
  switch (selectedFontValue) {
    case 'MariageD': {
      // オールドイングリッシュ
      fontLoader()
      break
    }
    case 'CloisterBlack': {
      // Yell story 特殊文字
      fontLoader()
      break
    }
    case 'Brush Script MT':
      ctx.font = `${fontSize} ${selectedFontValue}`
      break

    default:
      break
  }
}

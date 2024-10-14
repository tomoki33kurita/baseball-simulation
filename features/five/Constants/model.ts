import { FiveBaseModel } from '../types'

const imageBaseUrl = '/five/baseModels'
const gloveImageWidth = 240
const gloveImageHeight = 200
const basicColors = {
  leather: { label: 'ブラック', value: 'black', color: '#1E1E1E' },
  stitch: { label: 'グリーン', value: 'green', color: '#022b02' },
  lace: { label: 'ブラック', value: 'black', color: '#1E1E1E' },
  binding: { label: 'ブラック', value: 'black', color: '#1E1E1E' },
  welting: { label: '切りハミ(ホワイト)', value: 'kirihamiWhite', color: '#fff' }
}

export const models: FiveBaseModel[] = [
  {
    productNumber: 'F101',
    position: 'pitcher',
    size: {
      value: 30.0,
      unit: 'cm'
    },
    webParts: 'p01',
    description: '縦型の投手用グラブ。投球時の握りからフィールディングまでの一連の動作を加味した設計。強い芯材を使用することによりへたりを軽減。',
    isFingerCrotch: true,
    isUBack: false,
    brand: 'five',
    bankLaceDirection: 'sequentialRoll',
    basicColors,
    image: {
      url: `${imageBaseUrl}/f101.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    productNumber: 'F501',
    position: 'infielder',
    size: {
      value: 28.5,
      unit: 'cm'
    },
    webParts: 'in01',
    description: '正面を向いた安心感のある捕球面が特徴的な内野手用グラブ。コンパクトでありながら確実な捕球を実現。',
    isFingerCrotch: true,
    isUBack: false,
    brand: 'five',
    bankLaceDirection: 'reverseRoll',
    basicColors,
    image: {
      url: `${imageBaseUrl}/f501.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    productNumber: 'F601',
    position: 'infielder',
    size: {
      value: 29.0,
      unit: 'cm'
    },
    webParts: 'in03',
    description:
      '軽快にさばく、がっちり掴むなどマルチに力を発揮。あらゆるプレースタイルにマッチする内野手用の万能型。薬指でボールをホールドする設計が特徴。',
    isFingerCrotch: false,
    isUBack: false,
    brand: 'five',
    bankLaceDirection: 'sequentialRoll',
    basicColors,
    image: {
      url: `${imageBaseUrl}/f601.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    productNumber: 'F801',
    position: 'outfielder',
    size: {
      value: 31.5,
      unit: 'cm'
    },
    webParts: 'ou01',
    description: '『捕球』と『走る』に着目した設計が特徴。シャープでコンパクトでありながら、明確な捕球スポットで軽快かつ確実なプレーを。',
    isFingerCrotch: true,
    isUBack: false,
    brand: 'five',
    bankLaceDirection: 'reverseRoll',
    basicColors,
    image: {
      url: `${imageBaseUrl}/f801.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  }
]

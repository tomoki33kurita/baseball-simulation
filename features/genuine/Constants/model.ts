import { GenuineBaseModel } from '../types'

const imageBaseUrl = '/genuine/baseModels'
const gloveImageWidth = 240
const gloveImageHeight = 200
const basicColors = {
  leather: { label: 'ブラック', value: 'black', color: '#1E1E1E' },
  stitch: { label: 'ブラック', value: 'black', color: '#0a0a0a' },
  lace: { label: 'タン', value: 'tan', color: '#C19445' },
  binding: { label: 'ブラック', value: 'black', color: '#1E1E1E' },
  welting: { label: '切りハミ(ホワイト)', value: 'kirihamiWhite', color: '#fff' },
  genuineLabel: { label: 'No.01', value: '1' }
}

export const models: GenuineBaseModel[] = [
  {
    productNumber: 'F101',
    position: 'pitcher',
    size: {
      value: 30.0,
      unit: 'cm'
    },
    webParts: 'p01',
    description: '',
    isFingerCrotch: true,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: 'sequentialRoll',
    basicColors: {
      ...basicColors,
      lace: { label: 'ブラック', value: 'black', color: '#1E1E1E' }
    },
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
    description: '',
    isFingerCrotch: true,
    isUBack: false,
    brand: 'genuine',
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
    description: '',
    isFingerCrotch: false,
    isUBack: false,
    brand: 'genuine',
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
    description: '',
    isFingerCrotch: true,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: 'reverseRoll',
    basicColors,
    image: {
      url: `${imageBaseUrl}/f801.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    productNumber: '2',
    position: 'catcher',
    size: {
      value: 31.5,
      unit: 'cm'
    },
    webParts: 'ou01',
    description: '',
    isFingerCrotch: true,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: 'reverseRoll',
    basicColors,
    image: {
      url: `${imageBaseUrl}/2.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    productNumber: '3',
    position: 'firstBaseman',
    size: {
      value: 31.5,
      unit: 'cm'
    },
    webParts: 'ou01',
    description: '',
    isFingerCrotch: true,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: 'reverseRoll',
    basicColors,
    image: {
      url: `${imageBaseUrl}/3.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  }
]

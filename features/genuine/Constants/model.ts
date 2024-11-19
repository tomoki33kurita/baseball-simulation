import { GenuineBaseModel } from '../types'

const imageBaseUrl = '/genuine/baseModels'
const gloveImageWidth = 240
const gloveImageHeight = 200
const SEQUENTIAL_ROLL = 'sequentialRoll'
const REVERSE_ROLL = 'reverseRoll'

export const models: GenuineBaseModel[] = [
  {
    productNumber: 'MIU-T1',
    position: 'pitcher',
    size: {
      value: 30.0,
      unit: 'cm'
    },
    webParts: '',
    description: '縦、横にもどちらにも使用可能なモデル。投手用としてフィールディングも意識した万能モデル。',
    isFingerCrotch: true, //要確認 ?
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: SEQUENTIAL_ROLL,
    image: {
      url: `${imageBaseUrl}/mui-t1.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    productNumber: 'MIU-T2',
    position: 'pitcher',
    size: {
      value: 30.0,
      unit: 'cm'
    },
    webParts: '',
    description: '',
    isFingerCrotch: true, //要確認 ?
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: SEQUENTIAL_ROLL,
    image: {
      url: `${imageBaseUrl}/mui-t2.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    productNumber: 'MIU-T4',
    position: 'pitcher',
    size: {
      value: 29.0,
      unit: 'cm'
    },
    webParts: '',
    description: 'ライナーバックスタイルの投手用',
    isFingerCrotch: false,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: SEQUENTIAL_ROLL,
    image: {
      url: `${imageBaseUrl}/mui-t4.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    productNumber: 'MIU-S4',
    position: 'infielder',
    size: {
      value: 28.5,
      unit: 'cm'
    },
    webParts: '',
    description: '内野手用の中で一番浅くコンパクトなタイプ',
    isFingerCrotch: false,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: REVERSE_ROLL,
    image: {
      url: `${imageBaseUrl}/miu-s4.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    productNumber: 'MIU-S5',
    position: 'infielder',
    size: {
      value: 29.0,
      unit: 'cm'
    },
    webParts: '',
    description: '指股を無くしMIU-S7よりも浅く設計。つかみ取り当て取りどちらにも対応できるタイプ。',
    isFingerCrotch: false,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: REVERSE_ROLL,
    image: {
      url: `${imageBaseUrl}/miu-s5.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    productNumber: 'MIU-S7',
    position: 'infielder',
    size: {
      value: 29.5,
      unit: 'cm'
    },
    webParts: '',
    description: '指股を設計することによりMIU-S5よりも深くつかみ取りしやすいタイプ。',
    isFingerCrotch: true,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: SEQUENTIAL_ROLL,
    image: {
      url: `${imageBaseUrl}/miu-s7.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    productNumber: 'MIU-M8',
    position: 'outfielder',
    size: {
      value: 33.0,
      unit: 'cm'
    },
    webParts: '',
    description: '深めのポケットでがっちり握れる仕様',
    isFingerCrotch: true,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: SEQUENTIAL_ROLL,
    image: {
      url: `${imageBaseUrl}miu-m8/.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    productNumber: 'MIU-M9',
    position: 'outfielder',
    size: {
      value: 33.0,
      unit: 'cm'
    },
    webParts: '',
    description: '球際を意識し指先まで感覚の通るがっちりと掴めるタイプで設計。',
    isFingerCrotch: true,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: SEQUENTIAL_ROLL,
    image: {
      url: `${imageBaseUrl}miu-m9/.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    productNumber: 'MIU-N10',
    position: 'firstBaseman',
    size: {
      value: 31.5,
      unit: 'cm'
    },
    webParts: '',
    description: '',
    isFingerCrotch: true,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: SEQUENTIAL_ROLL,
    image: {
      url: `${imageBaseUrl}/miu-n10.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    productNumber: 'MIU-hoge',
    position: 'catcher',
    size: {
      value: 31.5,
      unit: 'cm'
    },
    webParts: '',
    description: '',
    isFingerCrotch: true,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: SEQUENTIAL_ROLL,
    image: {
      url: `${imageBaseUrl}/miu-hoge.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  }
]

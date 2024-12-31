import { GenuineBaseModel } from '../types'

const imageBaseUrl = '/genuine/baseModels'
const gloveImageWidth = 200
const gloveImageHeight = 200
const SEQUENTIAL_ROLL = 'sequentialRoll'
const REVERSE_ROLL = 'reverseRoll'

const JUNIOR_PITCHER = 'junior-pitcher'
const JUNIOR_CATCHER = 'junior-catcher'
const JUNIOR_FIRST_BASEMAN = 'junior-firstBaseman'
const JUNIOR_INFIELDER = 'junior-infielder'
const JUNIOR_OUTFIELDER = 'junior-outfielder'

export const JUNIOR_LIST = [JUNIOR_PITCHER, JUNIOR_CATCHER, JUNIOR_FIRST_BASEMAN, JUNIOR_INFIELDER, JUNIOR_OUTFIELDER]

const JUNIOR_MODEL: GenuineBaseModel = {
  productNumber: '',
  position: 'pitcher',
  size: {
    value: 0,
    unit: 'cm'
  },
  webParts: 'genuine',
  description: '少年用モデル',
  isFingerCrotch: false,
  isUBack: false,
  brand: 'genuine',
  bankLaceDirection: SEQUENTIAL_ROLL,
  image: {
    url: `${imageBaseUrl}/junior.jpg`,
    width: gloveImageWidth,
    height: gloveImageHeight
  }
}

export const models: GenuineBaseModel[] = [
  {
    productNumber: 'MIU-T1',
    position: 'pitcher',
    size: {
      value: 30.0,
      unit: 'cm'
    },
    webParts: 'flat2',
    description: '縦、横にもどちらにも使用可能なモデル。投手用としてフィールディングも意識した万能モデル。',
    isFingerCrotch: false,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: SEQUENTIAL_ROLL,
    image: {
      url: `${imageBaseUrl}/1.jpg`,
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
    webParts: 'flat5',
    description: '完全横型投手用グラブを握り潰し投球したい投手仕様',
    isFingerCrotch: false,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: SEQUENTIAL_ROLL,
    image: {
      url: `${imageBaseUrl}/2.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  // {
  //   productNumber: 'MIU-T1',
  //   position: 'pitcher',
  //   size: {
  //     value: 30.0,
  //     unit: 'cm'
  //   },
  //   webParts: 'twoPeace2',
  //   description: '縦、横にもどちらにも使用可能なモデル。投手用としてフィールディングも意識した万能モデル。',
  //   isFingerCrotch: true, //要確認 ?
  //   isUBack: false,
  //   brand: 'genuine',
  //   bankLaceDirection: SEQUENTIAL_ROLL,
  //   image: {
  //     url: `${imageBaseUrl}/3.jpg`,
  //     width: gloveImageWidth,
  //     height: gloveImageHeight
  //   }
  // },
  {
    productNumber: 'MIU-T4',
    position: 'pitcher',
    size: {
      value: 29.5,
      unit: 'cm'
    },
    webParts: 'genuine',
    description: 'ライナーバックスタイルの投手用',
    isFingerCrotch: false,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: SEQUENTIAL_ROLL,
    image: {
      url: `${imageBaseUrl}/4.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    ...JUNIOR_MODEL,
    productNumber: JUNIOR_PITCHER
  },
  {
    productNumber: 'MIU-S4',
    position: 'infielder',
    size: {
      value: 28.5,
      unit: 'cm'
    },
    webParts: 'h',
    description: '内野手用の中で一番浅くコンパクトなタイプ',
    isFingerCrotch: false,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: REVERSE_ROLL,
    image: {
      url: `${imageBaseUrl}/5.jpg`,
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
    webParts: 'cross3',
    description: '指股を無くしMIU-S7よりも浅く設計。つかみ取り当て取りどちらにも対応できるタイプ。',
    isFingerCrotch: false,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: REVERSE_ROLL,
    image: {
      url: `${imageBaseUrl}/6.jpg`,
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
    webParts: 'crossV2',
    description: '指股を設計することによりMIU-S5よりも深くつかみ取りしやすいタイプ。',
    isFingerCrotch: true,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: SEQUENTIAL_ROLL,
    image: {
      url: `${imageBaseUrl}/7.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    ...JUNIOR_MODEL,
    productNumber: JUNIOR_INFIELDER,
    position: 'infielder'
  },
  {
    productNumber: 'MIU-M8',
    position: 'outfielder',
    size: {
      value: 33.0,
      unit: 'cm'
    },
    webParts: 'tNet2',
    description: '深めのポケットでがっちり握れる仕様',
    isFingerCrotch: true,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: SEQUENTIAL_ROLL,
    image: {
      url: `${imageBaseUrl}/8.jpg`,
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
    webParts: 'tNet2',
    description: '球際を意識し指先まで感覚の通るがっちりと掴めるタイプで設計。',
    isFingerCrotch: true,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: SEQUENTIAL_ROLL,
    image: {
      url: `${imageBaseUrl}/9.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    ...JUNIOR_MODEL,
    productNumber: JUNIOR_OUTFIELDER,
    position: 'outfielder'
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
    isFingerCrotch: false,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: SEQUENTIAL_ROLL,
    image: {
      url: `${imageBaseUrl}/10.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    ...JUNIOR_MODEL,
    productNumber: JUNIOR_FIRST_BASEMAN,
    position: 'firstBaseman'
  },

  {
    productNumber: 'HM-37',
    position: 'catcher',
    size: {
      value: 31.5,
      unit: 'cm'
    },
    webParts: '',
    description: '1番大きくポケットが深いモデル。しっかりと捕球したい選手向け仕様',
    isFingerCrotch: false,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: SEQUENTIAL_ROLL,
    image: {
      url: `${imageBaseUrl}/11.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    productNumber: 'TM-411',
    position: 'catcher',
    size: {
      value: 31.5,
      unit: 'cm'
    },
    webParts: '',
    description: 'オーソドックスなタイプ。HMの小型仕様。',
    isFingerCrotch: true,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: SEQUENTIAL_ROLL,
    image: {
      url: `${imageBaseUrl}/12.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    productNumber: 'YT-22',
    position: 'catcher',
    size: {
      value: 31.5,
      unit: 'cm'
    },
    webParts: '',
    description: '1番コンパクトでポケットも浅いモデル。握り変えのスピードを追求した選手向け仕様。',
    isFingerCrotch: true,
    isUBack: false,
    brand: 'genuine',
    bankLaceDirection: SEQUENTIAL_ROLL,
    image: {
      url: `${imageBaseUrl}/13.jpg`,
      width: gloveImageWidth,
      height: gloveImageHeight
    }
  },
  {
    ...JUNIOR_MODEL,
    productNumber: JUNIOR_CATCHER,
    position: 'catcher'
  }
]

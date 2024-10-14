export type ChoiceItem = {
  label: string
  value: string
}
export type BaseItem = {
  value: string
  label: string
}

export type BaseItemWithPrice = {
  value: string
  label: string
  price: number
}

export type ColorItem = {
  value: string
  label: string
  color: string
  price?: number
  order?: number
}
export type Brand = 'five' | 'genuine'
export type Position = 'pitcher' | 'infielder' | 'outfielder'
export type Personal = any
export type Embroidery = {
  id: number
  typeFace: ChoiceItem
  position: ChoiceItem
  content: string
  color: ColorItem
  shadowColor: ColorItem
  edgeColor: ColorItem
}
export type EmbroideryKey = 'typeFace' | 'position' | 'color' | 'shadowColor' | 'edgeColor' | 'pointColor' | 'content'
export type BankLaceDirection = 'sequentialRoll' | 'reverseRoll'

export type BaseModel = {
  productNumber: string
  position: Position
  size: {
    value: number
    unit: string
  }
  webParts: string
  description: string
  isFingerCrotch: boolean
  isUBack: boolean
  brand: Brand
  bankLaceDirection: BankLaceDirection
  image: {
    url: string
    width: number
    height: number
  }
}

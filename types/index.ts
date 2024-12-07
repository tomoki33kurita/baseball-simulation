import { FiveState } from '@/features/five/types'
import { GenuineState } from '@/features/genuine/types'

export type ChoiceItem = {
  label: string
  value: string
}
export type BaseItem = {
  value: string
  label: string
}

export type BankLaceDirectionItem = {
  value: BankLaceDirection | 'unselected'
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
export type Brand = 'five' | 'genuine' | ''
export type Position = 'pitcher' | 'infielder' | 'outfielder' | 'catcher' | 'firstBaseman'
export type Personal = {
  userName: string
  userNameKana: string
  phoneNumber: string
  mailAddress: string
  league: string
  position: string | string[]
  remarks: string
}

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

export type SavedData<T> = {
  savedId: string
  state: T
  createdAt: {
    nanoseconds: number
    secondes: number
  }
}

export type Supplier = {
  name: string
  email: string
  brands: Brand[]
}

export type DocumentContent = {
  text: string
  fontSize: number
  alignment?: undefined | string
}
export type DocumentContentGenerator = (head: string, content: string, alignment?: string, color?: string) => DocumentContent[]

export type TwoDimensional = {
  text: string
  fontSize: number
  alignment: string
}

export type State = FiveState | GenuineState

export type BrandOption = {
  value: Brand
  label: string
}

export type Retail = {
  name: string
  email: string
  selectableBrands: BrandOption[]
}

export type WebParts = {
  label: string
  value: string
  positions: Position[]
  imageUrl: string
}

export type CanStepFurther = any

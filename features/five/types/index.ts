import { BINDINGS, LACES, LEATHER_COLORS, STITCHES, WELTINGS } from '../Constants/color'

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

export type EmbroideryItems = {
  typeFace: ChoiceItem[]
  position: ChoiceItem[]
  color: ChoiceItem[]
  shadowColor: ChoiceItem[]
  edgeColor: ChoiceItem[]
}
export type PartsItem = {
  label: string
  value: Exclude<
    keyof State,
    | 'baseModel'
    | 'dominantArm'
    | 'fingerGuard'
    | 'orderType'
    | 'materialPack'
    | 'webParts'
    | 'fLexEngraving'
    | 'parts'
    | 'embroideries'
    | 'personal'
    | 'drawerIndex'
    | 'fiveLabel'
    | 'mouton'
  >
  // value: keyof typeof LEATHER_COLORS_BY_PARTS
}

export type PartsKey = PartsItem['value']

export type LeatherColorsByParts = Record<PartsKey, typeof LEATHER_COLORS | typeof LACES | typeof BINDINGS | typeof STITCHES | typeof WELTINGS>

export type DrawerIndex = 0 | 1

export type State = {
  baseModel: BaseModel
  dominantArm: BaseItem
  fingerGuard: BaseItem
  orderType: BaseItemWithPrice
  materialPack: BaseItem
  webParts: BaseItem
  fLexEngraving: BaseItem
  parts: PartsItem
  embroideries: Embroidery[]
  personal: Personal
  drawerIndex: DrawerIndex
  fiveLabel: ColorItem

  all: ColorItem
  lace: ColorItem
  binding: ColorItem
  stitch: ColorItem
  welting: ColorItem
  mouton: ColorItem
  palm: ColorItem
  web: ColorItem
  thumbHook: ColorItem
  littleHook: ColorItem
  fingerGuardColor: ColorItem
  linings: ColorItem
  thumbOut: ColorItem
  thumbWeb: ColorItem
  indexWeb: ColorItem
  indexMiddle: ColorItem
  middleIndex: ColorItem
  middleRing: ColorItem
  ringMiddle: ColorItem
  ringLittle: ColorItem
  littleRing: ColorItem
  littleOut: ColorItem
  listBelt: ColorItem
  labelStand: ColorItem
}

type Nullable<T> = {
  [P in keyof T]: T[P] | null
}
type NullableAction = { type: string } & Nullable<State>

export type NullableActionDispatch = (value: NullableAction) => void

export type ResponseDispatch = (selected: string) => void

export type Position = 'pitcher' | 'infielder' | 'outfielder'

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
  brand: string
  bankLaceDirection: BankLaceDirection
  basicColors: {
    leather: ColorItem
    lace: ColorItem
    stitch: ColorItem
    binding: ColorItem
    welting: ColorItem
  }
  image: {
    url: string
    width: number
    height: number
  }
}

export type CanStepFurther = any

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

export type Brand = 'five' | 'genuine'

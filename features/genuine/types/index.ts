import { BaseItem, BaseItemWithPrice, BaseModel, ChoiceItem, ColorItem, Embroidery, Personal } from '@/types'
import { BINDINGS, LACES, LEATHER_COLORS, STITCHES, WELTINGS } from '../Constants/color'

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
    keyof GenuineState,
    | 'baseModel'
    | 'dominantArm'
    | 'fingerGuard'
    | 'orderType'
    | 'materialPack'
    | 'webParts'
    | 'parts'
    | 'embroideries'
    | 'personal'
    | 'drawerIndex'
    | 'genuineLabel'
    | 'mouton'
  >
  // value: keyof typeof LEATHER_COLORS_BY_PARTS
}

export type PartsKey = PartsItem['value']

export type LeatherColorsByParts = Record<PartsKey, typeof LEATHER_COLORS | typeof LACES | typeof BINDINGS | typeof STITCHES | typeof WELTINGS>

export type DrawerIndex = 0 | 1

export type GenuineBaseModel = {} & BaseModel

export type GenuineState = {
  baseModel: GenuineBaseModel
  dominantArm: BaseItem
  fingerGuard: BaseItem
  orderType: BaseItemWithPrice
  materialPack: BaseItem
  webParts: BaseItem
  parts: PartsItem
  embroideries: Embroidery[]
  personal: Personal
  drawerIndex: DrawerIndex
  genuineLabel: ColorItem

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
  thumb: ColorItem
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
  boomerang: ColorItem // only for first baseman
  underWeb: ColorItem // only for first baseman
}

export type ResponseDispatch = (selected: string) => void

export type CanStepFurther = any

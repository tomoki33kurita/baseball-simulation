import { ADD_EMBROIDERY, REMOVE_EMBROIDERY, SET_DRAWER_INDEX, SET_EMBROIDERIES, SET_PERSONAL } from '@/constants'
import {
  SET_SELECTED_PARTS,
  SET_ALL_LEATHER_COLOR,
  SET_DOMINANT_ARM,
  SET_WEB_PARTS,
  SET_LEATHER_COLOR,
  SET_LININGS,
  SET_WELTING,
  SET_FINGER_GUARD,
  SET_LACE_COLOR,
  SET_STITCH_COLOR,
  SET_MATERIAL_PACK,
  SET_WEB_COLOR,
  SET_THUMB_HOOK,
  SET_LITTLE_HOOK,
  SET_THUMB_OUT_COLOR,
  SET_THUMB_WEB_COLOR,
  SET_INDEX_WEB_COLOR,
  SET_INDEX_MIDDLE_COLOR,
  SET_MIDDLE_INDEX_COLOR,
  SET_MIDDLE_RING_COLOR,
  SET_RING_MIDDLE_COLOR,
  SET_RING_LITTLE_COLOR,
  SET_LITTLE_RING_COLOR,
  SET_LITTLE_OUT_COLOR,
  SET_LIST_BELT_COLOR,
  SET_MOUTON_COLOR,
  SET_BASE_MODEL,
  SET_BINDING_COLOR,
  SET_FINGER_GUARD_COLOR,
  SET_BACK_STYLE,
  SET_MESH_COLOR,
  SET_SIZE,
  SET_WEB_LACE_STYLE,
  SET_BACK_LACE_STYLE,
  SET_LEATHER_THICKNESS,
  SET_CORE_HARDNESS,
  SET_GLOVE_SIZE,
  SET_BANK_LACE_DIRECTION,
  SET_LOOP_OF_RING_FINGER,
  SET_GENUINE_LABEL,
  SET_WEB2_COLOR,
  SET_LOOP_OF_RING_FINGER_COLOR,
  SET_GENUINE_BRAND_MARK,
  SET_GENUINE_BRAND_MARK_COLOR,
  SET_TWO_FINGER_IN_LITTLE_SLOT,
  SET_BALL_TYPE
} from '@/features/genuine/Constants/action'
import { GenuineState } from '../types'
import { NORMAL_BACK_STYLE } from '../Constants/base'

const initialPersonalState = {
  userName: '',
  userNameKana: '',
  phoneNumber: '',
  mailAddress: '',
  league: '',
  position: '',
  remarks: ''
}

export const unselectedState = { label: '未選択', value: 'unselected' } as const
const unselectedStateWithPrice = { label: '未選択', value: 'unselected', price: 0 }
const unselectedColorState = {
  label: '未選択',
  value: 'unselected',
  color: '#fff'
}

const initialEmbroideryState = {
  id: 0,
  typeFace: unselectedState,
  position: unselectedState,
  color: unselectedColorState,
  shadowColor: unselectedColorState,
  edgeColor: unselectedColorState,
  content: ''
}

export const initialState: GenuineState = {
  baseModel: {
    productNumber: '',
    position: 'infielder',
    size: {
      unit: 'cm',
      value: 0
    },
    webParts: '',
    description: '',
    isFingerCrotch: false,
    isUBack: false,
    brand: '',
    bankLaceDirection: 'sequentialRoll',
    image: {
      url: '',
      width: 0,
      height: 0
    }
  },
  ballType: unselectedStateWithPrice,
  twoFingerInLittleSlot: unselectedState,
  dominantArm: unselectedState,
  fingerGuard: unselectedState,
  fingerGuardColor: unselectedColorState,
  meshColor: unselectedColorState,
  webLaceStyle: unselectedState,
  backLaceStyle: unselectedState,
  leatherThickness: unselectedState,
  coreHardness: unselectedState,
  gloveSize: unselectedState,
  bankLaceDirection: unselectedState,

  materialPack: unselectedState,
  webParts: unselectedState,
  parts: { label: '全体', value: 'all' },
  all: unselectedColorState,
  palm: unselectedColorState,
  binding: unselectedColorState,
  lace: unselectedColorState,
  linings: unselectedColorState,
  welting: unselectedColorState,
  stitch: { label: '未選択', value: 'unselected', color: '#eee' },
  web: unselectedColorState,
  web2: unselectedColorState,
  thumbHook: unselectedColorState,
  littleHook: unselectedColorState,
  listBelt: unselectedColorState,
  thumbOut: unselectedColorState,
  thumbWeb: unselectedColorState,
  indexWeb: unselectedColorState,
  indexMiddle: unselectedColorState,
  middleIndex: unselectedColorState,
  middleRing: unselectedColorState,
  ringMiddle: unselectedColorState,
  ringLittle: unselectedColorState,
  littleRing: unselectedColorState,
  littleOut: unselectedColorState,
  thumb: unselectedColorState,
  boomerang: unselectedColorState,
  underWeb: unselectedColorState,
  fingerStand: unselectedColorState,
  thumbIndexMiddleRight: unselectedColorState,
  middleLeftRing: unselectedColorState,
  middleLeftRingLittle: unselectedColorState,
  thumbMachi: unselectedColorState,
  littleMachi: unselectedColorState,
  thumbIndexMiddle: unselectedColorState, // first back style glove
  middleLeftRingRight: unselectedColorState, // first back style glove
  ringLeftLittleRight: unselectedColorState, // first back style glove
  indexLeftMiddleRight: unselectedColorState, // crown back style glove
  palmToWebConnectLaceStyle: unselectedState,
  indexFingerTipOut: unselectedColorState, // catcher
  indexMiddleRingLittle: unselectedColorState, // catcher
  indexLeftMiddleRingRight: unselectedColorState, // first back style glove
  thumbLeftIndexRight: unselectedColorState, // first back style glove
  genuineLabel: unselectedStateWithPrice,
  mouton: unselectedStateWithPrice,
  loopOfRingFinger: unselectedStateWithPrice,
  loopOfRingFingerColor: unselectedColorState,
  genuineBrandMark: unselectedStateWithPrice,
  genuineBrandMarkColor: unselectedColorState,
  size: unselectedStateWithPrice,
  backStyle: unselectedStateWithPrice,
  embroideries: [initialEmbroideryState],
  personal: initialPersonalState,
  drawerIndex: 0
}

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_SELECTED_PARTS:
      return { ...state, parts: action.parts }
    case SET_ALL_LEATHER_COLOR:
      return {
        ...state,
        all: action.all,
        palm: action.all,
        web: action.all,
        web2: action.all,
        thumbHook: action.all,
        littleHook: action.all,
        binding: action.all,
        fingerGuardColor: action.all,
        listBelt: action.all,
        // 内野手用グラブ
        thumbOut: action.all,
        thumbWeb: action.all,
        indexWeb: action.all,
        indexMiddle: action.all,
        middleIndex: action.all,
        middleRing: action.all,
        ringMiddle: action.all,
        ringLittle: action.all,
        littleRing: action.all,
        littleOut: action.all,
        indexMiddleRingLittle: action.all, // catcher
        indexLeftMiddleRingRight: action.all
      }
    case SET_BASE_MODEL:
      return { ...state, baseModel: action.baseModel, backStyle: NORMAL_BACK_STYLE }
    case SET_BALL_TYPE:
      return { ...state, ballType: action.ballType }
    case SET_DOMINANT_ARM:
      return { ...state, dominantArm: action.dominantArm }
    case SET_BACK_STYLE:
      return { ...state, backStyle: action.backStyle }
    case SET_MESH_COLOR:
      return { ...state, meshColor: action.meshColor }
    case SET_SIZE:
      return { ...state, size: action.size }
    case SET_WEB_LACE_STYLE:
      return { ...state, webLaceStyle: action.webLaceStyle }
    case SET_BACK_LACE_STYLE:
      return { ...state, backLaceStyle: action.backLaceStyle, drawerIndex: 0 }
    case SET_LEATHER_THICKNESS:
      return { ...state, leatherThickness: action.leatherThickness }
    case SET_CORE_HARDNESS:
      return { ...state, coreHardness: action.coreHardness }
    case SET_GLOVE_SIZE:
      return { ...state, gloveSize: action.gloveSize }
    case SET_TWO_FINGER_IN_LITTLE_SLOT:
      return { ...state, twoFingerInLittleSlot: action.twoFingerInLittleSlot }
    case SET_BANK_LACE_DIRECTION:
      return { ...state, bankLaceDirection: action.bankLaceDirection, drawerIndex: 1 }
    case SET_LOOP_OF_RING_FINGER:
      return { ...state, loopOfRingFinger: action.loopOfRingFinger, drawerIndex: 0 }
    case SET_LOOP_OF_RING_FINGER_COLOR:
      return { ...state, loopOfRingFingerColor: action.loopOfRingFingerColor }
    case SET_GENUINE_BRAND_MARK:
      return { ...state, genuineBrandMark: action.genuineBrandMark, drawerIndex: 0 }
    case SET_GENUINE_BRAND_MARK_COLOR:
      return { ...state, genuineBrandMarkColor: action.genuineBrandMarkColor, drawerIndex: 0 }
    case SET_MATERIAL_PACK:
      return { ...state, materialPack: action.materialPack, drawerIndex: 1 }
    case SET_FINGER_GUARD:
      return {
        ...state,
        fingerGuard: action.fingerGuard,
        drawerIndex: 0
      }
    case SET_WEB_PARTS:
      const isForceWebLaceStyleNormal = !['basket2', 'tNet3'].includes(action.webParts.value)
      if (isForceWebLaceStyleNormal) {
        return { ...state, webParts: action.webParts, webLaceStyle: { label: '通常', value: 'normal' } }
      }
      return { ...state, webParts: action.webParts }
    case SET_LEATHER_COLOR:
      return { ...state, palm: action.palm }
    case SET_BINDING_COLOR:
      return { ...state, binding: action.binding }
    case SET_WEB_COLOR:
      if (state.web2.value === 'unselected') {
        return { ...state, web: action.web, web2: action.web }
      }
      return { ...state, web: action.web }
    case SET_WEB2_COLOR:
      return { ...state, web2: action.web2 }
    case SET_MOUTON_COLOR:
      return { ...state, mouton: action.mouton }
    // 内野手用グラブ
    case SET_THUMB_OUT_COLOR:
      return { ...state, thumbOut: action.thumbOut }
    case SET_THUMB_WEB_COLOR:
      return { ...state, thumbWeb: action.thumbWeb }
    case SET_INDEX_WEB_COLOR:
      return { ...state, indexWeb: action.indexWeb }
    case SET_INDEX_MIDDLE_COLOR:
      return { ...state, indexMiddle: action.indexMiddle }
    case SET_MIDDLE_INDEX_COLOR:
      return { ...state, middleIndex: action.middleIndex }
    case SET_MIDDLE_RING_COLOR:
      return { ...state, middleRing: action.middleRing }
    case SET_RING_MIDDLE_COLOR:
      return { ...state, ringMiddle: action.ringMiddle }
    case SET_RING_LITTLE_COLOR:
      return { ...state, ringLittle: action.ringLittle }
    case SET_LITTLE_RING_COLOR:
      return { ...state, littleRing: action.littleRing }
    case SET_LITTLE_OUT_COLOR:
      return { ...state, littleOut: action.littleOut }
    case SET_LIST_BELT_COLOR:
      return { ...state, listBelt: action.listBelt }
    case SET_LININGS:
      return { ...state, linings: action.linings, drawerIndex: 0 }
    case SET_WELTING:
      return { ...state, welting: action.welting }
    case SET_LACE_COLOR:
      return { ...state, lace: action.lace }
    case SET_STITCH_COLOR:
      return { ...state, stitch: action.stitch }
    case SET_EMBROIDERIES:
      return { ...state, embroideries: action.embroideries, drawerIndex: 0 }
    case ADD_EMBROIDERY: // incrementの方が合っている気がする
      return { ...state, embroideries: action.embroideries }
    case REMOVE_EMBROIDERY: // decrementの方が合っている気がする
      return { ...state, embroideries: action.embroideries }
    case SET_THUMB_HOOK:
      return { ...state, thumbHook: action.thumbHook }
    case SET_LITTLE_HOOK:
      return { ...state, littleHook: action.littleHook }
    case SET_GENUINE_LABEL:
      return { ...state, genuineLabel: action.genuineLabel, drawerIndex: 0 }
    case SET_FINGER_GUARD_COLOR:
      return { ...state, fingerGuardColor: action.fingerGuardColor, drawerIndex: 0 }
    case SET_PERSONAL:
      return { ...state, personal: action.personal }
    case SET_DRAWER_INDEX:
      return { ...state, drawerIndex: action.drawerIndex }

    default:
      return state
  }
}

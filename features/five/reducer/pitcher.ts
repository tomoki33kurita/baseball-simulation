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
  // SET_LIST_BELT_COLOR,
  SET_MOUTON_COLOR,
  SET_BASE_MODEL,
  SET_ORDER_TYPE,
  SET_FIVE_LABEL,
  SET_F_LEX_ENGRAVING,
  SET_BINDING_COLOR,
  SET_LABEL_STAND,
  SET_FINGER_GUARD_COLOR,
  SET_SPECIFIED_LOGO,
  SET_SPECIFIED_LOGO_POSITION
} from '../Constants/action'
import { FiveState } from '../types'

const initialPersonalState = {
  userName: '',
  userNameKana: '',
  phoneNumber: '',
  mailAddress: '',
  zipCode: '',
  league: '',
  position: '',
  remarks: ''
}

const unselectedState = { label: '未選択', value: 'unselected' }
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

export const initialState: FiveState = {
  baseModel: {
    productNumber: '',
    position: 'pitcher',
    size: {
      unit: 'cm',
      value: 0
    },
    webParts: '',
    description: '',
    isFingerCrotch: false,
    isUBack: false,
    basicColors: {
      leather: { label: 'ブラック', value: 'black', color: '#1E1E1E' },
      stitch: { label: 'ファイブグリーン', value: 'fiveGreen', color: '#42A670' },
      lace: { label: 'タン', value: 'tan', color: '#C19445' },
      binding: { label: 'ブラック', value: 'black', color: '#1E1E1E' },
      welting: { label: '切りハミ(ホワイト)', value: 'kirihamiWhite', color: '#fff' },
      fiveLabel: { label: 'No.01', value: '1' }
    },
    brand: 'five',
    bankLaceDirection: 'sequentialRoll',
    image: {
      url: '',
      width: 0,
      height: 0
    }
  },
  dominantArm: unselectedState,
  fingerGuard: unselectedState,
  fingerGuardColor: unselectedColorState,
  orderType: unselectedStateWithPrice,
  materialPack: unselectedState,
  webParts: unselectedColorState,
  fLexEngraving: unselectedState,
  parts: { label: '全体', value: 'all' },

  all: unselectedColorState,
  palm: unselectedColorState,
  binding: unselectedColorState,
  lace: unselectedColorState,
  linings: unselectedColorState,
  welting: unselectedColorState,
  stitch: { label: '未選択', value: 'unselected', color: '#eee' },
  web: unselectedColorState,
  thumbHook: unselectedColorState,
  littleHook: unselectedColorState,
  // listBelt: unselectedColorState,
  mouton: unselectedColorState,
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
  embroideries: [initialEmbroideryState],
  personal: initialPersonalState,
  drawerIndex: 0,
  labelStand: unselectedColorState,
  fiveLabel: unselectedColorState,
  specifiedLogo: unselectedStateWithPrice,
  specifiedLogoPosition: unselectedState
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
        thumbHook: action.all,
        littleHook: action.all,
        binding: action.all,
        fingerGuardColor: action.all,
        // listBelt: action.all,
        linings: action.all,
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
        labelStand: action.all
      }
    case SET_BASE_MODEL:
      return { ...state, baseModel: action.baseModel }
    case SET_ORDER_TYPE:
      return { ...state, orderType: action.orderType }
    case SET_DOMINANT_ARM:
      return { ...state, dominantArm: action.dominantArm }
    case SET_MATERIAL_PACK:
      return { ...state, materialPack: action.materialPack, drawerIndex: 1 }
    case SET_FINGER_GUARD:
      return {
        ...state,
        fingerGuard: action.fingerGuard,
        drawerIndex: 0
      }
    case SET_WEB_PARTS:
      return { ...state, webParts: action.webParts }
    case SET_FIVE_LABEL:
      return { ...state, fiveLabel: action.fiveLabel, drawerIndex: 0 }
    case SET_SPECIFIED_LOGO:
      return { ...state, specifiedLogo: action.specifiedLogo }
    case SET_SPECIFIED_LOGO_POSITION:
      return { ...state, specifiedLogoPosition: action.specifiedLogoPosition }
    case SET_LABEL_STAND:
      return { ...state, labelStand: action.labelStand, drawerIndex: 0 }
    case SET_LEATHER_COLOR:
      return { ...state, palm: action.palm }
    case SET_BINDING_COLOR:
      return { ...state, binding: action.binding }
    case SET_WEB_COLOR:
      return { ...state, web: action.web }
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
    // case SET_LIST_BELT_COLOR:
    //   return { ...state, listBelt: action.listBelt }
    case SET_F_LEX_ENGRAVING:
      return { ...state, fLexEngraving: action.fLexEngraving, drawerIndex: 0 }
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

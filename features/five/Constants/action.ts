// BASE SET
export const SET_BASE_MODEL = 'setBaseModel'
export const SET_ORDER_TYPE = 'setOrderType'
export const SET_DOMINANT_ARM = 'setDominantArm'
export const SET_LININGS = 'setLinings'
export const SET_WEB_PARTS = 'setWebParts'
export const SET_FIVE_LABEL = 'setFiveLabel'
export const SET_LABEL_STAND = 'setLabelStand'
export const SET_FINGER_GUARD = 'setFingerGuardType'
export const SET_MATERIAL_PACK = 'setMaterialPack'
export const SET_F_LEX_ENGRAVING = 'setFLexEngraving'

// COLOR
export const SET_SELECTED_PARTS = 'setSelectedParts'
export const SET_ALL_LEATHER_COLOR = 'setAllLeatherColor'
export const SET_LEATHER_COLOR = 'setLeatherColor'
export const SET_LACE_COLOR = 'setLaceColor'
export const SET_BINDING_COLOR = 'setBindingColor'
export const SET_STITCH_COLOR = 'setStitchColor'
export const SET_WEB_COLOR = 'setWebColor'
export const SET_MOUTON_COLOR = 'setMoutonColor'
export const SET_THUMB_HOOK = 'setThumbHook'
export const SET_LITTLE_HOOK = 'setLittleHook'
export const SET_LIST_BELT_COLOR = 'setListBeltColor'
export const SET_FINGER_GUARD_COLOR = 'setFingerGuardColor'
export const SET_WELTING = 'setWelting'

export const SET_THUMB_OUT_COLOR = 'thumbOut'
export const SET_THUMB_WEB_COLOR = 'thumbWeb'
export const SET_INDEX_WEB_COLOR = 'indexWeb'
export const SET_INDEX_MIDDLE_COLOR = 'indexMiddle'
export const SET_MIDDLE_INDEX_COLOR = 'middleIndex'
export const SET_MIDDLE_RING_COLOR = 'middleRing'
export const SET_RING_MIDDLE_COLOR = 'ringMiddle'
export const SET_RING_LITTLE_COLOR = 'ringLittle'

export const SET_LITTLE_RING_COLOR = 'littleRing'
export const SET_LITTLE_OUT_COLOR = 'littleOut'

// これはカラーだけに関するconstantsなので、別ファイルにあるべき
export const DISPATCHER = {
  dominantArm: SET_DOMINANT_ARM,
  fingerGuard: SET_FINGER_GUARD,
  materialPack: SET_MATERIAL_PACK,
  webParts: SET_WEB_PARTS,
  parts: SET_SELECTED_PARTS,
  all: SET_ALL_LEATHER_COLOR,
  palm: SET_LEATHER_COLOR,
  web: SET_WEB_COLOR,
  binding: SET_BINDING_COLOR,
  thumbHook: SET_THUMB_HOOK,
  littleHook: SET_LITTLE_HOOK,
  lace: SET_LACE_COLOR,
  fingerGuardColor: SET_FINGER_GUARD_COLOR,
  stitch: SET_STITCH_COLOR,
  linings: SET_LININGS,
  welting: SET_WELTING,
  mouton: SET_MOUTON_COLOR,
  labelStand: SET_LABEL_STAND,
  fiveLabel: SET_FIVE_LABEL,

  // 内野手用グラブここから
  thumbOut: SET_THUMB_OUT_COLOR,
  thumbWeb: SET_THUMB_WEB_COLOR,
  indexWeb: SET_INDEX_WEB_COLOR,
  indexMiddle: SET_INDEX_MIDDLE_COLOR,
  middleIndex: SET_MIDDLE_INDEX_COLOR,
  middleRing: SET_MIDDLE_RING_COLOR,
  ringMiddle: SET_RING_MIDDLE_COLOR,
  ringLittle: SET_RING_LITTLE_COLOR,
  littleRing: SET_LITTLE_RING_COLOR,
  littleOut: SET_LITTLE_OUT_COLOR,
  listBelt: SET_LIST_BELT_COLOR
}

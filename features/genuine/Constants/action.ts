// BASE SET
export const SET_BASE_MODEL = 'setBaseModel'
export const SET_DOMINANT_ARM = 'setDominantArm'
export const SET_BACK_STYLE = 'setBackStyle'
export const SET_LININGS = 'setLinings'
export const SET_WEB_PARTS = 'setWebParts'
export const SET_LABEL_STAND = 'setLabelStand'
export const SET_FINGER_GUARD = 'setFingerGuardType'
export const SET_MATERIAL_PACK = 'setMaterialPack'
export const SET_SIZE = 'setSize'
export const SET_WEB_LACE_STYLE = 'setWebLaceStyle'
export const SET_PALM_TO_WEB_CONNECT_LACE_STYLE = 'setPalmToWebConnectLaceStyle'
export const SET_BACK_LACE_STYLE = 'setBackLaceStyle'
export const SET_LEATHER_THICKNESS = 'setLeatherThickness'
export const SET_CORE_HARDNESS = 'setCoreHardness'
export const SET_GLOVE_SIZE = 'setGloveSize'
export const SET_BANK_LACE_DIRECTION = 'setBankLaceDirection'
export const SET_LOOP_OF_RING_FINGER = 'setLoopOfRingFinger'

// COLOR
export const SET_LOOP_OF_RING_FINGER_COLOR = 'setLoopOfRingFingerColor'
export const SET_MESH_COLOR = 'setMeshColor'
export const SET_SELECTED_PARTS = 'setSelectedParts'
export const SET_ALL_LEATHER_COLOR = 'setAllLeatherColor'
export const SET_LEATHER_COLOR = 'setLeatherColor'
export const SET_LACE_COLOR = 'setLaceColor'
export const SET_BINDING_COLOR = 'setBindingColor'
export const SET_STITCH_COLOR = 'setStitchColor'
export const SET_WEB_COLOR = 'setWebColor'
export const SET_WEB2_COLOR = 'setWeb2Color'
export const SET_MOUTON_COLOR = 'setMoutonColor'
export const SET_THUMB_HOOK = 'setThumbHook'
export const SET_LITTLE_HOOK = 'setLittleHook'
export const SET_LIST_BELT_COLOR = 'setListBeltColor'
export const SET_FINGER_GUARD_COLOR = 'setFingerGuardColor'
export const SET_WELTING = 'setWelting'
export const SET_GENUINE_LABEL = 'setGenuineLabel'

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

export const SET_THUMB_COLOR = 'setThumbColor'
export const SET_BOOMERANG_COLOR = 'setBoomerangColor'
export const SET_UNDER_WEB_COLOR = 'setUnderWebColor'
export const SET_FINGER_STAND_COLOR = 'setFingerStandColor'
export const SET_THUMB_INDEX_MIDDLE_RIGHT_COLOR = 'setThumbIndexMiddleRight'
export const SET_INDEX_LEFT_MIDDLE_RIGHT_COLOR = 'setIndexLeftMiddleRight' // indexLeftMiddleRight
export const SET_INDEX_MIDDLE_RING_LITTLE_COLOR = 'setIndexMiddleRingLittle'
export const SET_MIDDLE_LEFT_RING_RIGHT_COLOR = 'setMiddleLeftRingRight'
export const SET_RING_LEFT_LITTLE_RIGHT_COLOR = 'setRingLeftLittleRight'
export const SET_MIDDLE_LEFT_RING_COLOR = 'setMiddleLeftRing'
export const SET_MIDDLE_LEFT_RING_LITTLE_COLOR = 'setMiddleLeftRingLittle'
export const SET_THUMB_MACHI_COLOR = 'setThumbMachiColor'
export const SET_LITTLE_MACHI_COLOR = 'setLittleMachiColor'
export const SET_INDEX_FINGER_TIP_OUT_COLOR = 'setIndexFingerTipOutColor'

// これはカラーだけに関するconstantsなので、別ファイルにあるべき
export const DISPATCHER = {
  dominantArm: SET_DOMINANT_ARM,
  backStyle: SET_BACK_STYLE,
  fingerGuard: SET_FINGER_GUARD,
  materialPack: SET_MATERIAL_PACK,
  webParts: SET_WEB_PARTS,
  parts: SET_SELECTED_PARTS,
  all: SET_ALL_LEATHER_COLOR,
  palm: SET_LEATHER_COLOR,
  web: SET_WEB_COLOR,
  web2: SET_WEB2_COLOR,
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
  meshColor: SET_MESH_COLOR,
  size: SET_SIZE,
  webLaceStyle: SET_WEB_LACE_STYLE,
  backLaceStyle: SET_BACK_LACE_STYLE,
  palmToWebConnectLaceStyle: SET_PALM_TO_WEB_CONNECT_LACE_STYLE,
  leatherThickness: SET_LEATHER_THICKNESS,
  coreHardness: SET_CORE_HARDNESS,
  gloveSize: SET_GLOVE_SIZE,
  bankLaceDirection: SET_BANK_LACE_DIRECTION,
  loopOfRingFinger: SET_LOOP_OF_RING_FINGER,
  loopOfRingFingerColor: SET_LOOP_OF_RING_FINGER_COLOR,
  genuineLabel: SET_GENUINE_LABEL,

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
  listBelt: SET_LIST_BELT_COLOR,

  // 一塁手用ココカラ
  thumb: SET_THUMB_COLOR,
  boomerang: SET_BOOMERANG_COLOR,
  underWeb: SET_UNDER_WEB_COLOR,

  // catcher
  fingerStand: SET_FINGER_STAND_COLOR,
  thumbIndexMiddleRight: SET_THUMB_INDEX_MIDDLE_RIGHT_COLOR,
  middleLeftRing: SET_MIDDLE_LEFT_RING_COLOR,
  indexLeftMiddleRight: SET_INDEX_LEFT_MIDDLE_RIGHT_COLOR,
  indexFingerTipOut: SET_INDEX_FINGER_TIP_OUT_COLOR,
  indexMiddleRingLittle: SET_INDEX_MIDDLE_RING_LITTLE_COLOR,
  middleLeftRingRight: SET_MIDDLE_LEFT_RING_RIGHT_COLOR,
  middleLeftRingLittle: SET_MIDDLE_LEFT_RING_LITTLE_COLOR,
  ringLeftLittleRight: SET_RING_LEFT_LITTLE_RIGHT_COLOR,
  thumbMachi: SET_THUMB_MACHI_COLOR,
  littleMachi: SET_LITTLE_MACHI_COLOR
}

import React from 'react'
import {
  MATERIAL_PACKS,
  WEB_PARTS,
  DOMINANT_ARMS,
  FINGER_GUARDS,
  MESH_COLORS,
  SIZES,
  WEB_LACE_STYLES,
  BACK_LACE_STYLES,
  LEATHER_THICKNESS,
  CORE_HARDNESSES,
  GLOVE_SIZES,
  BANK_LACE_DIRECTIONS,
  LOOP_OF_RING_FINGERS,
  ALL_BACK_STYLES,
  PALM_TO_WEB_CONNECT_LACE_STYLE,
  GENUINE_EMBROIDERIES,
  GENUINE_ENGRAVINGS,
  FINGER_GUARDS_CATCHER,
  JUNIOR_GLOVE_SIZES,
  TWO_FINGER_LITTLE_SLOTS,
  FIRST_BACK_FINGER_GUARDS,
  BALL_TYPES
} from '@/features/genuine/Constants/base'
import { objectsFilter } from '@/util/logic'
import { ResponseDispatch } from '@/features/genuine/types'
import {
  SET_DOMINANT_ARM,
  SET_FINGER_GUARD,
  SET_MATERIAL_PACK,
  SET_BACK_STYLE,
  SET_WEB_PARTS,
  SET_BINDING_COLOR,
  SET_WELTING,
  SET_LACE_COLOR,
  SET_MOUTON_COLOR,
  SET_STITCH_COLOR,
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
  SET_PALM_TO_WEB_CONNECT_LACE_STYLE,
  SET_GENUINE_BRAND_MARK,
  SET_GENUINE_BRAND_MARK_COLOR,
  SET_TWO_FINGER_IN_LITTLE_SLOT,
  SET_LININGS,
  SET_BALL_TYPE,
  SET_PALM_WELTING
} from '@/features/genuine/Constants/action'
import {
  BINDINGS,
  FIRST_BACK_GENUINE_LABELS,
  GENUINE_LABELS,
  LACES,
  LININGS,
  MOUTON_COLORS,
  STITCHES,
  WELTINGS
} from '@/features/genuine/Constants/color'

// ここはブランドのドメイン
const dispatchBaseStore = {
  ballType: { objects: BALL_TYPES, actionType: SET_BALL_TYPE },
  dominantArm: { objects: DOMINANT_ARMS, actionType: SET_DOMINANT_ARM },
  backStyle: { objects: ALL_BACK_STYLES, actionType: SET_BACK_STYLE },
  meshColor: { objects: MESH_COLORS, actionType: SET_MESH_COLOR },
  size: { objects: SIZES, actionType: SET_SIZE },
  webLaceStyle: { objects: WEB_LACE_STYLES, actionType: SET_WEB_LACE_STYLE },
  backLaceStyle: { objects: BACK_LACE_STYLES, actionType: SET_BACK_LACE_STYLE },
  palmToWebConnectLaceStyle: { objects: PALM_TO_WEB_CONNECT_LACE_STYLE, actionType: SET_PALM_TO_WEB_CONNECT_LACE_STYLE },
  leatherThickness: { objects: LEATHER_THICKNESS, actionType: SET_LEATHER_THICKNESS },
  coreHardness: { objects: CORE_HARDNESSES, actionType: SET_CORE_HARDNESS },
  gloveSize: { objects: [...JUNIOR_GLOVE_SIZES, ...GLOVE_SIZES], actionType: SET_GLOVE_SIZE },
  twoFingerInLittleSlot: { objects: TWO_FINGER_LITTLE_SLOTS, actionType: SET_TWO_FINGER_IN_LITTLE_SLOT },
  bankLaceDirection: { objects: BANK_LACE_DIRECTIONS, actionType: SET_BANK_LACE_DIRECTION },
  loopOfRingFinger: { objects: LOOP_OF_RING_FINGERS, actionType: SET_LOOP_OF_RING_FINGER },
  genuineBrandMark: { objects: [...GENUINE_EMBROIDERIES, ...GENUINE_ENGRAVINGS], actionType: SET_GENUINE_BRAND_MARK },
  genuineBrandMarkColor: {
    objects: [...STITCHES, { label: 'シルバー', value: 'sliver', color: '#b8b8b8' }],
    actionType: SET_GENUINE_BRAND_MARK_COLOR
  },
  materialPack: { objects: MATERIAL_PACKS, actionType: SET_MATERIAL_PACK },
  fingerGuard: { objects: [...FINGER_GUARDS, ...FINGER_GUARDS_CATCHER, ...FIRST_BACK_FINGER_GUARDS], actionType: SET_FINGER_GUARD },
  webParts: { objects: WEB_PARTS, actionType: SET_WEB_PARTS },
  lace: { objects: LACES, actionType: SET_LACE_COLOR },
  linings: { objects: LININGS, actionType: SET_LININGS },
  binding: { objects: BINDINGS, actionType: SET_BINDING_COLOR },
  stitch: { objects: STITCHES, actionType: SET_STITCH_COLOR },
  welting: { objects: WELTINGS, actionType: SET_WELTING },
  palmWelting: { objects: WELTINGS, actionType: SET_PALM_WELTING },
  mouton: { objects: MOUTON_COLORS, actionType: SET_MOUTON_COLOR },
  genuineLabel: { objects: [...GENUINE_LABELS, ...FIRST_BACK_GENUINE_LABELS], actionType: SET_GENUINE_LABEL }
}

type DispatchKey = keyof typeof dispatchBaseStore

export const handleGenuine =
  (dispatch: React.Dispatch<unknown>) =>
  (key: DispatchKey): ResponseDispatch => {
    const item = dispatchBaseStore[key]
    return (selected: string) =>
      dispatch({
        type: item.actionType,
        [key]: objectsFilter(selected, item.objects)
      })
  }

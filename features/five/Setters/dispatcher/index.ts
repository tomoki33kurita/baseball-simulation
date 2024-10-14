import { ORDER_TYPES, MATERIAL_PACKS, WEB_PARTS, F_LEX_ENGRAVINGS, DOMINANT_ARMS, FINGER_GUARDS } from '../../Constants/base'
import {
  SET_DOMINANT_ARM,
  SET_FINGER_GUARD,
  SET_MATERIAL_PACK,
  SET_ORDER_TYPE,
  SET_WEB_PARTS,
  SET_BINDING_COLOR,
  SET_WELTING,
  SET_LACE_COLOR,
  SET_MOUTON_COLOR,
  SET_STITCH_COLOR,
  SET_FIVE_LABEL,
  SET_F_LEX_ENGRAVING
} from '../../Constants/action'
import { objectsFilter } from '@/app/util/logic'
import { ResponseDispatch } from '../../types'
import { BINDINGS, FIVE_LABELS, LACES, MOUTON_COLORS, STITCHES, WELTINGS } from '../../Constants/color'
import React from 'react'

// ここはブランドのドメイン
const dispatchBaseStore = {
  orderType: { objects: ORDER_TYPES, actionType: SET_ORDER_TYPE },
  materialPack: { objects: MATERIAL_PACKS, actionType: SET_MATERIAL_PACK },
  dominantArm: { objects: DOMINANT_ARMS, actionType: SET_DOMINANT_ARM },
  fingerGuard: { objects: FINGER_GUARDS, actionType: SET_FINGER_GUARD },
  webParts: { objects: WEB_PARTS, actionType: SET_WEB_PARTS },
  fLexEngraving: { objects: F_LEX_ENGRAVINGS, actionType: SET_F_LEX_ENGRAVING },
  lace: { objects: LACES, actionType: SET_LACE_COLOR },
  binding: { objects: BINDINGS, actionType: SET_BINDING_COLOR },
  stitch: { objects: STITCHES, actionType: SET_STITCH_COLOR },
  welting: { objects: WELTINGS, actionType: SET_WELTING },
  mouton: { objects: MOUTON_COLORS, actionType: SET_MOUTON_COLOR },
  fiveLabel: { objects: FIVE_LABELS, actionType: SET_FIVE_LABEL }
}

type DispatchKey = keyof typeof dispatchBaseStore

export const dispatcher = (key: DispatchKey, dispatch: React.Dispatch<unknown>): ResponseDispatch => {
  const item = dispatchBaseStore[key]
  return (selected: string) =>
    dispatch({
      type: item.actionType,
      [key]: objectsFilter(selected, item.objects)
    })
}

import React from 'react'
import { BACK_STYLES, MATERIAL_PACKS, WEB_PARTS, DOMINANT_ARMS, FINGER_GUARDS } from '@/features/genuine/Constants/base'
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
  SET_STITCH_COLOR
} from '@/features/genuine/Constants/action'
import { BINDINGS, LACES, MOUTON_COLORS, STITCHES, WELTINGS } from '@/features/genuine/Constants/color'

// ここはブランドのドメイン
const dispatchBaseStore = {
  dominantArm: { objects: DOMINANT_ARMS, actionType: SET_DOMINANT_ARM },
  backStyle: { objects: BACK_STYLES, actionType: SET_BACK_STYLE },
  materialPack: { objects: MATERIAL_PACKS, actionType: SET_MATERIAL_PACK },
  fingerGuard: { objects: FINGER_GUARDS, actionType: SET_FINGER_GUARD },
  webParts: { objects: WEB_PARTS, actionType: SET_WEB_PARTS },
  lace: { objects: LACES, actionType: SET_LACE_COLOR },
  binding: { objects: BINDINGS, actionType: SET_BINDING_COLOR },
  stitch: { objects: STITCHES, actionType: SET_STITCH_COLOR },
  welting: { objects: WELTINGS, actionType: SET_WELTING },
  mouton: { objects: MOUTON_COLORS, actionType: SET_MOUTON_COLOR }
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

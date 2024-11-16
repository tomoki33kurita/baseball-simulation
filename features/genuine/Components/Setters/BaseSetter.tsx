import React from 'react'
import { GenuineState } from '@/features/genuine/types'
import { Position } from '@/types'
import {
  DOMINANT_ARM_BUTTON_OPTION,
  DOMINANT_ARMS,
  FINGER_GUARD_TYPE_BUTTON_OPTION,
  MATERIAL_PACK_BUTTON_OPTION,
  MATERIAL_PACKS,
  WEB_PARTS_BUTTON_OPTION,
  WEB_PARTS,
  FINGER_GUARDS,
  BACK_STYLE_BUTTON_OPTION,
  BACK_STYLES
} from '@/features/genuine/Constants/base'
import { SelectCard } from '@/components/Setters/SelectCard'
import { SelectCardWithImage } from '@/components/Setters/SelectCardWithImage'
import { TabPanel } from '@/components/TabPanel'
import { dispatcher } from './dispatcher'

type Props = {
  state: GenuineState
  selectedIndex: number
  position: Position
  dispatch: React.Dispatch<unknown>
}

export const BaseSetter: React.FC<Props> = ({ state, selectedIndex, position, dispatch }) => {
  const { dominantArm, backStyle, fingerGuard, materialPack, webParts } = state
  const handle = {
    dominantArm: dispatcher('dominantArm', dispatch),
    backStyle: dispatcher('backStyle', dispatch),
    materialPack: dispatcher('materialPack', dispatch),
    fingerGuard: dispatcher('fingerGuard', dispatch),
    webParts: dispatcher('webParts', dispatch)
  }
  console.log({ backStyle })
  return (
    <TabPanel selectedIndex={selectedIndex} index={0}>
      <SelectCard
        summary={'利き腕'} // dominantArm
        selectedLabel={dominantArm.label}
        objects={DOMINANT_ARMS}
        isError={dominantArm.value === 'unselected'}
        handleChange={handle.dominantArm}
        defaultExpanded={dominantArm.value === 'unselected'}
        className={DOMINANT_ARM_BUTTON_OPTION}
      />
      <SelectCard
        summary={'背面デザイン'} // backStyle
        selectedLabel={backStyle.label}
        objects={BACK_STYLES}
        isError={backStyle.value === 'unselected'}
        handleChange={handle.backStyle}
        defaultExpanded={backStyle.value === 'unselected'}
        className={BACK_STYLE_BUTTON_OPTION}
      />
      <SelectCardWithImage
        summary={'ウェブ'} // webParts
        selectedLabel={webParts.label}
        objects={WEB_PARTS.filter((o) => o.positions.includes(position))}
        isError={webParts.value === 'unselected'}
        defaultExpanded={webParts.value === 'unselected'}
        handleChange={handle.webParts}
        className={WEB_PARTS_BUTTON_OPTION}
      />
      <SelectCard
        summary={'芯とじ'} // materialPack
        selectedLabel={materialPack.label}
        objects={MATERIAL_PACKS}
        handleChange={handle.materialPack}
        isError={materialPack.value === 'unselected'}
        defaultExpanded={materialPack.value === 'unselected'}
        className={MATERIAL_PACK_BUTTON_OPTION}
      />
      <SelectCard
        summary={'指カバー/指当て'} // fingerGuard
        selectedLabel={fingerGuard.label}
        objects={FINGER_GUARDS}
        isError={fingerGuard.value === 'unselected'}
        defaultExpanded={fingerGuard.value === 'unselected'}
        className={FINGER_GUARD_TYPE_BUTTON_OPTION}
        handleChange={handle.fingerGuard}
      />
    </TabPanel>
  )
}

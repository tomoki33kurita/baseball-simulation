import React from 'react'
import { FiveState } from '@/features/five/types'
import { Position } from '@/types'
import {
  DOMINANT_ARM_BUTTON_OPTION,
  DOMINANT_ARMS,
  FINGER_GUARD_TYPE_BUTTON_OPTION,
  WELTING_CUT_BUTTON_OPTION,
  F_LEX_ENGRAVINGS,
  MATERIAL_PACK_BUTTON_OPTION,
  MATERIAL_PACKS,
  ORDER_TYPES,
  TANNER_BUTTON_OPTION,
  WEB_PARTS_BUTTON_OPTION,
  WEB_PARTS,
  FINGER_GUARDS
} from '@/features/five/Constants/base'
import { SelectCard } from '@/components/Setters/SelectCard'
import { SelectCardWithImage } from '@/components/Setters/SelectCardWithImage'
import { TabPanel } from '@/components/TabPanel'
import { dispatcher } from './dispatcher'
import { checkEmbroidery, getOrderType } from './logic'
import { Box } from '@mui/material'
import Image from 'next/image'

type Props = {
  state: FiveState
  selectedIndex: number
  position: Position
  dispatch: React.Dispatch<unknown>
}

export const BaseSetter: React.FC<Props> = ({ state, selectedIndex, position, dispatch }) => {
  const { orderType, dominantArm, fingerGuard, materialPack, webParts, fLexEngraving } = state
  const handle = {
    orderType: dispatcher('orderType', dispatch),
    dominantArm: dispatcher('dominantArm', dispatch),
    materialPack: dispatcher('materialPack', dispatch),
    fingerGuard: dispatcher('fingerGuard', dispatch),
    webParts: dispatcher('webParts', dispatch),
    fLexEngraving: dispatcher('fLexEngraving', dispatch)
  }
  const { isCustomOrder, isColorSelectOrder, isSelectedOrderType, isNotSelectedOrderType } = getOrderType(orderType)
  const { isSpecifiedEmbroideryOnBand, existsSpecifiedLogoOnBand } = checkEmbroidery(state)
  const canNotSelectFLexEngraving = isSpecifiedEmbroideryOnBand || existsSpecifiedLogoOnBand
  return (
    <TabPanel selectedIndex={selectedIndex} index={0}>
      <SelectCard
        summary={'オーダータイプ'} // orderType
        selectedLabel={orderType.label}
        objects={ORDER_TYPES}
        isError={orderType.value === 'unselected'}
        handleChange={handle.orderType}
        disabled={orderType.value !== 'unselected'}
        defaultExpanded={isNotSelectedOrderType}
        className={TANNER_BUTTON_OPTION}
      />
      {/* <Box>
        <Image src={`/five/orderType.jpg`} alt={'orderType'} width={525} height={425} />
      </Box> */}
      <SelectCard
        summary={'利き腕'} // dominantArm
        selectedLabel={dominantArm.label}
        objects={DOMINANT_ARMS}
        isError={dominantArm.value === 'unselected'}
        handleChange={handle.dominantArm}
        defaultExpanded={dominantArm.value === 'unselected'}
        className={DOMINANT_ARM_BUTTON_OPTION}
      />
      {isSelectedOrderType && (
        <>
          <SelectCardWithImage
            summary={'ウェブ'} // webParts
            selectedLabel={webParts.label}
            objects={WEB_PARTS.filter((o) => o.positions.includes(position))}
            isError={webParts.value === 'unselected'}
            isDisplay={isCustomOrder}
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
            isDisplay={isCustomOrder}
          />
          <SelectCard
            summary={'指カバー/指当て'} // fingerGuard
            selectedLabel={fingerGuard.label}
            objects={FINGER_GUARDS}
            isError={fingerGuard.value === 'unselected'}
            isDisplay={isCustomOrder}
            defaultExpanded={fingerGuard.value === 'unselected'}
            className={FINGER_GUARD_TYPE_BUTTON_OPTION}
            handleChange={handle.fingerGuard}
          />
          <SelectCard
            summary={'バンド部F・レックス刻印'} // fLexEngraving
            selectedLabel={fLexEngraving.label}
            objects={F_LEX_ENGRAVINGS.filter((o) => (canNotSelectFLexEngraving ? o.value === 'none' : true))}
            isDisplay={isCustomOrder || isColorSelectOrder}
            isError={fLexEngraving.value === 'unselected'}
            defaultExpanded={fLexEngraving.value === 'unselected'}
            className={WELTING_CUT_BUTTON_OPTION}
            description={canNotSelectFLexEngraving ? '選択をご希望の場合、[通常刺繍-バンド部]または[指定ロゴ-バンド部]指定を解除してください。' : ''}
            handleChange={handle.fLexEngraving}
          />
        </>
      )}
    </TabPanel>
  )
}

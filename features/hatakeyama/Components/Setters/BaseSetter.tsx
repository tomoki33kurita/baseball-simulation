import React from 'react'
import { HatakeyamaState } from '@/features/hatakeyama/types'
import { Position } from '@/types'
import {
  BACK_STYLES_CATCHER,
  FINGER_GUARD_TYPE_BUTTON_OPTION,
  SIZES,
  WEB_LACE_STYLES,
  LEATHER_THICKNESS,
  CORE_HARDNESSES,
  BANK_LACE_DIRECTIONS
} from '@/features/hatakeyama/Constants/base'
import { SelectCard } from '@/components/Setters/SelectCard'
import { TabPanel } from '@/components/TabPanel'
import { handleGenuine } from './dispatcher'
import { positionChecker } from '@/util/logic'
import { getFingerGuardOptions } from './logic'

type Props = {
  state: HatakeyamaState
  selectedIndex: number
  position: Position
  dispatch: React.Dispatch<unknown>
}

export const BaseSetter: React.FC<Props> = ({ state, selectedIndex, position, dispatch }) => {
  const { size, webLaceStyle, backStyle, leatherThickness, fingerGuard, coreHardness, bankLaceDirection } = state
  const handle = {
    backStyle: handleGenuine(dispatch)('backStyle'),
    size: handleGenuine(dispatch)('size'),
    webLaceStyle: handleGenuine(dispatch)('webLaceStyle'),
    leatherThickness: handleGenuine(dispatch)('leatherThickness'),
    coreHardness: handleGenuine(dispatch)('coreHardness'),
    gloveSize: handleGenuine(dispatch)('gloveSize'),
    bankLaceDirection: handleGenuine(dispatch)('bankLaceDirection'),
    loopOfRingFinger: handleGenuine(dispatch)('loopOfRingFinger'),
    materialPack: handleGenuine(dispatch)('materialPack'),
    fingerGuard: handleGenuine(dispatch)('fingerGuard'),
    webParts: handleGenuine(dispatch)('webParts')
  }
  const { isMitt, isCatcher } = positionChecker(position)
  const isSelectableWebLaceStyle = ['basket2', 'tNet3'].includes(state.webParts.value)
  const fingerGuardOptions = getFingerGuardOptions(state)

  return (
    <TabPanel selectedIndex={selectedIndex} index={0} isDark>
      <SelectCard
        summary={'バックスタイル'} // leatherThickness
        selectedLabel={backStyle.label}
        objects={BACK_STYLES_CATCHER}
        isError={backStyle.value === 'unselected'}
        defaultExpanded={backStyle.value === 'unselected'}
        handleChange={handle.backStyle}
        description={"Genuineでは'薄く'を推奨しております。"}
        isDark
      />

      <SelectCard
        summary={'小指ターゲット加工'} // leatherThickness
        selectedLabel={leatherThickness.label}
        objects={LEATHER_THICKNESS}
        isError={leatherThickness.value === 'unselected'}
        defaultExpanded={leatherThickness.value === 'unselected'}
        handleChange={handle.leatherThickness}
        description={"Genuineでは'薄く'を推奨しております。"}
        isDark
      />
      <SelectCard
        summary={'指カバー/指当て'} // fingerGuard
        selectedLabel={fingerGuard.label}
        objects={fingerGuardOptions}
        isError={fingerGuard.value === 'unselected'}
        defaultExpanded={fingerGuard.value === 'unselected'}
        className={FINGER_GUARD_TYPE_BUTTON_OPTION}
        handleChange={handle.fingerGuard}
        isDark
      />
      <SelectCard
        summary={'サイズ'} // size
        selectedLabel={size.label}
        objects={SIZES}
        isError={size.value === 'unselected'}
        defaultExpanded={size.value === 'unselected'}
        handleChange={handle.size}
        isDisplay={!isMitt}
        isDark
      />
      <SelectCard
        summary={'ウェブ紐スタイル'} // webLaceStyle
        selectedLabel={webLaceStyle.label}
        objects={WEB_LACE_STYLES}
        isError={webLaceStyle.value === 'unselected'}
        defaultExpanded={webLaceStyle.value === 'unselected'}
        isDisplay={isSelectableWebLaceStyle || isCatcher}
        handleChange={handle.webLaceStyle}
        isDark
      />
      <SelectCard
        summary={'ウェブの種類'} // coreHardness
        selectedLabel={coreHardness.label}
        objects={CORE_HARDNESSES}
        isError={coreHardness.value === 'unselected'}
        defaultExpanded={coreHardness.value === 'unselected'}
        handleChange={handle.coreHardness}
        isDark
      />
      <SelectCard
        summary={'手口巻スタイル'} //  bankLaceDirection
        selectedLabel={bankLaceDirection.label}
        objects={BANK_LACE_DIRECTIONS}
        isError={bankLaceDirection.value === 'unselected'}
        isDisplay={!isMitt}
        defaultExpanded={bankLaceDirection.value === 'unselected'}
        handleChange={handle.bankLaceDirection}
        isDark
      />
    </TabPanel>
  )
}

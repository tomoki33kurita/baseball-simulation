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
  FINGER_GUARDS,
  BACK_STYLE_BUTTON_OPTION,
  MESH_COLORS,
  SIZES,
  WEB_LACE_STYLES,
  BACK_LACE_STYLES,
  LEATHER_THICKNESS,
  CORE_HARDNESSES,
  GLOVE_SIZES,
  BANK_LACE_DIRECTIONS,
  LOOP_OF_RING_FINGERS,
  MATERIAL_PACKS_FOR_FIRST_BASEMAN,
  PALM_TO_WEB_CONNECT_LACE_STYLE,
  GENUINE_EMBROIDERIES,
  GENUINE_ENGRAVINGS,
  FINGER_GUARDS_CATCHER,
  JUNIOR_GLOVE_SIZES,
  TWO_FINGER_LITTLE_SLOTS
} from '@/features/genuine/Constants/base'
import { SelectCard } from '@/components/Setters/SelectCard'
import { SelectCardWithImage } from '@/components/Setters/SelectCardWithImage'
import { TabPanel } from '@/components/TabPanel'
import { dispatcher } from './dispatcher'
import { positionChecker } from '@/util/logic'
import { getBackStyleOptions, getGenuineBackStyle, getGenuineWebParts } from './logic'
import { STITCHES } from '../../Constants/color'
import { JUNIOR_LIST } from '../../Constants/model'

type Props = {
  state: GenuineState
  selectedIndex: number
  position: Position
  dispatch: React.Dispatch<unknown>
}

export const BaseSetter: React.FC<Props> = ({ state, selectedIndex, position, dispatch }) => {
  const {
    dominantArm,
    backStyle,
    palmToWebConnectLaceStyle,
    baseModel,
    meshColor,
    size,
    webLaceStyle,
    backLaceStyle,
    leatherThickness,
    fingerGuard,
    coreHardness,
    gloveSize,
    twoFingerInLittleSlot,
    bankLaceDirection,
    loopOfRingFinger,
    materialPack,
    webParts,
    genuineBrandMark,
    genuineBrandMarkColor
  } = state
  const handle = {
    dominantArm: dispatcher('dominantArm', dispatch),
    backStyle: dispatcher('backStyle', dispatch),
    palmToWebConnectLaceStyle: dispatcher('palmToWebConnectLaceStyle', dispatch),
    meshColor: dispatcher('meshColor', dispatch),
    size: dispatcher('size', dispatch),
    webLaceStyle: dispatcher('webLaceStyle', dispatch),
    backLaceStyle: dispatcher('backLaceStyle', dispatch),
    leatherThickness: dispatcher('leatherThickness', dispatch),
    coreHardness: dispatcher('coreHardness', dispatch),
    gloveSize: dispatcher('gloveSize', dispatch),
    twoFingerInLittleSlot: dispatcher('twoFingerInLittleSlot', dispatch),
    bankLaceDirection: dispatcher('bankLaceDirection', dispatch),
    loopOfRingFinger: dispatcher('loopOfRingFinger', dispatch),
    genuineBrandMark: dispatcher('genuineBrandMark', dispatch),
    genuineBrandMarkColor: dispatcher('genuineBrandMarkColor', dispatch),
    materialPack: dispatcher('materialPack', dispatch),
    fingerGuard: dispatcher('fingerGuard', dispatch),
    webParts: dispatcher('webParts', dispatch)
  }
  const { isGlove, isMitt, isCatcher, isFirstBaseman } = positionChecker(position)
  const { isMesh, isFirstBackStyle, isUnselectedBackStyle } = getGenuineBackStyle(state)
  const { selectableWebParts } = getGenuineWebParts(isFirstBaseman)
  const isSelectableWebLaceStyle = ['basket2', 'tNet3'].includes(state.webParts.value)
  const isLoopOfRingFinger = (isGlove && !isFirstBackStyle) || isFirstBaseman
  const isSelectableGenuineMark = !isFirstBaseman && !isFirstBackStyle && !isMesh
  const isSelectableGenuineMarkColor = state.genuineBrandMark.value === 'genuineEmbroidery'
  const isJuniorModel = JUNIOR_LIST.includes(baseModel.productNumber)
  const backStyleOptions = getBackStyleOptions(position, baseModel.productNumber)

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
        summary={'手袋サイズ'} // gloveSize
        selectedLabel={gloveSize.label}
        objects={isJuniorModel ? JUNIOR_GLOVE_SIZES : GLOVE_SIZES}
        isError={gloveSize.value === 'unselected'}
        defaultExpanded={gloveSize.value === 'unselected'}
        handleChange={handle.gloveSize}
      />
      <SelectCard
        summary={'小指二本入れ仕様'} // gloveSize
        selectedLabel={twoFingerInLittleSlot.label}
        objects={TWO_FINGER_LITTLE_SLOTS}
        isError={twoFingerInLittleSlot.value === 'unselected'}
        isDisplay={!isCatcher}
        defaultExpanded={twoFingerInLittleSlot.value === 'unselected'}
        handleChange={handle.twoFingerInLittleSlot}
      />
      <SelectCard
        summary={'指カバー/指当て'} // fingerGuard
        selectedLabel={fingerGuard.label}
        objects={isCatcher ? FINGER_GUARDS_CATCHER : FINGER_GUARDS}
        isError={fingerGuard.value === 'unselected'}
        defaultExpanded={fingerGuard.value === 'unselected'}
        className={FINGER_GUARD_TYPE_BUTTON_OPTION}
        handleChange={handle.fingerGuard}
      />
      <SelectCard
        summary={'革の厚さ'} // leatherThickness
        selectedLabel={leatherThickness.label}
        objects={LEATHER_THICKNESS}
        isError={leatherThickness.value === 'unselected'}
        defaultExpanded={leatherThickness.value === 'unselected'}
        handleChange={handle.leatherThickness}
        description={"Genuineでは'薄く'を推奨しております。"}
      />
      <SelectCard
        summary={'背面デザイン'} // backStyle
        selectedLabel={backStyle.label}
        objects={backStyleOptions}
        isError={backStyle.value === 'unselected'}
        isDisplay={(isGlove && !isFirstBackStyle) || isCatcher}
        handleChange={handle.backStyle}
        disabled={isSelectableGenuineMarkColor}
        description={isSelectableGenuineMarkColor ? '変更するには、薬指一体仕様を解除してください。' : ''}
        defaultExpanded={backStyle.value === 'unselected'}
        className={BACK_STYLE_BUTTON_OPTION}
      />
      <SelectCard
        summary={'ウェブ-捕球面紐通し'}
        selectedLabel={palmToWebConnectLaceStyle.label}
        objects={PALM_TO_WEB_CONNECT_LACE_STYLE}
        isError={palmToWebConnectLaceStyle.value === 'unselected'}
        isDisplay={baseModel.productNumber === 'YT-22'}
        defaultExpanded={palmToWebConnectLaceStyle.value === 'unselected'}
        handleChange={handle.palmToWebConnectLaceStyle}
      />
      <SelectCard
        summary={'背面メッシュカラー'} // fingerGuard
        selectedLabel={meshColor.label}
        objects={MESH_COLORS}
        isError={meshColor.value === 'unselected'}
        defaultExpanded={meshColor.value === 'unselected'}
        isDisplay={isMesh}
        handleChange={handle.meshColor}
      />
      <SelectCard
        summary={'サイズ'} // size
        selectedLabel={size.label}
        objects={SIZES}
        isError={size.value === 'unselected'}
        defaultExpanded={size.value === 'unselected'}
        handleChange={handle.size}
      />
      <SelectCardWithImage
        summary={'ウェブパーツ'} // webParts
        selectedLabel={webParts.label}
        objects={selectableWebParts}
        isError={webParts.value === 'unselected'}
        defaultExpanded={webParts.value === 'unselected'}
        isDisplay={!isCatcher}
        handleChange={handle.webParts}
        className={WEB_PARTS_BUTTON_OPTION}
      />
      <SelectCard
        summary={'ウェブ紐スタイル'} // webLaceStyle
        selectedLabel={webLaceStyle.label}
        objects={WEB_LACE_STYLES}
        isError={webLaceStyle.value === 'unselected'}
        defaultExpanded={webLaceStyle.value === 'unselected'}
        isDisplay={isSelectableWebLaceStyle || isCatcher}
        handleChange={handle.webLaceStyle}
      />
      <SelectCard
        summary={'背面紐通し'} // backLaceStyle
        selectedLabel={backLaceStyle.label}
        objects={BACK_LACE_STYLES}
        isError={backLaceStyle.value === 'unselected'}
        isDisplay={isGlove}
        defaultExpanded={backLaceStyle.value === 'unselected'}
        handleChange={handle.backLaceStyle}
      />
      <SelectCard
        summary={'土手芯'} // materialPack
        selectedLabel={materialPack.label}
        objects={isFirstBaseman ? MATERIAL_PACKS_FOR_FIRST_BASEMAN : MATERIAL_PACKS}
        handleChange={handle.materialPack}
        isError={materialPack.value === 'unselected'}
        isDisplay={!isCatcher}
        defaultExpanded={materialPack.value === 'unselected'}
        className={MATERIAL_PACK_BUTTON_OPTION}
      />
      <SelectCard
        summary={'芯材の硬さ'} // coreHardness
        selectedLabel={coreHardness.label}
        objects={CORE_HARDNESSES}
        isError={coreHardness.value === 'unselected'}
        defaultExpanded={coreHardness.value === 'unselected'}
        description={"Genuineでは'硬め'を推奨しております。"}
        handleChange={handle.coreHardness}
      />
      <SelectCard
        summary={'手口巻スタイル'} //  bankLaceDirection
        selectedLabel={bankLaceDirection.label}
        objects={BANK_LACE_DIRECTIONS}
        isError={bankLaceDirection.value === 'unselected'}
        isDisplay={!isMitt}
        defaultExpanded={bankLaceDirection.value === 'unselected'}
        handleChange={handle.bankLaceDirection}
      />
      <SelectCard
        summary={'薬指リング'} //  loopOfRingFinger
        selectedLabel={loopOfRingFinger.label}
        objects={LOOP_OF_RING_FINGERS}
        isError={loopOfRingFinger.value === 'unselected'}
        isDisplay={isLoopOfRingFinger}
        defaultExpanded={loopOfRingFinger.value === 'unselected'}
        handleChange={handle.loopOfRingFinger}
      />
      <SelectCard
        summary={'Genuine刺繍'} //  ringIntegrated
        selectedLabel={genuineBrandMark.label}
        objects={GENUINE_EMBROIDERIES}
        isError={genuineBrandMark.value === 'unselected'}
        isDisplay={isSelectableGenuineMark}
        disabled={isUnselectedBackStyle}
        description={isUnselectedBackStyle ? '背面デザインを先に選択してください' : ''}
        defaultExpanded={genuineBrandMark.value === 'unselected'}
        handleChange={handle.genuineBrandMark}
      />
      <SelectCard
        summary={'Genuine刺繍カラー'} //  ringIntegratedColor
        selectedLabel={genuineBrandMarkColor.label}
        objects={STITCHES}
        isError={genuineBrandMarkColor.value === 'unselected'}
        isDisplay={isSelectableGenuineMarkColor}
        defaultExpanded={genuineBrandMarkColor.value === 'unselected'}
        handleChange={handle.genuineBrandMarkColor}
      />
      <SelectCard
        summary={'Genuine刻印'} //  ringIntegrated
        selectedLabel={genuineBrandMark.label}
        objects={GENUINE_ENGRAVINGS}
        isError={genuineBrandMark.value === 'unselected'}
        isDisplay={isFirstBaseman}
        defaultExpanded={genuineBrandMark.value === 'unselected'}
        handleChange={handle.genuineBrandMark}
      />
    </TabPanel>
  )
}

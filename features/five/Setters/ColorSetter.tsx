import SelectCard from '@/components/SelectCard'
import { Position, State } from '../types'
import TabPanel from '@/components/TabPanel'
import { SelectCardWithImage } from '@/components/SelectCardWithImage'
import { originDispatcher } from '@/app/util/logic'
import { dispatcher } from './dispatcher'
import { getColorOptionsByParts, getSelectableParts, getComponentParts, getOrderType } from './logic'
import {
  BINDING_COLOR_BUTTON_OPTION,
  WELTING_COLOR_BUTTON_OPTION,
  WELTINGS,
  LABEL_BUTTON_OPTION,
  LACE_COLOR_BUTTON_OPTION,
  LACES,
  LEATHER_COLOR_BUTTON_OPTION,
  MOUTON_BUTTON_OPTION,
  MOUTON_COLORS,
  PARTS,
  STITCH_COLOR_BUTTON_OPTION,
  STITCHES,
  FIVE_LABELS,
  BINDINGS
} from '../Constants/color'
import { DISPATCHER } from '../Constants/action'
import { Box } from '@mui/material'

type Props = {
  state: State
  selectedIndex: number
  position: Position
  dispatch: React.Dispatch<unknown>
}

const ColorSetter: React.FC<Props> = ({ state, selectedIndex, dispatch }) => {
  const { parts, orderType, drawerIndex, fiveLabel, lace, binding, stitch, welting, mouton } = state
  const partsKey = parts.value
  const partsLabel = parts.label
  const componentParts = getComponentParts(state)
  const selectedParts = componentParts[partsKey as keyof typeof componentParts]
  const selectableParts = getSelectableParts(drawerIndex, orderType)
  const colorsByParts = getColorOptionsByParts(partsKey)
  const handle = {
    [partsKey]: originDispatcher(DISPATCHER, partsKey, dispatch, colorsByParts),
    parts: originDispatcher(DISPATCHER, 'parts', dispatch, PARTS),
    lace: dispatcher('lace', dispatch),
    binding: dispatcher('binding', dispatch),
    stitch: dispatcher('stitch', dispatch),
    welting: dispatcher('welting', dispatch),
    mouton: dispatcher('mouton', dispatch),
    fiveLabel: dispatcher('fiveLabel', dispatch)
  }
  const { isBasic, isColorSelectOrder, isCustomOrder, isNotSelectedOrderType } = getOrderType(orderType)
  const isSelectableColor = isColorSelectOrder || isCustomOrder

  if (!componentParts || !selectableParts) return <></>
  return (
    <TabPanel selectedIndex={selectedIndex} index={1}>
      {isNotSelectedOrderType && <Box my={3} color={'blue'}>{`パーツ設定 > オーダータイプ を先に選択してください。`}</Box>}
      {isBasic && <Box my={3} color={'blue'}>{`選択できる項目はありません。`}</Box>}
      {(isColorSelectOrder || isCustomOrder) && (
        <>
          <SelectCard
            summary={'パーツ'}
            selectedLabel={partsLabel}
            objects={selectableParts}
            defaultExpanded={orderType.value === 'custom'}
            handleChange={handle.parts}
          />
          <SelectCard
            summary={`${partsLabel}カラー`}
            selectedLabel={selectedParts.label}
            selectedColor={selectedParts.color}
            objects={colorsByParts}
            handleChange={handle[partsKey]}
            className={LEATHER_COLOR_BUTTON_OPTION}
          />
          <SelectCard
            summary={'ハミダシ'}
            selectedLabel={welting.label}
            selectedColor={welting.color}
            objects={WELTINGS}
            defaultExpanded={welting.value === 'unselected'}
            handleChange={handle.welting}
            isError={welting.value === 'unselected'}
            isDisplay={isCustomOrder}
            className={WELTING_COLOR_BUTTON_OPTION}
          />
          <SelectCard
            summary={'ヘリ革'}
            selectedLabel={binding.label}
            selectedColor={binding.color}
            objects={BINDINGS}
            defaultExpanded={binding.value === 'unselected'}
            handleChange={handle.binding}
            isError={binding.value === 'unselected'}
            isDisplay={isCustomOrder}
            className={BINDING_COLOR_BUTTON_OPTION}
          />
          <SelectCard
            summary={'縫い糸'}
            selectedLabel={stitch.label}
            selectedColor={stitch.color}
            objects={STITCHES}
            defaultExpanded={stitch.value === 'unselected'}
            handleChange={handle.stitch}
            isError={stitch.value === 'unselected'}
            isDisplay={isSelectableColor}
            className={STITCH_COLOR_BUTTON_OPTION}
          />
          <SelectCard
            summary={'レース'}
            selectedLabel={lace.label}
            selectedColor={lace.color}
            objects={LACES}
            defaultExpanded={lace.value === 'unselected'}
            handleChange={handle.lace}
            isError={lace.value === 'unselected'}
            isDisplay={isSelectableColor}
            className={LACE_COLOR_BUTTON_OPTION}
          />
          <SelectCardWithImage
            summary={'ラベル'}
            selectedLabel={fiveLabel.label}
            selectedColor={fiveLabel.color}
            objects={FIVE_LABELS}
            imageWidth={150}
            defaultExpanded={fiveLabel.value === 'unselected'}
            isShowLabel
            isError={fiveLabel.value === 'unselected'}
            isDisplay={isSelectableColor}
            handleChange={handle.fiveLabel}
            className={LABEL_BUTTON_OPTION}
          />
          <SelectCard
            summary={'ムートン'}
            selectedLabel={mouton.label}
            selectedColor={mouton.color}
            objects={MOUTON_COLORS}
            defaultExpanded={mouton.value === 'unselected'}
            handleChange={handle.mouton}
            isError={mouton.value === 'unselected'}
            isDisplay={isSelectableColor}
            className={MOUTON_BUTTON_OPTION}
          />
        </>
      )}
    </TabPanel>
  )
}
export default ColorSetter

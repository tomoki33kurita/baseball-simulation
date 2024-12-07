import { SelectCard } from '@/components/Setters/SelectCard'
import { GenuineState } from '@/features/genuine/types'
import { Position } from '@/types'
import { TabPanel } from '@/components/TabPanel'
import { dispatcher } from './dispatcher'
import { getColorOptionsByParts, getSelectableParts, getComponentParts, getBackStyle, filterSelectableParts } from './logic'
import {
  BINDING_COLOR_BUTTON_OPTION,
  WELTING_COLOR_BUTTON_OPTION,
  WELTINGS,
  LACE_COLOR_BUTTON_OPTION,
  LACES,
  LEATHER_COLOR_BUTTON_OPTION,
  MOUTON_BUTTON_OPTION,
  MOUTON_COLORS,
  PARTS,
  STITCH_COLOR_BUTTON_OPTION,
  STITCHES,
  BINDINGS,
  GENUINE_LABELS
} from '../../Constants/color'
import { originDispatcher } from '@/util/logic'
import { DISPATCHER } from '@/features/genuine/Constants/action'

type Props = {
  state: GenuineState
  selectedIndex: number
  position: Position
  dispatch: React.Dispatch<unknown>
}

export const ColorSetter: React.FC<Props> = ({ state, selectedIndex, dispatch }) => {
  const { parts, lace, binding, stitch, welting, mouton, genuineLabel } = state
  const partsKey = parts.value
  const partsLabel = parts.label
  const componentParts = getComponentParts(state)
  const selectedParts = componentParts[partsKey as keyof typeof componentParts]
  const selectableParts = getSelectableParts(state)
  const filteredParts = filterSelectableParts(state, selectableParts)
  const colorsByParts = getColorOptionsByParts(partsKey)
  const handle = {
    [partsKey]: originDispatcher(DISPATCHER, partsKey, dispatch, colorsByParts),
    parts: originDispatcher(DISPATCHER, 'parts', dispatch, PARTS),
    lace: dispatcher('lace', dispatch),
    binding: dispatcher('binding', dispatch),
    stitch: dispatcher('stitch', dispatch),
    welting: dispatcher('welting', dispatch),
    mouton: dispatcher('mouton', dispatch),
    genuineLabel: dispatcher('genuineLabel', dispatch)
  }

  if (!componentParts || !selectableParts) return <></>
  return (
    <TabPanel selectedIndex={selectedIndex} index={1}>
      <SelectCard summary={'パーツ'} selectedLabel={partsLabel} objects={filteredParts} handleChange={handle.parts} />
      <SelectCard
        summary={`${partsLabel}カラー`}
        selectedLabel={selectedParts.label}
        selectedColor={selectedParts.color}
        objects={colorsByParts}
        handleChange={handle[partsKey]}
        className={LEATHER_COLOR_BUTTON_OPTION}
      />
      <SelectCard
        summary={'ヘリ革'}
        selectedLabel={binding.label}
        selectedColor={binding.color}
        objects={BINDINGS}
        defaultExpanded={binding.value === 'unselected'}
        handleChange={handle.binding}
        isError={binding.value === 'unselected'}
        className={BINDING_COLOR_BUTTON_OPTION}
      />
      <SelectCard
        summary={'ハミダシ'}
        selectedLabel={welting.label}
        selectedColor={welting.color}
        objects={WELTINGS}
        defaultExpanded={welting.value === 'unselected'}
        handleChange={handle.welting}
        isError={welting.value === 'unselected'}
        className={WELTING_COLOR_BUTTON_OPTION}
      />
      <SelectCard
        summary={'ステッチ'}
        selectedLabel={stitch.label}
        selectedColor={stitch.color}
        objects={STITCHES}
        defaultExpanded={stitch.value === 'unselected'}
        handleChange={handle.stitch}
        isError={stitch.value === 'unselected'}
        className={STITCH_COLOR_BUTTON_OPTION}
      />
      <SelectCard
        summary={'革紐'}
        selectedLabel={lace.label}
        selectedColor={lace.color}
        objects={LACES}
        defaultExpanded={lace.value === 'unselected'}
        handleChange={handle.lace}
        isError={lace.value === 'unselected'}
        className={LACE_COLOR_BUTTON_OPTION}
      />
      <SelectCard
        summary={'ムートン'}
        selectedLabel={mouton.label}
        // selectedColor={mouton.color}
        objects={MOUTON_COLORS}
        defaultExpanded={mouton.value === 'unselected'}
        handleChange={handle.mouton}
        isError={mouton.value === 'unselected'}
        className={MOUTON_BUTTON_OPTION}
      />
      <SelectCard
        summary={'ラベル'} //
        selectedLabel={genuineLabel.label}
        objects={GENUINE_LABELS}
        isError={genuineLabel.value === 'unselected'}
        defaultExpanded={genuineLabel.value === 'unselected'}
        handleChange={handle.genuineLabel}
      />
    </TabPanel>
  )
}

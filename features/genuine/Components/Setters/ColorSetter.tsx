import { SelectCard } from '@/components/Setters/SelectCard'
import { GenuineState } from '@/features/genuine/types'
import { Position } from '@/types'
import { TabPanel } from '@/components/TabPanel'
import { handleGenuine } from './dispatcher'
import { getColorOptionsByParts, getSelectableParts, getComponentParts, getBackStyle, filterSelectableParts, getGenuineLabelOptions } from './logic'
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
  LININGS,
  LININGS_COLOR_BUTTON_OPTION
} from '@/features/genuine/Constants/color'
import { DISPATCHER } from '@/features/genuine/Constants/action'
import { originDispatcher, positionChecker } from '@/util/logic'

type Props = {
  state: GenuineState
  selectedIndex: number
  position: Position
  dispatch: React.Dispatch<unknown>
}

export const ColorSetter: React.FC<Props> = ({ state, selectedIndex, dispatch }) => {
  const { parts, lace, linings, binding, stitch, welting, palmWelting, mouton, genuineLabel, embroideries } = state
  const partsKey = parts.value
  const partsLabel = parts.label
  const { isFirstBaseman, isCatcher } = positionChecker(state.baseModel.position)
  const { isTMBackStyle, isFirstBackStyle } = getBackStyle(state)
  const componentParts = getComponentParts(state)
  const selectedParts = componentParts[partsKey as keyof typeof componentParts]
  const selectableParts = getSelectableParts(state)
  const filteredParts = filterSelectableParts(state, selectableParts)
  const colorsByParts = getColorOptionsByParts(partsKey, state)
  const genuineLabelOptions = getGenuineLabelOptions(state)
  const isBandSideEmbroiderySelected = embroideries.some((e) => e.position.value === 'bandSide')

  const handle = {
    [partsKey]: originDispatcher(DISPATCHER, partsKey, dispatch, colorsByParts),
    parts: originDispatcher(DISPATCHER, 'parts', dispatch, PARTS),
    lace: handleGenuine(dispatch)('lace'),
    binding: handleGenuine(dispatch)('binding'),
    linings: originDispatcher(DISPATCHER, 'linings', dispatch, isCatcher ? colorsByParts : LININGS),
    stitch: handleGenuine(dispatch)('stitch'),
    welting: handleGenuine(dispatch)('welting'),
    palmWelting: handleGenuine(dispatch)('palmWelting'),
    mouton: handleGenuine(dispatch)('mouton'),
    genuineLabel: handleGenuine(dispatch)('genuineLabel')
  }

  if (!componentParts || !selectableParts) return <></>
  return (
    <TabPanel selectedIndex={selectedIndex} index={1} isDark>
      <SelectCard
        summary={'ラベル'}
        selectedLabel={genuineLabel.label}
        objects={genuineLabelOptions}
        isError={genuineLabel.value === 'unselected'}
        defaultExpanded={genuineLabel.value === 'unselected'}
        disabled={isBandSideEmbroiderySelected}
        description={isBandSideEmbroiderySelected ? '※変更するには、"バンド横"への刺繍を解除してください。' : ''}
        handleChange={handle.genuineLabel}
        isDark
      />
      <SelectCard summary={'パーツ'} selectedLabel={partsLabel} objects={filteredParts} handleChange={handle.parts} isDark />
      <SelectCard
        summary={`${partsLabel}カラー`}
        selectedLabel={selectedParts.label}
        selectedColor={selectedParts.color}
        objects={colorsByParts}
        handleChange={handle[partsKey]}
        className={LEATHER_COLOR_BUTTON_OPTION}
        isDark
      />
      <SelectCard
        summary={'裏革'}
        selectedLabel={linings.label}
        selectedColor={linings.color}
        objects={isCatcher ? colorsByParts : LININGS}
        defaultExpanded={linings.value === 'unselected'}
        handleChange={handle.linings}
        isError={linings.value === 'unselected'}
        className={LININGS_COLOR_BUTTON_OPTION}
        isDark
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
        isDark
      />
      <SelectCard
        summary={'ハミダシ'}
        selectedLabel={welting.label}
        selectedColor={welting.color}
        objects={isCatcher ? WELTINGS : WELTINGS.filter((w) => w.value !== 'none')}
        defaultExpanded={welting.value === 'unselected'}
        handleChange={handle.welting}
        isError={welting.value === 'unselected'}
        isDisplay={!isFirstBaseman && !isTMBackStyle}
        className={WELTING_COLOR_BUTTON_OPTION}
        isDark
      />
      <SelectCard
        summary={'ハミダシ(捕球面)'}
        selectedLabel={palmWelting.label}
        selectedColor={palmWelting.color}
        objects={WELTINGS}
        defaultExpanded={palmWelting.value === 'unselected'}
        handleChange={handle.palmWelting}
        isError={palmWelting.value === 'unselected'}
        isDisplay={isCatcher && ((!isTMBackStyle && welting.value === 'none') || isTMBackStyle)}
        className={WELTING_COLOR_BUTTON_OPTION}
        isDark
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
        isDark
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
        isDark
      />
      <SelectCard
        summary={'ムートン'}
        selectedLabel={mouton.label}
        // selectedColor={mouton.color}
        objects={MOUTON_COLORS}
        defaultExpanded={mouton.value === 'unselected'}
        handleChange={handle.mouton}
        isDisplay={!isFirstBackStyle}
        isError={mouton.value === 'unselected'}
        className={MOUTON_BUTTON_OPTION}
        isDark
      />
    </TabPanel>
  )
}

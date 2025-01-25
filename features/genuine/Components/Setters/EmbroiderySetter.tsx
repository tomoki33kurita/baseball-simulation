import React from 'react'
import { Box, Accordion, AccordionDetails } from '@mui/material'
import { GenuineState } from '@/features/genuine/types'
import { TabPanel } from '@/components/TabPanel'
import { SelectCard } from '@/components/Setters/SelectCard'
import { EmbroideryFormUpDown } from '@/components/Setters/Embroidery/EmbroideryFormUpDown'
import { EMBROIDERY_COLORS, TYPE_FACES } from '@/features/genuine/Constants/embroidery'
import { EmbroideryAccordionSummary } from '@/components/Setters/Embroidery/EmbroideryAccordionSummary'
import { EmbroideryContent } from '@/components/Setters/Embroidery/EmbroideryContent'
import {
  characterCheckHelper,
  embroideryFlagGenerator,
  generateSubColors,
  getBackStyle,
  selectablePositionGenerator,
  useEmbroideriesDispatchGenerator
} from './logic'
import { BrockCard } from '@/components/BrockCard'

type Props = {
  state: GenuineState
  selectedIndex: number
  isDark?: boolean
  dispatch: React.Dispatch<unknown>
}

export const EmbroiderySetter: React.FC<Props> = ({ state, selectedIndex, isDark, dispatch }) => {
  const { embroideries, genuineLabel } = state
  const { handle } = useEmbroideriesDispatchGenerator(dispatch, embroideries)
  const isUnselectedLabel = genuineLabel.value === 'unselected'
  const isUnselectedDominantArm = state.dominantArm.value === 'unselected'

  return (
    <TabPanel selectedIndex={selectedIndex} index={2} isDark>
      {isUnselectedDominantArm && <BrockCard message={'聞き手を先に選択してください。'} isDark={isDark} />}
      {!isUnselectedDominantArm && isUnselectedLabel && <BrockCard message={'ラベルを先に選択してください。'} isDark={isDark} />}
      {isUnselectedDominantArm || isUnselectedLabel ? null : (
        <>
          <EmbroideryFormUpDown embroideries={embroideries} dispatch={dispatch} isDark />
          {embroideries.map((e, i) => {
            const { shadowColorLabel, edgeColorLabel, disabledShadowColor, disabledEdgeColor, isSelectedTypeFace } = embroideryFlagGenerator(e)
            const { contentMaxLength, existsContent, characterType } = characterCheckHelper(e)
            const selectablePosition = selectablePositionGenerator(state, i)
            const shadowColors = generateSubColors(disabledShadowColor)
            const edgeColors = generateSubColors(disabledEdgeColor)
            const { isFirstBackStyle } = getBackStyle(state)
            const isLiningsEmbroidery = embroideries.some((e) => ['leatherLiningFirst', 'leatherLiningSecond'].includes(e.position.value))

            return (
              <Box key={`${e.id}`} my={1}>
                <Accordion defaultExpanded style={{ background: isDark ? 'black' : 'unset' }}>
                  <EmbroideryAccordionSummary embroideryIndex={i} isDark />
                  <AccordionDetails style={{ flexWrap: 'wrap' }}>
                    <Box width={'100%'}>
                      <SelectCard
                        summary={'位置'}
                        selectedLabel={e.position.label}
                        objects={selectablePosition}
                        index={i}
                        handleChange={handle.position}
                        description={isFirstBackStyle && isLiningsEmbroidery ? '※シミュレーションには描画されません。' : ''}
                        disabled={existsContent || isUnselectedLabel}
                        isDark
                      />
                    </Box>
                    <Box width={'100%'}>
                      <EmbroideryContent
                        content={e.content}
                        contentMaxLength={contentMaxLength}
                        embroideryIndex={i}
                        handleContent={handle.content}
                        isDark
                      />
                    </Box>
                    <Box width={'100%'} mt={2}>
                      <SelectCard
                        summary={'書体'}
                        selectedLabel={e.typeFace.label}
                        objects={TYPE_FACES.filter((x) => x.selectable.includes(characterType))}
                        index={i}
                        handleChange={handle.typeFace}
                        isError={e.typeFace.value === 'unselected'}
                        caution={'反映フォントはイメージです。実際のフォントと異なる場合があります。カタログをご確認ください。'}
                        disabled={!existsContent}
                        isDark
                      />
                    </Box>
                    <Box width={'100%'}>
                      <SelectCard
                        summary={'刺繍カラー'}
                        selectedLabel={e.color.label}
                        selectedColor={e.color.color}
                        objects={EMBROIDERY_COLORS}
                        index={i}
                        handleChange={handle.color}
                        isError={e.color.value === 'unselected'}
                        disabled={!isSelectedTypeFace}
                        isDark
                      />
                    </Box>
                    <Box width={'100%'}>
                      <SelectCard
                        summary={'影カラー'}
                        selectedLabel={shadowColorLabel}
                        selectedColor={e.shadowColor.color}
                        objects={shadowColors}
                        defaultExpanded={false}
                        index={i}
                        handleChange={handle.shadowColor}
                        isError={e.shadowColor.value === 'unselected'}
                        isDark
                      />
                    </Box>
                    <Box width={'100%'}>
                      <SelectCard
                        summary={'フチカラー'}
                        selectedLabel={edgeColorLabel}
                        selectedColor={e.edgeColor.color}
                        objects={edgeColors}
                        defaultExpanded={false}
                        index={i}
                        handleChange={handle.edgeColor}
                        isError={e.edgeColor.value === 'unselected'}
                        isDark
                      />
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>
            )
          })}
        </>
      )}
    </TabPanel>
  )
}

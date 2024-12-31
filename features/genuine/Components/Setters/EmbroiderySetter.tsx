import React from 'react'
import { Box, Accordion, AccordionDetails } from '@mui/material'
import { GenuineState } from '@/features/genuine/types'
import { TabPanel } from '@/Components/TabPanel'
import { SelectCard } from '@/Components/Setters/SelectCard'
import { EmbroideryFormUpDown } from '@/Components/Setters/Embroidery/EmbroideryFormUpDown'
import { EMBROIDERY_COLORS, TYPE_FACES } from '@/features/genuine/Constants/embroidery'
import { EmbroideryAccordionSummary } from '@/Components/Setters/Embroidery/EmbroideryAccordionSummary'
import { EmbroideryContent } from '@/Components/Setters/Embroidery/EmbroideryContent'
import {
  characterCheckHelper,
  embroideryFlagGenerator,
  fontImageResolver,
  generateSubColors,
  selectablePositionGenerator,
  useEmbroideriesDispatchGenerator
} from './logic'
import Image from 'next/image'

type Props = {
  state: GenuineState
  selectedIndex: number
  dispatch: React.Dispatch<unknown>
}

export const EmbroiderySetter: React.FC<Props> = ({ state, selectedIndex, dispatch }) => {
  const { embroideries } = state
  const { handle } = useEmbroideriesDispatchGenerator(dispatch, embroideries)

  return (
    <TabPanel selectedIndex={selectedIndex} index={2}>
      <EmbroideryFormUpDown embroideries={embroideries} dispatch={dispatch} />
      {embroideries.map((e, i) => {
        const { shadowColorLabel, edgeColorLabel, disabledShadowColor, disabledEdgeColor, isSelectedTypeFace } = embroideryFlagGenerator(e)
        const { contentMaxLength, existsContent, characterType } = characterCheckHelper(e)
        const selectablePosition = selectablePositionGenerator(embroideries, i)

        const shadowColors = generateSubColors(disabledShadowColor)
        const edgeColors = generateSubColors(disabledEdgeColor)
        const { typeFace } = fontImageResolver(e)

        return (
          <Box key={`${e.id}`} my={1}>
            <Accordion defaultExpanded>
              <EmbroideryAccordionSummary embroideryIndex={i} />
              <AccordionDetails style={{ flexWrap: 'wrap' }}>
                <Box width={'100%'}>
                  <SelectCard
                    summary={'位置'}
                    selectedLabel={e.position.label}
                    objects={selectablePosition}
                    index={i}
                    handleChange={handle.position}
                    disabled={existsContent}
                  />
                </Box>
                <Box width={'100%'}>
                  <EmbroideryContent content={e.content} contentMaxLength={contentMaxLength} embroideryIndex={i} handleContent={handle.content} />
                </Box>
                <Box width={'100%'} mt={2}>
                  <SelectCard
                    summary={'書体'}
                    selectedLabel={e.typeFace.label}
                    objects={TYPE_FACES.filter((x) => x.selectable.includes(characterType))}
                    index={i}
                    handleChange={handle.typeFace}
                    isError={e.typeFace.value === 'unselected'}
                    disabled={!existsContent}
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
                  />
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        )
      })}
    </TabPanel>
  )
}

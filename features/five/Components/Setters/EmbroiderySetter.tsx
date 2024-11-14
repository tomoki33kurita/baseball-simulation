import React from 'react'
import { Box, Accordion, AccordionDetails, Card } from '@mui/material'
import { FiveState } from '@/features/five/types'
import { TabPanel } from '@/components/TabPanel'
import { SelectCard } from '@/components/Setters/SelectCard'
import { EmbroideryFormUpDown } from '@/components/Setters/Embroidery/EmbroideryFormUpDown'
import { EMBROIDERY_COLORS, LOGOS, TYPE_FACES } from '@/features/five/Constants/embroidery'
import { EmbroideryAccordionSummary } from '@/components/Setters/Embroidery/EmbroideryAccordionSummary'
import { EmbroideryContent } from '@/components/Setters/Embroidery/EmbroideryContent'
import {
  characterCheckHelper,
  embroideryFlagGenerator,
  fontImageResolver,
  generateSubColors,
  getOrderType,
  selectablePositionGenerator,
  useEmbroideriesDispatchGenerator
} from './logic'
import Image from 'next/image'
import { SET_SPECIFIED_LOGO } from '../../Constants/action'

type Props = {
  state: FiveState
  selectedIndex: number
  dispatch: React.Dispatch<unknown>
}

export const EmbroiderySetter: React.FC<Props> = ({ state, selectedIndex, dispatch }) => {
  const { embroideries, orderType, fLexEngraving } = state
  const { handle } = useEmbroideriesDispatchGenerator(dispatch, embroideries)
  const { isSelectedOrderType, isNotSelectedOrderType, isCustomOrder, isBasicOrder } = getOrderType(orderType)

  const isSelectedFLexEngraving = fLexEngraving.value !== 'unselected' || isBasicOrder
  return (
    <TabPanel selectedIndex={selectedIndex} index={2}>
      {isNotSelectedOrderType && <Box my={3} color={'blue'}>{`パーツ設定 > オーダータイプ を先に選択してください。`}</Box>}
      {isSelectedOrderType && (
        <>
          <SelectCard
            summary={'指定ロゴの刺繍'}
            selectedLabel={state.specifiedLogo.label}
            objects={LOGOS}
            handleChange={(selected: string) => {
              dispatch({
                type: SET_SPECIFIED_LOGO,
                specifiedLogo: LOGOS.find((x) => x.value === selected)
              })
            }}
            isError={state.specifiedLogo.value === 'unselected'}
            description={state.specifiedLogo.value === 'logo' ? 'ロゴデータ(画像やPDF)を小売店様にお伝えください。(+6,600円)' : ''}
          />

          {isCustomOrder && <EmbroideryFormUpDown {...{ embroideries, dispatch }} />}
          {embroideries.map((e, i) => {
            const { shadowColorLabel, edgeColorLabel, disabledShadowColor, disabledEdgeColor, isSelectedTypeFace } = embroideryFlagGenerator(e)
            const { contentMaxLength, existsContent, characterType } = characterCheckHelper(e)
            const selectablePosition = selectablePositionGenerator(state, i)

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
                        isError={e.position.value === 'unselected'}
                        disabled={existsContent || !isSelectedFLexEngraving}
                        description={!isSelectedFLexEngraving ? 'バンド部F・レックス刻印を先に選択してください。' : ''}
                      />
                    </Box>
                    <Box width={'100%'}>
                      <EmbroideryContent content={e.content} contentMaxLength={contentMaxLength} embroideryIndex={i} handleContent={handle.content} />
                    </Box>
                    <Box my={1} width={'100%'}>
                      <Card>
                        <Box>刺繍イメージ</Box>
                        <Box>
                          <Image src={`/five/embroidery/font/${typeFace.value}.jpg`} alt={typeFace.value} width={250} height={50} />
                        </Box>
                      </Card>
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
                        isDisplay={isCustomOrder}
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
                        isDisplay={isCustomOrder}
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

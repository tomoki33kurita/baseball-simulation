import React from 'react'
import { Box } from '@mui/material'
import { ItemCell } from '@/components/SimulationContent/ItemCell'
import { getFiveEmbroideryCells } from '@/features/five/Components/ConfirmContents/embroidery'
import { getOrderType } from '@/features/five/Components/Setters/logic'
import { State } from '@/types'

const cellColor = (cellValue: string) => (cellValue === 'unselected' ? 'red' : '#383838')

type Props = {
  state: State
  previousIndex: number
}

// これはドメイン除くのキツいかもなあ...
export const Embroideries: React.FC<Props> = ({ state, previousIndex }) => {
  const { embroideries } = state
  const { isCustomOrder } = getOrderType(state.orderType)
  return (
    <>
      <Box fontWeight="bold" fontSize="16px" color={'#383838'}>
        刺繍項目
      </Box>
      {state.baseModel.brand === 'five' && state.orderType.value === 'custom' && (
        <Box fontWeight="bold" fontSize="16px" color={'#383838'}>
          <ItemCell
            itemIndex={0}
            cell={{
              head: '指定ロゴ', // @ts-ignore
              label: `${state.specifiedLogo.label}${state.specifiedLogo.value === 'logo' ? `(${state.specifiedLogoPosition.label})` : ''}`
            }}
          />
        </Box>
      )}
      {embroideries.every((e) => e.content.length === 0) ? (
        <Box ml={1} fontWeight="bold" fontSize="16px" color={'#383838'}>
          (0) 通常刺繍なし
        </Box>
      ) : (
        <>
          {embroideries
            .filter((e) => e.content.trim().length > 0)
            .map((e, index) => {
              const embroideryCells = getFiveEmbroideryCells(e, isCustomOrder)
              return (
                <React.Fragment key={`${e.content}_${index}`}>
                  <Box mb={2}>
                    <Box fontWeight="bold" fontSize="16px" color={'#383838'}>
                      刺繍項目{index + 1}
                    </Box>
                    {embroideryCells.map((cell, i) => (
                      <ItemCell key={cell.head} itemIndex={i + previousIndex + index * 6} cell={cell} color={cellColor(cell.value)} />
                    ))}
                  </Box>
                </React.Fragment>
              )
            })}
        </>
      )}
    </>
  )
}

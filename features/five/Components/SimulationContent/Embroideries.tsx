import React from 'react'
import { Box } from '@mui/material'
import { getFiveEmbroideryCells } from '@/features/five/Components/ConfirmContents/embroidery'
import { getOrderType } from '@/features/five/Components/Setters/logic'
import { FiveState } from '../../types'
import { ItemCell } from '@/components/ItemCell'

const cellColor = (cellValue: string) => (cellValue === 'unselected' ? 'red' : '#383838')

type Props = {
  state: FiveState
  previousIndex: number
}

// これはドメイン除くのキツいかもなあ...
export const FiveEmbroideries: React.FC<Props> = ({ state, previousIndex }) => {
  const { embroideries } = state
  const { isCustomOrder } = getOrderType(state.orderType)
  return (
    <>
      <Box fontWeight="bold" fontSize="16px" color={'#383838'}>
        刺繍項目
      </Box>
      {state.baseModel.brand === 'five' && state.orderType.value === 'custom' && (
        <Box fontSize="16px" color={'#383838'}>
          <ItemCell
            itemIndex={0}
            cell={{
              head: '指定ロゴ', // @ts-ignore
              label: `${state.specifiedLogo.label}${state.specifiedLogo.value === 'logo' ? `(${state.specifiedLogoPosition.label})` : ''}`
            }}
            color={cellColor(state.specifiedLogo.value)}
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

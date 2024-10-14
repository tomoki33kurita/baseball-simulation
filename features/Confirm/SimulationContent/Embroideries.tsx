import React from 'react'
import { Box } from '@mui/material'
import { State } from '@/features/five/types'
import { ItemCell } from './ItemCell'
import { genEmbroideryCells } from '@/features/five/ConfirmContents/embroidery'
import { getOrderType } from '@/features/five/Setters/logic'

const cellColor = (cellValue: string) => (cellValue === 'unselected' ? 'red' : '#383838')

type Props = {
  state: State
  previousIndex: number
}

export const Embroideries: React.FC<Props> = ({ state, previousIndex }) => {
  const { embroideries } = state
  const { isCustomOrder } = getOrderType(state.orderType)
  return (
    <>
      {embroideries.every((e) => e.content.length === 0) ? (
        <Box fontWeight="bold" fontSize="16px" color={'#383838'}>
          刺繍項目 - 刺繍なし
        </Box>
      ) : (
        <>
          {embroideries
            .filter((e) => e.content.trim().length > 0)
            .map((e, index) => {
              const embroideryCells = genEmbroideryCells(e, isCustomOrder)
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

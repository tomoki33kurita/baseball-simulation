import React from 'react'
import { Box } from '@mui/material'
import { GenuineState } from '../../types'
import { getEmbroideryCells } from '@/features/Logic'
import { Embroidery } from '@/types'
import { ItemCell } from '@/components/ItemCell'

const cellColor = (cellValue: string, isDark?: boolean) => (cellValue === 'unselected' ? (isDark ? 'orange' : 'red') : isDark ? '#fff' : '#383838')

type Props = {
  state: GenuineState
  previousIndex: number
}

export const GenuineEmbroideries: React.FC<Props> = ({ state, previousIndex }) => {
  const { embroideries } = state
  return (
    <>
      <Box fontWeight="bold" fontSize="16px" color={'#ffffff'}>
        刺繍項目
      </Box>
      {embroideries.every((e) => e.content.length === 0) ? (
        <Box ml={1} fontWeight="bold" fontSize="16px" color={'#ffffff'}>
          (0) 通常刺繍なし
        </Box>
      ) : (
        <>
          {embroideries
            .filter((e) => e.content.trim().length > 0)
            .map((e, index) => {
              const existEmbroidery = state.embroideries.filter((e: Embroidery) => e.content.trim().length > 0).length > 0
              const embroideryCells = getEmbroideryCells(state, existEmbroidery)
              return (
                <React.Fragment key={`${e.content}_${index}`}>
                  <Box mb={2}>
                    <Box fontWeight="bold" fontSize="16px" color={'#ffffff'}>
                      刺繍項目{index + 1}
                    </Box>
                    {embroideryCells.map((cell, i) => (
                      <ItemCell key={cell.head} itemIndex={i + previousIndex + index * 6} cell={cell} color={cellColor(cell.value, true)} isDark />
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

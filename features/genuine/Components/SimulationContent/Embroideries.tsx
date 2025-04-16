import React from 'react'
import { Box } from '@mui/material'
import { GenuineState } from '../../types'
import { ItemCell } from '@/components/ItemCell'
import { getGenuineEmbroideryCells } from '../ConfirmContents/embroidery'

const cellColor = (cellValue: string, isDark?: boolean) => (cellValue === 'unselected' ? (isDark ? 'orange' : 'red') : isDark ? '#fff' : '#282828')

type Props = {
  state: GenuineState
  previousIndex: number
  isDark?: boolean
}

export const GenuineEmbroideries: React.FC<Props> = ({ state, previousIndex, isDark }) => {
  const { embroideries } = state
  return (
    <>
      <Box fontWeight="bold" fontSize="16px" color={isDark ? '#ffffff' : '#282828'}>
        刺繍項目
      </Box>
      {embroideries.every((e) => e.content.length === 0) ? (
        <Box ml={1} fontWeight="bold" fontSize="16px" color={isDark ? '#ffffff' : '#282828'}>
          (0) 通常刺繍なし
        </Box>
      ) : (
        <>
          {embroideries
            .filter((e) => e.content.trim().length > 0)
            .map((e, index) => {
              const embroideryCells = getGenuineEmbroideryCells(e)
              return (
                <React.Fragment key={`${e.content}_${index}`}>
                  <Box mb={2}>
                    <Box fontWeight="bold" fontSize="16px" color={isDark ? '#ffffff' : '#282828'}>
                      刺繍項目{index + 1}
                    </Box>
                    {embroideryCells.map((cell, i) => (
                      <ItemCell
                        key={cell.head}
                        itemIndex={i + previousIndex + index * 6}
                        cell={cell}
                        color={cellColor(cell.value, isDark)}
                        isDark={isDark}
                      />
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

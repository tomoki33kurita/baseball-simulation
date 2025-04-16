import React from 'react'
import { Box } from '@mui/material'

type Props = {
  itemIndex: number
  cell: {
    head: string
    label: string
    value?: string
  }
  color?: string
  isDark?: boolean
}

export const ItemCell: React.FC<Props> = ({ itemIndex, cell, color, isDark }) => {
  return (
    <Box ml={1} color={isDark ? '#fff' : '#282828'}>
      {`(${itemIndex}) ${cell.head}: `}
      <Box component="span" fontWeight="bold" color={color}>
        {cell.label}
      </Box>
    </Box>
  )
}

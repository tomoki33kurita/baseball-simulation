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
}

export const ItemCell: React.FC<Props> = ({ itemIndex, cell, color }) => {
  return (
    <Box ml={1} color={'#383838'}>
      {`(${itemIndex}) ${cell.head}: `}
      <Box component="span" fontWeight="bold" color={color}>
        {cell.label}
      </Box>
    </Box>
  )
}

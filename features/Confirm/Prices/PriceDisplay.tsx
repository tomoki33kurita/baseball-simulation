import React from 'react'
import { Box } from '@mui/material'

type Props = {
  priceLabel: string
  priceValue: number
}

export const PriceDisplay: React.FC<Props> = ({ priceLabel, priceValue }) => {
  const price = (priceValue || 0)?.toLocaleString()
  const priceWithUnit = `${price}円`
  // const priceWithUnit = `${price}円`
  return (
    <Box>
      {priceLabel}
      {priceWithUnit}
    </Box>
  )
}

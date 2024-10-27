import React from 'react'
import { Box } from '@mui/material'

type Props = {
  label: string
  amount: number
}

export const PriceDisplay: React.FC<Props> = ({ label, amount }) => {
  const price = amount.toLocaleString()
  const priceWithUnit = `${price}円`
  // const priceWithUnit = `${price}円`
  return (
    <Box>
      {label}
      {priceWithUnit}
    </Box>
  )
}

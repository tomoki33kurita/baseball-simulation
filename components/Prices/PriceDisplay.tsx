import React from 'react'
import { Box } from '@mui/material'

type Props = {
  label: string
  amount: number
  isDark?: boolean
}

export const PriceDisplay: React.FC<Props> = ({ label, amount, isDark }) => {
  const price = amount.toLocaleString()
  const priceWithUnit = `${price}円`
  // const priceWithUnit = `${price}円`
  return (
    <Box color={isDark ? '#fff' : ''} fontWeight={isDark ? 'bold' : 'normal'}>
      {label}：{priceWithUnit}
    </Box>
  )
}

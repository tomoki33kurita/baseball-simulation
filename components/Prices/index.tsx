import React from 'react'
import { Box } from '@mui/material'
import { PriceDisplay } from './PriceDisplay'
import { calculateBaseCost, calculateEmbroideryCost, calculateOptionCost } from '@/features/Logic/cost'
import { State } from '@/types'

type Props = {
  state: State
}
export const Prices: React.FC<Props> = ({ state }) => {
  const brand = state.baseModel.brand
  const basePrice = calculateBaseCost(brand, state)
  const optionPrice = calculateOptionCost(brand, state)
  const embroideryPrice = calculateEmbroideryCost(brand, state)
  const totalPrice = basePrice + embroideryPrice + (optionPrice || 0)

  return (
    <Box border={'solid 1px #eee'} p={1} my={1}>
      <PriceDisplay label={'基本金額'} amount={basePrice} />
      <PriceDisplay label={'オプション金額'} amount={optionPrice} />
      <PriceDisplay label={'刺繍金額'} amount={embroideryPrice} />
      <PriceDisplay label={'合計金額'} amount={totalPrice} />
    </Box>
  )
}

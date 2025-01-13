import React from 'react'
import { Box } from '@mui/material'
import { PriceDisplay } from './PriceDisplay'
import { calculateBaseCost, calculateEmbroideryCost, calculateOptionCost } from '@/features/Logic/cost'
import { State } from '@/types'

type Props = {
  state: State
  isDark?: boolean
}
export const Prices: React.FC<Props> = ({ state, isDark }) => {
  const brand = state.baseModel.brand
  const basePrice = calculateBaseCost(brand, state)
  const optionPrice = calculateOptionCost(brand, state)
  const embroideryPrice = calculateEmbroideryCost(brand, state)
  const totalPrice = basePrice + embroideryPrice + optionPrice
  return (
    <Box border={`solid 1px ${isDark ? '#fff' : '#eee'}`} p={1} my={1}>
      <PriceDisplay label={'基本金額'} amount={basePrice} {...{ isDark }} />
      <PriceDisplay label={'オプション金額'} amount={optionPrice} {...{ isDark }} />
      <PriceDisplay label={'刺繍金額'} amount={embroideryPrice} {...{ isDark }} />
      <PriceDisplay label={'合計金額'} amount={totalPrice} {...{ isDark }} />
    </Box>
  )
}

import React from 'react'
import { Box } from '@mui/material'
import { FiveState } from '@/features/five/types'
import { PriceDisplay } from './PriceDisplay'
import { calculatorOfEmbroideryCost, calculatorOfOptionCost } from '@/util/cost'

type Props = {
  basePrice: number
  state: FiveState
}
export const Prices: React.FC<Props> = ({ basePrice, state }) => {
  const optionPrice = calculatorOfOptionCost(state)
  const embroideryPrice = calculatorOfEmbroideryCost(state)
  const totalPrice = basePrice + embroideryPrice + (optionPrice || 0)

  return (
    <Box border={'solid 1px #eee'} p={1} my={1}>
      <PriceDisplay priceLabel={'基本金額'} priceValue={basePrice} />
      <PriceDisplay priceLabel={'オプション金額'} priceValue={optionPrice} />
      <PriceDisplay priceLabel={'刺繍金額'} priceValue={embroideryPrice} />
      <PriceDisplay priceLabel={'合計金額'} priceValue={totalPrice} />
    </Box>
  )
}

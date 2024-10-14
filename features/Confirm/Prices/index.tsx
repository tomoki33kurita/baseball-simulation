import React from 'react'
import { Box } from '@mui/material'
import { State } from '@/features/five/types'
import { PriceDisplay } from './PriceDisplay'
import { calculatorOfEmbroideryCost, calculatorOfOptionCost } from '@/app/util/cost'

type Props = {
  state: State
}
export const Prices: React.FC<Props> = ({ state }) => {
  const basePrice = state.orderType.price // 今はFIVEのことだけ想定
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

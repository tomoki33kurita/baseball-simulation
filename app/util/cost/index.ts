import { Embroidery, State } from '@/features/five/types'

export const calculatorOfOptionCost = (state: State): number => {
  return 0
}

export const calculatorOfEmbroideryCost = (state: State) => {
  const embroideries = state.embroideries
  const embroideriesOfFiltered = embroideries.filter((e: Embroidery) => e.content.trim()?.length > 0)
  switch (state.baseModel.brand) {
    default: {
      const singlePrice = 2200
      const shadowPrice = 2530
      const edgePrice = 2750
      const costsOfEmbroideries = embroideriesOfFiltered
        .map((e: Embroidery) => {
          const isEdge = e.edgeColor.value !== 'none' //フチ付きかどうか
          const isShadow = e.shadowColor.value !== 'none' //カゲ付きかどうか
          const cost = isEdge ? edgePrice : isShadow ? shadowPrice : singlePrice
          return cost // 2750
        }) // [2750, 2200, ...]
        .reduce((a: number, c: number) => a + c, 0) //
      return costsOfEmbroideries
    }
  }
}

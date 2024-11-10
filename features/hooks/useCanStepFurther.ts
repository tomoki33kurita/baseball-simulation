import { useState } from 'react'
import { UseFormWatch } from 'react-hook-form'
import { Embroidery, Personal, State } from '@/types'
import { CanStepFurther, FiveState } from '@/features/five/types'
import { GenuineState } from '@/features/genuine/types'
import { getFiveBaseCells } from '@/features/five/Components/ConfirmContents/base'
import { getGenuineBaseCells } from '@/features/genuine/Components/ConfirmContents/base'
import { getFiveColorCells } from '@/features/five/Components/ConfirmContents/color'
import { getGenuineColorCells } from '@/features/genuine/Components/ConfirmContents/color'
import { getOrderType } from '@/features/five/Components/Setters/logic'
import { getFiveEmbroideryCells } from '@/features/five/Components/ConfirmContents/embroidery'

type CompareEmailWatch = UseFormWatch<{
  mailAddress: string
  mailAddress2: string
}>

const isInvalidPersonalData = (personal: Personal): boolean => {
  if (!personal?.league || personal?.league?.length === 0) return true
  if (!personal?.position || personal?.position?.length === 0) return true
  // if (!personal?.mailAddress || personal?.mailAddress?.length === 0) return true
  return false
}

const getBaseCells = (state: State) => {
  switch (state.baseModel.brand) {
    case 'five':
      return getFiveBaseCells(state as FiveState)
    case 'genuine':
      return getGenuineBaseCells(state as GenuineState)
    default:
      return []
  }
}

const getColorCells = (state: State) => {
  switch (state.baseModel.brand) {
    case 'five':
      return getFiveColorCells(state as FiveState)
    case 'genuine':
      return getGenuineColorCells(state as GenuineState)
    default:
      return []
  }
}

const getEmbroideryCells = (state: State, isCustomOrder: boolean, existEmbroidery: boolean) => {
  if (!existEmbroidery) return []
  switch (state.baseModel.brand) {
    case 'five':
      return state.embroideries.map((e: Embroidery) => getFiveEmbroideryCells(e, isCustomOrder)).flat()
    case 'genuine':
      return [] //state.embroideries.map((e: Embroidery) => getFiveEmbroideryCells(e, isCustomOrder)).flat()
    default:
      return []
  }
}

export const useCanStepFurther = (state: State, isCopied: boolean, watch: CompareEmailWatch): CanStepFurther => {
  const [isSaved, setIsSave] = useState<boolean>(false)
  const watchMailAddress = watch('mailAddress')
  const watchMailAddress2 = watch('mailAddress2')

  const baseSettings = getBaseCells(state)
  const colorSettings = getColorCells(state)
  const existEmbroidery = state.embroideries.filter((e: Embroidery) => e.content.trim().length > 0).length > 0
  const { isCustomOrder } = getOrderType(state.orderType)
  const embroiderySettings = getEmbroideryCells(state, isCustomOrder, existEmbroidery)
  const existInvalidPersonal = isInvalidPersonalData(state.personal)

  const existUnselectedState = [...baseSettings, ...colorSettings, ...embroiderySettings].some((y) => y.value === 'unselected')
  const isInValidMailAddress = watchMailAddress !== watchMailAddress2 || [watchMailAddress, watchMailAddress2].some((x) => x.length === 0)

  const canInputConsumer = ![existUnselectedState].includes(true)
  const canSave = [existInvalidPersonal, isSaved, isInValidMailAddress].every((b) => b === false)
  const canClose = isCopied || (!isSaved && !isCopied)

  return {
    canSave,
    canInputConsumer,
    canClose,
    setIsSave
  }
}

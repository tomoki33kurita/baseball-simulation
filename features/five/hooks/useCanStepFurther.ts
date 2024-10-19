import { useState } from 'react'
import { UseFormWatch } from 'react-hook-form'
import { Embroidery, Personal } from '@/types'
import { CanStepFurther, FiveState } from '@/features/five/types'
import { getBaseCells } from '@/features/five/Components/ConfirmContents/base'
import { getColorCells } from '@/features/five/Components/ConfirmContents/color'
import { getOrderType } from '@/features/five/Components/Setters/logic'
import { genEmbroideryCells } from '@/features/five/Components/ConfirmContents/embroidery'

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

export const useCanStepFurther = (state: FiveState, isCopied: boolean, watch: CompareEmailWatch): CanStepFurther => {
  const [isSaved, setIsSave] = useState<boolean>(false)
  const watchMailAddress = watch('mailAddress')
  const watchMailAddress2 = watch('mailAddress2')

  const baseSettings = getBaseCells(state)
  const colorSettings = getColorCells(state)
  const existEmbroidery = state.embroideries.filter((e: Embroidery) => e.content.trim().length > 0).length > 0
  const { isCustomOrder } = getOrderType(state.orderType)
  const embroiderySettings = existEmbroidery ? state.embroideries.map((e: Embroidery) => genEmbroideryCells(e, isCustomOrder)).flat() : []
  const existInvalidPersonal = isInvalidPersonalData(state.personal)

  const existUnselectedState = [...baseSettings, ...colorSettings, ...embroiderySettings].some((y) => y.value === 'unselected')
  const isInValidMailAddress = watchMailAddress !== watchMailAddress2 || [watchMailAddress, watchMailAddress2].some((x) => x.length === 0)

  const canInputConsumer = ![existUnselectedState].includes(true)
  const canSave = [existInvalidPersonal, isSaved, isInValidMailAddress].every((b) => b === false)
  const canClose = (isSaved && isCopied) || (!isSaved && !isCopied)

  return {
    canSave,
    canInputConsumer,
    canClose,
    setIsSave
  }
}

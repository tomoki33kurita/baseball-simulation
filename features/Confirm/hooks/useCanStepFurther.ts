import { getBaseCells } from '@/features/five/ConfirmContents/base'
import { getColorCells } from '@/features/five/ConfirmContents/color'
import { genEmbroideryCells } from '@/features/five/ConfirmContents/embroidery'
import { getOrderType } from '@/features/five/Setters/logic'
import { CanStepFurther, Embroidery, Personal, State } from '@/features/five/types'
import { useState } from 'react'
import { UseFormWatch } from 'react-hook-form'

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

export const useCanStepFurther = (state: State, isCopied: boolean, watch: CompareEmailWatch): CanStepFurther => {
  const [isSaved, setIsSave] = useState<boolean>(false)
  const watchMailAddress = watch('mailAddress')
  const watchMailAddress2 = watch('mailAddress2')

  const baseSettings = getBaseCells(state)
  const colorSettings = getColorCells(state)
  const existEmbroidery = state.embroideries.filter((e: Embroidery) => e.content.trim().length > 0).length > 0
  // これFIVE固有の処理なので、FIVEのロジックに移動したい
  const { isCustomOrder } = getOrderType(state.orderType)
  const embroiderySettings = existEmbroidery ? state.embroideries.map((e: Embroidery) => genEmbroideryCells(e, isCustomOrder)).flat() : []
  // これFIVE固有の処理なので、FIVEのロジックに移動したい
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

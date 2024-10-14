import { BaseModel } from '@/features/five/types'
import React from 'react'

export const useConfirm = () => {
  const [isConfirmOpen, setIsConfirmOpen] = React.useState(false)
  const handleConfirmOpen = () => {
    setIsConfirmOpen(true)
  }
  const handleConfirmClose = () => {
    setIsConfirmOpen(false)
  }
  return {
    isConfirmOpen,
    setIsConfirmOpen,
    handleConfirmOpen,
    handleConfirmClose
  }
}

export const useSelectBaseModel = () => {
  const [selectedModel, setSelectedModel] = React.useState<BaseModel | null>(null)
  const handleBaseModel = (model: BaseModel) => setSelectedModel(model)
  return {
    selectedModel,
    handleBaseModel
  }
}

export const startConfirmMessageGenerator = (selectedModel: BaseModel | null): string => {
  if (!selectedModel) {
    return ''
  }
  const message = `${selectedModel.productNumber} を元にシミュレーションを開始します。`
  return message
}

import React, { useState } from 'react'
import axios from 'axios'
import { FiveState } from '@/features/five/types'
import { ConfirmDialog } from '@/components/ConfirmDialog'
import { useConfirm } from '@/components/SettingFrame/hooks/useConfirm'
import { Brand, Position } from '@/types'

const brandNameResolver = (brand: Brand) => {
  switch (brand) {
    case 'five':
      return 'FIVE'
    default:
      return '--'
  }
}

// const REQUEST_HEADERS = {
//   headers: {
//     // prettier-ignore
//     'Accept': 'application/json, text/plain, */*',
//     'Content-Type': 'application/json'
//   }
// }

const SAVE_SIMULATION_PATH = '/api/server/firebase/atoms/addDocument'

// const SEND_MAIL_CONSUMER_PATH = '/api/server/sendMail/consumer'

const generateSubject = (savedId: number, brand: Brand) => {
  const brandName = brandNameResolver(brand)
  return `【${brandName} オーダーシミュレーション】保存IDが発行されました ${savedId}`
}

type Props = {
  state: FiveState
  position: Position
  disabled: boolean
  email: string
  setSavedId: React.Dispatch<React.SetStateAction<string>>
  setIsSave: React.Dispatch<React.SetStateAction<boolean>>
}

export const SaveButton: React.FC<Props> = ({ state, position, disabled, email, setSavedId, setIsSave }) => {
  const [isSaving, setIsSaving] = useState(false)
  const { isConfirmOpen, setIsConfirmOpen, handleConfirmOpen, handleConfirmClose } = useConfirm()

  const handleSave = async (state: FiveState) => {
    const brand = state.baseModel.brand
    handleConfirmClose()
    setIsSaving(true)
    // ミュータブルすぎる箇所
    // genFrontImgFromCanvas(state, brand, position, 'canvasFrontConfirm')
    // genBackImgFromCanvas(state, brand, position, 'canvasBackConfirm')
    try {
      const response = await axios.post(SAVE_SIMULATION_PATH, { state })
      //   setTimeout(() => {
      //     if (response.data.id === 999) return
      //     const subject = generateSubject(response.data.id, brand)
      //     const savedId = response.data.id
      //     const imageUrlBack = (document.getElementById('canvasBackConfirm') as HTMLCanvasElement).toDataURL()
      //     const imageUrlFront = (document.getElementById('canvasFrontConfirm') as HTMLCanvasElement).toDataURL()
      //     setSavedId(savedId)
      //     axios.post(
      //       SEND_MAIL_CONSUMER_PATH,
      //       {
      //         subject,
      //         savedId,
      //         imageUrlBack,
      //         imageUrlFront,
      //         email
      //       },
      //       REQUEST_HEADERS
      //     )
      //     setIsSaving(false)
      //   }, 2000)
    } catch (err) {
      console.log(`Error ${err} `)
    }
    setIsConfirmOpen(false)
    setIsSave(true)
  }
  return (
    <ConfirmDialog
      isConfirmOpen={isConfirmOpen}
      openButtonLabel={isSaving ? '保存中...' : '保存'}
      dialogMessage={'データを保存し、メールアドレス先に保存IDを送付します。'}
      color={'primary'}
      variant={'contained'}
      disabled={disabled || isSaving}
      handleOkButton={handleConfirmOpen}
      handleCancelButton={handleConfirmClose}
      handleExecuteButton={() => handleSave(state)}
    />
  )
}

import axios from 'axios'
import { useRef, useState } from 'react'
import { Brand, State } from '@/types'
import { getBrandName } from '@/features/Logic'

const SAVE_SIMULATION_PATH = '/api/server/createDocument'
const SEND_MAIL_CONSUMER_PATH = '/api/server/mail/consumer'

const getSubject = (savedId: number, brand: Brand) => {
  const brandName = getBrandName(brand)
  return `【${brandName} オーダーシミュレーション】保存IDが発行されました ${savedId}`
}

export const useSaveSimulation = (email: string, setSavedId: React.Dispatch<React.SetStateAction<string>>) => {
  const [isSaving, setIsSaving] = useState(false)
  const executeRef = useRef(false)

  // 別のブランドのシミュレーションを保存する場合を想定して、後で修正が必要
  const handleSave = async (state: State) => {
    const brand = state.baseModel.brand
    setIsSaving(true)
    if (executeRef.current) return
    try {
      executeRef.current = true
      const response = await axios.post(SAVE_SIMULATION_PATH, state)
      if (response.data.success) {
        const savedId = response.data.id
        const subject = getSubject(savedId, brand)
        const imageUrlRear = (document.getElementById('rearSurfaceOnDialog') as HTMLCanvasElement).toDataURL()
        const imageUrlPalm = (document.getElementById('palmSurfaceOnDialog') as HTMLCanvasElement).toDataURL()
        setSavedId(savedId)
        await axios.post(SEND_MAIL_CONSUMER_PATH, {
          subject,
          savedId,
          imageUrlRear,
          imageUrlPalm,
          email,
          brand: getBrandName(state.baseModel.brand)
        })
        setIsSaving(false)
        executeRef.current = false
      }
    } catch (err) {
      console.log(`Error ${err} `)
    }
  }

  return {
    isSaving,
    handleSave
  }
}

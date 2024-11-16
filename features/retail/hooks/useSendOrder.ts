import { Supplier, Personal, SavedData, State } from '@/types'
import { useContext, useState } from 'react'
import { japaneseFont } from '@/public/font/vfsFont'
import { getPdfDocDefine } from '../Documents'
import { RetailContext } from './useRetailContext'
import { switchEmbroideryCells } from '../Documents/embroiderySettings'
import { colorCells2Condition } from '../Documents/colorSettings'
import pdfMake from 'pdfmake/build/pdfmake'
import axios from 'axios'
import { getBaseCells, getBrandName, getColorCells } from '@/features/Logic'
pdfMake.vfs = japaneseFont
pdfMake.fonts = { GenYoMin: { normal: 'ipaexg.ttf' } }
const RETAIL_EMAIL_PATH = '/api/server/mail/retail'

type OrderData<T> = {
  savedData: SavedData<T>
  personal: Personal
  supplier: Supplier
}

const divideColorSettings = (state: State) => {
  const settings = getColorCells(state)
  const settings1 = settings.filter((x) => !colorCells2Condition.includes(x.partsKey)).map((x) => ({ head: x.head, label: x.label }))
  const settings2 = settings.filter((x) => colorCells2Condition.includes(x.partsKey)).map((x) => ({ head: x.head, label: x.label }))
  return { colorSettings1: settings1, colorSettings2: settings2 }
}

const getPayload = (pdfBase64: string, orderData: OrderData<State>, retail: { email: string; name: string }) => {
  const { savedData, supplier, personal } = orderData
  const state = savedData.state
  const baseSettings = getBaseCells(state)
  const { colorSettings1, colorSettings2 } = divideColorSettings(state)
  const embroideries = state.embroideries.map(switchEmbroideryCells(state))

  return {
    subject: `【${getBrandName(state.baseModel.brand)} 発注】`,
    agencyEmail: supplier.email,
    retailEmail: retail.email,
    savedId: savedData.savedId,
    imageUrlRear: (document.getElementById('rearSurfaceOnDialog') as HTMLCanvasElement).toDataURL(),
    imageUrlPalm: (document.getElementById('palmSurfaceOnDialog') as HTMLCanvasElement).toDataURL(),
    baseSettings,
    colorSettings1,
    colorSettings2,
    embroideries,
    personal,
    pdfBase64
  }
}

export const useSendOrder = () => {
  const [isProgress, setIsProgress] = useState(false)
  const [isSendMail, setIsSendMail] = useState(false)
  const [isFailedMail, setIsFailedMail] = useState(false)
  const retail = useContext(RetailContext)

  const handleOrderMail = async (orderData: OrderData<State>) => {
    const { savedData, personal, supplier } = orderData
    if (retail === null) {
      alert('小売店情報が取得できませんでした。メーカーの担当者様にお問い合わせください。')
      return
    }
    if (confirm(`${supplier.name}に発注しますか？`)) {
      setIsProgress(true)
      try {
        const state = savedData.state
        const docDefine = getPdfDocDefine({ ...state, personal }, retail)
        pdfMake.createPdf(docDefine).getBase64((pdfBase64: string) => {
          const payload = getPayload(pdfBase64, orderData, retail)
          axios.post(RETAIL_EMAIL_PATH, payload).then((x) => {
            const isSuccess = x.status === 200
            setIsProgress(false)
            setIsSendMail(isSuccess)
            setIsFailedMail(!isSuccess)
            setTimeout(() => {
              setIsFailedMail(false)
              setIsSendMail(false)
            }, 5000)
          })
        })
      } catch (err) {
        console.log(`Error ${err} `)
      }
    }
  }
  const onCloseAlert = () => {
    setIsSendMail(false)
    setIsFailedMail(false)
  }

  return { isSendMail, isFailedMail, isProgress, handleOrderMail, onCloseAlert }
}

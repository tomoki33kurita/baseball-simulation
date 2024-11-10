import { FiveState } from '@/features/five/types'
import { Agency, Brand, State } from '@/types'
import { useContext, useState } from 'react'
import { japaneseFont } from '@/public/font/vfsFont'
import { getPdfDocDefine } from '../Documents'
import { RetailContext } from './useRetailContext'
import { getBaseCells } from '@/features/five/Components/ConfirmContents/base'
import { switchEmbroideryCells } from '../Documents/embroiderySettings'
import { colorCells2Condition } from '../Documents/colorSettings'
import { getColorCells } from '@/features/five/Components/ConfirmContents/color'
import pdfMake from 'pdfmake/build/pdfmake'
import axios from 'axios'
pdfMake.vfs = japaneseFont
pdfMake.fonts = { GenYoMin: { normal: 'ipaexg.ttf' } }
const RETAIL_EMAIL_PATH = '/api/server/mail/retail'

const brandNameIdentifier = (brand: Brand) => {
  switch (brand) {
    case 'five':
      return 'FIVE'
    default:
      return '--'
  }
}

const divideColorSettings = (state: State) => {
  const settings = getColorCells(state)
  const settings1 = settings.filter((x) => !colorCells2Condition.includes(x.partsKey)).map((x) => ({ head: x.head, label: x.label }))
  const settings2 = settings.filter((x) => colorCells2Condition.includes(x.partsKey)).map((x) => ({ head: x.head, label: x.label }))

  return { colorSettings1: settings1, colorSettings2: settings2 }
}

const getPayload = (state: State, pdfBase64: string, agency: Agency, savedId: string) => {
  const baseSettings = getBaseCells(state)
  const { colorSettings1, colorSettings2 } = divideColorSettings(state)
  const embroideries = state.embroideries.map(switchEmbroideryCells(state))
  const personal = state.personal

  return {
    subject: `【${brandNameIdentifier(state.baseModel.brand)} 発注】`,
    agencyEmail: agency.email,
    savedId,
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

  const handleOrderMail = async (state: FiveState, agency: Agency, savedId: string) => {
    if (confirm(`${agency.name}に発注しますか？`)) {
      setIsProgress(true)
      try {
        const docDefine = getPdfDocDefine(state, retail)
        pdfMake.createPdf(docDefine).getBase64((pdfBase64: string) => {
          const payload = getPayload(state, pdfBase64, agency, savedId) // 変数多すぎ
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

'use client'
import { forwardRef, useEffect, useState } from 'react'
import { Alert as MuiAlert, AlertProps, Box, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Supplier, Brand, SavedData, State } from '@/types'
import { PalmSurface } from '@/components/Drawers/PalmSurface'
import { RearSurface } from '@/components/Drawers/RearSurface'
import { Prices } from '@/components/Prices'
import { PersonalContents } from './PersonalContents'
import { SimulationContents } from './SimulationContents'

import { supplierList } from '@/app/api/server/order/supplier'
import { useSendOrder } from '../hooks/useSendOrder'
import { initialPersonal } from '../Constants/personal'
import { drawFiveRearSurface } from '@/features/five/Drawer/canvas/drawFiveRearSurface'
import { drawFivePalmSurface } from '@/features/five/Drawer/canvas/drawFivePalmSurface'
import { getCtx } from '@/util/canvas/ctx'
import { FiveState } from '@/features/five/types'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineGlovePalmSurface } from '@/features/genuine/Drawer/canvas/rightThrow/glove/drawPalmSurface'
import { drawGenuineGloveRearSurface } from '@/features/genuine/Drawer/canvas/rightThrow/glove/drawRearSurface'
import { drawGenuineCatcherMittPalmSurface } from '@/features/genuine/Drawer/canvas/rightThrow/catcherMitt/drawPalmSurface'
import { drawGenuineFirstMittRearSurface } from '@/features/genuine/Drawer/canvas/rightThrow/firstMitt/drawRearSurface'
import { drawGenuineCatcherMittRearSurface } from '@/features/genuine/Drawer/canvas/rightThrow/catcherMitt/drawRearSurface'
import { drawGenuineFirstMittPalmSurface } from '@/features/genuine/Drawer/canvas/rightThrow/firstMitt/drawPalmSurface'
import { pseudoDrawingEngraved } from '@/util/canvas'
import { drawLeftThrowGenuineCatcherMittRearSurface } from '@/features/genuine/Drawer/canvas/leftThrow/catcherMitt/drawRearSurface'
import { drawLeftThrowGenuineCatcherMittPalmSurface } from '@/features/genuine/Drawer/canvas/leftThrow/catcherMitt/drawPalmSurface'
import { drawLeftThrowGenuineFirstMittRearSurface } from '@/features/genuine/Drawer/canvas/leftThrow/firstMitt/drawRearSurface'
import { drawLeftThrowGenuineFirstMittPalmSurface } from '@/features/genuine/Drawer/canvas/leftThrow/firstMitt/drawPalmSurface'
import { drawLeftThrowGenuineGloveRearSurface } from '@/features/genuine/Drawer/canvas/leftThrow/glove/drawRearSurface'
import { drawLeftThrowGenuineGlovePalmSurface } from '@/features/genuine/Drawer/canvas/leftThrow/glove/drawPalmSurface'

const supplierFilter = (brand: Brand) => (supplier: Supplier) => supplier.brand === brand
const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

type Props = {
  response: SavedData<State> | null
}

export const SearchResult: React.FC<Props> = ({ response }) => {
  const personal = response?.state.personal ? response.state.personal : initialPersonal
  const { league, position } = personal
  const state = response?.state ?? ({} as State)
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null)
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userName: '',
      userNameKana: '',
      mailAddress: '',
      phoneNumber: '',
      zipCode: '',
      league,
      position,
      remarks: ''
    }
  })

  const rearSurfaceId = 'rearSurfaceOnDialog'
  const palmSurfaceId = 'palmSurfaceOnDialog'
  useEffect(() => {
    const { ctx: rearCtx, canvasWidth } = getCtx(rearSurfaceId) // useEventEffect使って見える
    const { ctx: palmCtx } = getCtx(palmSurfaceId)
    if (palmCtx !== null) pseudoDrawingEngraved(palmCtx) // genuineのフォントを事前読み込み
    if (rearCtx !== null) pseudoDrawingEngraved(rearCtx) // genuineのフォントを事前読み込み

    const isRightThrow = state.dominantArm.value === 'rightThrow'
    switch (state.baseModel.brand) {
      case 'five':
        drawFiveRearSurface(rearCtx, state as FiveState)
        drawFivePalmSurface(palmCtx, state as FiveState)
        break
      case 'genuine':
        // genuineのフォントを読み込みたいので、遅延させる
        setTimeout(() => {
          switch (state.baseModel.position) {
            case 'catcher':
              if (isRightThrow) {
                drawGenuineCatcherMittRearSurface(rearCtx, state as GenuineState)
                drawGenuineCatcherMittPalmSurface(palmCtx, state as GenuineState)
              } else {
                drawLeftThrowGenuineCatcherMittRearSurface(rearCtx, state as GenuineState, canvasWidth)
                drawLeftThrowGenuineCatcherMittPalmSurface(palmCtx, state as GenuineState, canvasWidth)
              }
              break
            case 'firstBaseman':
              if (isRightThrow) {
                drawGenuineFirstMittRearSurface(rearCtx, state as GenuineState)
                drawGenuineFirstMittPalmSurface(palmCtx, state as GenuineState)
              } else {
                drawLeftThrowGenuineFirstMittRearSurface(rearCtx, state as GenuineState, canvasWidth)
                drawLeftThrowGenuineFirstMittPalmSurface(palmCtx, state as GenuineState, canvasWidth)
              }
              break
            default:
              if (isRightThrow) {
                drawGenuineGloveRearSurface(rearCtx, state as GenuineState, canvasWidth)
                drawGenuineGlovePalmSurface(palmCtx, state as GenuineState)
              } else {
                drawLeftThrowGenuineGloveRearSurface(rearCtx, state as GenuineState, canvasWidth)
                drawLeftThrowGenuineGlovePalmSurface(palmCtx, state as GenuineState, canvasWidth)
              }
              break
          }
        }, 100)
        break
      default:
        break
    }
  }, [state, rearSurfaceId, palmSurfaceId])

  const { isSendMail, isFailedMail, isProgress, handleOrderMail, onCloseAlert } = useSendOrder()
  const handleSupplier = (supplier: Supplier) => setSelectedSupplier(supplier)

  if (!response) return null
  return (
    <Box p={3} borderTop={'solid 1px #eee'}>
      <Box display={'flex'}>
        <Box>
          <RearSurface rearSurfaceId={rearSurfaceId} />
        </Box>
        <Box>
          <PalmSurface palmSurfaceId={palmSurfaceId} />
        </Box>
      </Box>
      <Box p={3} border={'solid 1px #bbb'}>
        <SimulationContents {...{ state }} />
      </Box>
      <Prices {...{ state }} />
      <form
        onSubmit={handleSubmit((data) => {
          if (!selectedSupplier) return
          handleOrderMail({
            savedData: response,
            personal: { ...data },
            supplier: selectedSupplier
          })
        })}
      >
        <Box mt={1} p={3} border={'solid 1px #bbb'}>
          <PersonalContents {...{ personal, register }} />
        </Box>
        <Box display={'flex'} justifyContent={'center'} p={2}>
          {supplierList.filter(supplierFilter(state.baseModel.brand)).map((supplier) => (
            <Box px={1} key={supplier.name}>
              <Button variant="contained" disabled={isProgress} onClick={() => handleSupplier(supplier)} type="submit">
                {isProgress ? '送信中' : `${supplier.name}に発注`}
              </Button>
            </Box>
          ))}

          {isSendMail && (
            <Alert onClose={onCloseAlert} severity="success">
              送信完了
            </Alert>
          )}
          {isFailedMail && (
            <Alert onClose={onCloseAlert} severity={'error'}>
              送信に失敗しました。
            </Alert>
          )}
        </Box>
      </form>
    </Box>
  )
}

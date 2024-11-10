import { forwardRef, useEffect } from 'react'
import { Alert as MuiAlert, AlertProps, Box, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Brand, SavedData, State } from '@/types'
import { PalmSurface } from '@/components/Drawers/PalmSurface'
import { RearSurface } from '@/components/Drawers/RearSurface'
import { Prices } from '@/components/Prices'
import { PersonalContents } from './PersonalContents'
import { SimulationContents } from './SimulationContents'

import { agencies } from '@/app/api/server/order/agency'
import { useSendOrder } from '../hooks/useSendOrder'
import { initialPersonal } from '../Constants/personal'
import { drawRearSurface as drawFiveRearSurface } from '@/features/five/Drawer/canvas/drawRearSurface'
import { drawPalmSurface as drawFivePalmSurface } from '@/features/five/Drawer/canvas/drawPalmSurface'
import { getCtx } from '@/util/canvas/ctx'
import { FiveState } from '@/features/five/types'
import { GenuineState } from '@/features/genuine/types'
import { drawPalmSurface as drawGenuinePalmSurface } from '@/features/genuine/Drawer/canvas/drawPalmSurface'
import { drawRearSurface as drawGenuineRearSurface } from '@/features/genuine/Drawer/canvas/drawRearSurface'

const agencyFilter = (brand: Brand) => () => agencies.filter((a) => a.brands && a.brands.includes(brand))

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

type Props = {
  response: SavedData<State> | null
  email: string
}

export const SearchResult: React.FC<Props> = ({ response, email }) => {
  const personal = response?.state.personal ? response.state.personal : initialPersonal
  const { league, position } = personal
  const state = response?.state ?? ({} as State)
  const { register } = useForm({
    defaultValues: {
      userName: '',
      userNameKana: '',
      mailAddress: '',
      phoneNumber: '',
      league,
      position,
      remarks: ''
    }
  })

  const rearSurfaceId = 'rearSurfaceOnDialog'
  const palmSurfaceId = 'palmSurfaceOnDialog'
  useEffect(() => {
    const rearCtx = getCtx(rearSurfaceId) // useEventEffect使って見える
    const palmCtx = getCtx(palmSurfaceId)
    switch (state.baseModel.brand) {
      case 'five':
        drawFiveRearSurface(rearCtx, state as FiveState)
        drawFivePalmSurface(palmCtx, state as FiveState)
        break
      case 'genuine':
        drawGenuineRearSurface(rearCtx, state as GenuineState)
        drawGenuinePalmSurface(palmCtx, state as GenuineState)
        break
      default:
        break
    }
  }, [state, rearSurfaceId, palmSurfaceId])

  const { isSendMail, isFailedMail, isProgress, handleOrderMail, onCloseAlert } = useSendOrder()
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
      <Box mt={1} p={3} border={'solid 1px #bbb'}>
        <PersonalContents {...{ personal, register }} />
      </Box>
      <Box display={'flex'} justifyContent={'center'} p={2}>
        {/* <Box px={1}>
          <PdfGenerateBtn {...{ state, email }} personal={watch()} />
        </Box> */}
        {agencies.filter(agencyFilter(state.baseModel.brand)).map((agency) => (
          <Box px={1} key={agency.name}>
            <Button
              variant="contained"
              onClick={() => handleOrderMail(state, agency, response.savedId)}
              // disabled={isDisabled || !retailNameSearched}
            >
              {isProgress ? '送信中' : `${agency.name}`}
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
    </Box>
  )
}

import { forwardRef } from 'react'
import { Alert as MuiAlert, AlertProps, Box, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { FiveState } from '@/features/five/types'
import { Brand, Personal, SavedData } from '@/types'
import { PalmSurface } from '@/components/Drawers/PalmSurface'
import { RearSurface } from '@/components/Drawers/RearSurface'
import { Prices } from '@/components/Prices'
import { PersonalContents } from './PersonalContents'
import { SimulationContents } from './SimulationContents'
import { useDrawGlovePalmSurface } from '@/features/five/Drawer/hooks/useDrawGlovePalmSurface'
import { useDrawGloveRearSurface } from '@/features/five/Drawer/hooks/useDrawGloveRearSurface'

import { agencies } from '@/app/api/server/order/agency'
import { useSendOrder } from '../hooks/useSendOrder'
import { initialPersonal } from '../Constants/personal'

const agencyFilter = (brand: Brand) => () => agencies.filter((a) => a.brands && a.brands.includes(brand))

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

type Props = {
  response: SavedData<FiveState> | null
  email: string
}

export const SearchResult: React.FC<Props> = ({ response, email }) => {
  const personal = response !== null ? response.state.personal : initialPersonal
  const { league, position } = personal
  const state = response?.state ?? ({} as FiveState)
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
  useDrawGloveRearSurface(rearSurfaceId, state)
  const palmSurfaceId = 'palmSurfaceOnDialog'
  useDrawGlovePalmSurface(palmSurfaceId, state)

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

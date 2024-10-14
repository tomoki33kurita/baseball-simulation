import React, { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useCanStepFurther } from './hooks/useCanStepFurther'
import { Position, State } from '../five/types'
import { SavedIdDisplay } from './Save/SavedIdDIsplay'
import { SaveButton } from './Save/SaveButton'
import { ConsumerForm } from './ConsumerForm'

const watchFormDefaultValue = {
  defaultValues: {
    mailAddress: '',
    mailAddress2: ''
  }
}

type Props = {
  state: State
  position: Position
  isDialogOpen: boolean
  children: React.ReactNode
  handleDialogClose: () => void
  dispatch: React.Dispatch<unknown>
}

export const SimulationConfirmDialog: React.FC<Props> = ({ state, position, isDialogOpen, children, handleDialogClose, dispatch }) => {
  const { watch, register } = useForm(watchFormDefaultValue)
  const [isCopied, setCopied] = useState<boolean>(false)
  const { canSave, canInputConsumer, canClose, setIsSave } = useCanStepFurther(state, isCopied, watch)
  const [savedId, setSavedId] = useState<string>('')
  const handleClear = () => {
    handleDialogClose()
    setSavedId('')
    setIsSave(false)
    setCopied(false)
  }
  const props = { state, position }

  return (
    <Dialog
      open={isDialogOpen}
      maxWidth={'xl'}
      sx={{
        '& .MuiDialog-paper': {
          margin: '16px'
        }
      }}
    >
      <DialogContent style={{ padding: '16px 16px' }}>
        {children}
        <ConsumerForm {...{ position, dispatch, register }} isDisabled={!canInputConsumer} />
      </DialogContent>
      <DialogActions style={{ flex: 'unset', display: 'unset' }}>
        <SavedIdDisplay savedId={savedId} isCopied={isCopied} setCopied={setCopied} />
        <Box display={'flex'} justifyContent={'space-around'}>
          <SaveButton {...{ ...props, setSavedId, setIsSave }} email={watch('mailAddress')} disabled={!canSave} />
          <Button variant="outlined" onClick={handleClear} disabled={!canClose}>
            閉じる
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  )
}

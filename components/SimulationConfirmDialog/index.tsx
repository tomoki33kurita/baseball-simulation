import React, { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Position, State } from '@/types'
import { ConsumerForm } from '@/components/ConsumerForm'
import { SavedIdDisplay } from '@/components/SimulationConfirmDialog/SavedIdDIsplay'
import { useCanStepFurther } from '@/hooks/useCanStepFurther'
import { ConfirmDialog } from '../ConfirmDialog'
import { useConfirm } from '../SettingFrame/hooks/useConfirm'
import { useSaveSimulation } from './hooks'

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
  isDark?: boolean
  children: React.ReactNode
  handleDialogClose: () => void
  dispatch: React.Dispatch<unknown>
}

export const SimulationConfirmDialog: React.FC<Props> = ({ state, position, isDialogOpen, isDark, children, handleDialogClose, dispatch }) => {
  const { watch, register } = useForm(watchFormDefaultValue)
  const email = watch('mailAddress')
  const [isCopied, setCopied] = useState<boolean>(false)
  const [savedId, setSavedId] = useState<string>('')
  const { canSave, canInputConsumer, canClose, setIsSave } = useCanStepFurther(state, isCopied, watch)
  const { isConfirmOpen, handleConfirmOpen, handleConfirmClose } = useConfirm()
  const { isSaving, handleSave } = useSaveSimulation(email, setSavedId)

  const handleClear = () => {
    handleDialogClose()
    setSavedId('')
    setIsSave(false)
    setCopied(false)
  }
  const handleExecute = () => {
    handleConfirmClose()
    handleSave(state)
  }

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
      <DialogContent style={{ padding: '16px 16px', backgroundColor: isDark ? '#383838' : '' }}>
        {children}
        <ConsumerForm {...{ position, dispatch, register, isDark }} isDisabled={!canInputConsumer} />
      </DialogContent>
      <DialogActions style={{ flex: 'unset', display: 'unset', backgroundColor: isDark ? '#383838' : '' }}>
        <SavedIdDisplay savedId={savedId} isCopied={isCopied} setCopied={setCopied} />
        <Box display={'flex'} justifyContent={'space-around'}>
          <ConfirmDialog
            isConfirmOpen={isConfirmOpen}
            openButtonLabel={isSaving ? '保存中...' : '保存'}
            dialogMessage={'データを保存し、メールアドレス先に保存IDを送付します。'}
            color={'primary'}
            variant={'contained'}
            disabled={!canSave || isSaving}
            handleOkButton={handleConfirmOpen}
            handleCancelButton={handleConfirmClose}
            handleExecuteButton={handleExecute}
            isDark={isDark}
          />
          <Button
            variant="outlined"
            onClick={handleClear}
            disabled={!canClose}
            style={isDark ? { backgroundColor: '#737373', color: 'white', fontWeight: 'bold' } : {}}
          >
            閉じる
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  )
}

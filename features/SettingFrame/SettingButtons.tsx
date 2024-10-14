import React from 'react'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useConfirm } from './hooks/useConfirm'
import { ConfirmDialog } from '../Confirm/ConfirmDialog'

type Props = {
  toTopPath: string
  handleDialogOpen: () => void
}

export const SettingButtons: React.FC<Props> = ({ toTopPath, handleDialogOpen }) => {
  const router = useRouter()
  const {
    isConfirmOpen: isConfirmOpenToTop,
    setIsConfirmOpen: setIsConfirmOpenToTop,
    handleConfirmOpen: handleConfirmOpenToTop,
    handleConfirmClose: handleConfirmCloseToTop
  } = useConfirm()
  const {
    isConfirmOpen: isConfirmOpenReset,
    setIsConfirmOpen: setIsConfirmOpenReset,
    handleConfirmOpen: handleConfirmOpenReset,
    handleConfirmClose: handleConfirmCloseReset
  } = useConfirm()

  const handleLinkToTop = () => {
    router.push(toTopPath)
    setIsConfirmOpenToTop(false)
  }

  const handleReset = () => {
    location.reload()
    setIsConfirmOpenReset(false)
  }
  return (
    <Box display="flex" justifyContent="space-around" my={2}>
      <ConfirmDialog
        key={'confirm-dialog-to-top'}
        isConfirmOpen={isConfirmOpenToTop}
        openButtonLabel={'トップへ'}
        dialogMessage={'本当にトップページに移動しますか？'}
        handleOkButton={handleConfirmOpenToTop}
        handleCancelButton={handleConfirmCloseToTop}
        handleExecuteButton={handleLinkToTop}
        color={'primary'}
      />
      <ConfirmDialog
        key={'confirm-dialog-reset'}
        isConfirmOpen={isConfirmOpenReset}
        openButtonLabel={'リセット'}
        dialogMessage={`本当にリセットしますか？\n全ての設定がリセットされます`}
        handleOkButton={handleConfirmOpenReset}
        handleCancelButton={handleConfirmCloseReset}
        handleExecuteButton={handleReset}
        color={'primary'}
      />
      <Button variant="contained" color="primary" onClick={handleDialogOpen}>
        確認
      </Button>
    </Box>
  )
}

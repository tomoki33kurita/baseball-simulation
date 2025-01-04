import React from 'react'
import { Box, Button } from '@mui/material'
import { useConfirm } from './hooks/useConfirm'
import { ConfirmDialog } from '@/components/ConfirmDialog'

type Props = {
  toTopPath: string
  isDark?: boolean
  handleDialogOpen: () => void
}

export const SettingButtons: React.FC<Props> = ({ toTopPath, isDark, handleDialogOpen }) => {
  const {
    isConfirmOpen: isConfirmOpenToTop,
    // setIsConfirmOpen: setIsConfirmOpenToTop,
    handleConfirmOpen: handleConfirmOpenToTop,
    handleConfirmClose: handleConfirmCloseToTop
  } = useConfirm()
  const {
    isConfirmOpen: isConfirmOpenReset,
    // setIsConfirmOpen: setIsConfirmOpenReset,
    handleConfirmOpen: handleConfirmOpenReset,
    handleConfirmClose: handleConfirmCloseReset
  } = useConfirm()

  const handleLinkToTop = () => {
    // router.push(toTopPath)
    location.href = toTopPath
    // setIsConfirmOpenToTop(false)
  }

  const handleReset = () => {
    location.reload()
    // setIsConfirmOpenReset(false)
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
        isDark={isDark}
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
        isDark={isDark}
      />
      <Button
        variant={isDark ? 'outlined' : 'contained'}
        color={isDark ? 'inherit' : 'primary'}
        onClick={handleDialogOpen}
        style={{ color: isDark ? 'white' : 'black', backgroundColor: isDark ? '#737373' : 'black', border: 'unset', fontWeight: 'bold' }}
      >
        確認
      </Button>
    </Box>
  )
}

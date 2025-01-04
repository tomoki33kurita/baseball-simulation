import React from 'react'
import { Box, Dialog, DialogTitle, DialogActions, Button, ButtonPropsColorOverrides } from '@mui/material'
import { OverridableStringUnion } from '@mui/types'
type Color = OverridableStringUnion<'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning', ButtonPropsColorOverrides>

type Props = {
  isConfirmOpen: boolean
  openButtonLabel: string
  dialogMessage: string
  color?: Color
  variant?: 'outlined' | 'contained'
  disabled?: boolean
  isDark?: boolean
  handleOkButton: () => void
  handleCancelButton: () => void
  handleExecuteButton: () => void
}

export const ConfirmDialog: React.FC<Props> = ({
  isConfirmOpen,
  openButtonLabel,
  dialogMessage,
  color = 'inherit',
  variant = 'outlined',
  disabled,
  isDark,
  handleOkButton,
  handleCancelButton,
  handleExecuteButton
}) => {
  return (
    <Box>
      <Button
        color={color}
        variant={variant}
        onClick={handleOkButton}
        disabled={disabled}
        style={{ color: isDark ? 'white' : 'black', backgroundColor: isDark ? '#737373' : 'black', fontWeight: 'bold' }}
      >
        {openButtonLabel}
      </Button>
      <Dialog open={isConfirmOpen} onClose={handleCancelButton} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle color={'primary'} id="alert-dialog-title">
          {dialogMessage}
        </DialogTitle>
        <DialogActions>
          <Button
            variant={'outlined'}
            onClick={handleCancelButton}
            style={{ color: isDark ? 'black' : 'white', backgroundColor: isDark ? 'white' : 'black' }}
          >
            Cancel
          </Button>
          <Button
            color={'primary'}
            variant={'contained'}
            onClick={handleExecuteButton}
            autoFocus
            style={{ color: isDark ? 'black' : 'white', backgroundColor: isDark ? 'white' : 'black' }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

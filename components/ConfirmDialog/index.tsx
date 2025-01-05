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
        style={isDark ? { color: disabled ? 'black' : 'white', backgroundColor: disabled ? '#737373' : 'black', fontWeight: 'bold' } : {}}
      >
        {openButtonLabel}
      </Button>
      <Dialog open={isConfirmOpen} onClose={handleCancelButton} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle color={'primary'} id="alert-dialog-title" style={isDark ? { backgroundColor: '#383838', color: '#fff' } : {}}>
          {dialogMessage}
        </DialogTitle>
        <DialogActions style={{ backgroundColor: isDark ? '#383838' : 'unset', color: isDark ? '#fff' : 'unset' }}>
          <Button variant={'outlined'} onClick={handleCancelButton} style={isDark ? { color: 'white', backgroundColor: '#737373' } : {}}>
            Cancel
          </Button>
          <Button
            color={'primary'}
            variant={'contained'}
            onClick={handleExecuteButton}
            autoFocus
            style={isDark ? { color: 'white', backgroundColor: 'black' } : {}}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

import React from 'react'
import { Box, Dialog, DialogContent, DialogActions } from '@mui/material'
import { NullableAction, Position } from '../five/types'
import { startConfirmMessageGenerator, useConfirm, useSelectBaseModel } from '../SettingFrame/hooks/useConfirm'
import { ModelCard } from './ModelCard'
import { ConfirmDialog } from '../Confirm/ConfirmDialog'
import { positionFilterLogic } from '@/app/util/logic'
import { models } from '@/features/five/Constants/model'

const SET_BASE_MODEL = 'setBaseModel'

type Props = {
  position: Position
  dispatch: React.Dispatch<any>
}

export const BaseModelSelector: React.FC<Props> = ({ position, dispatch }) => {
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(true)
  const { isConfirmOpen, setIsConfirmOpen, handleConfirmOpen, handleConfirmClose } = useConfirm()
  const { selectedModel, handleBaseModel } = useSelectBaseModel()
  const message = startConfirmMessageGenerator(selectedModel)

  const handleStartSimulation = () => {
    dispatch({ type: SET_BASE_MODEL, baseModel: selectedModel })
    setIsDialogOpen(false)
    setIsConfirmOpen(false)
  }
  const modelFilter = positionFilterLogic(position)
  return (
    <Box>
      <Dialog open={isDialogOpen} maxWidth={'lg'}>
        <DialogContent>
          <Box position={'sticky'} left={0}>
            基本モデルを選択してください
          </Box>
          <Box display={'flex'}>
            {models.filter(modelFilter).map((model) => (
              <ModelCard {...{ selectedModel, model, handleBaseModel }} key={model.productNumber} />
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <ConfirmDialog
            isConfirmOpen={isConfirmOpen}
            openButtonLabel={'シミュレーションを開始'}
            dialogMessage={message}
            color={'primary'}
            variant={'contained'}
            handleOkButton={handleConfirmOpen}
            handleCancelButton={handleConfirmClose}
            handleExecuteButton={handleStartSimulation}
            disabled={!selectedModel}
          />
        </DialogActions>
      </Dialog>
    </Box>
  )
}

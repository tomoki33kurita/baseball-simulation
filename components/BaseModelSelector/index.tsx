import React from 'react'
import { Box, Dialog, DialogContent, DialogActions } from '@mui/material'
import { Position } from '@/types'
import { startConfirmMessageGenerator, useConfirm, useSelectBaseModel } from '../SettingFrame/hooks/useConfirm'
import { ModelCard } from './ModelCard'
import { ConfirmDialog } from '../ConfirmDialog'
import { positionFilterLogic } from '@/util/logic'
import { FiveBaseModel } from '../../features/five/types'
import { GenuineBaseModel } from '@/features/genuine/types'

const SET_BASE_MODEL = 'setBaseModel'

type Props = {
  models: FiveBaseModel[] | GenuineBaseModel[]
  position: Position
  isDark?: boolean
  dispatch: React.Dispatch<any>
}

export const BaseModelSelector: React.FC<Props> = ({ models, position, isDark, dispatch }) => {
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(true)
  const { isConfirmOpen, handleConfirmOpen, handleConfirmClose } = useConfirm()
  const { selectedModel, handleBaseModel } = useSelectBaseModel()
  const message = startConfirmMessageGenerator(selectedModel)

  const handleStartSimulation = () => {
    dispatch({ type: SET_BASE_MODEL, baseModel: selectedModel })
    setIsDialogOpen(false)
  }
  const modelFilter = positionFilterLogic(position)
  return (
    <Box>
      <Dialog open={isDialogOpen} maxWidth={'lg'}>
        <DialogContent style={isDark ? { backgroundColor: '#282828' } : {}}>
          <Box position={'sticky'} left={0} color={isDark ? '#fff' : 'inherit'} fontWeight={isDark ? 'bold' : 'inherit'}>
            基本モデルを選択してください
          </Box>
          <Box display={'flex'}>
            {models.filter(modelFilter).map((model) => (
              <ModelCard {...{ selectedModel, model, isDark, handleBaseModel }} key={model.productNumber} />
            ))}
          </Box>
        </DialogContent>
        <DialogActions style={isDark ? { backgroundColor: '#282828' } : {}}>
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
            isDark={isDark}
          />
        </DialogActions>
      </Dialog>
    </Box>
  )
}

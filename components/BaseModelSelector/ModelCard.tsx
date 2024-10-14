import React from 'react'
import Image from 'next/image'
import { Box, Button } from '@mui/material'
import { borderStyle } from '@/styles'
import { FiveBaseModel } from '../../features/five/types'
import { BaseModel } from '@/types'

type Props = {
  model: FiveBaseModel | BaseModel
  selectedModel: BaseModel | null
  isOnlyImage?: boolean
  handleBaseModel: (model: BaseModel) => void
}

export const ModelCard: React.FC<Props> = ({ model, selectedModel, isOnlyImage = false, handleBaseModel }) => {
  const isSelected = selectedModel?.productNumber === model.productNumber
  return (
    <Box p={1}>
      <Button
        data-testid={'model-card-button'}
        variant={isSelected ? 'contained' : 'outlined'}
        color={isSelected ? 'primary' : 'inherit'}
        style={{ maxWidth: '250px', border: borderStyle }}
        onClick={() => handleBaseModel(model)}
      >
        <Box component={'span'} style={{ maxWidth: '300px', display: 'inline-block' }}>
          <Image src={model.image.url} alt={model.productNumber} width={model.image.width} height={model.image.height} />
          {!isOnlyImage && (
            <>
              <Box component={'h4'}>
                <Box>品番:{model.productNumber}</Box>
              </Box>
              {model.size.value > 0 && <Box textTransform={'none'}>{`${model.size.value} ${model.size.unit}`}</Box>}
              <Box>{model.description}</Box>
            </>
          )}
        </Box>
      </Button>
    </Box>
  )
}

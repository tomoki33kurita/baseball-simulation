import React from 'react'
import { Box, Card, Button } from '@mui/material'
import { EMBROIDERY_POSITIONS } from '../../../features/five/Constants/embroidery'
import { Embroidery } from '@/types'
import { ADD_EMBROIDERY, REMOVE_EMBROIDERY } from '@/constants'

const initialEmbroideryState = {
  id: 0,
  typeFace: { label: '', value: '' },
  position: { label: '', value: '' },
  color: { label: '未選択', value: 'unselected', color: '' },
  shadowColor: { label: '未選択', value: 'unselected', color: '' },
  edgeColor: { label: '未選択', value: 'unselected', color: '' },
  content: ''
}

type Props = {
  embroideries: Embroidery[]
  dispatch: React.Dispatch<unknown>
}

export const EmbroideryFormUpDown: React.FC<Props> = ({ embroideries, dispatch }) => {
  const handleAddForm = () =>
    dispatch({
      type: ADD_EMBROIDERY,
      embroideries: embroideries.concat({ ...initialEmbroideryState, id: embroideries.length })
    })
  const handleRemoveForm = () =>
    dispatch({
      type: REMOVE_EMBROIDERY,
      embroideries: embroideries.filter((prev) => prev.id !== embroideries.length - 1)
    })
  const existEmptyContentsEmbroidery = embroideries.some((e) => e.position.value !== 'unselected' && e.content.trim().length === 0)
  const canIncrease = embroideries.length < EMBROIDERY_POSITIONS.length

  return (
    <Box mb={2}>
      <Card>
        <Box display="flex" justifyContent="center" my={1}>
          <Button onClick={handleAddForm} disabled={!canIncrease || existEmptyContentsEmbroidery} variant="outlined" style={{ marginRight: '4px' }}>
            ＋
          </Button>
          <Button onClick={handleRemoveForm} disabled={embroideries.length === 0} variant="outlined" style={{ marginLeft: '4px' }}>
            ー
          </Button>
        </Box>
        {/* <Box pl={3} textAlign="left" color={'blue'} fontSize={'12px'}>
          {t.DESCRIBE_EMBROIDERY_PLUS_BUTTON}
        </Box>
        <Box pl={3} textAlign="left" color={'blue'} mb={1} fontSize={'12px'}>
          {t.DESCRIBE_EMBROIDERY_MINUS_BUTTON}
        </Box> */}
      </Card>
    </Box>
  )
}

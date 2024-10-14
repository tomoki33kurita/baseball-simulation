import React from 'react'
import { Box, Accordion, AccordionSummary, AccordionDetails, Button, Fab } from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ColorBox from './ColorBox'
import { muiGrey } from '@/styles'

type Props = {
  summary: string
  objects: {
    label: string
    value: string
    color?: string
  }[]
  selectedLabel?: string
  selectedColor?: string
  disabled?: boolean
  setTarget?: boolean
  description?: string
  caution?: string
  defaultExpanded?: boolean
  isDisplay?: boolean
  isError?: boolean
  index?: number // for embroidery
  className?: string
  handleChange: (selected: string, i?: number) => void
}

const SelectCard: React.FC<Props> = ({
  summary,
  objects,
  selectedLabel,
  selectedColor,
  disabled,
  description,
  caution,
  defaultExpanded = true,
  isDisplay = true,
  isError,
  index,
  className,
  handleChange
}) => {
  if (!isDisplay) return <></>
  return (
    <Accordion style={{ marginBottom: '16px' }} defaultExpanded={defaultExpanded}>
      <AccordionSummary
        expandIcon={
          <Fab size="small" tabIndex={-1} style={{ boxShadow: 'unset' }}>
            <ExpandLessIcon />
          </Fab>
        }
      >
        <Box display="flex">
          <Box fontSize={14} fontWeight="bold" color={muiGrey}>
            {summary}
          </Box>
          <Box component="span" display="inherit" color={isError ? 'red' : muiGrey} fontSize={15} alignItems="center" ml={2}>
            {selectedColor && <ColorBox bgcolor={selectedColor} />}
            {selectedLabel}
          </Box>
        </Box>
      </AccordionSummary>
      {caution && (
        <Box pl={3} textAlign="left" color={'red'} fontSize={'12px'}>
          {caution}
        </Box>
      )}
      {description && (
        <Box pl={3} textAlign="left" color={'blue'} fontSize={'12px'}>
          {description}
        </Box>
      )}
      <AccordionDetails>
        <Box px={1} mb={1} textAlign="left">
          {objects?.map((obj) => (
            <Button
              key={`${obj.value}`}
              value={obj.value}
              onClick={() => handleChange(obj.value, index)}
              variant={obj.label === selectedLabel ? 'contained' : 'outlined'}
              disabled={disabled}
              style={{ marginRight: '8px', marginBottom: '4px', textTransform: 'none', padding: '15px' }}
              className={className}
            >
              {obj.color && <ColorBox bgcolor={obj.color} />}
              {obj.label}
            </Button>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}
export default SelectCard

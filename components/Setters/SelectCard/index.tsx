import React from 'react'
import { Box, Accordion, AccordionSummary, AccordionDetails, Button, Fab } from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { ColorBox } from '../ColorBox'
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
  isDark?: boolean
  handleChange: (selected: string, i?: number) => void
}

export const SelectCard: React.FC<Props> = ({
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
  isDark,
  handleChange
}) => {
  if (!isDisplay) return <></>
  return (
    <Accordion style={isDark ? { marginBottom: '16px', background: '#383838' } : { marginBottom: '16px' }} defaultExpanded={defaultExpanded}>
      <AccordionSummary
        expandIcon={
          <Fab
            size="small"
            tabIndex={-1}
            style={
              isDark
                ? {
                    boxShadow: 'unset',
                    background: '#383838',
                    color: 'white',
                    border: '1px solid white'
                  }
                : {}
            }
          >
            <ExpandLessIcon />
          </Fab>
        }
      >
        <Box display="flex">
          <Box fontSize={14} fontWeight="bold" color={isDark ? '#fff' : muiGrey}>
            {summary}
          </Box>
          <Box
            component="span"
            display="inherit"
            color={isError ? (isDark ? 'orange' : 'red') : isDark ? 'white' : muiGrey}
            fontSize={15}
            alignItems="center"
            ml={2}
            fontWeight={isDark ? 'bold' : 'normal'}
          >
            {selectedColor && <ColorBox bgcolor={selectedColor} />}
            {selectedLabel}
          </Box>
        </Box>
      </AccordionSummary>
      {caution && (
        <Box pl={3} textAlign="left" color={isDark ? 'orange' : 'red'} fontSize={'12px'} fontWeight={isDark ? 'bold' : 'unset'} mb={1}>
          {caution}
        </Box>
      )}
      {description && (
        <Box pl={3} textAlign="left" color={isDark ? '#2ebdff' : 'blue'} fontSize={'12px'} fontWeight={isDark ? 'bold' : 'normal'}>
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
              style={
                isDark
                  ? {
                      marginRight: '8px',
                      marginBottom: '4px',
                      textTransform: 'none',
                      padding: '15px',
                      color: '#fff',
                      borderColor: 'black',
                      backgroundColor: obj.label === selectedLabel ? 'black' : '#737373',
                      fontWeight: 'bold'
                    }
                  : { marginRight: '8px', marginBottom: '4px', textTransform: 'none', padding: '15px' }
              }
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

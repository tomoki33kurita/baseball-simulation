import React from 'react'
import { Box, Accordion, AccordionSummary, AccordionDetails, Button, Fab } from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import Image from 'next/image'
import { ColorBox } from '../ColorBox'
import { borderStyle } from '@/styles'

type Props = {
  summary: string
  objects: {
    label: string
    value: string
    color?: string
    imageUrl?: string
  }[]
  index?: number
  selectedLabel?: string
  selectedColor?: string
  setTarget?: boolean
  imageWidth?: number
  imageHeight?: number
  description?: string
  handleChange: (selected: string, i?: number) => void
  disabled?: boolean
  defaultExpanded?: boolean
  isDisplay?: boolean
  isError?: boolean
  caution?: string
  isShowLabel?: boolean
  isDark?: boolean
  className?: string
}

export const SelectCardWithImage: React.FC<Props> = ({
  summary,
  objects,
  index,
  selectedLabel,
  selectedColor,
  imageWidth,
  imageHeight,
  description,
  handleChange,
  disabled = false,
  defaultExpanded = true,
  isDisplay = true,
  isError,
  caution,
  isShowLabel = false,
  isDark,
  className
}) => {
  if (!isDisplay) return <></>
  return (
    <Accordion
      disabled={disabled}
      style={isDark ? { marginBottom: '16px', background: '#383838' } : { marginBottom: '16px' }}
      defaultExpanded={defaultExpanded}
    >
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
          <Box fontSize={14} fontWeight="bold" color={isDark ? '#fff' : '#383838'}>
            {summary}
          </Box>
          <Box
            component="span"
            display="inherit"
            color={isError ? (isDark ? 'orange' : 'red') : isDark ? '#fff' : '#383838'}
            fontWeight={isDark ? 'bold' : 'normal'}
            fontSize={15}
            alignItems="center"
            ml={2}
          >
            {selectedColor && <ColorBox bgcolor={selectedColor} />}
            {disabled ? '--' : selectedLabel}
          </Box>
        </Box>
      </AccordionSummary>
      {caution && (
        <Box pl={3} textAlign="left" color={isDark ? 'orange' : 'red'} fontSize={'12px'}>
          {caution}
        </Box>
      )}
      {description && (
        <Box pl={3} textAlign="left" color={isDark ? '#2ebdff' : 'blue'} fontSize={'12px'}>
          {description}
        </Box>
      )}
      <AccordionDetails style={{ padding: '8px 8px 16px' }}>
        <Box mb={1} textAlign="left" display={'flex'} flexWrap={'wrap'}>
          {!disabled &&
            objects?.map((obj, i) => {
              return (
                <Box key={`${obj.label}-${i}`} px={0.3} className={className} bgcolor={isDark ? '#737373' : ''}>
                  <Button
                    variant={obj.label === selectedLabel ? 'contained' : 'outlined'}
                    color={obj.label === selectedLabel ? 'primary' : 'inherit'}
                    onClick={() => handleChange(obj.value, index)}
                    style={{ border: borderStyle }}
                  >
                    {isShowLabel && (
                      <Box component={'span'} pr={2}>
                        {obj.label}
                      </Box>
                    )}
                    {/* altにテキストを入れると、testing-libraryでボタン取得しにくいので空文字にしてる */}
                    <Image src={obj.imageUrl || ''} alt={''} width={imageWidth || 100} height={imageHeight || 135} />
                  </Button>
                </Box>
              )
            })}
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

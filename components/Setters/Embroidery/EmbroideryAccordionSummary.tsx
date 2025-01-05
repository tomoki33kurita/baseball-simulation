import React from 'react'
import { AccordionSummary, Fab } from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

export const EmbroideryAccordionSummary: React.FC<{ embroideryIndex: number; isDark?: boolean }> = ({ embroideryIndex, isDark }) => {
  return (
    <AccordionSummary
      expandIcon={
        <Fab
          size="small"
          tabIndex={-1}
          style={{
            boxShadow: 'unset',
            background: isDark ? '#383838' : 'unset',
            color: isDark ? 'white' : 'black',
            border: isDark ? '1px solid white' : '1px solid black'
          }}
        >
          <ExpandLessIcon />
        </Fab>
      }
    >
      {`刺繍設定 ${embroideryIndex + 1}`}
    </AccordionSummary>
  )
}

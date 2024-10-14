import React from 'react'
import { AccordionSummary, Fab } from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

export const EmbroideryAccordionSummary: React.FC<{ embroideryIndex: number }> = ({ embroideryIndex }) => {
  return (
    <AccordionSummary
      expandIcon={
        <Fab size="small" tabIndex={-1} style={{ boxShadow: 'unset' }}>
          <ExpandLessIcon />
        </Fab>
      }
    >
      {`刺繍設定 ${embroideryIndex + 1}`}
    </AccordionSummary>
  )
}

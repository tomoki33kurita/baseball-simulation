import { Grid, Box } from '@mui/material'
import { muiGrey } from '@/styles'
import { FiveState } from '@/features/five/types'
import { getFiveBaseCells } from '@/features/five/Components/ConfirmContents/base'
import { getFiveColorCells } from '@/features/five/Components/ConfirmContents/color'
import { ItemCell } from '@/components/SimulationContent/ItemCell'
import { Embroideries } from '@/components/SimulationContent/Embroideries'

export const cellColor = (cellValue: string) => (cellValue === 'unselected' ? 'red' : muiGrey)

type Props = {
  state: FiveState
}

export const SimulationContents: React.FC<Props> = ({ state }) => {
  const baseCells = getFiveBaseCells(state)
  const colorCells = getFiveColorCells(state)

  const baseCellCount = baseCells.length
  const colorCellCount = colorCells.length

  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <Box pt={2}>
          <Box fontWeight="bold" fontSize="16px" color={muiGrey}>
            基本項目
          </Box>
          {baseCells?.map((cell, i) => (
            <ItemCell key={cell.head} itemIndex={i + 1} cell={cell} color={cellColor(cell.value)} />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box pt={2}>
          <Box fontWeight="bold" fontSize="16px" color={muiGrey}>
            カラー項目
          </Box>
          {colorCells.map((cell, i) => (
            <ItemCell key={cell.head} itemIndex={i + baseCellCount + 1} cell={cell} color={cellColor(cell.value)} />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box pt={2}>
          <Box mt={2}>
            <Embroideries state={state} previousIndex={baseCellCount + colorCellCount} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

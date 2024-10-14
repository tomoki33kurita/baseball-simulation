import { Grid, Box } from '@mui/material'
import { Position, State } from '../../five/types'
import { ItemCell } from './ItemCell'
import { Embroideries } from './Embroideries'
import { getBaseCells } from '@/features/five/ConfirmContents/base'
import { getColorCells } from '@/features/five/ConfirmContents/color'

export const cellColor = (cellValue: string) => (cellValue === 'unselected' ? 'red' : '#383838')

type Props = {
  state: State
}

export const SimulationContent: React.FC<Props> = ({ state }) => {
  const baseCells = getBaseCells(state)
  const colorCells = getColorCells(state)
  const colorCellStartCount = baseCells.length + 1
  const colorCellCount = colorCells.length
  const embroideryCellStartCount = baseCells.length + colorCellCount + 1

  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <Box pt={2}>
          <Box fontWeight="bold" fontSize="16px" color={'#383838'}>
            基本項目
          </Box>
          {baseCells?.map((cell, i) => (
            <ItemCell key={cell.head} itemIndex={i + 1} cell={cell} color={cellColor(cell.value)} />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box pt={2}>
          <Box fontWeight="bold" fontSize="16px" color={'#383838'}>
            カラー項目
          </Box>
          {colorCells?.map((cell, i) => (
            <ItemCell key={cell.head} itemIndex={colorCellStartCount + i} cell={cell} color={cellColor(cell.value)} />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box mt={2}>
          <Embroideries state={state} previousIndex={embroideryCellStartCount + 1} />
        </Box>
      </Grid>
    </Grid>
  )
}

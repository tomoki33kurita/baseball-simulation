import { Grid, Box } from '@mui/material'
import { ItemCell } from '@/components/SimulationContent/ItemCell'
import { Embroideries } from './Embroideries'
import { State } from '@/types'

export const cellColor = (cellValue: string) => (cellValue === 'unselected' ? 'red' : '#383838')

type Props = {
  state: State
  baseCells: {
    head: string
    label: string
    value: string
  }[]
  colorCells: {
    head: string
    label: string
    value: string
  }[]
}

export const SimulationContent: React.FC<Props> = ({ state, baseCells, colorCells }) => {
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

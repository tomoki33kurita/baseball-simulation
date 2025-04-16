import { Grid, Box } from '@mui/material'
import { GenuineEmbroideries } from './Embroideries'
import { GenuineState } from '../../types'
import { ItemCell } from '@/components/ItemCell'

const cellColor = (cellValue: string, isDark?: boolean) => (cellValue === 'unselected' ? (isDark ? 'orange' : 'red') : isDark ? '#fff' : '#282828')

type Props = {
  state: GenuineState
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
  multiColorsCost?: number
  isDark?: boolean
}

export const SimulationContent: React.FC<Props> = ({ state, baseCells, colorCells, multiColorsCost = 0, isDark }) => {
  const colorCellStartCount = baseCells.length + 1
  const colorCellCount = colorCells.length
  const embroideryCellStartCount = baseCells.length + colorCellCount + 1

  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <Box pt={2}>
          <Box fontWeight="bold" fontSize="16px" color={isDark ? '#fff' : '#282828'}>
            基本項目
          </Box>
          {baseCells.map((cell, i) => (
            <ItemCell key={cell.head} itemIndex={i + 1} cell={cell} color={cellColor(cell.value, isDark)} isDark />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box pt={2}>
          <Box fontWeight="bold" fontSize="16px" color={isDark ? '#fff' : '#282828'}>
            カラー項目
          </Box>
          {colorCells.map((cell, i) => (
            <ItemCell key={cell.head} itemIndex={colorCellStartCount + i} cell={cell} color={cellColor(cell.value, isDark)} isDark />
          ))}
        </Box>
        <Box pt={1} color={isDark ? '#fff' : '#282828'}>
          {multiColorsCost ? `(複数カラー：+${multiColorsCost.toLocaleString()}円)` : ``}
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box mt={2}>
          <GenuineEmbroideries state={state} previousIndex={embroideryCellStartCount + 1} isDark />
        </Box>
      </Grid>
    </Grid>
  )
}

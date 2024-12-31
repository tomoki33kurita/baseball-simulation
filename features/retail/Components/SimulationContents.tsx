import { Grid, Box } from '@mui/material'
import { muiGrey } from '@/styles'
import { State } from '@/types'
import { getBaseCells, getColorCells } from '@/features/Logic'
import { FiveEmbroideries } from '@/features/five/Components/SimulationContent/Embroideries'
import { GenuineEmbroideries } from '@/features/genuine/Components/SimulationContent/Embroideries'
import { GenuineState } from '@/features/genuine/types'
import { FiveState } from '@/features/five/types'
import { ItemCell } from '@/Components/ItemCell'

export const cellColor = (cellValue: string) => (cellValue === 'unselected' ? 'red' : muiGrey)

type Props = {
  state: State
}

export const SimulationContents: React.FC<Props> = ({ state }) => {
  const baseCells = getBaseCells(state)
  const colorCells = getColorCells(state)

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
            <>
              {state.baseModel.brand === 'five' && <FiveEmbroideries state={state as FiveState} previousIndex={baseCellCount + colorCellCount} />}
              {state.baseModel.brand === 'genuine' && (
                <GenuineEmbroideries state={state as GenuineState} previousIndex={baseCellCount + colorCellCount} />
              )}
            </>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

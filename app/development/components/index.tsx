import React from 'react'
import { Box, Button, TextField } from '@mui/material'

type DevTools = {
  coordinateX: number
  coordinateY: number
  isCopy: boolean
  setCopy: (value: React.SetStateAction<boolean>) => void
}

type Props = {
  devTools: DevTools
}

const DevTool: React.FC<Props> = ({ devTools }) => {
  const { coordinateX, coordinateY, isCopy, setCopy } = devTools
  const [inputX, setInputX] = React.useState(0)
  const [inputY, setInputY] = React.useState(0)

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value)
    setCopy(true)
  }

  const handlePointer = () => {
    const canvas = (document.getElementById('canvasBack') as HTMLCanvasElement) || (document.getElementById('canvasFront') as HTMLCanvasElement)
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    ctx.strokeStyle = '#ff4500'
    ctx.fillStyle = '#ff4500'
    ctx.fillRect(inputX, inputY, 5, 5)
  }

  return (
    <Box display="flex" justifyContent="center">
      <Box display="flex" justifyContent="center" alignItems="center">
        <TextField placeholder="X座標の値" variant="outlined" onChange={(e) => setInputX(parseInt(e.target.value))} />
        <TextField placeholder="Y座標の値" variant="outlined" onChange={(e) => setInputY(parseInt(e.target.value))} />
        <Button variant="outlined" onClick={handlePointer}>
          検索
        </Button>
      </Box>
      <Box ml={2} display="flex" justifyContent="center" alignItems="center">
        <Box mx={2} p={1}>{`${coordinateX}, ${coordinateY}`}</Box>
        <Button variant="outlined" onClick={() => handleCopy(`${coordinateX}, ${coordinateY}`)}>
          コピー
        </Button>
        {isCopy ? <Box ml={2}>コピーしたよ！</Box> : <Box width={90} />}
      </Box>
    </Box>
  )
}

export default DevTool

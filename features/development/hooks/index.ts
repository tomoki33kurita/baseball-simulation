import { useState } from 'react'

export const useDevelopmentHooks = () => {
  const [coordinateX, setCoordinateX] = useState(0)
  const [coordinateY, setCoordinateY] = useState(0)
  const [isCopy, setCopy] = useState(false)

  const devTools = { coordinateX, coordinateY, isCopy, setCopy }

  const handleCoordinate = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    // eslint-disable-next-line
    // @ts-ignore
    const rect = e.target.getBoundingClientRect()
    const x = parseInt(`${e.clientX - rect.left}`)
    const y = parseInt(`${e.clientY - rect.top}`)
    setCoordinateX(x)
    setCoordinateY(y)
    setCopy(false)
  }

  return {
    devFlg: process.env.NEXT_PUBLIC_DEV_MODE,
    devTools,
    handleCoordinate
  }
}

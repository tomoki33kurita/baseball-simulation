import { State } from '@/types'
import { genuineHeader } from '@/public/genuine/pdf/genuineHeader'

export const drawImages = () => {
  const canvasBack = document.getElementById('rearSurfaceOnDialog') as HTMLCanvasElement
  const canvasFront = document.getElementById('palmSurfaceOnDialog') as HTMLCanvasElement
  return [
    {
      table: {
        body: [
          [
            {
              image: `${canvasBack.toDataURL()}`,
              width: 210,
              height: 170
            },
            {
              image: `${canvasFront.toDataURL()}`,
              width: 210,
              height: 170
            }
          ]
        ]
      }
    }
  ]
}

export const drawHeader = (state: State) => {
  if (state.baseModel.brand !== 'genuine') return {}
  return {
    header: {
      columns: [
        [
          {
            image: genuineHeader,
            width: 150,
            height: 30
          }
        ]
      ]
    }
  }
}

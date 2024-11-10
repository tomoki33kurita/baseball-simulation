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

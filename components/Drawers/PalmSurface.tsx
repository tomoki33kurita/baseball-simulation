import DevTool from '@/features/development/components'
import { useDevelopmentHooks } from '@/features/development/hooks'
import { FC } from 'react'

const devToolStyle = {
  backgroundImage: `url(${'/cmittFront2.jpeg'})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left 70px top 5px',
  backgroundSize: '77%',
  maxWidth: '100%'
}

type Props = {
  palmSurfaceId: string
  maxWidth?: '100%' | '50%'
}

export const PalmSurface: FC<Props> = ({ palmSurfaceId, maxWidth = '100%' }) => {
  const { devFlg, devTools, handleCoordinate } = useDevelopmentHooks()
  return (
    <>
      {devFlg === 'true' ? (
        <div>
          <canvas width={880} height={680} id={palmSurfaceId} style={{ ...devToolStyle }} onClick={(e) => handleCoordinate(e)} />
          <DevTool devTools={devTools} />
        </div>
      ) : (
        <canvas id={palmSurfaceId} width={880} height={680} style={{ maxWidth }} />
      )}
    </>
  )
}

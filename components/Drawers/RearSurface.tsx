import DevTool from '@/features/development/components'
import { useDevelopmentHooks } from '@/features/development/hooks'
import { FC } from 'react'

const devToolStyle = {
  // 画像表示させたい時は canvasResetter をコメントアウトすること
  // backgroundImage: `url(${'/genuine/label/genuineLabel.jpg'})`,
  // backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'left 305px top 462px',
  // backgroundSize: '25%',
  // maxWidth: '100%',
  // zIndex: 1000
  // transform: `rotate(-3deg)`
}

type Props = {
  rearSurfaceId: string
  maxWidth?: '100%' | '50%'
  devFlg?: boolean
}

export const RearSurface: FC<Props> = ({ rearSurfaceId, maxWidth = '100%', devFlg = false }) => {
  const { devTools, handleCoordinate } = useDevelopmentHooks()
  return (
    <>
      {devFlg ? (
        <div>
          <canvas width={880} height={630} id={rearSurfaceId} style={{ ...devToolStyle }} onClick={(e) => handleCoordinate(e)} />
          <DevTool devTools={devTools} />
        </div>
      ) : (
        <canvas id={rearSurfaceId} width={880} height={630} style={{ maxWidth }} />
      )}
    </>
  )
}

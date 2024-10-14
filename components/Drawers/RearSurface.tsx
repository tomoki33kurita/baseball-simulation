import DevTool from '@/features/development/components'
import { useDevelopmentHooks } from '@/features/development/hooks'
import { FC } from 'react'

const devToolStyle = {
  // 画像表示させたい時は canvasResetter をコメントアウトすること
  // backgroundImage: `url(${'/flex.jpg'})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left 0px top 350px',
  backgroundSize: '40%',
  maxWidth: '100%',
  zIndex: 1000
  // transform: `rotate(-5deg)`
}

type Props = {
  rearSurfaceId: string
  maxWidth?: '100%' | '50%'
  devFlg?: boolean
}

export const RearSurface: FC<Props> = ({ rearSurfaceId, maxWidth = '100%', devFlg }) => {
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

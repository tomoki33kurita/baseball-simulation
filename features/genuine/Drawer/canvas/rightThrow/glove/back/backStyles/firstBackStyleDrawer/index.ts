import { GenuineState } from '@/features/genuine/types'
import { thumbOut } from '../../thumb'
import { thumbIndexMiddleFinger } from './thumbIndexMiddleFinger'
import { ringLittleFinger } from './ringLittleFinger'
import { middleRingFinger } from './middleRingFinger'
import { firstBackLittleFinger } from './littleFInger'
import { weltingOfFirstBackWithIndexHole } from './weltings'
import { firstBackStyleWristBelt } from './wristBelt'
import { indexFingerPad } from '../../fingerCoverOrPad/indexFingerPad'
import { indexFingerHole, middleFingerHole } from './fingerHole'
import { binding } from './binding'
import { getBackStyle } from '@/features/genuine/Components/Setters/logic'
import { middleFingerPad } from '../../fingerCoverOrPad/middleFIngerPad'
import { thumbIndexMiddleRightFinger } from './thumIndexRightFinger'
import { indexLeftMiddleRingRightFinger } from './indexLeftMiddleRingRight'
import { weltingOfFirstBackWithMiddleHole } from './weltings/middle'

const fingerHoleDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const { fingerGuard } = state
  if (fingerGuard.value === 'none') return
  const isIndex = ['indexCover', 'indexPad', 'indexHole'].includes(fingerGuard.value)
  const isMiddle = ['middleCover', 'middlePad', 'middleHole'].includes(fingerGuard.value)
  const liningsColor = state.linings.color
  const laceColor = state.lace.color
  if (isIndex) {
    indexFingerHole(ctx, liningsColor, laceColor)
  }
  if (isMiddle) {
    middleFingerHole(ctx, liningsColor, laceColor)
  }
}

// ファーストバック モデル
export const firstBackStyleDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const { isFirstBackStyle } = getBackStyle(state)
  if (!isFirstBackStyle) return
  const fingerGuard = state.fingerGuard.value
  const isFingerPad = ['indexPad'].includes(fingerGuard)
  const isMiddleFingerPad = ['middlePad'].includes(fingerGuard)
  thumbOut(ctx, state.thumbOut.color) // 親指外
  ringLittleFinger(ctx, state.ringLeftLittleRight.color) // 薬指左_小指右
  firstBackLittleFinger(ctx, state.littleOut.color) // 小指外
  if (['indexPad', 'indexCover', 'indexHole', 'none'].includes(fingerGuard)) {
    thumbIndexMiddleFinger(ctx, state.thumbIndexMiddle.color) // 親指内_人差し指_中指右
    middleRingFinger(ctx, state.middleLeftRingRight.color) // 中指左_薬指右
    weltingOfFirstBackWithIndexHole(ctx, state.welting.color) // ハミダシ
  }
  if (['middlePad', 'middleCover', 'middleHole'].includes(fingerGuard)) {
    thumbIndexMiddleRightFinger(ctx, state.thumbIndexMiddleRight.color) // 親指内_人差し指_中指右
    indexLeftMiddleRingRightFinger(ctx, 'orange') // 親指内_人差し指_中指右
    weltingOfFirstBackWithMiddleHole(ctx, state.welting.color) // ハミダシ
  }

  firstBackStyleWristBelt(ctx, state.listBelt.color) // ファーストバックベルト
  isFingerPad && indexFingerPad(ctx, state.fingerGuardColor.color, state.stitch.color) // 指当て
  isMiddleFingerPad && middleFingerPad(ctx, state.fingerGuardColor.color, state.stitch.color, -114, 55, -7) // 中指当て
  fingerHoleDrawer(ctx, state) // 指穴
  binding(ctx, state.binding.color, state.stitch.color) // ヘリ革
  //   thumbEmbroideryDrawer(ctx, state.embroideries) // 親指への刺繍
}

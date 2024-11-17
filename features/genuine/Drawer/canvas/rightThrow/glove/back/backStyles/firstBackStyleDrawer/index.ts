import { GenuineState } from '@/features/genuine/types'
import { thumbOut } from '../../thumbAndListBelt'
import { thumbIndexMiddleFinger } from './thumbIndexMiddleFinger'
import { ringLittleFinger } from './ringLittleFinger'
import { middleRingFinger } from './middleRingFinger'
import { firstBackLittleFinger } from './littleFInger'
import { weltingOfFirstBack } from './welting'
import { firstBackStyleWristBelt } from './wristBelt'
import { indexFingerPad } from '../../fingerCoverOrPad/indexFingerPad'
import { fingerHole } from './fingerHole'
import { binding } from './binding'
import { getBackStyle } from '@/features/genuine/Components/Setters/logic'

// ファーストバック モデル
export const firstBackStyleDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const { isFirstBackStyle } = getBackStyle(state)
  if (!isFirstBackStyle) return
  const isFingerPad = ['indexPad'].includes(state.fingerGuard.value)
  thumbOut(ctx, state.thumbOut.color) // 親指外
  thumbIndexMiddleFinger(ctx, state.thumbIndexMiddleRight.color) // 親指内_人差し指_中指右
  middleRingFinger(ctx, state.middleLeftRingRight.color) // 中指左_薬指右
  ringLittleFinger(ctx, state.ringLeftLittleRight.color) // 薬指左_小指右
  firstBackLittleFinger(ctx, state.littleOut.color) // 小指外
  weltingOfFirstBack(ctx, state.welting.color) // ハミダシ
  firstBackStyleWristBelt(ctx, state.listBelt.color) // ファーストバックベルト
  isFingerPad && indexFingerPad(ctx, state.fingerGuardColor.color, state.stitch.color) // 指当て
  fingerHole(ctx, state.linings.color, state.lace.color) // 指穴実装

  binding(ctx, state.binding.color, state.stitch.color) // ヘリ革
  //   thumbEmbroideryDrawer(ctx, state.embroideries) // 親指への刺繍
}

import { GenuineState } from '@/features/genuine/types'
import { fingerStand } from '../fingerStand'
import { beltStyleDrawer } from './beltStyleDrawer'
import { regularStyleDrawer } from './regularStyleDrawer'
import { tmBackStyleDrawer } from './tmBackStyleDrawer'
import { asBackTypeDrawer } from './asBackStyleDrawer'
import { HatakeyamaState } from '@/features/hatakeyama/types'

export const backStyleDrawer = (ctx: CanvasRenderingContext2D, state: HatakeyamaState): void => {
  fingerStand(ctx, state.fingerStand.color, state.stitch?.color)
  beltStyleDrawer(ctx, state) // ベルトバックスタイル
  regularStyleDrawer(ctx, state) // レギュラーバックスタイル
  tmBackStyleDrawer(ctx, state) // TMバックスタイル
  asBackTypeDrawer(ctx, state) // ASバックスタイル
}

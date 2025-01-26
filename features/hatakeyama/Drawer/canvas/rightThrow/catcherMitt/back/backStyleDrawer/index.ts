import { GenuineState } from '@/features/genuine/types'
import { fingerStand } from '../fingerStand'
import { beltStyleDrawer } from './beltStyleDrawer'
import { regularStyleDrawer } from './regularStyleDrawer'
import { tmBackStyleDrawer } from './tmBackStyleDrawer'

export const backStyleDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  fingerStand(ctx, state.fingerStand.color, state.stitch?.color)
  beltStyleDrawer(ctx, state) // ベルトバックスタイル
  regularStyleDrawer(ctx, state) // レギュラーバックスタイル
  tmBackStyleDrawer(ctx, state) // TMバックスタイル
}

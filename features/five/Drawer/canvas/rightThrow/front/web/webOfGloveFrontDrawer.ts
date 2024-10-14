import { FiveState } from '@/features/five/types'
import { p01Web } from './p01Web'
import { p02Web } from './p02Web'
import { p03Web } from './p03Web'
import { p04Web } from './p04Web'
import { p05Web } from './p05Web'
import { p06Web } from './p06Web'
import { in01Web } from './in01Web'
import { in02Web } from './in02Web'
import { in03Web } from './in03Web'
import { in04Web } from './in04Web'
import { in05Web } from './in05Web'
import { in06Web } from './in06Web'

import { ou01Web } from './ou01Web'
import { ou02Web } from './ou02Web'
import { ou03Web } from './ou03Web'

import { underWeb, underWebReinforcement } from '../lace/underWeb'
import { indexWrapBack } from '../lace/connectIndexToWeb'
import { webDrawUtil } from '@/util/canvas'

export const webOfGloveFrontDrawer = (
  ctx: CanvasRenderingContext2D,
  state: FiveState,
  webColor: string,
  laceColor: string,
  stitchColor: string
): void => {
  const { webMatcher } = webDrawUtil(state)
  if (webMatcher(['p01'])) p01Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['p02'])) p02Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['p03'])) p03Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['p04'])) p04Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['p05'])) p05Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['p06'])) p06Web(ctx, webColor, laceColor, stitchColor)

  if (webMatcher(['in01'])) in01Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['in02'])) in02Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['in03'])) in03Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['in04'])) in04Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['in05'])) in05Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['in06'])) in06Web(ctx, webColor, laceColor, stitchColor)

  if (webMatcher(['ou01'])) ou01Web(ctx, laceColor, stitchColor, webColor)
  if (webMatcher(['ou02'])) ou02Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['ou03'])) ou03Web(ctx, webColor, laceColor, stitchColor)
}

export const rightLaceOfNetWebDrawer = (ctx: CanvasRenderingContext2D, laceColor: string): void => {
  underWebReinforcement(ctx, laceColor)
  underWeb(ctx, laceColor, 10, 0) // ウェブ下＿右
  underWeb(ctx, laceColor, -32, 64) // ウェブ下＿左
  indexWrapBack(ctx, laceColor, -10, -100) // 上
  indexWrapBack(ctx, laceColor, 0, 0) // 下
}

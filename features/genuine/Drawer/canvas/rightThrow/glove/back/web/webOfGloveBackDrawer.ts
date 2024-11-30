import { webDrawUtil } from '@/util/canvas'
// import { reinforcementCrossLace } from '../lace/crossLace'

import { flatWeb } from './flatWeb'
import { flat2Web } from './flat2Web'
import { basketWeb } from './basketWeb'
import { basket2Web } from './basket2Web'
import { twoPeaceWeb } from './twoPeaceWeb'
import { twoPeaceWeb2Web } from './twoPeaceWeb2Web'
import { genuineWeb } from './genuineWeb'

import { crossWeb } from './crossWeb'
import { cross2Web } from './cross2Web'
import { cross3Web } from './cross3Web'
import { crossVWeb } from './crossVWeb'
import { crossV2Web } from './crossV2Web'
import { hWeb } from './hWeb'
import { tNetWeb } from './tNetWeb'
import { dragonflyWeb } from './dragonflyWeb'
import { ladderWeb } from './ladderWeb'
import { GenuineState } from '@/features/genuine/types'
import { uNetWeb } from './uNetWeb'
import { uNet2Web } from './uNet2Web'
import { tNet2Web } from './tNet2Web'
import { tNet3Web } from './tNet3Web'
import { iNetWeb } from './iNetWeb'
import { dragonfly2Web } from './dragonfly2Web'
import { topCrossLace, topStraightLace } from './parts/sideParts'

export const webOfGloveBackDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const laceColor = state.lace.color
  const stitchColor = state.stitch.color
  const webColor = state.web.color
  const web2Color = state.web2.color
  const { webMatcher } = webDrawUtil(state)
  // if (state.baseModel.productNumber !== 'U300') reinforcementCrossLace(ctx, laceColor, 0, 0, 1, 1)
  if (webMatcher(['flat'])) flatWeb(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['flat2'])) flat2Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['basket'])) basketWeb(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['basket2'])) basket2Web(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['twoPeace'])) twoPeaceWeb(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['twoPeace2'])) twoPeaceWeb2Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['genuine'])) genuineWeb(ctx, webColor, laceColor, stitchColor)

  if (webMatcher(['cross'])) crossWeb(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['cross2'])) cross2Web(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['cross3'])) cross3Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['crossV'])) crossVWeb(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['crossV2'])) crossV2Web(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['h'])) hWeb(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['uNet'])) uNetWeb(ctx, laceColor, stitchColor, webColor)
  if (webMatcher(['uNet2'])) uNet2Web(ctx, laceColor, stitchColor, webColor)

  if (webMatcher(['tNet'])) tNetWeb(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['tNet2'])) tNet2Web(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['tNet3'])) tNet3Web(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['iNet'])) iNetWeb(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['dragonfly'])) dragonflyWeb(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['dragonfly2'])) dragonfly2Web(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['ladder'])) ladderWeb(ctx, webColor, laceColor, stitchColor)

  if (state.webLaceStyle.value === 'cross') {
    topCrossLace(ctx, laceColor, 0, 0)
  } else {
    topStraightLace(ctx, laceColor, 0, 0)
  }
}

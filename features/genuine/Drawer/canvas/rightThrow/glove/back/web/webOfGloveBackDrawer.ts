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
import { onePeaceWeb } from './onePeaceWeb'
import { basNetWeb } from './basNetWeb'
import { flat3Web } from './flat3Web'
import { flat4Web } from './flat4Web'
import { flat5Web } from './flat5Web'
import { flat6Web } from './flat6Web'
import { fireWeb } from './fireWeb'

export const webOfGloveBackDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const laceColor = state.lace.color
  const stitchColor = state.stitch.color
  const webColor = state.web.color
  const web2Color = state.web2.color
  const { webMatcher } = webDrawUtil(state)
  // if (state.baseModel.productNumber !== 'U300') reinforcementCrossLace(ctx, laceColor, 0, 0, 1, 1)
  if (webMatcher(['flat'])) flatWeb(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['flat2'])) flat2Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['flat3'])) flat3Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['flat4'])) flat4Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['flat5'])) flat5Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['clover'])) flat6Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['basket'])) basketWeb(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['basket2'])) basket2Web(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['twoPeace'])) twoPeaceWeb(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['twoPeace2'])) twoPeaceWeb2Web(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['genuine'])) genuineWeb(ctx, webColor, laceColor, stitchColor)
  if (webMatcher(['fire'])) fireWeb(ctx, webColor, laceColor, stitchColor)

  if (webMatcher(['cross'])) crossWeb(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['cross2'])) cross2Web(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['cross3'])) cross3Web(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['crossV'])) crossVWeb(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['crossV2'])) crossV2Web(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['h'])) hWeb(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['onePeace'])) onePeaceWeb(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['uNet'])) uNetWeb(ctx, state)
  if (webMatcher(['uNet2'])) uNet2Web(ctx, state)

  if (webMatcher(['tNet'])) tNetWeb(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['tNet2'])) tNet2Web(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['tNet3'])) tNet3Web(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['iNet'])) iNetWeb(ctx, webColor, state.binding.color, laceColor, stitchColor)
  if (webMatcher(['basNet'])) basNetWeb(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['dragonfly'])) dragonflyWeb(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['dragonfly2'])) dragonfly2Web(ctx, webColor, web2Color, laceColor, stitchColor)
  if (webMatcher(['ladder'])) ladderWeb(ctx, webColor, web2Color, laceColor, stitchColor)

  if (webMatcher(['iNet'])) return
  if (state.webLaceStyle.value === 'cross') {
    topCrossLace(ctx, laceColor, 0, 0)
  } else {
    topStraightLace(ctx, laceColor, 0, 0)
  }
}

// // 基準となる線 十字
// ctx.lineWidth = 1.0
// ctx.strokeStyle = 'red'
// ctx.beginPath()
// ctx.moveTo(643, 164) // 左上
// ctx.quadraticCurveTo(517, 315, 517, 315) // 左下1
// ctx.stroke()
// ctx.closePath()

// ctx.beginPath()
// ctx.moveTo(512, 158) // 左上
// ctx.quadraticCurveTo(588, 222, 636, 321) // 左下1
// ctx.stroke()
// ctx.closePath()

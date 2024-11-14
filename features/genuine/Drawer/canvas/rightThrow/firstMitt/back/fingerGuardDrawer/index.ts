import { indexFingerCover } from './indexFingerCover'
import { indexFingerPad, indexFingerPadWithNoEdge } from './indexFingerPad'

export const fingerGuardDrawer = (ctx: CanvasRenderingContext2D, fingerGuardType: string, indexCoverColor: string, stitchColor: string): void => {
  if (fingerGuardType === 'indexPad') {
    indexFingerPad(ctx, indexCoverColor, stitchColor)
  }
  if (fingerGuardType === 'indexPadWithNoEdge') {
    indexFingerPadWithNoEdge(ctx, indexCoverColor, stitchColor)
  }
  if (fingerGuardType === 'indexCover') {
    indexFingerCover(ctx, indexCoverColor, stitchColor)
  }
}

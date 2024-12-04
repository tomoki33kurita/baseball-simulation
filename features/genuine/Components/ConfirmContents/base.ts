import { BaseItem } from '@/types'
import { GenuineState } from '@/features/genuine/types'
import { positionChecker } from '@/util/logic'
import { getGenuineBackStyle } from '../Setters/logic'

const dummy = {
  head: 'dummy',
  label: 'dummy',
  value: 'dummy'
}

export const getGenuineBaseCells = (
  state: GenuineState
): {
  head: string
  label: string
  value: string
}[] => {
  const genGloveBaseCell = (head: string, item: BaseItem) => ({ head, label: item.label, value: item.value })
  const productNumber = state.baseModel.productNumber
  const baseModelStateObj = {
    label: productNumber,
    value: productNumber
  }
  const { isGlove, isCatcher, isFirstBaseman } = positionChecker(state.baseModel.position)
  const isMeshSpecified = ['normalMesh', 'crownMesh'].includes(state.backStyle.value)
  const { isFirstBackStyle } = getGenuineBackStyle(state)
  const isLoopOfRingFinger = (isGlove && !isFirstBackStyle) || isFirstBaseman

  switch (state) {
    default:
      return [
        genGloveBaseCell('基本モデル', baseModelStateObj),
        genGloveBaseCell('革の厚さ', state.leatherThickness),
        genGloveBaseCell('手袋サイズ', state.gloveSize),
        genGloveBaseCell('利き腕', state.dominantArm),
        genGloveBaseCell('指カバー/指当て', state.fingerGuard),
        isGlove && !isFirstBackStyle ? genGloveBaseCell('背面デザイン', state.backStyle) : dummy,
        isMeshSpecified ? genGloveBaseCell('背面メッシュカラー', state.meshColor) : dummy,
        genGloveBaseCell('サイズ', state.size),
        isCatcher ? dummy : genGloveBaseCell('ウェブパーツ', state.webParts),
        genGloveBaseCell('ウェブ紐スタイル', state.webLaceStyle),
        isGlove ? genGloveBaseCell('背面紐通し', state.backLaceStyle) : dummy,
        isGlove ? genGloveBaseCell('土手芯', state.materialPack) : dummy,
        genGloveBaseCell('芯材の硬さ', state.coreHardness),
        isCatcher ? dummy : genGloveBaseCell('手口巻スタイル', state.bankLaceDirection),
        isLoopOfRingFinger ? genGloveBaseCell('薬指リング', state.loopOfRingFinger) : dummy
      ].filter((cell) => cell.value !== dummy.value)
  }
}

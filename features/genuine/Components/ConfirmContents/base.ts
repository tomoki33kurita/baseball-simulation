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
  const { isGlove, isMitt, isCatcher, isFirstBaseman } = positionChecker(state.baseModel.position)
  const isMeshSpecified = ['normalMesh', 'crownMesh'].includes(state.backStyle.value)
  const { isFirstBackStyle, isMesh } = getGenuineBackStyle(state)
  const isLoopOfRingFinger = (isGlove && !isFirstBackStyle) || isFirstBaseman
  const isSelectableWebLaceStyle = ['basket2', 'tNet3'].includes(state.webParts.value) || isCatcher
  const isYT22 = productNumber === 'YT-22'
  const isSelectableGenuineBrandMark = (isGlove && !isFirstBackStyle && !isMesh) || isCatcher
  const isSelectableGenuineBrandMarkColor = state.genuineBrandMark.value === 'genuineEmbroidery'

  switch (state) {
    default:
      return [
        genGloveBaseCell('基本モデル', baseModelStateObj),
        genGloveBaseCell('革の厚さ', state.leatherThickness),
        genGloveBaseCell('手袋サイズ', state.gloveSize),
        isCatcher ? dummy : genGloveBaseCell('小指の仕様', state.twoFingerInLittleSlot),
        genGloveBaseCell('利き腕', state.dominantArm),
        genGloveBaseCell('指カバー/指当て', state.fingerGuard),
        (isGlove && !isFirstBackStyle) || isCatcher ? genGloveBaseCell('背面デザイン', state.backStyle) : dummy,
        isYT22 ? genGloveBaseCell('ウェブ-捕球面紐通し', state.palmToWebConnectLaceStyle) : dummy,
        isMeshSpecified ? genGloveBaseCell('背面メッシュカラー', state.meshColor) : dummy,
        genGloveBaseCell('サイズ', state.size),
        // isCatcher ? dummy : genGloveBaseCell('ウェブパーツ', state.webParts),
        isCatcher ? dummy : genGloveBaseCell('ウェブパーツ', state.webParts),
        isSelectableWebLaceStyle ? genGloveBaseCell('ウェブ紐スタイル', state.webLaceStyle) : dummy,
        isGlove ? genGloveBaseCell('背面紐通し', state.backLaceStyle) : dummy,
        isGlove ? genGloveBaseCell('土手芯', state.materialPack) : dummy,
        genGloveBaseCell('芯材の硬さ', state.coreHardness),
        isMitt ? dummy : genGloveBaseCell('手口巻スタイル', state.bankLaceDirection),
        isLoopOfRingFinger ? genGloveBaseCell('薬指リング', state.loopOfRingFinger) : dummy,
        isSelectableGenuineBrandMark ? genGloveBaseCell('Genuine刺繍', state.genuineBrandMark) : dummy,
        isSelectableGenuineBrandMarkColor ? genGloveBaseCell('Genuine刺繍カラー', state.genuineBrandMarkColor) : dummy,
        isFirstBaseman ? genGloveBaseCell('Genuine刻印', state.genuineBrandMark) : dummy
      ].filter((cell) => cell.value !== dummy.value)
  }
}

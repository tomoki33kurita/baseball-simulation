import { BaseItem } from '@/types'
import { GenuineState } from '@/features/genuine/types'

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
  switch (state) {
    default:
      return [
        genGloveBaseCell('基本モデル', baseModelStateObj),
        genGloveBaseCell('利き腕', state.dominantArm),
        genGloveBaseCell('背面デザイン', state.backStyle),
        genGloveBaseCell('ウェブパーツ', state.webParts),
        genGloveBaseCell('芯とじ', state.materialPack),
        genGloveBaseCell('指カバー/指当て', state.fingerGuard)
      ]
  }
}

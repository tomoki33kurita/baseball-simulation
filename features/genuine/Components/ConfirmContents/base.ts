import { BaseItem } from '@/types'
import { GenuineState } from '@/features/genuine/types'
import { positionChecker } from '@/util/logic'

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
  const { isGlove } = positionChecker(state.baseModel.position)
  switch (state) {
    default:
      return [
        genGloveBaseCell('基本モデル', baseModelStateObj),
        genGloveBaseCell('利き腕', state.dominantArm),
        genGloveBaseCell('背面デザイン', state.backStyle),
        isGlove ? genGloveBaseCell('ウェブパーツ', state.webParts) : dummy,
        genGloveBaseCell('芯とじ', state.materialPack),
        genGloveBaseCell('指カバー/指当て', state.fingerGuard)
      ].filter((cell) => cell.value !== dummy.value)
  }
}

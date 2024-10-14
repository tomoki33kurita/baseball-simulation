import { BaseItem, State } from '../types'

export const getBaseCells = (
  state: State
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
  switch (state.orderType.value) {
    case 'basic':
    case 'basicWithEmbroidery':
    case 'colorSelect':
      return [genGloveBaseCell('基本モデル', baseModelStateObj), genGloveBaseCell('利き腕', state.dominantArm)]

    case 'custom':
      return [
        genGloveBaseCell('基本モデル', baseModelStateObj),
        genGloveBaseCell('オーダータイプ', state.orderType),
        genGloveBaseCell('利き腕', state.dominantArm),
        genGloveBaseCell('ウェブパーツ', state.webParts),
        genGloveBaseCell('芯とじ', state.materialPack),
        genGloveBaseCell('指カバー/指当て', state.fingerGuard),
        genGloveBaseCell('バンド部F・レックス刻印', state.fLexEngraving)
      ]
    default:
      return []
  }
}

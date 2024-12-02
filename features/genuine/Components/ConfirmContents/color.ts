import { BaseItem, ColorItem } from '@/types'
import { GenuineState } from '@/features/genuine/types'

const genGloveBaseCell = (head: string, item: BaseItem) => ({ head, label: item.label, value: item.value })

const genGloveColorCell = (head: string, item: ColorItem, partsKey: string) => ({
  head,
  label: item.label,
  color: item.color,
  value: item.value,
  partsKey
})

// const variablePartsGenerator = (state: GenuineState, position: Position) => {
//   switch (position) {
//     case 'pitcher':
//     default:
//       return [].filter(Boolean)
//     // case 'infielder':
//     //   const isUBack = state.baseModel.isUBack
//     //   const isNormal = !isUBack
//     //   return [
//     //     isNormal && genGloveColorCell(t.THUMB1, state.thumbOut, 'thumbOut'),
//     //     isNormal && genGloveColorCell(t.THUMB2, state.thumbWeb, 'thumbWeb'),
//     //     isNormal && genGloveColorCell(`${t.INDEX}${isLeatherIntegratedIndex ? '3-1' : '3'}`, state.indexWeb, 'indexWeb'),
//     //     isUBack && genGloveColorCell(t.THUMB1, state.thumbOut, 'thumbOut'),
//     //     isUBack && genGloveColorCell(t.THUMB2_INDEX3, state.thumbWebAndIndexWeb, 'thumbWebAndIndexWeb'),
//     //     !isLeatherIntegratedIndex && genGloveColorCell(t.INDEX4, state.indexMiddle, 'indexMiddle')
//     //   ].filter(Boolean)
//     // case 'outfielder':
//     //   // ベルト一体型を考慮
//     //   return [
//     //     genGloveColorCell(t.THUMB1, state.thumbOut, 'thumbOut'),
//     //     genGloveColorCell(t.THUMB2, state.thumbWeb, 'thumbWeb'),
//     //     genGloveColorCell(t.INDEX3, state.indexWeb, 'indexWeb'),
//     //     !isLeatherIntegratedIndex && genGloveColorCell(t.INDEX4, state.indexMiddle, 'indexMiddle')
//     //   ].filter(Boolean)
//     // default:
//     //   return []
//   }
// }

export const getGenuineColorCells = (state: GenuineState) => {
  const needFingerCoverOrPad = state.fingerGuard.value !== 'none'

  return [
    genGloveColorCell('捕球面', state.palm, 'palm'),
    genGloveColorCell('ウェブ', state.web, 'web'),
    genGloveColorCell('ウェブ2', state.web, 'web2'),
    genGloveColorCell('親指かけ紐', state.thumbHook, 'thumbHook'),
    genGloveColorCell('小指かけ紐', state.littleHook, 'littleHook'),
    needFingerCoverOrPad && genGloveColorCell('指カバー/指あて', state.fingerGuardColor, 'fingerGuardColor'),
    genGloveColorCell('裏平', state.linings, 'linings'),
    genGloveColorCell('親指1', state.thumbOut, 'thumbOut'),
    genGloveColorCell('親指2', state.thumbWeb, 'thumbWeb'),
    genGloveColorCell('人差指3', state.indexWeb, 'indexWeb'),
    genGloveColorCell('人差指4', state.indexMiddle, 'indexMiddle'),
    genGloveColorCell('中指5', state.middleIndex, 'middleIndex'),
    genGloveColorCell('中指6', state.middleRing, 'middleRing'),
    genGloveColorCell('薬指7', state.ringMiddle, 'ringMiddle'),
    genGloveColorCell('薬指8', state.ringLittle, 'ringLittle'),
    genGloveColorCell('小指9', state.littleRing, 'littleRing'),
    genGloveColorCell('小指10', state.littleOut, 'littleOut'),
    genGloveColorCell('バンド', state.listBelt, 'listBelt'),
    genGloveColorCell('ハミダシ', state.welting, 'welting'),
    genGloveColorCell('ヘリ革', state.binding, 'binding'),
    genGloveColorCell('ステッチ', state.stitch, 'stitch'),
    genGloveColorCell('革紐', state.lace, 'lace'),
    genGloveColorCell('ムートン', state.mouton, 'mouton'),
    genGloveColorCell('ラベル', { label: 'ラベル', color: state.genuineLabel.value, value: state.genuineLabel.value }, 'genuineLabel')
  ].filter((item) => item !== false)
}

import { BaseItem, BaseItemWithPrice, ColorItem } from '@/types'
import { GenuineState } from '@/features/genuine/types'
import { positionChecker } from '@/util/logic'
import { getBackStyle, getFingerGuardType } from '../Setters/logic'

const dummy = {
  head: 'dummy',
  label: 'dummy',
  color: 'dummy',
  value: 'dummy',
  partsKey: 'dummy'
}

const genGloveColorCell = (head: string, item: ColorItem, partsKey: string) => {
  return {
    head,
    label: item.label,
    color: item.color,
    value: item.value,
    partsKey
  }
}

const genGloveBaseCell = (head: string, item: BaseItem | BaseItemWithPrice, partsKey: string) => {
  if ('price' in item) {
    return { head, label: `${item.label} (+${item.price.toLocaleString()}円)`, value: item.value, partsKey }
  }
  return { head, label: item.label, value: item.value, partsKey }
}

const getFingerParts = (state: GenuineState) => {
  const backStyle = state.backStyle.value
  const productNumber = state.baseModel.productNumber
  const { isFirstBaseman, isCatcher } = positionChecker(state.baseModel.position)
  const isRequiredGenuineBrandMark = state.genuineBrandMark.value === 'genuineEmbroidery'

  if (productNumber === 'MIU-T4') {
    // firstBackStyle
    const { isMiddleHole } = getFingerGuardType(state)
    if (isMiddleHole) {
      return [
        genGloveColorCell('親指1', state.thumbOut, 'thumbOut'),
        genGloveColorCell('親指2・人差指3', state.thumbLeftIndexRight, 'thumbLeftIndexRight'),
        genGloveColorCell('人差指4・中指・薬指7', state.indexLeftMiddleRingRight, 'indexLeftMiddleRingRight'),
        genGloveColorCell('薬指8・小指9', state.ringLeftLittleRight, 'ringLeftLittleRight'),
        genGloveColorCell('小指10', state.littleOut, 'littleOut')
      ]
    }

    return [
      genGloveColorCell('親指1', state.thumbOut, 'thumbOut'),
      genGloveColorCell('親指2・人差指・中指5', state.thumbIndexMiddleRight, 'thumbIndexMiddleRight'),
      genGloveColorCell('中指6・薬指7', state.middleLeftRingRight, 'middleLeftRingRight'),
      genGloveColorCell('薬指8・小指9', state.ringLeftLittleRight, 'ringLeftLittleRight'),
      genGloveColorCell('小指10', state.littleOut, 'littleOut')
    ]
  }
  if (['crownMesh', 'crown'].includes(backStyle)) {
    return [
      genGloveColorCell('親指1', state.thumbOut, 'thumbOut'),
      genGloveColorCell('親指2', state.thumbWeb, 'thumbWeb'),
      genGloveColorCell('人差指3', state.indexWeb, 'indexWeb'),
      genGloveColorCell('人差指4・中指5', state.indexLeftMiddleRight, 'indexLeftMiddleRight'),
      genGloveColorCell('中指6・薬指7', state.middleLeftRingRight, 'middleLeftRingRight'),
      genGloveColorCell('薬指8・小指9', state.ringLeftLittleRight, 'ringLeftLittleRight'),
      genGloveColorCell('小指10', state.littleOut, 'littleOut')
    ]
  }
  if (isFirstBaseman) {
    return [
      genGloveColorCell('親指', state.thumb, 'thumb'),
      genGloveColorCell('ウェブ下', state.underWeb, 'underWeb'),
      genGloveColorCell('ブーメラン', state.boomerang, 'boomerang')
    ]
  }

  if (isCatcher) {
    switch (backStyle) {
      case 'regular':
        return [
          genGloveColorCell('親指マチ', state.thumbMachi, 'thumbMachi'),
          genGloveColorCell('小指マチ', state.littleMachi, 'littleMachi'),
          genGloveColorCell('土台', state.fingerStand, 'fingerStand'),
          genGloveColorCell('親指・人差指・中指5', state.thumbIndexMiddleRight, 'thumbIndexMiddleRight'),
          genGloveColorCell('中指6・薬指', state.middleLeftRing, 'middleLeftRing'),
          genGloveColorCell('小指10', state.littleOut, 'littleOut'),
          genGloveColorCell('指出し', state.indexFingerTipOut, 'indexFingerTipOut')
        ]
      case 'tmBack':
        return [
          genGloveColorCell('親指マチ', state.thumbMachi, 'thumbMachi'),
          genGloveColorCell('小指マチ', state.littleMachi, 'littleMachi'),
          genGloveColorCell('土台', state.fingerStand, 'fingerStand'),
          genGloveColorCell('親指', state.thumb, 'thumb'),
          genGloveColorCell('人差指・中指・薬指・小指', state.indexMiddleRingLittle, 'indexMiddleRingLittle')
        ]
      case 'belt':
      default:
        return [
          genGloveColorCell('親指マチ', state.thumbMachi, 'thumbMachi'),
          genGloveColorCell('小指マチ', state.littleMachi, 'littleMachi'),
          genGloveColorCell('土台', state.fingerStand, 'fingerStand'),
          genGloveColorCell('親指・人差指・中指5', state.thumbIndexMiddleRight, 'thumbIndexMiddleRight'),
          genGloveColorCell('中指6・薬指', state.middleLeftRing, 'middleLeftRing'),
          genGloveColorCell('小指10', state.littleOut, 'littleOut')
        ]
    }
  }

  return [
    genGloveColorCell('親指1', state.thumbOut, 'thumbOut'),
    genGloveColorCell('親指2', state.thumbWeb, 'thumbWeb'),
    genGloveColorCell('人差指3', state.indexWeb, 'indexWeb'),
    genGloveColorCell('人差指4', state.indexMiddle, 'indexMiddle'),
    genGloveColorCell('中指5', state.middleIndex, 'middleIndex'),
    genGloveColorCell('中指6', state.middleRing, 'middleRing'),
    genGloveColorCell('薬指7', state.ringMiddle, 'ringMiddle'),
    isRequiredGenuineBrandMark ? dummy : genGloveColorCell('薬指8', state.ringLittle, 'ringLittle'),
    genGloveColorCell('小指9', state.littleRing, 'littleRing'),
    genGloveColorCell('小指10', state.littleOut, 'littleOut')
  ]
}

export const getGenuineColorCells = (state: GenuineState) => {
  const noFingerCoverOrPad = ['none', 'indexHole', 'middleHole'].includes(state.fingerGuard.value)

  const isSideLabel = ['normalSide', 'directEmbroiderySide'].includes(state.genuineLabel.value)
  const isLoopOfRingFinger = state.loopOfRingFinger.value === 'loopOfRingFinger'
  const isINet = state.webParts.value === 'iNet'
  const { isFirstBaseman } = positionChecker(state.baseModel.position)
  const { isTMBackStyle, isFirstBackStyle } = getBackStyle(state)
  const isNoneWelting = state.welting.value === 'none'
  const isPalmWelting = isNoneWelting || isTMBackStyle

  return [
    genGloveColorCell('捕球面', state.palm, 'palm'),
    genGloveColorCell('ウェブ', state.web, 'web'),
    isINet ? dummy : genGloveColorCell('ウェブ2', state.web2, 'web2'),
    genGloveColorCell('親指かけ紐', state.thumbHook, 'thumbHook'),
    genGloveColorCell('小指かけ紐', state.littleHook, 'littleHook'),
    noFingerCoverOrPad ? dummy : genGloveColorCell('指カバー/指あて', state.fingerGuardColor, 'fingerGuardColor'),
    genGloveColorCell('裏平', state.linings, 'linings'),
    ...getFingerParts(state),
    isSideLabel ? dummy : genGloveColorCell('バンド', state.listBelt, 'listBelt'),
    isLoopOfRingFinger ? genGloveColorCell('薬指リング', state.loopOfRingFingerColor, 'loopOfRingFingerColor') : dummy,
    isFirstBaseman || isTMBackStyle ? dummy : genGloveColorCell('ハミダシ', state.welting, 'welting'),
    isPalmWelting ? genGloveColorCell('ハミダシ(捕球面)', state.palmWelting, 'palmWelting') : dummy,
    genGloveColorCell('ヘリ革', state.binding, 'binding'),
    genGloveColorCell('ステッチ', state.stitch, 'stitch'),
    genGloveColorCell('革紐', state.lace, 'lace'),
    isFirstBackStyle
      ? dummy
      : genGloveColorCell('ムートン', { label: state.mouton.label, color: state.mouton.value, value: state.mouton.value }, 'mouton'),
    genGloveBaseCell('ラベル', state.genuineLabel, 'genuineLabel')
  ].filter((item) => item.value !== dummy.value)
}

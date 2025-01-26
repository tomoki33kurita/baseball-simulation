import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { Embroidery, EmbroideryKey, Position, WebParts } from '@/types'
import { GenuineState, PartsItem, PartsKey } from '@/features/genuine/types'
import {
  BACK_PARTS,
  CATCHER_MITT_BELT_BACK_PARTS,
  CATCHER_MITT_REGULAR_BACK_PARTS,
  CATCHER_MITT_TM_BACK_PARTS,
  CROWN_BACK_PARTS,
  FIRST_BACK_GENUINE_LABELS,
  FIRST_BACK_MIDDLE_HOLE_PARTS,
  FIRST_BACK_PARTS,
  FIRST_BACK_WITH_MIDDLE_HOLE_GENUINE_LABELS,
  FIRST_MITT_PARTS,
  FRONT_GENUINE_LABELS,
  GENUINE_LABELS,
  LEATHER_COLORS_BY_PARTS,
  LEATHER_COLORS_BY_PARTS_FOR_CATCHER,
  PALM_PARTS
} from '@/features/hatakeyama/Constants/color'
import { EMBROIDERY_POSITIONS, EMBROIDERY_ITEMS, SHADOW_EDGE_COLORS, TYPE_FACES } from '@/features/genuine/Constants/embroidery'
import { isHalfWidthCharChecker } from '@/features/genuine/Drawer/canvas/back/useCanvasEmbroideries'
import { SET_EMBROIDERIES } from '@/constants'
import { unselectedState } from '@/features/genuine/reducer/infielder'
import { positionChecker } from '@/util/logic'
import {
  BACK_STYLES,
  BACK_STYLES_CATCHER,
  BELT_BACK_STYLE,
  FINGER_GUARDS,
  FINGER_GUARDS_CATCHER,
  FIRST_BACK_FINGER_GUARDS,
  NORMAL_BACK_STYLE,
  RN_BACK_STYLE,
  TM_BACK_STYLE,
  WEB_PARTS
} from '@/features/genuine/Constants/base'

export const getComponentParts = (state: GenuineState) => {
  const {
    all,
    palm,
    web,
    web2,
    binding,
    thumbHook,
    littleHook,
    fingerGuardColor,
    listBelt,
    stitch,
    linings,
    lace,
    welting,
    thumb,
    thumbOut,
    thumbWeb,
    thumbIndexMiddle, // first back style no finger hole
    thumbIndexMiddleRight, // first back style or catcher
    thumbLeftIndexRight, // first back style glove
    indexLeftMiddleRingRight, // first back style glove
    indexWeb,
    indexMiddle,
    indexLeftMiddleRight, // crown back style
    middleLeftRing, // catcher
    indexMiddleRingLittle, // catcher
    middleLeftRingLittle, // catcher
    middleLeftRingRight, // first back style
    middleIndex,
    middleRing,
    ringMiddle,
    ringLittle,
    ringLeftLittleRight, // first back style
    littleRing,
    littleOut,
    fingerStand,
    thumbMachi,
    littleMachi,
    indexFingerTipOut,
    underWeb,
    boomerang,
    loopOfRingFingerColor
    // mouton
  } = state

  return {
    all,
    palm,
    web,
    web2,
    binding,
    thumbHook,
    littleHook,
    fingerGuardColor,
    listBelt,
    stitch,
    linings,
    lace,
    welting,
    // mouton,
    thumb,
    thumbOut,
    thumbWeb,
    indexWeb,
    indexMiddle,
    middleIndex,
    middleRing,
    ringMiddle,
    ringLittle,
    littleRing,
    littleOut,
    underWeb,
    boomerang,
    fingerStand,
    indexFingerTipOut,
    loopOfRingFingerColor,
    thumbIndexMiddle, // first back style no finger hole
    thumbIndexMiddleRight, // first back style or catcher
    indexLeftMiddleRight,
    middleLeftRing,
    thumbMachi,
    littleMachi,
    indexMiddleRingLittle,
    middleLeftRingLittle, // catcher
    middleLeftRingRight, // first back style
    ringLeftLittleRight, // first back style
    thumbLeftIndexRight, // first back style glove
    indexLeftMiddleRingRight // first back style glove
  }
}

export const getColorOptionsByParts = (partsKey: PartsKey, state: GenuineState) => {
  const { isCatcher } = positionChecker(state.baseModel.position)

  if (isCatcher) {
    return LEATHER_COLORS_BY_PARTS_FOR_CATCHER[partsKey]
  }

  return LEATHER_COLORS_BY_PARTS[partsKey]
}

export const getSelectableParts = (state: GenuineState): PartsItem[] => {
  const { drawerIndex } = state
  const { isFirstBackStyle, isCrownBackStyle } = getBackStyle(state)
  const { isFirstBaseman, isCatcher } = positionChecker(state.baseModel.position)
  if (isCatcher) {
    switch (state.backStyle.value) {
      case 'regular':
        return CATCHER_MITT_REGULAR_BACK_PARTS
      case 'tmBack':
        return CATCHER_MITT_TM_BACK_PARTS
      case 'belt':
      default:
        return CATCHER_MITT_BELT_BACK_PARTS
    }
  }
  if (isFirstBaseman) {
    return FIRST_MITT_PARTS
  }
  if (drawerIndex === 0) {
    const { isMiddleHole } = getFingerGuardType(state)
    if (isFirstBackStyle) {
      if (isMiddleHole) {
        return FIRST_BACK_MIDDLE_HOLE_PARTS
      }
      return FIRST_BACK_PARTS
    }
    if (isCrownBackStyle) {
      return CROWN_BACK_PARTS
    }
    return BACK_PARTS
  } else {
    return PALM_PARTS
  }
}

export const getBackStyleOptions = (state: GenuineState) => {
  const { position, productNumber } = state.baseModel
  switch (position) {
    case 'catcher':
      if (state.fingerGuard.value === 'specialIndexPad') {
        return BACK_STYLES_CATCHER.filter((b) => b.value === BELT_BACK_STYLE.value)
      }
      if (productNumber === 'YT-22') {
        return BACK_STYLES_CATCHER.filter((b) => b.value !== TM_BACK_STYLE.value)
      }
      return BACK_STYLES_CATCHER
    case 'pitcher':
      if (productNumber === 'MIU-T1') return BACK_STYLES
      return BACK_STYLES.filter((b) => b.value !== RN_BACK_STYLE.value)
    default:
      return [NORMAL_BACK_STYLE]
  }
}

export const getGenuineLabelOptions = (state: GenuineState) => {
  const { isConnectBackStyle, isFirstBackStyle } = getBackStyle(state)
  const { position } = state.baseModel
  switch (position) {
    case 'pitcher':
      if (isConnectBackStyle) return FRONT_GENUINE_LABELS
      if (isFirstBackStyle) {
        const { isMiddleHole } = getFingerGuardType(state)
        if (isMiddleHole) return FIRST_BACK_WITH_MIDDLE_HOLE_GENUINE_LABELS
        return FIRST_BACK_GENUINE_LABELS
      }
      return GENUINE_LABELS
    case 'catcher':
      return FRONT_GENUINE_LABELS
    default:
      return GENUINE_LABELS
  }
}

export const filterSelectableParts = (state: GenuineState, selectableParts: PartsItem[]) => {
  // ラベルの位置によって、バンドパーツを制御する
  const isSideLabel = ['normalSide', 'directEmbroiderySide'].includes(state.genuineLabel.value)
  const filtered1 = isSideLabel ? selectableParts.filter((p) => p.value !== 'listBelt') : selectableParts
  const isLoopOfRingFinger = state.loopOfRingFinger.value === 'loopOfRingFinger'
  const filtered2 = isLoopOfRingFinger ? filtered1 : filtered1.filter((p) => p.value !== 'loopOfRingFingerColor')
  const isIntegratedRing = state.genuineBrandMark.value === 'genuineEmbroidery'
  const filtered3 = isIntegratedRing ? filtered2.filter((p) => p.value !== 'ringLittle') : filtered2
  return filtered3
}

export const getGenuineBackStyle = (state: GenuineState) => {
  const isMesh = ['normalMesh', 'crownMesh'].includes(state.backStyle.value)
  const isFirstBackStyle = ['MIU-T4'].includes(state.baseModel.productNumber)
  const isCrownBackStyle = ['crown', 'crownMesh'].includes(state.backStyle.value)
  const isTMBackStyle = ['tmBack'].includes(state.backStyle.value) // catcher
  const isRegularBackStyle = ['regular'].includes(state.backStyle.value)
  const isBeltBackStyle = ['belt'].includes(state.backStyle.value) // catcher
  const isUnselectedBackStyle = state.backStyle.value === 'unselected'

  return {
    isMesh,
    isFirstBackStyle,
    isCrownBackStyle,
    isTMBackStyle,
    isRegularBackStyle,
    isBeltBackStyle,
    isUnselectedBackStyle
  }
}

export const getGenuineWebParts = (isFirstBaseman: boolean) => {
  const findFirstBaseman = (p: Position) => p === 'firstBaseman'
  const switchWebParts = (p: WebParts) => (isFirstBaseman ? p.positions.some(findFirstBaseman) : !p.positions.every(findFirstBaseman))
  const selectableWebParts = WEB_PARTS.filter(switchWebParts)
  return {
    selectableWebParts
  }
}

export const getFingerGuardOptions = (state: GenuineState) => {
  const { isFirstBackStyle, isRegularBackStyle, isTMBackStyle } = getBackStyle(state)
  const { isCatcher } = positionChecker(state.baseModel.position)
  if (isCatcher) {
    if (isRegularBackStyle || isTMBackStyle) {
      return FINGER_GUARDS_CATCHER.filter((f) => f.value !== 'specialIndexPad')
    }
    return FINGER_GUARDS_CATCHER
  }
  if (isFirstBackStyle) {
    return FIRST_BACK_FINGER_GUARDS
  }
  return FINGER_GUARDS
}

export const characterCheckHelper = (embroidery: Embroidery) => {
  const contentStr = embroidery.content
  const isHalfWidthChar = isHalfWidthCharChecker(contentStr)
  const normalContentMaxLength = isHalfWidthChar ? 16 : 8
  const bandContentMaxLength = isHalfWidthChar ? 2 : 1
  const contentMaxLength = ['bandSide', 'onWeb'].includes(embroidery.position.value) ? bandContentMaxLength : normalContentMaxLength
  const characterType = contentStr.charCodeAt(0) >= 256 ? 'ja' : 'en'

  return {
    contentMaxLength,
    existsContent: contentStr.length > 0,
    characterType
  }
}

const embroideryPositionListGenerator = (embroideries: Embroidery[], overAllIndex: number) =>
  embroideries
    .map((e, i) => {
      if (i < overAllIndex) {
        return e.position.value
      }
    })
    .filter((item) => item !== undefined)

const embroideryPositionFilter = (selectedPosition: string[]) => EMBROIDERY_POSITIONS.filter((p) => !selectedPosition.includes(p.value))

export const selectablePositionGenerator = (state: GenuineState, index: number) => {
  const { embroideries, genuineLabel } = state
  const selectedPosition = embroideryPositionListGenerator(embroideries, index)
  const selectablePositionBase = embroideryPositionFilter(selectedPosition)
  const overAllSelectedPositions = embroideries.map((e) => e.position.value)
  const canSelectBandSide = ['normalSide', 'directEmbroiderySide'].includes(genuineLabel.value)

  // 裏平1段目が選択可能かどうか→可能な時は、2段目は選択できないようにしておきたい
  const isSelectableOfLiningFirst = selectablePositionBase.some((p) => p.value === 'leatherLiningFirst')
  const selectablePosition1 = (
    isSelectableOfLiningFirst ? selectablePositionBase.filter((p) => p.value !== 'leatherLiningSecond') : selectablePositionBase
  ).filter((p) => !overAllSelectedPositions.includes(p.value) || p.value === embroideries[index].position?.value)

  const isGenuineBrandMark = state.genuineBrandMark.value === 'genuineEmbroidery'
  const selectablePosition2 = isGenuineBrandMark ? selectablePosition1.filter((p) => p.value !== 'childFinger') : selectablePosition1
  const selectablePosition3 = canSelectBandSide ? selectablePosition2 : selectablePosition2.filter((p) => p.value !== 'bandSide')
  const selectablePosition4 = state.baseModel.productNumber === 'YT-22' ? selectablePosition3 : selectablePosition3.filter((p) => p.value !== 'onWeb')
  return selectablePosition4
}

export const generateSubColors = (shouldFiltering: boolean) => {
  return shouldFiltering ? SHADOW_EDGE_COLORS.filter((o) => o.value === 'none') : SHADOW_EDGE_COLORS
}

const embroideriesReducer = (embroideries: Embroidery[], newEmbroideries: Embroidery, i: number): Embroidery[] => {
  return embroideries.reduce((a: Embroidery[], c) => {
    if (c.id === i) a.push(newEmbroideries)
    if (c.id !== i) a.push(c)
    return a
  }, [])
}
const useEmbroideryContent = (dispatch: (value: unknown) => void, embroideries: Embroidery[]): ((content: string, i: number) => void) => {
  const [content, setContent] = useState('')
  const [contentNum, setContentNum] = useState(0)
  const [delayedValue] = useDebounce(content, 10)
  const handleContentAndNum = (content: string, i: number) => {
    setContent(content)
    setContentNum(i)
  }
  // テキストの遅延更新処理ここから
  const updateEmbroideryContent = (delayedValue: string, i: number) => {
    const newEmbroideries = { ...embroideries[i], content: delayedValue, typeFace: unselectedState }
    return embroideriesReducer(embroideries, newEmbroideries, i)
  }
  useEffect(() => {
    dispatch({ type: SET_EMBROIDERIES, embroideries: updateEmbroideryContent(delayedValue, contentNum) })
  }, [delayedValue])
  // テキストの遅延更新処理ここまで
  return handleContentAndNum
}

interface ObjectKey {
  typeFace: string
  position: string
  color: string
  shadowColor: string
  edgeColor: string
}

const unselectedColorState = {
  label: '未選択',
  value: 'unselected',
  color: '#fff'
}

const updateEmbroideries = (embroideries: Embroidery[], selected: string, type: EmbroideryKey, i: number): Embroidery[] => {
  const objectKey = type as keyof ObjectKey
  const isEngraving = selected === 'engraving'
  const isTypeFace = objectKey === 'typeFace'
  const wasEngraving = embroideries[i].typeFace.value === 'engraving'
  const embroidery = isEngraving
    ? {
        color: { label: '刻印（色指定不可）', value: 'engraving', color: 'gray' },
        shadowColor: { label: '刻印（色指定不可）', value: 'none', color: 'gray' },
        edgeColor: { label: '刻印（色指定不可）', value: 'none', color: 'gray' },
        typeFace: { label: '刻印（色指定不可）', value: 'engraving' },
        position: embroideries[i].position,
        id: embroideries[i].id,
        content: embroideries[i].content
      }
    : isTypeFace && wasEngraving
    ? {
        ...embroideries[i],
        color: unselectedColorState,
        shadowColor: unselectedColorState,
        edgeColor: unselectedColorState,
        typeFace: EMBROIDERY_ITEMS[objectKey].filter((prev) => prev.value === selected)[0]
      }
    : embroideries[i]

  const newEmbroidery: Embroidery = {
    ...embroidery,
    [type]: EMBROIDERY_ITEMS[objectKey].filter((prev) => prev.value === selected)[0]
  }
  return embroideriesReducer(embroideries, newEmbroidery, i)
}

const embroideriesDispatcher = (
  dispatch: React.Dispatch<unknown>,
  embroideries: Embroidery[],
  selected: string,
  key: EmbroideryKey,
  i?: number | undefined
): void => {
  if (i === undefined) return
  dispatch({
    type: SET_EMBROIDERIES,
    embroideries: updateEmbroideries(embroideries, selected, key, i)
  })
}

const embroideriesDispatchWrapper = (dispatch: React.Dispatch<any>, embroideries: Embroidery[], key: EmbroideryKey) => {
  return (selected: string, i?: number) => embroideriesDispatcher(dispatch, embroideries, selected, key, i)
}

export const useEmbroideriesDispatchGenerator = (dispatch: React.Dispatch<any>, embroideries: Embroidery[]) => {
  const handleContentAndNum = useEmbroideryContent(dispatch, embroideries)
  return {
    handle: {
      typeFace: embroideriesDispatchWrapper(dispatch, embroideries, 'typeFace'),
      position: embroideriesDispatchWrapper(dispatch, embroideries, 'position'),
      color: embroideriesDispatchWrapper(dispatch, embroideries, 'color'),
      shadowColor: embroideriesDispatchWrapper(dispatch, embroideries, 'shadowColor'),
      edgeColor: embroideriesDispatchWrapper(dispatch, embroideries, 'edgeColor'),
      content: (selected: string, i?: number) => {
        if (i === undefined) return
        handleContentAndNum(selected, i)
      }
    }
  }
}

export const embroideryFlagGenerator = (e: Embroidery) => {
  const { color, shadowColor, edgeColor } = e
  const isShadowColor = shadowColor.value !== 'none' && shadowColor.value !== 'unselected'
  const isEdgeColor = edgeColor.value !== 'none' && edgeColor.value !== 'unselected'
  const isUnSelectedPosition = e.position.value === ''
  const isUnSelectedTypeFace = e.typeFace.value === ''
  const isUnSelectedMainColor = e.color.value === 'unselected'
  const isUnselectedEmbroideryColor = color.value.length === 0
  const isSelectedTypeFace = [e.typeFace.label, e.typeFace.value].every((x) => x.length > 0)
  const disabledShadowColor = isEdgeColor || isUnselectedEmbroideryColor || !isSelectedTypeFace
  const disabledEdgeColor = isShadowColor || isUnselectedEmbroideryColor || !isSelectedTypeFace
  const shadowColorLabel = shadowColor.label
  const edgeColorLabel = edgeColor.label
  // const shadowColorLabel = isEdgeColor ? t.NO_SELECTION : shadowColor.label
  // const edgeColorLabel = isShadowColor ? t.NO_SELECTION : edgeColor.label
  // const pointColorLabel = isArribaFont ? pointColor?.label : t.NO_SELECTION
  return {
    shadowColorLabel,
    edgeColorLabel,
    disabledShadowColor,
    disabledEdgeColor,
    isUnSelectedPosition,
    isUnSelectedTypeFace,
    isUnSelectedMainColor,
    isSelectedTypeFace
  }
}

const typeFaceResolver = (embroidery: Embroidery) => {
  const typeFace = TYPE_FACES.find((t) => t.label === embroidery.typeFace.label) || TYPE_FACES[0]
  return typeFace
}

export const fontImageResolver = (embroidery: Embroidery) => {
  const typeFace = typeFaceResolver(embroidery)
  return { typeFace }
}

export const getBackStyle = (state: GenuineState) => {
  // const isFirstBackStyle = ['firstBackStyle'].includes(state.backStyle.value)
  const isCrownBackStyle = ['crown', 'crownMesh'].includes(state.backStyle.value)
  const isConnectBackStyle = ['rn'].includes(state.backStyle.value)
  const isMIU_T4Model = state.baseModel.productNumber === 'MIU-T4' && state.backStyle.value === 'unselected'
  const isBeltBackStyle = ['belt'].includes(state.backStyle.value)
  const isRegularBackStyle = ['regular'].includes(state.backStyle.value)
  const isTMBackStyle = ['tmBack'].includes(state.backStyle.value)
  return {
    isFirstBackStyle: isMIU_T4Model, //|| isFirstBackStyle
    isCrownBackStyle,
    isBeltBackStyle,
    isConnectBackStyle,
    isRegularBackStyle,
    isTMBackStyle
  }
}

export const getFingerColor = (state: GenuineState) => {
  const { isFirstBackStyle, isCrownBackStyle } = getBackStyle(state)
  const isIntegratedRing = state.genuineBrandMark.value === 'genuineEmbroidery'
  if (isFirstBackStyle) {
    const { isMiddleHole } = getFingerGuardType(state)
    if (isMiddleHole) {
      return {
        thumbWebColor: state.thumbLeftIndexRight.color,
        indexWebColor: state.thumbLeftIndexRight.color,
        indexMiddleColor: state.indexLeftMiddleRingRight.color,
        middleIndexColor: state.indexLeftMiddleRingRight.color,
        middleRingColor: state.indexLeftMiddleRingRight.color,
        ringLittleColor: state.ringLeftLittleRight.color
      }
    }
    return {
      thumbWebColor: state.thumbIndexMiddleRight.color,
      indexWebColor: state.thumbIndexMiddleRight.color,
      indexMiddleColor: state.thumbIndexMiddleRight.color,
      middleIndexColor: state.thumbIndexMiddleRight.color,
      middleRingColor: state.middleLeftRingRight.color,
      ringLittleColor: state.ringLeftLittleRight.color
    }
  }

  if (isCrownBackStyle) {
    return {
      thumbWebColor: state.thumbWeb.color,
      indexWebColor: state.indexWeb.color,
      indexMiddleColor: state.indexLeftMiddleRight.color,
      middleIndexColor: state.indexLeftMiddleRight.color,
      middleRingColor: state.middleLeftRingRight.color,
      ringLittleColor: state.ringLeftLittleRight.color
    }
  }
  return {
    thumbWebColor: state.thumbWeb.color,
    indexWebColor: state.indexWeb.color,
    indexMiddleColor: state.indexMiddle.color,
    middleIndexColor: state.middleIndex.color,
    middleRingColor: state.middleRing.color,
    ringLittleColor: isIntegratedRing ? state.ringMiddle.color : state.ringLittle.color
  }
}

export const getBankLaceDirection = (state: GenuineState) => {
  const bankLaceDirection = state.bankLaceDirection.value === 'unselected' ? state.baseModel.bankLaceDirection : state.bankLaceDirection.value
  return {
    bankLaceDirection
  }
}

export const getFingerGuardType = (state: GenuineState) => {
  const isMiddleHole = ['middleHole', 'middlePad', 'middleCover'].includes(state.fingerGuard.value)
  return {
    isMiddleHole
  }
}

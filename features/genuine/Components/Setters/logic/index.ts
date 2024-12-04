import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { Embroidery, EmbroideryKey } from '@/types'
import { DrawerIndex, GenuineState, PartsItem, PartsKey } from '@/features/genuine/types'
import { BACK_PARTS, CROWN_BACK_PARTS, FIRST_BACK_PARTS, LEATHER_COLORS_BY_PARTS, PALM_PARTS } from '@/features/genuine/Constants/color'
import { EMBROIDERY_POSITIONS, EMBROIDERY_ITEMS, SHADOW_EDGE_COLORS, TYPE_FACES } from '@/features/genuine/Constants/embroidery'
import { isHalfWidthCharChecker } from '@/features/genuine/Drawer/canvas/back/useCanvasEmbroideries'
import { SET_EMBROIDERIES } from '@/Constants'
import { unselectedState } from '@/features/genuine/reducer/infielder'

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
    thumbOut,
    thumbWeb,
    thumbIndexMiddle, // first back style no finger hole
    thumbIndexMiddleRight, // first back style or catcher
    indexWeb,
    indexMiddle,
    indexLeftMiddleRight, // crown back style
    middleLeftRingLittle, // catcher
    middleLeftRingRight, // first back style
    middleIndex,
    middleRing,
    ringMiddle,
    ringLittle,
    ringLeftLittleRight, // first back style
    littleRing,
    littleOut
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
    thumbIndexMiddle, // first back style no finger hole
    thumbIndexMiddleRight, // first back style or catcher
    indexLeftMiddleRight,
    middleLeftRingLittle, // catcher
    middleLeftRingRight, // first back style
    ringLeftLittleRight // first back style
  }
}

export const getColorOptionsByParts = (partsKey: PartsKey) => LEATHER_COLORS_BY_PARTS[partsKey]

export const getSelectableParts = (drawerIndex: DrawerIndex, isFirstBackStyle: boolean, isCrownBackStyle: boolean): PartsItem[] => {
  if (drawerIndex === 0) {
    if (isFirstBackStyle) {
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

export const filterSelectableParts = (state: GenuineState, selectableParts: PartsItem[]) => {
  // ラベルの位置によって、バンドパーツを制御する
  if (['normalSide', 'directEmbroiderySide'].includes(state.genuineLabel.value)) {
    return selectableParts.filter((p) => p.value !== 'listBelt')
  }
  return selectableParts
}

export const getGenuineBackStyle = (state: GenuineState) => {
  const isMesh = ['normalMesh', 'crownMesh'].includes(state.backStyle.value)
  const isFirstBackStyle = ['MIU-T4'].includes(state.baseModel.productNumber)
  return {
    isMesh,
    isFirstBackStyle
  }
}

export const characterCheckHelper = (embroidery: Embroidery) => {
  const contentStr = embroidery.content
  const isHalfWidthChar = isHalfWidthCharChecker(contentStr)
  const normalContentMaxLength = isHalfWidthChar ? 16 : 8
  const bandContentMaxLength = isHalfWidthChar ? 2 : 1
  const contentMaxLength = embroidery.position.value === 'band' ? bandContentMaxLength : normalContentMaxLength
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

export const selectablePositionGenerator = (embroideries: Embroidery[], index: number) => {
  const selectedPosition = embroideryPositionListGenerator(embroideries, index)
  const selectablePositionBase = embroideryPositionFilter(selectedPosition)
  const overAllSelectedPositions = embroideries.map((e) => e.position.value)

  // 裏平1段目が選択可能かどうか→可能な時は、2段目は選択できないようにしておきたい
  const isSelectableOfLiningFirst = selectablePositionBase.some((p) => p.value === 'leatherLiningFirst')
  const selectablePosition = (
    isSelectableOfLiningFirst ? selectablePositionBase.filter((p) => p.value !== 'leatherLiningSecond') : selectablePositionBase
  ).filter((p) => !overAllSelectedPositions.includes(p.value) || p.value === embroideries[index].position?.value)
  return selectablePosition
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

const updateEmbroideries = (embroideries: Embroidery[], selected: string, type: EmbroideryKey, i: number): Embroidery[] => {
  const objectKey = type as keyof ObjectKey
  const newEmbroideries = {
    ...embroideries[i],
    [type]: EMBROIDERY_ITEMS[objectKey].filter((prev) => prev.value === selected)[0]
  }
  return embroideriesReducer(embroideries, newEmbroideries, i)
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
  const isMIUT4Model = state.baseModel.productNumber === 'MIU-T4' && state.backStyle.value === 'unselected'
  return {
    isFirstBackStyle: isMIUT4Model, //|| isFirstBackStyle
    isCrownBackStyle
  }
}

export const getFingerColor = (state: GenuineState) => {
  const { isFirstBackStyle, isCrownBackStyle } = getBackStyle(state)
  if (isFirstBackStyle) {
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
    ringLittleColor: state.ringLittle.color
  }
}

export const getBankLaceDirection = (state: GenuineState) => {
  const bankLaceDirection = state.bankLaceDirection.value === 'unselected' ? state.baseModel.bankLaceDirection : state.bankLaceDirection.value
  return {
    bankLaceDirection
  }
}

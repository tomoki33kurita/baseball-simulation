import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { BaseItem, Embroidery, EmbroideryKey } from '@/types'
import { DrawerIndex, PartsItem, PartsKey, FiveState } from '@/features/five/types'
import { BACK_PARTS, LEATHER_COLORS_BY_PARTS, PALM_PARTS } from '@/features/five/Constants/color'
import { SET_EMBROIDERIES } from '@/features/five/Constants/action'
import { EMBROIDERY_POSITIONS, EMBROIDERY_ITEMS, SHADOW_EDGE_COLORS, TYPE_FACES } from '@/features/five/Constants/embroidery'
import { isHalfWidthCharChecker } from '@/features/five/Drawer/canvas/back/useCanvasEmbroideries'

export const getComponentParts = (state: FiveState) => {
  const {
    all,
    palm,
    web,
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
    indexWeb,
    indexMiddle,
    middleIndex,
    middleRing,
    ringMiddle,
    ringLittle,
    littleRing,
    littleOut,
    mouton,
    labelStand,
    fiveLabel
  } = state

  return {
    all,
    palm,
    web,
    binding,
    thumbHook,
    littleHook,
    fingerGuardColor,
    listBelt,
    stitch,
    linings,
    lace,
    welting,
    mouton,
    labelStand,
    fiveLabel,
    thumbOut,
    thumbWeb,
    indexWeb,
    indexMiddle,
    middleIndex,
    middleRing,
    ringMiddle,
    ringLittle,
    littleRing,
    littleOut
  }
}

export const getColorOptionsByParts = (partsKey: PartsKey) => LEATHER_COLORS_BY_PARTS[partsKey]

export const getSelectableParts = (drawerIndex: DrawerIndex, orderType: BaseItem): PartsItem[] => {
  switch (orderType.value) {
    case 'basic':
      // case 'basicWithEmbroidery':
      return []
    case 'colorSelect':
      return [{ label: '全体', value: 'all' }]
    case 'custom':
      return drawerIndex === 1 ? PALM_PARTS : BACK_PARTS
    default:
      return []
  }
}

export const characterCheckHelper = (embroidery: Embroidery) => {
  const contentStr = embroidery.content
  const isHalfWidthChar = isHalfWidthCharChecker(contentStr)
  const normalContentMaxLength = isHalfWidthChar ? 16 : 8
  const bandContentMaxLength = isHalfWidthChar ? 2 : 1
  const contentMaxLength = embroidery.position.value === 'band' ? bandContentMaxLength : normalContentMaxLength
  return {
    contentMaxLength,
    existsContent: contentStr.length > 0
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
    const newEmbroideries = { ...embroideries[i], content: delayedValue }
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

export const getOrderType = (orderType: BaseItem) => {
  const isSelectedOrderType = orderType.value !== 'unselected'
  const isNotSelectedOrderType = orderType.value === 'unselected'
  const isBasicOrder = ['basic'].includes(orderType.value)
  // const isBasicWithEmbroideryOrder = ['basicWithEmbroidery'].includes(orderType.value)

  return {
    isBasicOrder,
    // isBasicWithEmbroideryOrder,
    isBasic: isBasicOrder, //|| isBasicWithEmbroideryOrder,
    isColorSelectOrder: orderType.value === 'colorSelect',
    isCustomOrder: orderType.value === 'custom',
    isSelectedOrderType,
    isNotSelectedOrderType,
    isSelectableLimitedEmbroidery: ['basicWithEmbroidery', 'colorSelect'].includes(orderType.value)
  }
}

export const getFLexEngraving = (fLexEngraving: BaseItem) => {
  return {
    isFLexEngraving: fLexEngraving.value === 'fLexEngraving'
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

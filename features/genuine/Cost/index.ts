import { Embroidery } from '@/types'
import { GenuineState } from '../types'
import { JUNIOR_LIST } from '../Constants/model'
import { positionChecker } from '@/util/logic'
import { getColorCells } from '@/features/Logic'

export const getMultiColorsCost = (state: GenuineState): number => {
  const multiColors = getColorCells(state).filter(
    (o) =>
      !['linings', 'binding', 'lace', 'welting', 'stitch', 'mouton', 'genuineBrandMarkColor', 'genuineLabel'].includes(o.partsKey) &&
      o.value !== 'unselected'
  )
  const multiColorsCount = multiColors.reduce((a: string[], c) => {
    if (a.includes(c.label)) return a
    return c.label ? [...a, c.label] : a
  }, [])
  const multiColorsCost = multiColorsCount.length < 2 ? 0 : multiColorsCount.length * 1100
  return multiColorsCost
}

const sum = (targets: number[]): number => targets.reduce((a: number, c: number) => a + c, 0)

export const calculateGenuineBaseCost = (state: GenuineState): number => {
  const isJuniorModel = JUNIOR_LIST.includes(state.baseModel.productNumber)
  const { isGlove } = positionChecker(state.baseModel.position)
  const isRubberBall = state.ballType.value === 'rubber'
  const isHardBall = state.ballType.value === 'hard'
  if (isJuniorModel) {
    if (isRubberBall) {
      if (isGlove) {
        return 38500 // 少年、軟式、グラブ
      }
      return 42900 // 少年、軟式、ミット
    }
    if (isHardBall) {
      if (isGlove) {
        return 60500 // 少年、硬式、グラブ
      }
      return 64900 // 少年、硬式、ミット
    }
  }

  // 大人モデル
  if (!isJuniorModel) {
    if (isRubberBall) {
      if (isGlove) {
        return 52800 // 一般、軟式、グラブ
      }
      return 57200 // 一般、軟式、ミット
    }
    if (isHardBall) {
      if (isGlove) {
        return 77000 // 一般、硬式、グラブ
      }
      return 81400 // 一般、硬式、ミット
    }
  }
  return 0
}

export const calculateGenuineOptionCost = (state: GenuineState): number => {
  const labelCost = state.genuineLabel.price
  const deerSkinCost = state.mouton.price
  const loopOfRingFingerCost = state.loopOfRingFinger.price
  const sizeCost = state.size.price
  const meshCost = state.backStyle.price
  const genuineBrandMarkCost = state.genuineBrandMark.price
  const fingerGuardCost = state.fingerGuard.price
  const multiColorsCost = getMultiColorsCost(state)

  const optionCost = sum([labelCost, deerSkinCost, loopOfRingFingerCost, sizeCost, meshCost, genuineBrandMarkCost, fingerGuardCost, multiColorsCost])
  return optionCost
}

export const calculateGenuineEmbroideryCost = (state: GenuineState): number => {
  const embroideries = state.embroideries
  const embroideriesOfFiltered = embroideries.filter((e: Embroidery) => e.content.trim().length > 0)
  const singlePrice = 220
  const shadowPrice = 330
  const edgePrice = 440
  const costsOfEmbroideries = embroideriesOfFiltered
    .map((e: Embroidery) => {
      const isEdge = e.edgeColor.value !== 'none' //フチ付きかどうか
      const isShadow = e.shadowColor.value !== 'none' //カゲ付きかどうか
      const cost = isEdge ? edgePrice : isShadow ? shadowPrice : singlePrice
      return cost * e.content.replace(/\s/g, '').length
    }) // [2750, 2200, ...]
    .reduce((a: number, c: number) => a + c, 0) //
  return costsOfEmbroideries
}

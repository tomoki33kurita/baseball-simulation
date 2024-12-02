import { getFiveColorCells } from '@/features/five/Components/ConfirmContents/color'
import { FiveState } from '@/features/five/types'
import { Brand, State, TwoDimensional } from '@/types'

export const colorCells2Condition = ['lace', 'stitch', 'binding', 'welting', 'mouton', 'fiveLabel', 'genuineLabel']

const genGloveColorCells = (state: State, brand: Brand) => {
  switch (brand) {
    case 'five':
    default:
      return getFiveColorCells(state as FiveState)
  }
}

const genColorCells = (
  state: State,
  brand: Brand
): {
  head: string
  label: string
  color: string
  value: string
  partsKey: string
}[] => {
  const position = state.baseModel.position
  switch (position) {
    case 'catcher':
    case 'firstBaseman':
    default:
      return genGloveColorCells(state, brand)
  }
}

export const colorSettings = (state: State): any => {
  const brand = state.baseModel.brand
  const colorCells = genColorCells(state, brand)
  const colorCells1 = colorCells.filter((x) => !colorCells2Condition.includes(x.partsKey))
  const colorCells2 = colorCells.filter((x) => colorCells2Condition.includes(x.partsKey))

  const DUMMY = { head: '', label: '', value: '' }
  const remaining1 = colorCells1.length % 3 // 配列要素数合計を3の倍数で割った時の余り
  const formattedBaseCells1: {
    head: string
    label: string
    color?: string
    value?: string
    partsKey?: string
  }[] = remaining1 === 2 ? [...colorCells1, DUMMY] : remaining1 === 1 ? [...colorCells1, DUMMY, DUMMY] : colorCells1

  // 以下の要素数は必ず3の倍数になっている必要があるため、上記でdummy Objectを使って余りを埋めている
  const twoDimensionalArray1 = formattedBaseCells1
    .reduce((a: TwoDimensional[][][], _, i) => {
      const item = [...formattedBaseCells1].splice(i * 3, 3).map((x) => [
        { text: x.head, fontSize: 8, alignment: 'left' },
        { text: x.label, fontSize: 10, alignment: 'right' }
      ])
      a.push(item)
      return a
    }, [])
    .filter((x) => x.length)

  // FIVEの場合、orderTypeによって、colorCells2の要素数が0になることがあるため、その場合は空の配列を返す
  const remaining2 = colorCells2.length === 0 ? 0 : colorCells2.length % 3 // 配列要素数合計を3の倍数で割った時の余り
  const formattedBaseCells2: {
    head: string
    label: string
    color?: string
    value?: string
    partsKey?: string
  }[] = remaining2 === 2 ? [...colorCells2, DUMMY] : remaining2 === 1 ? [...colorCells2, DUMMY, DUMMY] : colorCells2

  const twoDimensionalArray2 =
    formattedBaseCells2.length > 0
      ? formattedBaseCells2
          .reduce((a: TwoDimensional[][][], _, i) => {
            const item = [...formattedBaseCells2].splice(i * 3, 3).map((x) => [
              { text: x.head, fontSize: 8, alignment: 'left' },
              { text: x.label, fontSize: 10, alignment: 'right' /*color: '#323232'*/ }
            ])
            a.push(item)
            return a
          }, [])
          .filter((x) => x.length)
      : []
  return [
    {
      text: 'カラー設定1',
      style: { fontSize: 11 },
      margin: [0, 8, 0, 4]
    },
    {
      table: {
        widths: ['33%', '33%', '33%'],
        body: twoDimensionalArray1 // genColorSettingByBrand(state, brand, position, genCellContent)
      }
    },
    {
      text: 'カラー設定2',
      style: { fontSize: 11 },
      margin: [0, 8, 0, 4]
    },
    twoDimensionalArray2.length > 0 && {
      table: {
        widths: ['33%', '33%', '33%'],
        body: twoDimensionalArray2 // genColorSettingByBrand(state, brand, position, genCellContent)
      }
    }
  ]
}

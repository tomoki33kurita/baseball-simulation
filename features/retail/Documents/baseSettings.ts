import { State, TwoDimensional } from '@/types'
import { getBaseCells } from '@/features/Logic'

export const baseSettings = (state: State): any => {
  const baseCells = getBaseCells(state)
  const remaining = baseCells.length % 3 // 配列要素数合計を3の倍数で割った時の余り
  const DUMMY = { head: '', label: '', value: '' }
  const formattedBaseCells = remaining === 2 ? [...baseCells, DUMMY] : remaining === 1 ? [...baseCells, DUMMY, DUMMY] : baseCells

  // 以下の要素数は必ず3の倍数になっている必要があるため、上記でdummy Objectを使って余りを埋めている
  const twoDimensionalArray = formattedBaseCells
    .reduce((a: TwoDimensional[][][], _, i) => {
      const item = [...formattedBaseCells].splice(i * 3, 3).map((x) => [
        { text: x.head, fontSize: 8, alignment: 'left' },
        { text: x.label, fontSize: 10, alignment: 'right' }
      ])
      a.push(item)
      return a
    }, [])
    .filter((x) => x.length)
  return [
    {
      text: '基本設定',
      style: { fontSize: 11 },
      margin: [0, 8, 0, 4]
    },
    {
      table: {
        widths: ['33%', '33%', '33%'],
        body: twoDimensionalArray
      }
    }
  ]
}

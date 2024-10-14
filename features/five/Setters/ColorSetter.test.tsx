import { initialEmbroideryState, unselectedColorState, unselectedState } from 'src/features/brands/reducer'
import { FiveState } from '@/features/five/types'
import { Position } from '@/types'
import { render } from '@testing-library/react'
import ColorSetter from './ColorSetter'
import 'src/locales/ja'
import {
  LEATHER_COLOR_BUTTON_OPTION,
  BINDING_COLOR_BUTTON_OPTION,
  WELTING_COLOR_BUTTON_OPTION,
  LABEL_BUTTON_OPTION,
  DIRECT_EMBROIDERY_LABEL_BUTTON_OPTION,
  LACE_COLOR_BUTTON_OPTION,
  STITCH_COLOR_BUTTON_OPTION,
  MOUTON_BUTTON_OPTION
} from '../Constants/color'

const mockState: FiveState = {
  all: unselectedColorState,
  backLace: unselectedState,
  bankLaceDirection: unselectedState,
  palm: unselectedColorState,
  fiveLabel: unselectedState,
  dxmLabelCore: unselectedState,
  dominantArm: unselectedState, //利き腕
  edge: unselectedColorState,
  fingerGuard: unselectedState,
  welting: unselectedColorState,
  fingerGuardCover: unselectedColorState,
  indexLeftMiddleRight: unselectedColorState,
  indexMiddle: unselectedColorState,
  indexWeb: unselectedColorState,
  lace: unselectedColorState,
  linings: unselectedColorState,
  listBelt: unselectedColorState,
  littleHook: unselectedColorState,
  littleOut: unselectedColorState,
  littleRing: unselectedColorState,
  materialPack: unselectedState, // 芯とじスタイル
  middleIndex: unselectedColorState,
  middleLeftRingRight: unselectedColorState,
  middleRing: unselectedColorState,
  mouton: unselectedState,
  parts: { label: '全体', value: 'all' },
  ringLeftLittleRight: unselectedColorState,
  ringLittle: unselectedColorState,
  ringMiddle: unselectedColorState,
  size: unselectedState,
  specifyLabel: unselectedState,
  stitch: unselectedColorState,
  tanner: unselectedState,
  thumbHook: unselectedColorState,
  thumbIndexMiddle: unselectedColorState,
  thumbOut: unselectedColorState,
  thumbRoot: unselectedColorState,
  thumbWeb: unselectedColorState,
  thumbWebAndIndexWeb: unselectedColorState,
  web: unselectedColorState,
  web2: unselectedColorState,
  webParts: unselectedState,
  personal: {
    league: '',
    mailAddress: '',
    phoneNumber: '',
    position: '',
    remarks: '',
    userName: '',
    userNameKana: ''
  },
  drawerIndex: 0,
  embroideries: [initialEmbroideryState],
  baseModel: {
    brand: 'dxm',
    description: '',
    dominantArm: 'both',
    imageHeight: 0,
    imageWidth: 0,
    imageUrl: '',
    isFingerCrotch: true,
    isUBack: false,
    position: 'infielder',
    price: 69300,
    productNumber: '',
    series: '',
    size: 28.3,
    webParts: 'wp5'
  }
}

const countKeywords = (text: string, keyword: string): number => {
  const regex = new RegExp(keyword, 'g')
  return text.match(regex)?.length || 0
}
vi.mock('next/router', () => ({
  useRouter() {
    return {
      locale: 'ja',
      asPath: '/hard/dxm/infielder' // example
    }
  }
}))

describe('全ポジション共通 x タンナー選択前', () => {
  describe('初期アクセス時の表示', () => {
    test('「未選択」は7つ表示される', () => {
      const { container } = render(<ColorSetter state={mockState} selectedIndex={1} figurePanelNum={0} dispatch={() => {}} position={'infielder'} />)
      const textContent = container.textContent
      const keyword = '未選択'
      const count = countKeywords(textContent, keyword)
      expect(count).toBe(7)
    })
    test('先にタンナーを選択するようメッセージが表示されている', () => {
      const { container } = render(<ColorSetter state={mockState} selectedIndex={1} figurePanelNum={0} dispatch={() => {}} position={'infielder'} />)
      expect(container.textContent).toMatch('パーツ設定 -> タンナーを選択してください')
    })
  })
})

describe('全ポジション共通 x タンナー選択後', () => {
  describe('タンナー別、各タンナー選択後の表示', () => {
    const selectedTannerState = { ...mockState, tanner: { label: 'TGS - Leather', value: 'tgsLeather' } }
    test('TGS - Leatherの場合、レザーカラー数は8', () => {
      const { container } = render(
        <ColorSetter state={selectedTannerState} selectedIndex={1} figurePanelNum={0} dispatch={() => {}} position={'infielder'} />
      )
      const leatherColorButtonCount = container.querySelectorAll(`.${LEATHER_COLOR_BUTTON_OPTION}`).length
      expect(leatherColorButtonCount).toBe(8)
    })
    test('GUS - Leatherの場合、レザーカラー数は6', () => {
      const selectedTannerState = { ...mockState, tanner: { label: 'GUS - Leather', value: 'gusLeather' } }
      const { container } = render(
        <ColorSetter state={selectedTannerState} selectedIndex={1} figurePanelNum={0} dispatch={() => {}} position={'infielder'} />
      )
      const leatherColorButtonCount = container.querySelectorAll(`.${LEATHER_COLOR_BUTTON_OPTION}`).length
      expect(leatherColorButtonCount).toBe(6)
    })
    test('DTS - Leatherの場合、レザーカラー数は6', () => {
      const selectedTannerState = { ...mockState, tanner: { label: 'DTS - Leather', value: 'dtsLeather' } }
      const { container } = render(
        <ColorSetter state={selectedTannerState} selectedIndex={1} figurePanelNum={0} dispatch={() => {}} position={'first'} />
      )
      const leatherColorButtonCount = container.querySelectorAll(`.${LEATHER_COLOR_BUTTON_OPTION}`).length
      expect(leatherColorButtonCount).toBe(8)
    })
  })
  describe('レースの色の選択肢の検証', () => {
    test('投手 - 20色', async () => {
      const { container } = render(<ColorSetter state={mockState} selectedIndex={1} figurePanelNum={0} dispatch={vi.fn()} position={'infielder'} />)
      const laceColorButtonCount = container.querySelectorAll(`.${LACE_COLOR_BUTTON_OPTION}`).length
      expect(laceColorButtonCount).toBe(20)
    })
    test('内野手 - 20色', async () => {
      const { container } = render(<ColorSetter state={mockState} selectedIndex={1} figurePanelNum={0} dispatch={vi.fn()} position={'infielder'} />)
      const laceColorButtonCount = container.querySelectorAll(`.${LACE_COLOR_BUTTON_OPTION}`).length
      expect(laceColorButtonCount).toBe(20)
    })
    test('外野手 - 20色', async () => {
      const { container } = render(<ColorSetter state={mockState} selectedIndex={1} figurePanelNum={0} dispatch={vi.fn()} position={'infielder'} />)
      const laceColorButtonCount = container.querySelectorAll(`.${LACE_COLOR_BUTTON_OPTION}`).length
      expect(laceColorButtonCount).toBe(20)
    })

    test('捕手 - 14色', async () => {
      const { container } = render(<ColorSetter state={mockState} selectedIndex={1} figurePanelNum={0} dispatch={vi.fn()} position={'catcher'} />)
      const laceColorButtonCount = container.querySelectorAll(`.${LACE_COLOR_BUTTON_OPTION}`).length
      expect(laceColorButtonCount).toBe(14)
    })
    test('一塁手 - 14色', async () => {
      const { container } = render(<ColorSetter state={mockState} selectedIndex={1} figurePanelNum={0} dispatch={vi.fn()} position={'first'} />)
      const laceColorButtonCount = container.querySelectorAll(`.${LACE_COLOR_BUTTON_OPTION}`).length
      expect(laceColorButtonCount).toBe(14)
    })
  })
  describe('ヘリ革の色の選択肢の検証', () => {
    test('全ポジション - 17色', () => {
      const { container } = render(<ColorSetter state={mockState} selectedIndex={1} figurePanelNum={0} dispatch={vi.fn()} position={'infielder'} />)
      const edgeColorButtonCount = container.querySelectorAll(`.${EDGE_COLOR_BUTTON_OPTION}`).length
      expect(edgeColorButtonCount).toBe(17)
    })
  })
  describe('ステッチの色の選択肢の検証', () => {
    const selectedTannerState = { ...mockState }
    test('全ポジション - 16色', () => {
      const { container } = render(<ColorSetter state={mockState} selectedIndex={1} figurePanelNum={0} dispatch={vi.fn()} position={'infielder'} />)
      const stitchColorButtonCount = container.querySelectorAll(`.${STITCH_COLOR_BUTTON_OPTION}`).length
      expect(stitchColorButtonCount).toBe(16)
    })
  })
  describe('ハミダシの色の選択肢の検証', () => {
    test('捕手の場合 - 16種類', () => {
      const selectedTannerState = { ...mockState, baseModel: { ...mockState.baseModel, position: 'catcher' as Position } }
      const { container } = render(
        <ColorSetter state={selectedTannerState} selectedIndex={1} figurePanelNum={0} dispatch={vi.fn()} position={'catcher'} />
      )
      const hamidashiColorButtonCount = container.querySelectorAll(`.${HAMIDASHI_COLOR_BUTTON_OPTION}`).length
      expect(hamidashiColorButtonCount).toBe(16)
    })
    test('一塁手の場合 - 0種類(選択不可)', () => {
      const selectedTannerState = { ...mockState, baseModel: { ...mockState.baseModel, position: 'first' as Position } }
      const { container } = render(
        <ColorSetter state={selectedTannerState} selectedIndex={1} figurePanelNum={0} dispatch={vi.fn()} position={'first'} />
      )
      const hamidashiColorButtonCount = container.querySelectorAll(`.${HAMIDASHI_COLOR_BUTTON_OPTION}`).length
      expect(hamidashiColorButtonCount).toBe(0)
    })
    test('投手・内野手・外野手の場合 - 18種類', () => {
      const { container } = render(<ColorSetter state={mockState} selectedIndex={1} figurePanelNum={0} dispatch={vi.fn()} position={'infielder'} />)
      const hamidashiColorButtonCount = container.querySelectorAll(`.${HAMIDASHI_COLOR_BUTTON_OPTION}`).length
      expect(hamidashiColorButtonCount).toBe(18)
    })
  })
  describe('ムートンの選択肢の検証', () => {
    test('捕手の場合 - 3種類', () => {
      const catcherState = { ...mockState, baseModel: { ...mockState.baseModel, position: 'catcher' as Position } }
      const { container } = render(<ColorSetter state={catcherState} selectedIndex={1} figurePanelNum={0} dispatch={vi.fn()} position={'catcher'} />)
      const hamidashiColorButtonCount = container.querySelectorAll(`.${MOUTON_BUTTON_OPTION}`).length
      expect(hamidashiColorButtonCount).toBe(3)
    })
    test('一塁手の場合 - 3種類', () => {
      const firstState = { ...mockState, baseModel: { ...mockState.baseModel, position: 'first' as Position } }
      const { container } = render(<ColorSetter state={firstState} selectedIndex={1} figurePanelNum={0} dispatch={vi.fn()} position={'first'} />)
      const hamidashiColorButtonCount = container.querySelectorAll(`.${MOUTON_BUTTON_OPTION}`).length
      expect(hamidashiColorButtonCount).toBe(3)
    })
    test('グローブ(≠ミット)の場合 - 3種類', () => {
      const { container } = render(<ColorSetter state={mockState} selectedIndex={1} figurePanelNum={0} dispatch={vi.fn()} position={'infielder'} />)
      const hamidashiColorButtonCount = container.querySelectorAll(`.${MOUTON_BUTTON_OPTION}`).length
      expect(hamidashiColorButtonCount).toBe(2)
    })
  })
  describe('DxMラベルの検証', () => {
    describe('ワッペン(ラベル)の場合', () => {
      test('モデル・シリーズに関係なく14種類', () => {
        const selectedState = {
          ...mockState,
          specifyLabel: { label: 'ラベル', value: 'label' }
        }
        const { container } = render(
          <ColorSetter state={selectedState} selectedIndex={1} figurePanelNum={0} dispatch={vi.fn()} position={'infielder'} />
        )
        const labelCount = container.querySelectorAll(`.${LABEL_BUTTON_OPTION}`).length
        expect(labelCount).toBe(40)
      })
    })
    describe('直刺繍の場合', () => {
      test('DxMロゴ1, DxMロゴ2 の合計が38', () => {
        const selectedState = {
          ...mockState,
          specifyLabel: { label: '直刺繍', value: 'directEmbroidery' }
        }
        const { container } = render(
          <ColorSetter state={selectedState} selectedIndex={1} figurePanelNum={0} dispatch={vi.fn()} position={'infielder'} />
        )
        const labelCount = container.querySelectorAll(`.${DIRECT_EMBROIDERY_LABEL_BUTTON_OPTION}`).length
        expect(labelCount).toBe(38)
      })
    })
  })
})

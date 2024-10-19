// import React from 'react'
// import { BaseModel } from '@/types'
// import { FiveState } from '@/features/five/types'
// // import { unselectedColorState, unselectedState } from 'src/features/brands/reducer'
// import { unselectedColorState, unselectedState } from '../../../brands/reducer'
// import { initialEmbroideryState } from '../../reducer'
// import { render, screen } from '@testing-library/react'
// import { BaseSetter } from './BaseSetter'
// import {
//   BACK_STYLE_BUTTON_OPTION,
//   DOMINANT_ARM_BUTTON_OPTION,
//   FINGER_GUARD_TYPE_BUTTON_OPTION,
//   HAMIDASHI_CUT_BUTTON_OPTION,
//   MATERIAL_PACK_BUTTON_OPTION,
//   TANNER_BUTTON_OPTION,
//   WEB_PARTS_BUTTON_OPTION
// } from '../constants/bases'
// //

// const mockState: FiveState = {
//   all: unselectedColorState,
//   backLace: unselectedState,
//   bankLaceDirection: unselectedState,
//   palm: unselectedColorState,
//   fiveLabel: unselectedState,
//   dominantArm: unselectedState, //利き腕
//   edge: unselectedColorState,
//   fingerGuard: unselectedState,
//   welting: unselectedColorState,
//   fingerGuardCover: unselectedColorState,
//   indexLeftMiddleRight: unselectedColorState,
//   indexMiddle: unselectedColorState,
//   indexWeb: unselectedColorState,
//   lace: unselectedColorState,
//   linings: unselectedColorState,
//   listBelt: unselectedColorState,
//   littleHook: unselectedColorState,
//   littleOut: unselectedColorState,
//   littleRing: unselectedColorState,
//   materialPack: unselectedState, // 芯とじスタイル
//   middleIndex: unselectedColorState,
//   middleLeftRingRight: unselectedColorState,
//   middleRing: unselectedColorState,
//   mouton: unselectedState,
//   parts: unselectedState,
//   ringLeftLittleRight: unselectedColorState,
//   ringLittle: unselectedColorState,
//   ringMiddle: unselectedColorState,
//   size: unselectedState,
//   stitch: unselectedColorState,
//   tanner: unselectedState,
//   thumbHook: unselectedColorState,
//   thumbIndexMiddle: unselectedColorState,
//   thumbOut: unselectedColorState,
//   thumbRoot: unselectedColorState,
//   thumbWeb: unselectedColorState,
//   thumbWebAndIndexWeb: unselectedColorState,
//   web: unselectedColorState,
//   web2: unselectedColorState,
//   webParts: unselectedState,
//   personal: {
//     league: '',
//     mailAddress: '',
//     phoneNumber: '',
//     position: '',
//     remarks: '',
//     userName: '',
//     userNameKana: ''
//   },
//   drawerIndex: 0,
//   embroideries: [initialEmbroideryState],
//   baseModel: {
//     brand: 'dxm',
//     description: '',
//     dominantArm: 'both',
//     imageHeight: 0,
//     imageWidth: 0,
//     imageUrl: '',
//     isFingerCrotch: true,
//     isUBack: false,
//     position: 'infielder',
//     price: 69300,
//     productNumber: '',
//     series: '',
//     size: 28.3,
//     webParts: 'wp5'
//   }
// }

// const countKeywords = (text: string, keyword: string): number => {
//   const regex = new RegExp(keyword, 'g')
//   return text.match(regex)?.length || 0
// }

// // MEMO: SelectCardWithImageに対しては、以下で取得する方がラクだ。
// const getByButtonByText = (container: HTMLElement, text: string) => {
//   return Array.from(container.querySelectorAll('button')).find((b) => b.textContent === text)
// }

// vi.mock('next/router', () => ({
//   useRouter() {
//     return {
//       locale: 'ja',
//       asPath: '/hard/dxm/pitcher' // example
//     }
//   }
// }))

// describe('DxM x 投手用 > BaseSetter > 基本モデル選択後の表示', () => {
//   const pitcherBaseModel: BaseModel = {
//     brand: 'dxm',
//     description: '',
//     dominantArm: 'both',
//     imageHeight: 0,
//     imageWidth: 0,
//     imageUrl: '',
//     isFingerCrotch: true,
//     isUBack: false,
//     position: 'pitcher',
//     price: 69300,
//     productNumber: 'P110',
//     series: '',
//     size: 28.3,
//     webParts: 'wp5'
//   }
//   const pitcherState = { ...mockState, baseModel: pitcherBaseModel }

//   let container: HTMLElement
//   beforeEach(async () => {
//     const result = await render(<BaseSetter state={pitcherState} selectedIndex={0} position="pitcher" dispatch={vi.fn()} />)
//     container = result.container
//   })

//   test('「未選択」ラベルの数が7つ存在すること', async () => {
//     const textContent = container.textContent
//     const unselectedLabel = '未選択'
//     const unselectedCount = countKeywords(textContent, unselectedLabel)
//     expect(unselectedCount).toBe(8)
//   })
//   test('タンナーの選択肢が2つ存在すること', async () => {
//     const tgsTannerButton = screen.getByRole('button', {
//       name: 'TGS - Leather'
//     })
//     const gusTannerButton = screen.getByRole('button', {
//       name: 'GUS - Leather'
//     })
//     expect(tgsTannerButton).toBeVisible()
//     expect(tgsTannerButton).not.toBeDisabled()
//     expect(gusTannerButton).toBeVisible()
//     expect(gusTannerButton).not.toBeDisabled()

//     const tannerButtonCount = container.querySelectorAll(`.${TANNER_BUTTON_OPTION}`).length
//     expect(tannerButtonCount).toBe(2)
//   })

//   test('バックスタイルの選択肢が2つ存在すること', async () => {
//     const dWaveBackStyleButton = getByButtonByText(container, 'D-Wave')
//     const normalBackStyleButton = getByButtonByText(container, '通常')
//     expect(dWaveBackStyleButton).toBeVisible()
//     expect(dWaveBackStyleButton).not.toBeDisabled()
//     expect(normalBackStyleButton).toBeVisible()
//     expect(normalBackStyleButton).not.toBeDisabled()

//     const backStyleButtonCount = container.querySelectorAll(`.${BACK_STYLE_BUTTON_OPTION}`).length
//     expect(backStyleButtonCount).toBe(2)
//   })

//   test('利き腕の選択肢が2つ存在すること', async () => {
//     const rightThrowButton = screen.getByRole('button', { name: '右投げ' })
//     const leftThrowButton = screen.getByRole('button', { name: '左投げ' })
//     expect(rightThrowButton).toBeVisible()
//     expect(rightThrowButton).not.toBeDisabled()
//     expect(leftThrowButton).toBeVisible()
//     expect(leftThrowButton).not.toBeDisabled()

//     const dominantArmButtonCount = container.querySelectorAll(`.${DOMINANT_ARM_BUTTON_OPTION}`).length
//     expect(dominantArmButtonCount).toBe(2)
//   })

//   test('ポケットスタイルの選択肢が2つ存在すること', async () => {
//     const sideDoubleButton = getByButtonByText(container, 'ダブル')
//     const sideDoubleNoLaceButton = getByButtonByText(container, 'ダブルレース抜き')
//     expect(sideDoubleButton).toBeVisible()
//     expect(sideDoubleButton).not.toBeDisabled()
//     expect(sideDoubleNoLaceButton).toBeVisible()
//     expect(sideDoubleNoLaceButton).not.toBeDisabled()

//     const materialPackButtonCount = container.querySelectorAll(`.${MATERIAL_PACK_BUTTON_OPTION}`).length
//     expect(materialPackButtonCount).toBe(2)
//   })

//   test('指カバー/指当ての選択肢が3つ存在すること', async () => {
//     const fingerGuardCoverButton = getByButtonByText(container, '指カバー有り')
//     const indexPadButton = getByButtonByText(container, '指アテ有り(人差指)')
//     const noneButton = getByButtonByText(container, '無し')
//     expect(fingerGuardCoverButton).toBeVisible()
//     expect(fingerGuardCoverButton).not.toBeDisabled()
//     expect(indexPadButton).toBeVisible()
//     expect(indexPadButton).not.toBeDisabled()
//     expect(noneButton).toBeVisible()
//     expect(noneButton).not.toBeDisabled()

//     const fingerGuardTypeButtonCount = container.querySelectorAll(`.${FINGER_GUARD_TYPE_BUTTON_OPTION}`).length
//     expect(fingerGuardTypeButtonCount).toBe(3)
//   })

//   test('ウェブパーツの選択肢が5つ存在すること', async () => {
//     // isShowLabel={false}にしているので、テキストが表示されない！！！
//     // const wp1Button = getByButtonByText(container, 'WP-1')
//     // const wp2Button = getByButtonByText(container, 'WP-2')
//     // const wp3Button = getByButtonByText(container, 'WP-3')
//     // const wp4Button = getByButtonByText(container, 'WP-4')
//     // const wp5Button = getByButtonByText(container, 'WP-5')
//     // expect(wp1Button).toBeVisible()
//     // expect(wp1Button).not.toBeDisabled()
//     // expect(wp2Button).toBeVisible()
//     // expect(wp2Button).not.toBeDisabled()
//     // expect(wp3Button).toBeVisible()
//     // expect(wp3Button).not.toBeDisabled()
//     // expect(wp4Button).toBeVisible()
//     // expect(wp4Button).not.toBeDisabled()
//     // expect(wp5Button).toBeVisible()
//     // expect(wp5Button).not.toBeDisabled()

//     const webPartsButtonCount = container.querySelectorAll(`.${WEB_PARTS_BUTTON_OPTION}`).length
//     expect(webPartsButtonCount).toBe(5)
//   })

//   test('ハミダシカット(人差し指のみ)の選択肢が2つ存在すること', async () => {
//     const hamidashiCutButtonCount = container.querySelectorAll(`.${HAMIDASHI_CUT_BUTTON_OPTION}`).length
//     expect(hamidashiCutButtonCount).toBe(2)
//   })
// })

// describe('DxM x 内野用 > BaseSetter > 基本モデル選択後の表示', () => {
//   const infielderBaseModel: BaseModel = {
//     brand: 'dxm',
//     description: '',
//     dominantArm: 'both',
//     imageHeight: 0,
//     imageWidth: 0,
//     imageUrl: '',
//     isFingerCrotch: true,
//     isUBack: false,
//     position: 'infielder',
//     price: 69300,
//     productNumber: 'I110',
//     series: '',
//     size: 28.0,
//     webParts: 'wi10'
//   }
//   const infielderState = { ...mockState, baseModel: infielderBaseModel }

//   let container: HTMLElement
//   beforeEach(async () => {
//     const result = await render(<BaseSetter state={infielderState} selectedIndex={0} position="infielder" dispatch={vi.fn()} />)
//     container = result.container
//   })

//   test('「未選択」ラベルの数が8つ存在すること', async () => {
//     const textContent = container.textContent
//     const unselectedLabel = '未選択'
//     const unselectedCount = countKeywords(textContent, unselectedLabel)
//     expect(unselectedCount).toBe(8)
//   })

//   test('タンナーの選択肢が2つ存在すること', async () => {
//     const tgsTannerButton = screen.getByRole('button', {
//       name: 'TGS - Leather'
//     })
//     const gusTannerButton = screen.getByRole('button', {
//       name: 'GUS - Leather'
//     })
//     expect(tgsTannerButton).toBeVisible()
//     expect(tgsTannerButton).not.toBeDisabled()
//     expect(gusTannerButton).toBeVisible()
//     expect(gusTannerButton).not.toBeDisabled()

//     const tannerButtonCount = container.querySelectorAll(`.${TANNER_BUTTON_OPTION}`).length
//     expect(tannerButtonCount).toBe(2)
//   })

//   test('バックスタイルの選択肢が2つ存在すること', async () => {
//     const dWaveBackStyleButton = getByButtonByText(container, 'D-Wave')
//     const normalBackStyleButton = getByButtonByText(container, '通常')
//     expect(dWaveBackStyleButton).toBeVisible()
//     expect(dWaveBackStyleButton).not.toBeDisabled()
//     expect(normalBackStyleButton).toBeVisible()
//     expect(normalBackStyleButton).not.toBeDisabled()

//     const backStyleButtonCount = container.querySelectorAll(`.${BACK_STYLE_BUTTON_OPTION}`).length
//     expect(backStyleButtonCount).toBe(2)
//   })

//   test('利き腕の選択肢が2つ存在すること', async () => {
//     const rightThrowButton = screen.getByRole('button', { name: '右投げ' })
//     const leftThrowButton = screen.getByRole('button', { name: '左投げ' })
//     expect(rightThrowButton).toBeVisible()
//     expect(rightThrowButton).not.toBeDisabled()
//     expect(leftThrowButton).toBeVisible()
//     expect(leftThrowButton).not.toBeDisabled()

//     const dominantArmButtonCount = container.querySelectorAll(`.${DOMINANT_ARM_BUTTON_OPTION}`).length
//     expect(dominantArmButtonCount).toBe(2)
//   })

//   test('ポケットスタイルの選択肢が2つ存在すること', async () => {
//     const sideDoubleButton = getByButtonByText(container, 'ダブル')
//     const sideDoubleNoLaceButton = getByButtonByText(container, 'ダブルレース抜き')
//     expect(sideDoubleButton).toBeVisible()
//     expect(sideDoubleButton).not.toBeDisabled()
//     expect(sideDoubleNoLaceButton).toBeVisible()
//     expect(sideDoubleNoLaceButton).not.toBeDisabled()

//     const materialPackButtonCount = container.querySelectorAll(`.${MATERIAL_PACK_BUTTON_OPTION}`).length
//     expect(materialPackButtonCount).toBe(2)
//   })

//   test('指カバー/指当ての選択肢が3つ存在すること', async () => {
//     const fingerGuardCoverButton = getByButtonByText(container, '指カバー有り')
//     const indexPadButton = getByButtonByText(container, '指アテ有り(人差指)')
//     const noneButton = getByButtonByText(container, '無し')
//     expect(fingerGuardCoverButton).toBeVisible()
//     expect(fingerGuardCoverButton).not.toBeDisabled()
//     expect(indexPadButton).toBeVisible()
//     expect(indexPadButton).not.toBeDisabled()
//     expect(noneButton).toBeVisible()
//     expect(noneButton).not.toBeDisabled()

//     const fingerGuardTypeButtonCount = container.querySelectorAll(`.${FINGER_GUARD_TYPE_BUTTON_OPTION}`).length
//     expect(fingerGuardTypeButtonCount).toBe(3)
//   })

//   test('ウェブパーツの選択肢が10個、存在すること', async () => {
//     // isShowLabel={false}にしているので、テキストが表示されない！！！
//     // const wp1Button = getByButtonByText(container, 'WP-1')
//     // const wp2Button = getByButtonByText(container, 'WP-2')
//     // const wp3Button = getByButtonByText(container, 'WP-3')
//     // const wp4Button = getByButtonByText(container, 'WP-4')
//     // const wp5Button = getByButtonByText(container, 'WP-5')
//     // expect(wp1Button).toBeVisible()
//     // expect(wp1Button).not.toBeDisabled()
//     // expect(wp2Button).toBeVisible()
//     // expect(wp2Button).not.toBeDisabled()
//     // expect(wp3Button).toBeVisible()
//     // expect(wp3Button).not.toBeDisabled()
//     // expect(wp4Button).toBeVisible()
//     // expect(wp4Button).not.toBeDisabled()
//     // expect(wp5Button).toBeVisible()
//     // expect(wp5Button).not.toBeDisabled()

//     const webPartsButtonCount = container.querySelectorAll(`.${WEB_PARTS_BUTTON_OPTION}`).length
//     expect(webPartsButtonCount).toBe(10)
//   })

//   test('ハミダシカット(人差し指のみ)の選択肢が2つ存在すること', async () => {
//     const hamidashiCutButtonCount = container.querySelectorAll(`.${HAMIDASHI_CUT_BUTTON_OPTION}`).length
//     expect(hamidashiCutButtonCount).toBe(2)
//   })
// })

// describe('DxM x 外野用 > BaseSetter > 基本モデル選択後の表示', () => {
//   const outfielderBaseModel: BaseModel = {
//     brand: 'dxm',
//     description: '',
//     dominantArm: 'both',
//     imageHeight: 0,
//     imageWidth: 0,
//     imageUrl: '',
//     isFingerCrotch: true,
//     isUBack: false,
//     position: 'outfielder',
//     price: 69300,
//     productNumber: 'O110',
//     series: '',
//     size: 31.0,
//     webParts: 'wi10'
//   }
//   const outfielderState = { ...mockState, baseModel: outfielderBaseModel }

//   let container: HTMLElement
//   beforeEach(async () => {
//     const result = await render(<BaseSetter state={outfielderState} selectedIndex={0} position="outfielder" dispatch={vi.fn()} />)
//     container = result.container
//   })

//   test('「未選択」ラベルの数が8つ存在すること', async () => {
//     const textContent = container.textContent
//     const unselectedLabel = '未選択'
//     const unselectedCount = countKeywords(textContent, unselectedLabel)
//     expect(unselectedCount).toBe(8)
//   })

//   test('タンナーの選択肢が2つ存在すること', async () => {
//     const tgsTannerButton = screen.getByRole('button', {
//       name: 'TGS - Leather'
//     })
//     const gusTannerButton = screen.getByRole('button', {
//       name: 'GUS - Leather'
//     })
//     expect(tgsTannerButton).toBeVisible()
//     expect(tgsTannerButton).not.toBeDisabled()
//     expect(gusTannerButton).toBeVisible()
//     expect(gusTannerButton).not.toBeDisabled()

//     const tannerButtonCount = container.querySelectorAll(`.${TANNER_BUTTON_OPTION}`).length
//     expect(tannerButtonCount).toBe(2)
//   })

//   test('バックスタイルの選択肢が2つ存在すること', async () => {
//     const dWaveBackStyleButton = getByButtonByText(container, 'D-Wave')
//     const normalBackStyleButton = getByButtonByText(container, '通常')
//     expect(dWaveBackStyleButton).toBeVisible()
//     expect(dWaveBackStyleButton).not.toBeDisabled()
//     expect(normalBackStyleButton).toBeVisible()
//     expect(normalBackStyleButton).not.toBeDisabled()

//     const backStyleButtonCount = container.querySelectorAll(`.${BACK_STYLE_BUTTON_OPTION}`).length
//     expect(backStyleButtonCount).toBe(2)
//   })

//   test('利き腕の選択肢が2つ存在すること', async () => {
//     const rightThrowButton = screen.getByRole('button', { name: '右投げ' })
//     const leftThrowButton = screen.getByRole('button', { name: '左投げ' })
//     expect(rightThrowButton).toBeVisible()
//     expect(rightThrowButton).not.toBeDisabled()
//     expect(leftThrowButton).toBeVisible()
//     expect(leftThrowButton).not.toBeDisabled()

//     const dominantArmButtonCount = container.querySelectorAll(`.${DOMINANT_ARM_BUTTON_OPTION}`).length
//     expect(dominantArmButtonCount).toBe(2)
//   })

//   test('ポケットスタイルの選択肢が2つ存在すること', async () => {
//     const sideDoubleButton = getByButtonByText(container, 'ダブル')
//     const sideDoubleNoLaceButton = getByButtonByText(container, 'ダブルレース抜き')
//     expect(sideDoubleButton).toBeVisible()
//     expect(sideDoubleButton).not.toBeDisabled()
//     expect(sideDoubleNoLaceButton).toBeVisible()
//     expect(sideDoubleNoLaceButton).not.toBeDisabled()

//     const materialPackButtonCount = container.querySelectorAll(`.${MATERIAL_PACK_BUTTON_OPTION}`).length
//     expect(materialPackButtonCount).toBe(2)
//   })

//   test('指カバー/指当ての選択肢が4つ存在すること', async () => {
//     const fingerGuardCoverButton = getByButtonByText(container, '指カバー有り')
//     const indexPadButton = getByButtonByText(container, '指アテ有り(人差指)')
//     const middlePadButton = getByButtonByText(container, '指アテ有り(中指)')
//     const noneButton = getByButtonByText(container, '無し')
//     expect(fingerGuardCoverButton).toBeVisible()
//     expect(fingerGuardCoverButton).not.toBeDisabled()
//     expect(indexPadButton).toBeVisible()
//     expect(indexPadButton).not.toBeDisabled()
//     expect(middlePadButton).toBeVisible()
//     expect(middlePadButton).not.toBeDisabled()
//     expect(noneButton).toBeVisible()
//     expect(noneButton).not.toBeDisabled()

//     const fingerGuardTypeButtonCount = container.querySelectorAll(`.${FINGER_GUARD_TYPE_BUTTON_OPTION}`).length
//     expect(fingerGuardTypeButtonCount).toBe(4)
//   })

//   test('ウェブパーツの選択肢が5個、存在すること', async () => {
//     // isShowLabel={false}にしているので、テキストが表示されない！！！
//     // const wp1Button = getByButtonByText(container, 'WP-1')
//     // const wp2Button = getByButtonByText(container, 'WP-2')
//     // const wp3Button = getByButtonByText(container, 'WP-3')
//     // const wp4Button = getByButtonByText(container, 'WP-4')
//     // const wp5Button = getByButtonByText(container, 'WP-5')
//     // expect(wp1Button).toBeVisible()
//     // expect(wp1Button).not.toBeDisabled()
//     // expect(wp2Button).toBeVisible()
//     // expect(wp2Button).not.toBeDisabled()
//     // expect(wp3Button).toBeVisible()
//     // expect(wp3Button).not.toBeDisabled()
//     // expect(wp4Button).toBeVisible()
//     // expect(wp4Button).not.toBeDisabled()
//     // expect(wp5Button).toBeVisible()
//     // expect(wp5Button).not.toBeDisabled()

//     const webPartsButtonCount = container.querySelectorAll(`.${WEB_PARTS_BUTTON_OPTION}`).length
//     expect(webPartsButtonCount).toBe(5)
//   })

//   test('ハミダシカット(人差し指のみ)の選択肢が2つ存在すること', async () => {
//     const hamidashiCutButtonCount = container.querySelectorAll(`.${HAMIDASHI_CUT_BUTTON_OPTION}`).length
//     expect(hamidashiCutButtonCount).toBe(2)
//   })
// })

// describe('DxM x 捕手用 > BaseSetter > 基本モデル選択後の表示', () => {
//   const catcherBaseModel: BaseModel = {
//     brand: 'dxm',
//     description: '',
//     dominantArm: 'both',
//     imageHeight: 0,
//     imageWidth: 0,
//     imageUrl: '',
//     isFingerCrotch: true,
//     isUBack: false,
//     position: 'catcher',
//     price: 71500,
//     productNumber: 'C200',
//     series: '',
//     size: 0,
//     webParts: ''
//   }
//   const catcherState = {
//     ...mockState,
//     baseModel: catcherBaseModel,
//     tanner: { label: 'DTS - Leather', value: 'dtsLeather' }
//   }

//   let container: HTMLElement
//   beforeEach(async () => {
//     const result = await render(<BaseSetter state={catcherState} selectedIndex={0} position="catcher" dispatch={vi.fn()} />)
//     container = result.container
//   })

//   test('「未選択」ラベルの数が8つ存在すること', async () => {
//     const textContent = container.textContent
//     const unselectedLabel = '未選択'
//     const unselectedCount = countKeywords(textContent, unselectedLabel)
//     expect(unselectedCount).toBe(2)
//   })

//   test('タンナーが選択済みであること', async () => {
//     const dtsTannerButton = getByButtonByText(container, 'DTS - Leather')
//     expect(dtsTannerButton).toBeInTheDocument()
//     expect(dtsTannerButton).not.toBeVisible()
//     expect(dtsTannerButton).toBeDisabled()

//     const tannerButtonCount = container.querySelectorAll(`.${TANNER_BUTTON_OPTION}`).length
//     expect(tannerButtonCount).toBe(1)
//   })

//   test('バックスタイルの選択肢が表示されないこと', async () => {
//     const dWaveBackStyleButton = getByButtonByText(container, 'D-Wave')
//     const normalBackStyleButton = getByButtonByText(container, '通常')
//     expect(dWaveBackStyleButton).toBeUndefined()
//     expect(normalBackStyleButton).toBeUndefined()
//   })

//   test('利き腕の選択肢が2つ存在すること', async () => {
//     const rightThrowButton = screen.getByRole('button', { name: '右投げ' })
//     const leftThrowButton = screen.getByRole('button', { name: '左投げ' })
//     expect(rightThrowButton).toBeVisible()
//     expect(rightThrowButton).not.toBeDisabled()
//     expect(leftThrowButton).toBeVisible()
//     expect(leftThrowButton).not.toBeDisabled()

//     const dominantArmButtonCount = container.querySelectorAll(`.${DOMINANT_ARM_BUTTON_OPTION}`).length
//     expect(dominantArmButtonCount).toBe(2)
//   })

//   test('ポケットスタイルの選択肢が2つ存在しないこと', async () => {
//     const sideDoubleButton = getByButtonByText(container, 'ダブル')
//     const sideDoubleNoLaceButton = getByButtonByText(container, 'ダブルレース抜き')
//     expect(sideDoubleButton).toBeUndefined()
//     expect(sideDoubleNoLaceButton).toBeUndefined()
//   })

//   test('指カバー/指当ての選択肢が3つ存在すること', async () => {
//     const fingerGuardCoverButton = getByButtonByText(container, '指カバー有り')
//     const indexPadButton = getByButtonByText(container, '指アテ有り(人差指)')
//     const noneButton = getByButtonByText(container, '無し')
//     expect(fingerGuardCoverButton).toBeVisible()
//     expect(fingerGuardCoverButton).not.toBeDisabled()
//     expect(indexPadButton).toBeVisible()
//     expect(indexPadButton).not.toBeDisabled()
//     expect(noneButton).toBeVisible()
//     expect(noneButton).not.toBeDisabled()

//     const fingerGuardTypeButtonCount = container.querySelectorAll(`.${FINGER_GUARD_TYPE_BUTTON_OPTION}`).length
//     expect(fingerGuardTypeButtonCount).toBe(3)
//   })

//   test('ウェブパーツの選択肢が存在しないこと', async () => {
//     // isShowLabel={false}にしているので、テキストが表示されない！！！
//     // const wp1Button = getByButtonByText(container, 'WP-1')
//     // const wp2Button = getByButtonByText(container, 'WP-2')
//     // const wp3Button = getByButtonByText(container, 'WP-3')
//     // const wp4Button = getByButtonByText(container, 'WP-4')
//     // const wp5Button = getByButtonByText(container, 'WP-5')
//     // expect(wp1Button).toBeVisible()
//     // expect(wp1Button).not.toBeDisabled()
//     // expect(wp2Button).toBeVisible()
//     // expect(wp2Button).not.toBeDisabled()
//     // expect(wp3Button).toBeVisible()
//     // expect(wp3Button).not.toBeDisabled()
//     // expect(wp4Button).toBeVisible()
//     // expect(wp4Button).not.toBeDisabled()
//     // expect(wp5Button).toBeVisible()
//     // expect(wp5Button).not.toBeDisabled()

//     const webPartsButtonCount = container.querySelectorAll(`.${WEB_PARTS_BUTTON_OPTION}`).length
//     expect(webPartsButtonCount).toBe(0)
//   })

//   test('ハミダシカット(人差し指のみ)の選択肢が2つ存在しないこと', async () => {
//     const hamidashiCutButtonCount = container.querySelectorAll(`.${HAMIDASHI_CUT_BUTTON_OPTION}`).length
//     expect(hamidashiCutButtonCount).toBe(0)
//   })
// })

// describe('DxM x 一塁手用 > BaseSetter > 基本モデル選択後の表示', () => {
//   const firstBaseModel: BaseModel = {
//     brand: 'dxm',
//     description: '',
//     dominantArm: 'both',
//     imageHeight: 0,
//     imageWidth: 0,
//     imageUrl: '',
//     isFingerCrotch: true,
//     isUBack: false,
//     position: 'first',
//     price: 71500,
//     productNumber: 'F100',
//     series: '',
//     size: 0,
//     webParts: ''
//   }
//   const firstState = {
//     ...mockState,
//     baseModel: firstBaseModel,
//     tanner: { label: 'DTS - Leather', value: 'dtsLeather' }
//   }

//   let container: HTMLElement
//   beforeEach(async () => {
//     const result = await render(<BaseSetter state={firstState} selectedIndex={0} position="first" dispatch={vi.fn()} />)
//     container = result.container
//   })

//   test('「未選択」ラベルの数が8つ存在すること', async () => {
//     const textContent = container.textContent
//     const unselectedLabel = '未選択'
//     const unselectedCount = countKeywords(textContent, unselectedLabel)
//     expect(unselectedCount).toBe(3)
//   })

//   test('タンナーが選択済みであること', async () => {
//     const dtsTannerButton = getByButtonByText(container, 'DTS - Leather')
//     expect(dtsTannerButton).toBeInTheDocument()
//     expect(dtsTannerButton).not.toBeVisible()
//     expect(dtsTannerButton).toBeDisabled()

//     const tannerButtonCount = container.querySelectorAll(`.${TANNER_BUTTON_OPTION}`).length
//     expect(tannerButtonCount).toBe(1)
//   })

//   test('バックスタイルの選択肢が表示されないこと', async () => {
//     const dWaveBackStyleButton = getByButtonByText(container, 'D-Wave')
//     const normalBackStyleButton = getByButtonByText(container, '通常')
//     expect(dWaveBackStyleButton).toBeUndefined()
//     expect(normalBackStyleButton).toBeUndefined()
//   })

//   test('利き腕の選択肢が2つ存在すること', async () => {
//     const rightThrowButton = screen.getByRole('button', { name: '右投げ' })
//     const leftThrowButton = screen.getByRole('button', { name: '左投げ' })
//     expect(rightThrowButton).toBeVisible()
//     expect(rightThrowButton).not.toBeDisabled()
//     expect(leftThrowButton).toBeVisible()
//     expect(leftThrowButton).not.toBeDisabled()

//     const dominantArmButtonCount = container.querySelectorAll(`.${DOMINANT_ARM_BUTTON_OPTION}`).length
//     expect(dominantArmButtonCount).toBe(2)
//   })

//   test('ポケットスタイルの選択肢が2つ存在すること', async () => {
//     const sideDoubleButton = getByButtonByText(container, 'ダブル')
//     const sideDoubleNoLaceButton = getByButtonByText(container, 'ダブルレース抜き')
//     expect(sideDoubleButton).toBeVisible()
//     expect(sideDoubleButton).not.toBeDisabled()
//     expect(sideDoubleNoLaceButton).toBeVisible()
//     expect(sideDoubleNoLaceButton).not.toBeDisabled()
//   })

//   test('指カバー/指当ての選択肢が3つ存在すること', async () => {
//     const fingerGuardCoverButton = getByButtonByText(container, '指カバー有り')
//     const indexPadButton = getByButtonByText(container, '指アテ有り(人差指)')
//     const noneButton = getByButtonByText(container, '無し')
//     expect(fingerGuardCoverButton).toBeVisible()
//     expect(fingerGuardCoverButton).not.toBeDisabled()
//     expect(indexPadButton).toBeVisible()
//     expect(indexPadButton).not.toBeDisabled()
//     expect(noneButton).toBeVisible()
//     expect(noneButton).not.toBeDisabled()

//     const fingerGuardTypeButtonCount = container.querySelectorAll(`.${FINGER_GUARD_TYPE_BUTTON_OPTION}`).length
//     expect(fingerGuardTypeButtonCount).toBe(3)
//   })

//   test('ウェブパーツの選択肢が存在しないこと', async () => {
//     // isShowLabel={false}にしているので、テキストが表示されない！！！
//     // const wp1Button = getByButtonByText(container, 'WP-1')
//     // const wp2Button = getByButtonByText(container, 'WP-2')
//     // const wp3Button = getByButtonByText(container, 'WP-3')
//     // const wp4Button = getByButtonByText(container, 'WP-4')
//     // const wp5Button = getByButtonByText(container, 'WP-5')
//     // expect(wp1Button).toBeVisible()
//     // expect(wp1Button).not.toBeDisabled()
//     // expect(wp2Button).toBeVisible()
//     // expect(wp2Button).not.toBeDisabled()
//     // expect(wp3Button).toBeVisible()
//     // expect(wp3Button).not.toBeDisabled()
//     // expect(wp4Button).toBeVisible()
//     // expect(wp4Button).not.toBeDisabled()
//     // expect(wp5Button).toBeVisible()
//     // expect(wp5Button).not.toBeDisabled()

//     const webPartsButtonCount = container.querySelectorAll(`.${WEB_PARTS_BUTTON_OPTION}`).length
//     expect(webPartsButtonCount).toBe(0)
//   })
// })

export const hoge = () => {}

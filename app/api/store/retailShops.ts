import { ALL_BRANDS, FIVE } from '@/features/retail/Constants/brands'
import { Retail } from '@/types'

const demoKurita = { name: 'くりたデモ', email: 'tomoki_kurita@b-ridge.org', selectableBrands: ALL_BRANDS }
const yoshikawaDemoMain = { name: '吉川様_デモ', email: 'shack.glove@gmail.com', selectableBrands: [FIVE] }
const maeharaSports = { name: 'マエハラスポーツ', email: 'info@maesupo.com', selectableBrands: [FIVE] }
const baseballMario = { name: 'ベースボールマリオ', email: 'baseball.shop@sports-mario.jp', selectableBrands: [FIVE] }
const kitanoya = { name: '野球工房 北野屋', email: 'Kita-b@mub.biglobe.ne.jp', selectableBrands: [FIVE] }
const takenakaSports = { name: '竹中スポーツ', email: 'info@takenaka-sports.com', selectableBrands: [FIVE] }
const kabutoyaSports = { name: 'かぶとやスポーツ', email: 'kabutoya1182@nifty.com', selectableBrands: [FIVE] }
const sportsKobayashi = { name: 'スポーツコバヤシ', email: 'spokoba@rm.rcn.ne.jp', selectableBrands: [FIVE] }
const baseballStudioTaguchi = { name: 'Baseball Studio Taguchi', email: 'taguchispnet@gmail.com', selectableBrands: [FIVE] }
const ballPark = { name: 'BALLPARK', email: 'bkproshop@ballpark-bk.com', selectableBrands: [FIVE] }
const nikyosha = { name: 'スポーツプラザ二協社', email: 'nikyosha@icloud.com', selectableBrands: [FIVE] }
const marubishiSports = { name: 'マルビシスポーツ', email: 'info@marubishisports.com', selectableBrands: [FIVE] }
const sports87_1 = { name: '野球専門店 87スポーツ_1', email: 'hanasukeco@icloud.com', selectableBrands: [FIVE] }
const sports87_2 = { name: '野球専門店 87スポーツ_2', email: 'suke.0824-f@docomo.ne.jp', selectableBrands: [FIVE] }
const shunanSports = { name: '周南スポーツ', email: 'info@syunan-sports.co.jp', selectableBrands: [FIVE] }
const fullSwing = { name: '体育堂FULLSWING', email: 'shop-tsuboi@taikudo.co.jp', selectableBrands: [FIVE] }
const chuoSports = { name: '中央スポーツ', email: 'info@chuohsports.com', selectableBrands: [FIVE] }
const standInKoshien = { name: 'スタンドイン甲子園', email: 'koshien@standin.co.jp', selectableBrands: [FIVE] }
const standInSasebo1 = { name: 'スタンドイン佐世保店_1', email: 'sasebo@haspo.co.jp', selectableBrands: [FIVE] }
const standInSasebo2 = { name: 'スタンドイン佐世保店_2', email: 't-maruta@haspo.co.jp', selectableBrands: [FIVE] }
const yamamotoSports = { name: 'ヤマモトスポーツ', email: 'yamamotosp@muj.biglobe.ne.jp', selectableBrands: [FIVE] }
const minatoSports = { name: 'ミナトスポーツ', email: 'jun.t1971@gmail.com', selectableBrands: [FIVE] }
const kamiSportsPlus = { name: 'カミスポーツ・プラス', email: 'obakazuyuki@outlook.jp', selectableBrands: [FIVE] }
const standInFukuokaMain = { name: 'スタンドイン福岡本店', email: 'fukuoka@haspo.co.jp', selectableBrands: [FIVE] }
const standInTenjin = { name: 'スタンドイン天神店', email: 'tenjin@haspo.co.jp', selectableBrands: [FIVE] }
const bandaiSports = { name: 'バンダイスポーツ', email: 'bandai3kobayashi@gmail.com', selectableBrands: [FIVE] }
const fiveMain = { name: 'FIVE本社用', email: '20kaikai04@gmail.com', selectableBrands: [FIVE] }
const aobaya = { name: 'アオバヤスポーツ', email: 'front.aobaya@gmail.com', selectableBrands: [FIVE] }
// const a = { name: '', email: '', selectableBrands: [FIVE] }

export const retailShops: Retail[] = [
  demoKurita,
  yoshikawaDemoMain,
  maeharaSports,
  baseballMario,
  kitanoya,
  takenakaSports,
  kabutoyaSports,
  sportsKobayashi,
  baseballStudioTaguchi,
  ballPark,
  nikyosha,
  marubishiSports,
  sports87_1,
  sports87_2,
  shunanSports,
  fullSwing,
  chuoSports,
  standInKoshien,
  standInSasebo1,
  standInSasebo2,
  yamamotoSports,
  minatoSports,
  kamiSportsPlus,
  standInFukuokaMain,
  standInTenjin,
  bandaiSports,
  aobaya,
  fiveMain
]

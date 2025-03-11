import { ALL_BRANDS, FIVE, GENUINE } from '@/features/retail/Constants/brands'
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
const marubishiSports = { name: 'マルビシスポーツ', email: 'info@marubishisports.com', selectableBrands: [FIVE, GENUINE] }
const sports87_1 = { name: '野球専門店 87スポーツ_1', email: 'hanasukeco@icloud.com', selectableBrands: [FIVE, GENUINE] }
const sports87_2 = { name: '野球専門店 87スポーツ_2', email: 'suke.0824-f@docomo.ne.jp', selectableBrands: [FIVE] }
const shunanSports = { name: '周南スポーツ', email: 'info@syunan-sports.co.jp', selectableBrands: [FIVE, GENUINE] }
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
const ojivaInternational = { name: 'Ojiva international Ltd.', email: 'yoshio.ojiva@gmail.com', selectableBrands: [FIVE] } // 台湾
const miuraMain = { name: 'Genuine 三浦知晃', email: 'genuine.japan.2023@gmail.com', selectableBrands: [GENUINE] }
const terui = { name: 'テルイスポーツ', email: 'terui.sp@vesta.ocn.nd.jp', selectableBrands: [GENUINE] }
const nara = { name: '奈良スポーツ', email: 'narasp@mwe.biglobe.ne.jp', selectableBrands: [GENUINE] }
const nagamine = { name: '長嶺スポーツ', email: 'nagasupo@outlook.jp', selectableBrands: [GENUINE] }
const tedori = { name: '手取スポーツ', email: 'tedorisport@arrow.ocn.ne.jp', selectableBrands: [GENUINE] }
const lionBaseballProShop = { name: 'ライオンベースボールプロショップ', email: 'e-info@lion-basepro.com', selectableBrands: [GENUINE] }
const baseballFactoryNine = { name: '野球工房9', email: 'info@toi-toi-toi.jp', selectableBrands: [GENUINE] }
const montana = { name: 'モンタナスポーツ', email: 'atsushi@imontana.co.jp', selectableBrands: [GENUINE] }
const rokuhachiBaseballFactory = { name: 'ロクハチ野球工房', email: 'usami@68-labo.jp', selectableBrands: [GENUINE] }
const lucky = { name: 'ラッキースポーツ', email: 'info@lucky-sp.com', selectableBrands: [GENUINE] }
const hotta = { name: 'ホッタスポーツ', email: 'hotta_sports@ybb.ne.jp', selectableBrands: [GENUINE] }
const spotaka = { name: 'スポタカ', email: 'baseball@spotaka.com', selectableBrands: [GENUINE] }
const gloveStudioKobeya = { name: 'GLOVE STUDIO by KOBEYA', email: 'yagi@kobeya-sp.co.jp', selectableBrands: [GENUINE] }
const act = { name: 'スポーツアクト', email: 'tatsuya626954@gmail.com', selectableBrands: [GENUINE] }
const mitsuuma = { name: 'ミツウマスポーツ', email: 'mitsuuma@mitsuuma.jp', selectableBrands: [FIVE] }
const takagi = { name: 'タカギスポーツ', email: 'romanecrowe@yahoo.co.jp', selectableBrands: [FIVE] }
const baseballFactoryM = { name: '野球工房M　福岡', email: 'y-koboM@global-sp.com', selectableBrands: [FIVE] }
const kField = { name: 'K-FIELD', email: 'tarasports1@eos.ocn.ne.jp', selectableBrands: [FIVE] }
const joy = { name: 'ジョイスポーツ', email: 'k11886819@gmail.com', selectableBrands: [FIVE] }
const yoshii = { name: 'ヨシイスポーツ', email: 'yakyuya441@gmail.com', selectableBrands: [FIVE] }
const sasaki = { name: '佐々木スポーツ', email: 'sp9k4vq9@diary.ocn.ne.jp', selectableBrands: [FIVE] }
const tsujihara = { name: '辻原スポーツ', email: 'tsujihara-s@po4.synapse.ne.jp', selectableBrands: [FIVE] }
const actTakeOne = { name: 'スポーツアクトテイクワン', email: 'sp_take_1@ybb.ne.jp', selectableBrands: [FIVE] }

// const a = { name: '', email: '', selectableBrands: [FIVE] }

export const retailShops: Retail[] = [
  demoKurita,
  yoshikawaDemoMain,
  terui,
  nara,
  nagamine,
  tedori,
  lionBaseballProShop,
  baseballFactoryNine,
  montana,
  rokuhachiBaseballFactory,
  lucky,
  hotta,
  spotaka,
  gloveStudioKobeya,
  act,
  mitsuuma,
  takagi,
  baseballFactoryM,
  kField,
  joy,
  yoshii,
  sasaki,
  tsujihara,
  actTakeOne,
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
  ojivaInternational,
  fiveMain,
  miuraMain
]

import { Personal } from '@/types'

export const initialPersonal: Personal = {
  userName: '',
  userNameKana: '',
  mailAddress: '',
  phoneNumber: '',
  zipCode: '',
  league: '',
  position: '',
  remarks: ''
}

export const POSITION_OPTIONS = [
  { label: '投手用', value: 'pitcher', attribute: 'pitcher' },
  { label: '捕手用', value: 'catcher', attribute: 'catcher' },
  { label: '一塁手', value: 'firstBaseman', attribute: 'firstBaseman' },
  { label: '二塁手', value: 'secondBaseman', attribute: 'infielder' },
  { label: '三塁手', value: 'thirdBaseman', attribute: 'infielder' },
  { label: '遊撃手', value: 'shortStop', attribute: 'infielder' },
  { label: '左翼手', value: 'leftFielder', attribute: 'outfielder' },
  { label: '中堅手', value: 'centerFielder', attribute: 'outfielder' },
  { label: '右翼手', value: 'rightFielder', attribute: 'outfielder' }
]

export const LEAGUE_OPTIONS = [
  { label: 'プロ野球(NPB,独立L)', value: 'professional' },
  { label: '社会人野球', value: 'inCorporate' },
  { label: '大学野球', value: 'collegeLeague' },
  { label: '高校野球', value: 'highSchool' },
  { label: 'ボーイズリーグ', value: 'boysLeague' },
  { label: 'シニアリーグ', value: ' seniorLeague' },
  { label: 'ヤングリーグ', value: 'youngLeague' },
  { label: 'リトルリーグ', value: '' },
  { label: '草野球', value: 'hobby' }
]

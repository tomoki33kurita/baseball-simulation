import { DocumentContentGenerator, Personal, Retail } from '@/types'

export const customerInformation = (personal: Personal, retail: Retail, genCellContent: DocumentContentGenerator): any[] => {
  return [
    {
      text: 'お客様情報',
      style: { fontSize: 10 },
      margin: [0, 8, 0, 4]
    },
    {
      table: {
        widths: ['25%', '25%', '25%', '25%'],
        body: [
          [
            genCellContent('小売店メール', retail.email),
            genCellContent('小売店名', retail.name),
            genCellContent('お客様名', personal?.userName),
            genCellContent('お名前(カナ)', personal?.userNameKana)
          ],
          [
            genCellContent('メールアドレス', personal?.mailAddress),
            genCellContent('電話番号', personal?.phoneNumber),
            genCellContent('リーグ', personal.league),
            genCellContent('ポジション', personal.position.toString())
          ]
        ]
      }
    }
  ]
}

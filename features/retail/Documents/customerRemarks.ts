import { DocumentContentGenerator } from '@/types'

export const customerRemarks = (remarks: string, genCellContent: DocumentContentGenerator): any[] => {
  return [
    {
      text: '',
      style: { fontSize: 11 },
      margin: [0, 8, 0, 4]
    },
    {
      table: {
        widths: ['100%'],
        body: [[genCellContent('備考欄', remarks || '')]]
      }
    }
  ]
}

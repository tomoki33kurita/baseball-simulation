import { Embroidery } from '@/types'

export const getFiveEmbroideryCells = (embroidery: Embroidery, isCustom: boolean): { head: string; label: string; value: string; color?: string }[] =>
  [
    {
      head: '書体',
      label: embroidery.typeFace.label,
      value: embroidery.typeFace.value,
      color: embroidery.typeFace.value
    },
    {
      head: '位置',
      label: embroidery.position.label,
      value: embroidery.position.value,
      color: embroidery.position.value
    },
    {
      head: '刺繍カラー',
      label: embroidery.color.label,
      value: embroidery.color.value,
      color: embroidery.color.color
    },
    {
      head: '影カラー',
      label: embroidery.shadowColor.label,
      value: embroidery.shadowColor.value,
      color: embroidery.shadowColor.color
    },
    {
      head: 'フチカラー',
      label: embroidery.edgeColor.label,
      value: embroidery.edgeColor.value,
      color: embroidery.edgeColor.color
    },
    { head: '刺繍内容', label: embroidery.content, value: embroidery.content }
  ].filter((object) => (isCustom ? true : !['影カラー', 'フチカラー'].includes(object.head)))

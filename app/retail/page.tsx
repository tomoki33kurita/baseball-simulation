import React from 'react'
import dynamic from 'next/dynamic'

const DynamicRetail = dynamic(() => import('@/features/retail').then((module) => module), { ssr: false })

const Retail: React.FC = () => {
  return <DynamicRetail />
}

export default Retail

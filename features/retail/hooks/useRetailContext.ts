import { Retail } from '@/types'
import { createContext } from 'react'

export const RetailContext = createContext<Retail | null>(null)

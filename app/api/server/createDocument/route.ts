// import { db } from 'src/pages/api/server/firebase'
import { Timestamp, doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { NextResponse } from 'next/server'
const crypto = require('crypto')

export async function POST(req: Request) {
  const S = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789'
  const N = 20
  const id = Array.from(crypto.randomFillSync(new Uint8Array(N)))
    // @ts-ignore
    .map((n: number) => S[n % S.length])
    .join('')

  const createdAt = Timestamp.fromDate(new Date())
  const state = await req.json()
  const brand = state.baseModel.brand
  await setDoc(doc(db, brand, id), { state, createdAt })
  return NextResponse.json(
    {
      success: true,
      id
    },
    {
      status: 200
    }
  )
}

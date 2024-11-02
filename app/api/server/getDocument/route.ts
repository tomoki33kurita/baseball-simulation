import { doc, getDoc } from 'firebase/firestore'
import { NextResponse } from 'next/server'
import { db } from '@/app/api/server/firebase'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const docId = searchParams.get('docId')
  const brand = searchParams.get('brand')
  if (!docId) {
    return NextResponse.json({ error: 'Missing docId' }, { status: 400 })
  }
  if (!brand) {
    return NextResponse.json({ error: 'Missing brand' }, { status: 400 })
  }
  const docRef = doc(db, brand, docId)
  const data = await getDoc(docRef)

  if (!data.exists()) {
    return NextResponse.json(
      {
        data: null
      },
      {
        status: 404
      }
    )
  }

  return NextResponse.json(
    {
      ...data.data()
    },
    {
      status: 200
    }
  )
}

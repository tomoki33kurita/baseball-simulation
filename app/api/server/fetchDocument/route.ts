import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { NextResponse } from 'next/server'

export async function GET(_: Request, { id }: { id: string }) {
  const docRef = doc(db, 'atoms', id)
  const data = await getDoc(docRef)

  return NextResponse.json(
    {
      data: data.data()
    },
    {
      status: 200
    }
  )
}

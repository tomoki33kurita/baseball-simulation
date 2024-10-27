import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

export const dynamic = 'force-static'

export async function GET(_: Request, { id }: { id: string }) {
  const docRef = doc(db, 'atoms', id)
  const data = await getDoc(docRef)

  return Response.json(
    {
      data: data.data()
    },
    {
      status: 200
    }
  )
}

import { retailShops } from '@/app/api/store/retailShops'
import { NextResponse } from 'next/server'

export async function GET(_: Request, { email }: { email: string }) {
  const foundShop = retailShops.find((shop) => shop.email.toLocaleLowerCase() === email)

  if (!foundShop) {
    return NextResponse.json(
      {
        foundShop: null
      },
      {
        status: 404
      }
    )
  }
  return NextResponse.json(
    {
      foundShop
    },
    {
      status: 200
    }
  )
}

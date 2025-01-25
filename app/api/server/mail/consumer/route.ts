import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
import { Brand } from '@/types'

const getBrandName = (brand: Brand) => {
  switch (brand) {
    case 'five':
      return 'FIVE'
    case 'genuine':
      return 'Genuine'
    default:
      return '--'
  }
}

const getSubject = (savedId: number, brand: Brand) => {
  const brandName = getBrandName(brand)
  return `【${brandName} オーダーシミュレーション】保存IDが発行されました ${savedId}`
}

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const receiverEmailAddress = data.email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_AUTH_USER,
        pass: process.env.SMTP_AUTH_PASS
      }
    })
    const info = await transporter.sendMail({
      from: process.env.SMTP_AUTH_USER,
      to: receiverEmailAddress,
      bcc: process.env.SMTP_AUTH_USER,
      subject: getSubject(data.savedId, data.brand),
      attachments: [
        {
          filename: 'simulation-rear.png',
          path: data.imageUrlRear,
          cid: 'rearImage'
        },
        {
          filename: 'simulation-palm.png',
          path: data.imageUrlPalm,
          cid: 'palmImage'
        }
      ],
      html: mailTextGenerator('ja', data.savedId, data.brand)
    })
    //   <div style="margin-bottom:8px">
    //   <div>シミュレーションIDからオーダー発注が可能な店舗一覧はこちら</div>
    // </div>

    console.log('Saved data sent: ', info.messageId)
    return NextResponse.json(
      {
        success: true
      },
      {
        status: 200
      }
    )
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      {
        success: false
      },
      {
        status: 500
      }
    )
  }
}

const mailTextGenerator = (locale = 'ja', savedId: string, brand: Brand) => {
  switch (locale) {
    default:
      return `
      <html>
        <head></head>
        <body>
          <div style="margin-bottom:8px">
            <div>${getBrandName(brand)} オーダーシミュレーションをご利用頂きありがとうございます。</div>
          </div>
      
          <div style="display:flex; margin-bottom:8px">
            <img width=300 src="cid:rearImage"/>
            <img width=300 src="cid:palmImage"/>
          </div>

          <div style="margin-bottom:8px">
            <div>シミュレーションのIDが発行されました。ご注文の際にシミュレーションIDが必要となりますので、大切に保管してください。</div>
            <div>※3ヶ月が経過しますと、IDが期限切れとなる可能性があります。予めご了承ください。</div>
            <br>
            <br>
            <div style="font-weight:bold; color:blue">保存ID：${savedId}</div>
          </div>

          <div style="margin-bottom:8px">
            <div>高校野球等、各種連盟でのグラブ・ミットの使用規則はご自身でご確認ください。</div>
            <div>誤って使用規則に反するグラブをご発注された場合、返品・交換等はオーダー発注の特性上受けかねます。</div>
            <div>ご確認の上、ご発注をよろしくお願いします。</div>
          </div>
          </body>
      </html>
      `
  }
}

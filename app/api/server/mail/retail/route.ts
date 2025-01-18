import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
import { Embroidery } from '@/types'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const receiverEmailAddress = data.agencyEmail
    const retailEmail = data.retailEmail
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
      cc: retailEmail,
      bcc: process.env.SMTP_AUTH_USER,
      subject: data.subject,
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
        },
        {
          filename: 'order-simulation.pdf',
          cid: 'pdf-item',
          encoding: 'base64',
          content: data.pdfBase64
        }
      ],
      html: mailTextGenerator(data)
    })

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

const htmlH3Style = `style="margin-bottom:0"`
const defaultFontSize = `style="font-size:11px;"`
const flexMarginLeft = `style="margin-left:8px;"`

const mailTextGenerator = (data: any) => {
  switch (data.locale) {
    default:
      //case 'ja':
      return `<html>
        <head></head>
        <body>
          <div style="margin-bottom:8px; display:flex">
            <div ${defaultFontSize}>発注元：(${data.retailEmail})</div>
            <div style="margin-left:16px;font-size:11px;" >保存ID：${data.savedId}</div>
          </div>
          <div style="display:flex">
            <img width=300 src="cid:rearImage"/>
            <img width=300 src="cid:palmImage"/>
          </div>
  
          <div style="display:flex; width:600px; justify-content:space-between;">
            <div style="max-width:33%;">
              <div>
                <h4 ${htmlH3Style}>基本設定</h4>
                ${data.baseSettings.map((x: any, i: number) => `<div ${defaultFontSize}>(${i + 1}) ${x.head}：${x.label}</div>`).join('')}
              </div>
              <div>
                <div>
                  <h4 ${htmlH3Style}>お客様情報</h4>
                  <div ${defaultFontSize}>お名前：${data.personal.userName}</div>
                  <div ${defaultFontSize}>お名前(カナ)：${data.personal.userNameKana}</div>
                  <div ${defaultFontSize}>Email：${data.personal.mailAddress}</div>
                  <div ${defaultFontSize}>電話番号：${data.personal.phoneNumber}</div>
                  <div ${defaultFontSize}>住所：${data.personal.zipCode}</div>
                  <div ${defaultFontSize}>リーグ：${data.personal.league}</div>
                  <div ${defaultFontSize}>ポジション：${data.personal.position}</div>
                  <div ${defaultFontSize}>備考：${data.personal.remarks}</div>
                </div>
              </div>
            </div>
  
            <div ${flexMarginLeft}  style="max-width:33%;">
              ${
                data.colorSettings1.length > 0
                  ? `
                <div>
                  <h4 ${htmlH3Style}>カラー設定1</h4>
                  ${data.colorSettings1.map((x: any, i: number) => `<div ${defaultFontSize}>(${i + 1}) ${x.head}：${x.label}</div>`).join('')}
                </div>
                `
                  : ``
              }
              ${
                data.colorSettings2.length > 0
                  ? `
                <div>
                  <h4 ${htmlH3Style}>カラー設定2</h4>
                  ${data.colorSettings2.map((x: any, i: number) => `<div ${defaultFontSize}>(${i + 1}) ${x.head}：${x.label}</div>`).join('')}
                </div>
                `
                  : ``
              }
            </div>
  
            <div ${flexMarginLeft}  style="max-width:33%;">
              ${
                data.embroideries.some((e: any) => e.head === '刺繍内容' && e.label.trim().length > 0)
                  ? data.embroideries
                      .map(
                        (embroidery: any, i: number) =>
                          `<h4 ${htmlH3Style}>刺繍設定${i + 1}</h4>
                        ${embroidery.map((e: any, j: number) => `<div ${defaultFontSize}>(${j + 1}) ${e.head}：${e.label || '--'}</div>`).join('')}`
                      )
                      .join('')
                  : `
                <h4 ${htmlH3Style}>刺繍設定</h4>
                <div ${defaultFontSize}>刺繍指定なし</div>
                `
              } 
            </div>
  
          </div>
        </body>
      </html>`
  }
}

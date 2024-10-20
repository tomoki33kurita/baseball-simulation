import type { NextApiRequest } from 'next'
import nodemailer from 'nodemailer'
// type RequestData = {
//   body: {
//     subject: string
//     email: string
//     message: string
//   }
// }

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '5mb'
    }
  }
}
const htmlH3Style = `style="margin-bottom:0"`
const defaultFontSize = `style="font-size:11px;"`
const flexMarginLeft = `style="margin-left:8px;"`

const sendOrderEmail = async (req: NextApiRequest, res: any) => {
  try {
    const data = req.body.body // TODO: 構造変えたい
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      auth: {
        user: process.env.SMTP_AUTH_USER,
        pass: process.env.SMTP_AUTH_PASS
      }
    })
    const info = await transporter.sendMail({
      from: process.env.SMTP_AUTH_USER,
      to: data.agencyEmail,
      cc: data.retailEmail,
      bcc: process.env.SMTP_AUTH_USER,
      subject: `${data.subject} / ${data.savedId}`,
      attachments: [
        {
          filename: 'simulation-front.png',
          path: data.imageUrlFront,
          cid: 'frontImage'
        },
        {
          filename: 'simulation-back.png',
          path: data.imageUrlBack,
          cid: 'backImage'
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
    console.log('Mail order data sent: ', info.messageId)
    return res.status(200).end()
  } catch (err) {
    console.log(err)
    res.status(500).send()
  }
}

const mailTextGenerator = (data: any) => {
  switch (data.locale) {
    default:
      //case 'ja':
      return `<html>
      <head></head>
      <body>
        <div style="margin-bottom:8px; display:flex">
          <div ${defaultFontSize}>発注元：${data.retailName}(${data.retailEmail})</div>
          <div style="margin-left:16px;font-size:11px;" >保存ID：${data.savedId}</div>
        </div>
        <div style="display:flex">
          <img width=300 src="cid:backImage"/>
          <img width=300 src="cid:frontImage"/>
        </div>

        <div style="display:flex;width:600px;justify-content:space-between;">
          <div>
            <div>
              <h4 ${htmlH3Style}>基本設定</h4>
              ${data.baseSettings.map((x, i) => `<div ${defaultFontSize}>(${i + 1}) ${x.head}：${x.label}</div>`).join('')}
            </div>
            <div>
              <div>
                <h4 ${htmlH3Style}>お客様情報</h4>
                <div ${defaultFontSize}>お名前：${data.orderer.name}</div>
                <div ${defaultFontSize}>お名前(カナ)：${data.orderer.kana}</div>
                <div ${defaultFontSize}>Email：${data.orderer.mailAddress}</div>
                <div ${defaultFontSize}>電話番号：${data.orderer.phoneNumber}</div>
                <div ${defaultFontSize}>リーグ：${data.orderer.league}</div>
                <div ${defaultFontSize}>ポジション：${data.orderer.position}</div>
                <div ${defaultFontSize}>備考：${data.orderer.remarks}</div>
              </div>
            </div>
          </div>

          <div ${flexMarginLeft}>
            <div>
              <h4 ${htmlH3Style}>カラー設定1</h4>
              ${data.colorSettings1.map((x, i) => `<div ${defaultFontSize}>(${i + 1}) ${x.head}：${x.label}</div>`).join('')}
            </div>
            <div>
              <h4 ${htmlH3Style}>カラー設定2</h4>
              ${data.colorSettings2.map((x, i) => `<div ${defaultFontSize}>(${i + 1}) ${x.head}：${x.label}</div>`).join('')}
            </div>
          </div>

          <div ${flexMarginLeft}>
            ${
              data.embroideries.length > 0
                ? data.embroideries
                    .map(
                      (embroidery, i) =>
                        `<h4 ${htmlH3Style}>刺繍設定${i + 1}</h4>
                      ${embroidery.map((e, j) => `<div ${defaultFontSize}>(${j + 1}) ${e.head}：${e.label || '--'}</div>`).join('')}`
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
    // case 'en':
    //   return `<html>
    //   <head></head>
    //   <body>
    //     <div style="margin-bottom:8px; display:flex">
    //       <div ${defaultFontSize}>Ordering by：${data.retailEmail}</div>
    //       <div style="margin-left:16px;font-size:11px;" >Saved ID：${data.savedId}</div>
    //     </div>

    //     <div style="display:flex">
    //       <img width=300 src="cid:backImage"/>
    //       <img width=300 src="cid:frontImage"/>
    //     </div>

    //     <div style="display:flex;width:600px;justify-content:space-between;">
    //       <div>
    //         <div>
    //           <h4 ${htmlH3Style}>Base Settings</h4>
    //           ${data.baseSettings.map((x, i) => `<div ${defaultFontSize}>(${i + 1}) ${x.head}：${x.label}</div>`).join('')}
    //         </div>
    //         <div>
    //           <div>
    //             <h4 ${htmlH3Style}>Customer Information</h4>
    //             <div ${defaultFontSize}>Name：${data.orderer.name}</div>
    //             <div ${defaultFontSize}>Email Address：${data.orderer.mailAddress}</div>
    //             <div ${defaultFontSize}>TEL：${data.orderer.phoneNumber}</div>
    //             <div ${defaultFontSize}>League：${data.orderer.league}</div>
    //             <div ${defaultFontSize}>Position：${data.orderer.position}</div>
    //             <div ${defaultFontSize}>Remark：${data.orderer.remarks}</div>
    //           </div>
    //         </div>
    //       </div>

    //       <div ${flexMarginLeft}>
    //         <div>
    //           <h4 ${htmlH3Style}>Color Settings 1</h4>
    //           ${data.colorSettings1.map((x, i) => `<div ${defaultFontSize}>(${i + 1}) ${x.head}：${x.label}</div>`).join('')}
    //         </div>
    //         <div>
    //           <h4 ${htmlH3Style}>Color Settings 2</h4>
    //           ${data.colorSettings2.map((x, i) => `<div ${defaultFontSize}>(${i + 1}) ${x.head}：${x.label}</div>`).join('')}
    //         </div>
    //       </div>

    //       <div ${flexMarginLeft}>
    //         ${
    //           data.embroideries.length > 0
    //             ? data.embroideries
    //                 .map(
    //                   (embroidery, i) =>
    //                     `<h4 ${htmlH3Style}>Embroidery Settings ${i + 1}</h4>
    //                   ${embroidery.map((e, j) => `<div ${defaultFontSize}>(${j + 1}) ${e.head}${e.label || '--'}</div>`).join('')}`
    //                 )
    //                 .join('')
    //             : `
    //           <h4 ${htmlH3Style}>Embroidery Setting</h4>
    //           <div ${defaultFontSize}>No embroidery</div>
    //           `
    //         }
    //       </div>

    //     </div>
    //   </body>
    // </html>`
    // case 'ko':
    //   return `<html>
    //   <head></head>
    //   <body>
    //     <div style="margin-bottom:8px; display:flex">
    //       <div ${defaultFontSize}>발주원：${data.retailEmail}</div>
    //       <div style="margin-left:16px;font-size:11px;" >보존ID：${data.savedId}</div>
    //     </div>

    //     <div style="display:flex">
    //       <img width=300 src="cid:backImage"/>
    //       <img width=300 src="cid:frontImage"/>
    //     </div>

    //     <div style="display:flex;width:600px;justify-content:space-between;">
    //       <div>
    //         <div>
    //           <h4 ${htmlH3Style}>기본항목</h4>
    //           ${data.baseSettings.map((x, i) => `<div ${defaultFontSize}>(${i + 1}) ${x.head}：${x.label}</div>`).join('')}
    //         </div>
    //         <div>
    //           <div>
    //             <h4 ${htmlH3Style}>고객 정보</h4>
    //             <div ${defaultFontSize}>성함：${data.orderer.name}</div>
    //             <div ${defaultFontSize}>Email：${data.orderer.mailAddress}</div>
    //             <div ${defaultFontSize}>전화：${data.orderer.phoneNumber}</div>
    //             <div ${defaultFontSize}>리그：${data.orderer.league}</div>
    //             <div ${defaultFontSize}>수비 위치：${data.orderer.position}</div>
    //             <div ${defaultFontSize}>비고란：${data.orderer.remarks}</div>
    //           </div>
    //         </div>
    //       </div>

    //       <div ${flexMarginLeft}>
    //         <div>
    //           <h4 ${htmlH3Style}>컬러 설정1</h4>
    //           ${data.colorSettings1.map((x, i) => `<div ${defaultFontSize}>(${i + 1}) ${x.head}：${x.label}</div>`).join('')}
    //         </div>
    //         <div>
    //           <h4 ${htmlH3Style}>컬러 설정2</h4>
    //           ${data.colorSettings2.map((x, i) => `<div ${defaultFontSize}>(${i + 1}) ${x.head}：${x.label}</div>`).join('')}
    //         </div>
    //       </div>

    //       <div ${flexMarginLeft}>
    //         ${
    //           data.embroideries.length > 0
    //             ? data.embroideries
    //                 .map(
    //                   (embroidery, i) =>
    //                     `<h4 ${htmlH3Style}>자수 설정${i + 1}</h4>
    //                   ${embroidery.map((e, j) => `<div ${defaultFontSize}>(${j + 1}) ${e.head}${e.label || '--'}</div>`).join('')}`
    //                 )
    //                 .join('')
    //             : `
    //           <h4 ${htmlH3Style}>자수 설정</h4>
    //           <div ${defaultFontSize}>자수 설정 없음</div>
    //           `
    //         }
    //       </div>

    //     </div>
    //   </body>
    // </html>`
  }
}
export default sendOrderEmail

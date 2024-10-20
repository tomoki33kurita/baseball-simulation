import nodemailer from 'nodemailer'
type RequestData = {
  body: {
    subject: string
    email: string
    savedId: string
    imageUrlFront: string
    imageUrlBack: string
    locale: 'ja' | 'en'
  }
}

const sendSimulationMail = async (req: RequestData, res: any) => {
  try {
    const data = req.body
    const receiverEmailAddress = data.email
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
      to: receiverEmailAddress,
      bcc: process.env.SMTP_AUTH_USER,
      subject: data.subject,
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
        }
      ],
      html: mailTextGenerator(data.locale, data.savedId)
    })
    //   <div style="margin-bottom:8px">
    //   <div>シミュレーションIDからオーダー発注が可能な店舗一覧はこちら</div>
    // </div>

    console.log('Saved data sent: ', info.messageId)
    return res.status(200).end()
  } catch (err) {
    console.log(err)
    res.status(500).send()
  }
}

const mailTextGenerator = (locale = 'ja', savedId: string) => {
  switch (locale) {
    default:
      return `
      <html>
        <head></head>
        <body>
          <div style="margin-bottom:8px">
            <div>ATOMSオーダーシミュレーションをご利用頂きありがとうございます。</div>
          </div>
      
          <div style="display:flex; margin-bottom:8px">
            <img width=300 src="cid:frontImage"/>
            <img width=300 src="cid:backImage"/>
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

export default sendSimulationMail

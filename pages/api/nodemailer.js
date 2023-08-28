import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: `${process.env.SMTP_HOST}`,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: `${process.env.SMTP_USERNAME}`,
    pass: `${process.env.SMTP_PASSWORD}`,
  },
});

async function sendEmail(req, res) {
  try {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: 'noreply@cryptech.services', // sender address
        to: "inquiries@cryptech.services", // list of receivers
        subject: `[CT Services] : ${req.body.subject}`, // Subject line
        text: `${req.body.message}`, // plain text body
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
        <head>
          <meta charset="utf-8">

          <title>The HTML5 Herald</title>
          <meta name="description" content="The HTML5 Herald">
          <meta name="author" content="SitePoint">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

          <link rel="stylesheet" href="css/styles.css?v=1.0">

        </head>

        <body>
          <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
                </div>
                <div class="container" style="margin-left: 20px;margin-right: 20px;">
                <h3>You've got a new mail from ${req.body.fullname}, sender's email is: ✉️${req.body.email} </h3>
                <div style="font-size: 16px;">
                <p>Message:</p>
                <p>${req.body.message}</p>
                <br>
                </div>
                </div>
        </body>
        </html>`, // html body
      });
        
      console.log("Message sent: %s", info.messageId);

  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;

import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// smtp mailer
const transporter = nodemailer.createTransport({
  host: `${process.env.SMTP_HOST}`,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  requireTLS: true,
  auth: {
    user: `${process.env.SMTP_USERNAME}`,
    pass: `${process.env.SMTP_PASSWORD}`,
  },
});

// anti-dos agent tracking
interface Agent {
  ip: string;
  req_count: number;
  stamp: number;
}

const agents: Agent[] = [];

const cleanAgents = () => {
  const toRemove = [];
  for (const agent of agents) {
    if (Date.now() > agent.stamp + 1000 * 60 * 10) {
      const index = agents.indexOf(agent, 0);
      toRemove.push(index);
    }
  }
  for (const rem of toRemove) {
    agents.splice(rem, 1);
  }
};

const agentPassSpamCheck = (
  req: NextApiRequest,
  res: NextApiResponse
): boolean => {
  // clean agents
  cleanAgents();
  // get agent from request headers
  const forwarded = req.headers['x-forwarded-for'] as string;
  const ip = forwarded
    ? forwarded.split(/, /)[0]
    : req.connection.remoteAddress;
  const fAgent = agents.find((a) => a.ip == ip);
  if (!fAgent) {
    // add new agent
    if (ip != undefined) {
      const accessor: Agent = {
        ip,
        req_count: 0,
        stamp: Date.now()
      };
      agents.push(accessor);
    }
  } else {
    // decrement counter when valid req
    if (Date.now() > fAgent.stamp + 1000 * 10 && fAgent.req_count > 0) {
      fAgent.req_count -= 3;
    }
    if (Date.now() > fAgent.stamp + 1000 * 20 && fAgent.req_count > 0) {
      fAgent.req_count -= 5;
    }
    if (Date.now() > fAgent.stamp + 1000 * 40 && fAgent.req_count > 0) {
      fAgent.req_count -= 8;
    }
    if (Date.now() > fAgent.stamp + 1000 * 60 && fAgent.req_count > 0) {
      fAgent.req_count -= 13;
    }

    // increment counter if too often
    if (Date.now() - 400 < fAgent.stamp) {
      fAgent.req_count++;
    }
    if (Date.now() - 1000 * 1 < fAgent.stamp) {
      fAgent.req_count++;
    }
    if (Date.now() - 1000 * 3 < fAgent.stamp) {
      fAgent.req_count++;
    }
    if (Date.now() - 1000 * 5 < fAgent.stamp) {
      fAgent.req_count++;
    }

    fAgent.stamp = Date.now();

    // rate error
    if (fAgent.req_count > 3) {
      res.status(200).json({
        statusCode: 218,
        message: 'rate-error'
      });
      return false;
    }
  }
  return true;
};

// =========================

// send email api function
async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse) {

  if (!agentPassSpamCheck(req, res)) {
    console.log(agents);
    return;
  }

  try {

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `${process.env.SMTP_USERNAME}`, // sender address
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

    //console.log("Message sent: %s", info.messageId);

  } catch (error) {
    // console.log(error);
    return res.status((error as any).statusCode || 500).json({ error: (error as Error).message });
  }

  return res.status(200).json({ error: undefined });
}

export default sendEmail;

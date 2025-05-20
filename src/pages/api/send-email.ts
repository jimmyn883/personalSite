import sgMail from '@sendgrid/mail';
import type {NextApiRequest, NextApiResponse} from 'next';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({message: 'Method not allowed'});
  }

  const {name, email, message} = req.body;

  console.log('Sending email:', {name, email, message});
  try {
    await sgMail.send({
      to: 'jimmyn883+personalSiteSender@gmail.com', // your email
      from: 'jimmyn883@gmail.com', // verified sender
      subject: `📩 New message from ${name} via your portfolio site`,
      replyTo: email,
      text: `
From: ${name}
Email: ${email}

Message:
${message}

---
Sent via Jimmy Njuguna’s personal website (https://jimmy-njuguna.vercel.app)
  `,
    });

    return res.status(200).json({message: 'Email sent successfully'});
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error);
      return res.status(500).json({message: 'Failed to send email', error: error.message});
    } else {
      console.error('Unknown error', error);
      return res.status(500).json({message: 'Failed to send email', error: 'Unknown error'});
    }
  }
}

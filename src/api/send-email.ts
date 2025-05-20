import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  try {
    await sgMail.send({
      to: 'jimmyn883@gmail.com', // your email
      from: 'jimmyn883@gmail.com', // verified sender
      subject: `New contact form submission from ${name}`,
      replyTo: email,
      text: message,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}

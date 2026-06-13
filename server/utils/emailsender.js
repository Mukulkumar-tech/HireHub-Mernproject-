import nodemailer from 'nodemailer'
import dotenv from 'dotenv';
dotenv.config()

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendotpemail = async(reciver,subject,emailtemplate)=>{
  try {
  const info = await transporter.sendMail({
    from:"mukulkumaruk08@gmail.com", // sender address
    to: reciver, // list of recipients
    subject: subject, // subject line
    text: "Hello world?", // plain text body
    html:emailtemplate, // HTML body
  });

  console.log("Message sent: %s", info.messageId);

} catch (err) {
  console.error("Error while sending mail:", err);
}
}
'use server'

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export const sendMessage = async (name: string, mail: string, phone: string, message: string) => {
  await transporter.sendMail({
    from: mail,
    to: 'contact@agence-designme.com',
    subject: `Demande de devis pour ${name}`,
    text: `Nom : ${name} \n mail : ${mail} \n Numéro de téléphone : ${phone} \n Message : ${message}`,
  })
}

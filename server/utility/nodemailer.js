import nodemailer from 'nodemailer'
import '../utility/env.config.js'

const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: process.env.NM_EMAIL,
        pass: process.env.NM_PW
    }
})

export function signupEmail(email, password) {
    const mailOptions = {
        from: process.env.NM_EMAIL,
        to: email,
        subject: 'Fullstack Auth System',
        text: `Thank you for signing up! Here is your password:\n${password}`
    }
    transporter.sendMail(mailOptions)
}

export function forgotPasswordEmail(email, password) {
    const mailOptions = {
        from: process.env.NM_EMAIL,
        to: email,
        subject: 'Fullstack Auth System',
        text: `Fear not, here is your new password that unfortunately doesn't work:\n${password}`
    }
    transporter.sendMail(mailOptions)
}

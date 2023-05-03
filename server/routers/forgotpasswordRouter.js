import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import { forgotPasswordEmail } from '../utility/nodemailer.js'
import { generatePassword } from '../authentication/passwordGenerator.js'

const router = Router()

router.post('/forgotpassword', [
    body('email').isEmail()
], (req, res) => {
    if (!validationResult(req).isEmpty()) {
        return res.status(400).send()
    }
    const newPassword = generatePassword()

    // Firebase Admin SDK not implemented
    // Password is neither reset nor updated

    forgotPasswordEmail(req.body.email, newPassword)
    res.status(200).send()
})

export default router

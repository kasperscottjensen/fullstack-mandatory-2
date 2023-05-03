import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import { generatePassword } from '../authentication/passwordGenerator.js'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { signupEmail } from '../utility/nodemailer.js'

const router = Router()

router.post('/signup', [
    body('email').isEmail()
], (req, res) => {
    if (!validationResult(req).isEmpty()) {
        return res.status(400).send()
    }
    const password = generatePassword()
    createUserWithEmailAndPassword(getAuth(), req.body.email, password)
        .then(() => {
            signupEmail(req.body.email, password)
            res.status(200).send()
        })
        .catch((error) => {
            console.log({ code: error.code, message: error.message })
            res.status(400).send()
        })
})

export default router

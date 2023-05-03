import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const router = Router()

let session

router.post('/login', [
    body('email').isEmail(),
    body('password').isString()
], (req, res) => {
    if (!validationResult(req).isEmpty()) {
        return res.status(400).send()
    }
    signInWithEmailAndPassword(getAuth(), req.body.email, req.body.password)
        .then((userCredentials) => {
            session = req.session
            session.user = userCredentials.user.email
            res.status(200).send()
        })
        .catch((error) => {
            console.log({ code: error.code, message: error.message })
            res.status(400).send()
        })
})

router.get('/logout', (req, res) => {
    signOut(getAuth())
        .then(() => {
            session = req.session
            session.destroy()
            res.status(200).send()
        })
        .catch((error) => {
            console.log({ code: error.code, message: error.message })
            res.status(400).send()
        })
})

router.get('/session', (req, res) => {
    const isAuthenticated = !!session.user
    res.status(200).json({ isAuthenticated })
})
  
export default router

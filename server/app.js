import express from 'express'
import multer from 'multer'
import cors from 'cors'
import loginRouter from './routers/loginRouter.js'
import signupRouter from './routers/signupRouter.js'
import forgotpasswordRouter from './routers/forgotpasswordRouter.js'
import './authentication/firebase.js'
import './utility/env.config.js'
import session from 'express-session'

const app = express()

app.use(multer().array())

app.use(cors({
    origin: process.env.CLIENT,
    credentials: true
}))

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 }
}))

app.use(loginRouter)
app.use(signupRouter)
app.use(forgotpasswordRouter)

const server = app.listen(process.env.PORT, () => console.log("server running on port ", server.address().port))

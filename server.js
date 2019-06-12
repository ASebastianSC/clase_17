const express = require('express')
const app = express()
const authRouter = require('./auth') // "./" lleva a la misma carpeta que server

const homeHandler = (request, response) => {
    response.send('Hello World')
} //esto fue una función (handler)

app.all('/' , homeHandler)

app.use('/auth', authRouter)

app.listen(9000)
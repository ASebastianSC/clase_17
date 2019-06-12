const express = require('express')
const authRouter = express.Router()

const authHandler = (request, response) => {
    response.send (`Ruta auth ${request.path}`)
}

authRouter.all('/login', authHandler)

authRouter.all('/logout', authHandler)

authRouter.all('/recovery', authHandler)
/*authRouter.get('/login', function (req, res) {
  res.send('This is login')
})

authRouter.get('/logout', function (req, res) {
  res.send('This is logout')
})

authRouter.get('/recovery', function (req, res) {
    res.send('This is revovery')
})*/

module.exports = authRouter
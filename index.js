const express = require('express')
const basicAuth = require('basic-auth')
const { USERNAME, PASSWORD } = process.env
const PORT = process.env.PORT || 8080

const app = express()

app.use('*', (req, res, next) => {
  const user = basicAuth(req)
  if (user && user.name === USERNAME && user.pass === PASSWORD) {
    return next()
  } else {
    res.setHeader('WWW-Authenticate', 'Basic realm=Authorization Required')
    res.statusCode = 401
    res.end('Access denied')
    return
  }
})

app.use(express.static('./'))

const server = app.listen(PORT)

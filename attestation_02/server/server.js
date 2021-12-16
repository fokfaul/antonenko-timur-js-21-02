const express = require('express')
const app = express()
const router = require('./routes/index')

const logger = require('./logger')
const context = require('request-context')
const { v4: generateUUID } = require('uuid')

const host = '127.0.0.1';
const port = 4000;

app.use(express.json())
app.use(context.middleware('request'))
app.use((req, res, next) => {
  context.set('uuid', generateUUID())
  res.type('text/plain')
    .set('Access-Control-Allow-Origin','*')
    .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
    .set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});
app.use((err, req, res, next) => {
  logger.fatal(err)
  res.status(500).send(err.toString())
  next()
})
app.use('/', router)

app.listen(port, host, () => console.log(`Server started at http://${host}:${port}`))
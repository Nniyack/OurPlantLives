const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const sequelizer = require('./src/db/sequelize')

const app = express()
const port = 3000

app
  .use(morgan('dev'))
  .use(bodyParser.json())

sequelizer.initDb()

app.listen(port, ()=> console.log(`notre application Node est démarrée sur : http://localhost:${port}`) )
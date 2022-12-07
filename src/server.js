require('./db/connection') // როგორც კი დაისტარტება მოხდება მონაცემთა ბაზასთან კავშირი
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// const routes = require('./routes')

// const router = require('./routes')
// pirveli shedis ak middlearia nebismier requests daaswrebs
// app.use('/', (req, res, next) => {
//     console.log('always here!')
//     next();
// });;;

app.use(bodyParser.urlencoded({ extended: false }))// body rom mivwvdet magito da unda installi body-parser
// app.use(routes)

app.listen(3000, () => {
  console.log('server listens to port 5001')
})

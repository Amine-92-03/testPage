import express from 'express'
import bodyParser from 'body-parser'
import cron from 'node-cron'
import getFetchData from './Controllers/getFetchData.js'
import saveData from './Controllers/saveDataToDb.js'
import sendmail from './Controllers/sendMail.js'


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// connect  to mongodb
//     */2 * * * *'



app.use(express.static('./frontEnd'));
export default app



const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const cors = require('cors')
const advertisementRouter = require('./advertisement/router')
const userRouter = require('./user/router')
//require routers here


//app is the API server, use routers here
const app = express()
const jsonParser = bodyParser.json()
app.use(jsonParser)
app.use(cors)
app.use(advertisementRouter)
app.use(userRouter)


//connect to database:
const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Listening on port ${port}`))
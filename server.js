require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cheeseController = require('./controllers/cheeseController')
const moragn = require('morgan')




// Path: server.js
app.use(moragn('tiny'))
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use("/cheese", cheeseController)

app.listen(PORT, () =>  console.log("Server is running on port", PORT))
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//static folder
app.use(express.static('public'))

//routes
const main = require('./routes/main')
app.use('/', main)


app.listen(port, console.log(`Listening on port: ${port}`))
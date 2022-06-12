const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080;

// Logs the Requests
app.use(morgan('tiny'));

// parse the request to body-parser
app.use(bodyParser.urlencoded({extended: true}))

// set view engine
app.set('view engine','ejs')

// Load assets
app.use('/css', express.static(path.resolve(__dirname,'assets/css')))
app.use('/js', express.static(path.resolve(__dirname,'assets/js')))
app.use('/img', express.static(path.resolve(__dirname,'assets/img')))


app.get('/', (req, res) =>{
    //res.send("<h1>Contact Manager App</h1>")
    res.render('index')
})

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
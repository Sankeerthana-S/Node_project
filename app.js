
// Get modules

const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

// Module to access variables from environment file
const dotenv = require('dotenv');
const config =dotenv.config();

// Import files

const knex = require('./config/db');
const register = require('./api/controllers/register');
const app = express();




app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.set('views', __dirname+ '/views');
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));


// render register page

app.get('/register_page', (req, res)=>{
    res.render('register');
    console.log("Sent registrationn page");
});



console.log(config);
const PORT = config.parsed.PORT || process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server listening at port ${PORT}`);
})

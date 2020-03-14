require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000
const hbs = require('express-hbs');

app.engine('hbs', hbs.express4({ partialsDir: __dirname + '/view/partials' }));

app
    .use(bodyParser.urlencoded({ extended: true }))
    .set('view engine', 'hbs')
    .set('views', `${__dirname}/view/pages`)
    .use(express.static(path.join(__dirname, 'static')))
    .get('/', homeRoute)

async function getData(){
    const query = 'tolkien'
    const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=";
    const detail = "Default";
    const url = `${endpoint}${query}&authorization=${process.env.API_KEY}&detaillevel=${detail}&output=json`;

    const config = {
        Authorization: `Bearer ${process.env.API_SECRET}`
      };

    const response = await fetch(url)

    const text = await response.text()

    const JSONData = await JSON.parse(text.trim())

    

    return JSONData

}

    
async function homeRoute(req, res) {
    const data = await getData()

    console.log('ooooooooooooo: ', data.results)

    res.render('home.hbs', {
        books: data.results,
        pageTitle: 'Home'
    })
  }

app.listen(port, () => {
    console.log(`Dev app listening on port: ${port}`)
})
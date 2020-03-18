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



    
async function homeRoute(req, res) {
    res.render('home.hbs', {
        // books: data.results,
        // pageTitle: 'Home'
    })
  }

app.listen(port, () => {
    console.log(`Dev app listening on port: ${port}`)
})
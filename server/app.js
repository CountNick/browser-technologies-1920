require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000
const H = require('just-handlebars-helpers')
const hbs = require('express-hbs')
const fs = require('fs')



app
    .engine('hbs', hbs.express4({ partialsDir: __dirname + '/view/partials' }))
    .use(bodyParser.urlencoded({ extended: true }))
    .set('view engine', 'hbs')
    .set('views', `${__dirname}/view/pages`)
    .use(express.static(path.join(__dirname, 'static')))
    .get('/', homeRoute)
    .get('/thanks', thanksRoute)

H.registerHelpers(hbs)
//get request op zelfde pagina?
// opgeslagen data meegeven aan de homeRoute
// save button mogelijk
function homeRoute(req, res) {

    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    let urlSave
    const data = req.query

    if(fullUrl.includes("?")){
        urlSave = fullUrl
    }

    res.render('home.hbs', {
        data: data,
        url: urlSave,
        pageTitle: 'Enquete'
    })
}



function thanksRoute(req, res){
    const data = req.query

    res.render('overview.hbs', {
        data: data,
        pageTitle: 'Check'
    })
}

app.listen(port, () => {
    console.log(`Dev app listening on port: ${port}`)
})
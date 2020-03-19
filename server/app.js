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

// opgeslagen data meegeven aan de homeRoute
function homeRoute(req, res) {
    fs.readFile(__dirname  + '/static/dist/tilegridJsonDataFinal_0.json', "utf8", (err, data) => {
        if(err) throw err;
    
        const resultArray = JSON.parse(data)
    
        res.render('home.hbs', {
            data: resultArray
            // books: data.results,
            // pageTitle: 'Home'
        })

    });
}

function thanksRoute(req, res){
    const data = req.query
    writeData(data)

    res.render('overview.hbs', {
        data: data
    })
}

function writeData(data, fileIndex = 0) {
    fs.writeFile(path.join(__dirname  + '/static/dist/tilegridJsonDataFinal' +"_"+ fileIndex +".json"),
        JSON.stringify(data,null,4),
        { encoding: 'utf8', flag: 'wx'},
        function(err) {
            if (err && err.code == "EEXIST") {
                writeData(data, ++fileIndex)
            } else if (err) {
                return console.log(err)
            } else {
                console.log("The file was saved!")
            }
        })
}

app.listen(port, () => {
    console.log(`Dev app listening on port: ${port}`)
})
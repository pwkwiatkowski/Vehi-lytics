//import bodyParser from "body-parser";
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors'); //moje

const bodyParser = require('body-parser');
//const scrapers = require('./scrapers');
const scrapers = require('./scrapers2');
const db = require('./db2');
const { response } = require('express');

app.use(cors()) //moje

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Controll-Allow-Origin", "*") //disabled for security on local
    res.header("Access-Controll-Allow-Headers", "Content-Type");
    next();
});

app.get('/cars', async (req, res) => {
    const cars = await db.getAllCars();
    res.send(cars);
})

app.post('/cars', async (req, res) => {
    console.log(req.body);
    const channelData = await scrapers.scrapeChannel(req.body.channelURL);
    //const creators = await db.insertCreator(channelData.name, channelData.avatarURL, req.body.channelURL);
    //trzeba wysłać do bazy każdy zescrapowany samochód, może w jakiejś pętli
    //const creators = await db.insertCreator(channelData.title, channelData.subtitle, channelData.year, channelData.price);
    const cars = await db.insertCar(channelData[0].title, channelData[0].subtitle, channelData[0].year);
    //channelData.then(result => console.log(result));
    //console.log(channelData[0].title_tab, channelData[0].subtitle_tab, channelData[0].year_tab)
    // channelData.then(result => console.log(result));
    
    console.log("Zescrapowane samochody: ")
    console.log(channelData)
    console.log("Samochody z bazy: " + cars)

    //channelData.then(res=> console.log(res))
    // scrapers.poRequescie();
    //console.log("prosto z cars ");
    //res.send(cars);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

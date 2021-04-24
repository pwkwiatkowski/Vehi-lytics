//import bodyParser from "body-parser";
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors'); //moje

const bodyParser = require('body-parser');
//const scrapers = require('./scrapers');
const scrapers = require('./scrapers2');
const db = require('./db')

app.use(cors()) //moje

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Controll-Allow-Origin", "*") //disabled for security on local
    res.header("Access-Controll-Allow-Headers", "Content-Type");
    next();
});

app.get('/creators', async (req, res) => {
    const creators = await db.getAllCreators();
    res.send(creators);
})

app.post('/creators', async (req, res) => {
    console.log(req.body);
    const channelData = await scrapers.scrapeChannel(req.body.channelURL);
    //const creators = await db.insertCreator(channelData.name, channelData.avatarURL, req.body.channelURL);
    //trzeba wysłać do bazy każdy zescrapowany samochód, może w jakiejś pętli
    //const creators = await db.insertCreator(channelData.title, channelData.subtitle, channelData.year, channelData.price);
    const creators = await db.insertCreator(channelData[0].title, channelData[0].subtitle, channelData[0].year, channelData[0].price);
    res.send(creators);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

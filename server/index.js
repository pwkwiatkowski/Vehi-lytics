const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const mongoose = require('mongoose');

var path = require('path');

const bodyParser = require('body-parser');
const scrapers = require('./scrapers');
const db = require('./db');
const { response } = require('express');

app.use(cors())

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Controll-Allow-Origin", "*") //disabled for security on local
    res.header("Access-Controll-Allow-Headers", "Content-Type");
    next();
});

app.get('/', function(req, res) {
    res.sendFile(path.join(process.cwd(), '../client', 'vehicles.html'));
})

app.get('/controlpanel', function(req, res) {
    res.sendFile(path.join(process.cwd(), '../client', 'controlpanel.html'));
})

app.get('/cars', async(req, res) => {
    const cars = await db.getAllCars();
    res.send(cars);
    //mongoose.disconnect();
})

app.post('/cars', async(req, res) => {
    console.log(req.body);
    const carData = await scrapers.scrapeCar(req.body.channelURL);
    const carsFromDb = await db.getAllCars();
    for (let i = 0; i < carData.length; i++) {
        await db.insertCar(carData[i]);
    }

    console.log("Zescrapowane samochody: ")
    console.log(carData)
    console.log("Samochody z bazy: " + carsFromDb)
    console.log("dlugosc tablicy cars")
    console.log(carData.length)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

//--- START
app.get('/opel', function(req, res) {
    res.sendFile(path.join(process.cwd(), '../client', 'vehicles.html'));
})

app.get('/audi', function(req, res) {
    res.sendFile(path.join(process.cwd(), '../client', 'vehicles.html'));
})

app.get('/ford', function(req, res) {
    res.sendFile(path.join(process.cwd(), '../client', 'vehicles.html'));
})

app.get('/astra', function(req, res) {
    res.sendFile(path.join(process.cwd(), '../client', 'vehicles.html'));
})

app.get('/corsa', function(req, res) {
    res.sendFile(path.join(process.cwd(), '../client', 'vehicles.html'));
})

app.get('/nova', function(req, res) {
    res.sendFile(path.join(process.cwd(), '../client', 'vehicles.html'));
})
//---END

module.exports = {app}
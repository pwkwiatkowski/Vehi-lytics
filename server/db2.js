const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require("dotenv")

dotenv.config()

const Car = require('./car');

// const CreatorSchema = new EntitySchema({
//     name: "Creator",
//     target: Creator,
//     columns: {
//         id: {
//             primary: true,
//             type: "int",
//             generated: true
//         },
//         name: {
//             type: "varchar"
//         },
//         img: {
//             type: "text"
//         },
//         ytURL: {
//             type: "text"
//         }
//     }
// });

// const carSchema = mongoose.Schema({
//     _id: mongoose.Types.ObjectId,
//     title: {
//       type: String,
//       required: true,
//     },
//     subtitle: {
//       type: String,
//       required: true,
//     },
//     year: {
//         type: String,
//         required: true,
//     },
//   });

async function getConnection() {
    //połączenie z MongoDB
    mongoose.connect(
        "mongodb+srv://user1:" + 
        process.env.DB_PASSWORD + 
        "@zupapomidorowa.ojeqd.mongodb.net/carBase?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
}

async function getAllCars() {
    mongoose.connect(
        'mongodb+srv://user1:'+
        process.env.DB_PASSWORD +
        '@zupapomidorowa.ojeqd.mongodb.net/carBase?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true }
     )
    // .then(() => {
    //     console.log('MongoDB connected!!');
    // }).catch(err => {
    //     console.log('Failed to connect to MongoDB', err);
    // });
    //const cars = carSchema.find();

    const cars = Car.find()
        .then()
        .catch();


    return cars;
}

// async function insertCar(title, subtitle, year) {
async function insertCar(insertedCar) {
    try {
    // const connection = await getConnection();
    await mongoose.connect(
        'mongodb+srv://user1:'+
        process.env.DB_PASSWORD + 
        '@zupapomidorowa.ojeqd.mongodb.net/carBase?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true })
    const car = new Car();
    car._id = new mongoose.Types.ObjectId();
    // car.title = title;
    // car.subtitle = subtitle;
    // car.year = year;
    // car.save();
    car.title = insertedCar.title;
    car.subtitle = insertedCar.subtitle;
    car.year = insertedCar.year;
    car.mileage_in_km = insertedCar.mileage_in_km;
    car.engine_capacity_cm3 = insertedCar.engine_capacity_cm3;
    car.fuel_type = insertedCar.fuel_type;
    car.city = insertedCar.city;
    car.region = insertedCar.region;
    car.price_PLN = insertedCar.price_PLN;
    car.save();

    console.log("samochód jako parametr")
    console.log(insertedCar.title)

    const allCars = Car.find()
        .then()
        .catch();

    return await allCars;
}
    catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
    // .then(() => {
    //     console.log('MongoDB connected!!');
    // }).catch(err => {
    //     console.log('Failed to connect to MongoDB', err);
    // });

    //create
    // const car = new Car();
    // car._id = new mongoose.Types.ObjectId();
    // car.title = title;
    // car.subtitle = subtitle;
    // car.year = year;
    // car.save();

    // const allCars = Car.find()
    //     .then()
    //     .catch();

    // return allCars;
}

module.exports = {
    getAllCars,
    insertCar
}
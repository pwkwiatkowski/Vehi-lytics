const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config()

const Car = require('./car');

async function getAllCars() {

    mongoose.connect(
        'mongodb+srv://user1:' +
        process.env.DB_PASSWORD +
        '@zupapomidorowa.ojeqd.mongodb.net/carBase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log('MongoDB connected!!');
    }).catch(err => {
        console.log('Failed to connect to MongoDB', err);
    });//.finally(() => await mongoose.disconnect());
    //const cars = carSchema.find();
    // await mongoose.disconnect()
    const cars = Car.find()
        .then()
        .catch();
        //.finally(mongoose.connection.close());

    // mongoose.connection.close();
    //await mongoose.connection.close();
    return cars;
}

async function insertCar(insertedCar) {
    try {
        await mongoose.connect(
            'mongodb+srv://user1:' +
            process.env.DB_PASSWORD +
            '@zupapomidorowa.ojeqd.mongodb.net/carBase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
        const car = new Car();
        car._id = new mongoose.Types.ObjectId();
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
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
}

module.exports = {
    getAllCars,
    insertCar
}
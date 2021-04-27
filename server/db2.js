const mongoose = require('mongoose');

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
        process.env.hasloAtlasa + 
        "@zupapomidorowa.ojeqd.mongodb.net/carBase?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
}

async function getAllCars() {
    mongoose.connect(
        "mongodb+srv://user1:zaq1@WSX@zupapomidorowa.ojeqd.mongodb.net/carBase?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
    //const cars = carSchema.find();

    const cars = Car.find()
        .then()
        .catch();


    return cars;
}

async function insertCar(title, subtitle, year) {
    // const connection = await getConnection();
    mongoose.connect(
        "mongodb+srv://user1:zaq1@WSX@zupapomidorowa.ojeqd.mongodb.net/carBase?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );

    //create
    const car = new Car();
    car._id = new mongoose.Types.ObjectId();
    car.title = title;
    car.subtitle = subtitle;
    car.year = year;
    car.save();

    const allCars = Car.find()
        .then()
        .catch();

    return allCars;
}

module.exports = {
    getAllCars,
    insertCar
}
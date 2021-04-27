//const typeorm = require('typeorm');
const mongoose = require('mongoose');

const Car = require('./car');

// class Car {
//     constructor(id, title, subtitle, year) {
//         this.id = id;
//         this.title = title;
//         this.subtitle = subtitle;
//         this.year = year;
//     }
// }

//const EntitySchema = require("typeorm").EntitySchema;

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
    // return await typeorm.createConnection({
    //     type: "mysql",
    //     host: "localhost",
    //     port: 3306,
    //     username: "root",
    //     password: "password",
    //     database: "setuptourist",
    //     synchronize: true,
    //     logging: false,
    //     entities: [
    //         CreatorSchema
    //     ]
    // })
    //połączenie z MongoDB
    mongoose.connect(
        "mongodb+srv://user1:" + 
        process.env.hasloAtlasa + 
        "@zupapomidorowa.ojeqd.mongodb.net/carBase?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
}

async function getAllCars() {
    //const connection = await getConnection();
    // const creatorRepo = connection.getRepository(Creator);
    //const carRepo = connection.getRepository(Car);
    // const cars = await carRepo.find();
    // connection.close();
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

async function insertCar(title_param, subtitle_param, year_param) {
    // const connection = await getConnection();
    mongoose.connect(
        "mongodb+srv://user1:zaq1@WSX@zupapomidorowa.ojeqd.mongodb.net/carBase?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );

    //create
    const car = new Car();
    car._id = new mongoose.Types.ObjectId();
    car.title = title_param;
    car.subtitle = subtitle_param;
    car.year = year_param;
    car.save();

    //save
    //const carRepo = connection.getRepository(Car);
    //const res = await carRepo.save(car);
    // car.save();
    //console.log('saved', res);

    //return new list
    //const allCars = await carRepo.find();
    //connection.close();
    //const allCars = carSchema.find();

    const allCars = Car.find()
        .then()
        .catch();

    return allCars;
}

module.exports = {
    getAllCars,
    insertCar
}
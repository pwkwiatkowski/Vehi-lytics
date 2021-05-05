const puppeteer = require('puppeteer');
const request = require('request');
const cheerio = require('cheerio');
const axios = require('axios');
const { response } = require('express');
const { resolve } = require('path');
const { rejects } = require('assert');

function a(obj) {
    cars.push(obj);
}

// axios.get(url).then((res) => {
//     const $ = cheerio.load(res.data);

//     $('.offer-item__content').each((i, el) => {
//         const title_test = $(el)
//         .find("h2")
//         .text()
//         .replace(/\s\s+/g, '');
//         const subtitle_test = $(el)
//             .find('h3')
//             .text();
//         const year_test = $(el)
//             .find('ul > li[data-code="year"] > span')
//             .text();
        
//             car = {
//                 "title_tab": "title_test",
//                 "subtitle_tab": "this.subtitle_test",
//                 "year_tab": "this.year_test"
//             };
//             cars.push(car);
//             //a(car);
//             console.log(title_test, '|', subtitle_test, '|', year_test, cars.length);
            
//     })
// });
//'https://www.otomoto.pl/osobowe/opel/astra'
const theCarBrand = ['Audi', 'BMW', 'Ford', 'Honda', 'Kia']
const audiModel = ['A3', 'A4', 'A6']
const bmwModel = ['Seria 5', 'Seria 3', 'Seria 1']
const fordModel = ['Focus', 'Fiesta', 'Mondeo']
const hondaModel = ['Civic', 'CR-V', 'Accord']
const kiaModel = ['Ceed', 'Sportage', 'Picanto']
// const carBrandAndModels = {
//     'Audi': ['A3', 'A4', 'A6'],
//     'BMW': ['Seria 5', 'Seria 3', 'Seria 1'],
//     'Ford': ['Focus', 'Fiesta', 'Mondeo'],
//     'Honda': ['Civic', 'CR-V', 'Accord'],
//     'Kia': ['Ceed', 'Sportage', 'Picanto']
// }

// const carBrandAndModels2 = [
//     ['Audi', ['A3', 'A4', 'A6']],
//     ['BMW', ['Seria 5', 'Seria 3', 'Seria 1']],
//     ['Ford', ['Focus', 'Fiesta', 'Mondeo']],
//     ['Honda', ['Civic', 'CR-V', 'Accord']],
//     ['Kia', ['Ceed', 'Sportage', 'Picanto']]
// ]



async function scrapeCar(url) {
    try {
        const carBrandAndModels2 = [
            ['Audi', ['A3', 'A4', 'A6']],
            ['BMW', ['Seria-5', 'Seria-3', 'Seria-1']],
            ['Ford', ['Focus', 'Fiesta', 'Mondeo']],
            ['Honda', ['Civic', 'CR-V', 'Accord']],
            ['Kia', ['Ceed', 'Sportage', 'Picanto']]
        ]

    const cars = []
    const links = []

            for(i=0; i<5; i++) {
                for(j=0; j<3; j++) {
                    links.push('https://www.otomoto.pl/osobowe/' + carBrandAndModels2[i][0] + '/' + carBrandAndModels2[i][1][j])
                }
            }
            url = 'https://www.otomoto.pl/osobowe/' + carBrandAndModels2[0][0] + '/' + carBrandAndModels2[0][1][0];

            for(let i=0; i<15; i++) {
            await axios.get(links[i]).then((res) => {
            //const wynik = await axios.get(url).then((res) => {

            const $ = cheerio.load(res.data);

            $('.offer-item__content').each((i, el) => {
                const title = $(el)
                    .find("h2")
                    .text()
                    .replace(/\s\s+/g, '');
                const subtitle = $(el)
                    .find('h3')
                    .text();
                const year = $(el)
                    .find('ul > li[data-code="year"] > span')
                    .text()
                    .replace(' ', '');
                const mileage_in_km = $(el)
                    .find('ul > li[data-code="mileage"] > span')
                    .text()
                    .replace(/[\skm]/g,'');
                const engine_capacity_cm3 = $(el)
                    .find('ul > li[data-code="engine_capacity"] > span')
                    .text()
                    .replace(/[\scm3]/g, '');
                const fuel_type = $(el)
                    .find('ul > li[data-code="fuel_type"] > span')
                    .text();
                const city = $(el)
                    .find('.ds-location-city')
                    .text();
                const region = $(el)
                    .find('.ds-location-region')
                    .text()
                    .replace(/[()]/g, ''); //.replace(/\W*/g, '');
                const price_PLN = $(el)
                    .find('.offer-price__number > span')
                    .text()
                    .replace(/[\sPLN]/g, '');
        
                car = {
                    "title": title,
                    "subtitle": subtitle,
                    "year": year,
                    "mileage_in_km": mileage_in_km,
                    "engine_capacity_cm3": engine_capacity_cm3,
                    "fuel_type": fuel_type,
                    "city": city,
                    "region": region,
                    "price_PLN": price_PLN
                };
                cars.push(car);
        
                console.log(title, '|', subtitle, '|', year, '|', mileage_in_km, '|', engine_capacity_cm3, '|', fuel_type, '|', city, '|', region, '|', price_PLN, '|', cars.length);
            });

            console.log('Scraping Done...');
            console.log(cars.length);
            // console.log('Tablica json')
            // console.log(carBrandAndModels[0])
            console.log('Tablica')
            console.log(carBrandAndModels2[0][1][0]) //A3
            console.log('Tablica linków')
            console.log(links) //A3

        console.log('po ifie ' + cars.length);
        // resolve(cars.length.toString());
        //resolve("cars.length.toString()");
        //resolve(cars.length.toString())
        //return cars;
    });
            }
    //return await wynik;
      return cars;
    // const promise = await Promise.all([]);
    // return promise;
    //prom.resolve(cars.length.toString())
    //return prom;

    //przez asynchronicznosc zwroci dlugosc tablicy rowna 1
    // finally {
    //     console.log('Dlugosc tablicy ' + cars.length);
    
    //     return cars;
    // }
    // const promise = new Promise((resolve, reject) => {
    //     resolve(cars.length);
    // });
    //return promise;
} catch(e){
    return 'error';
}
}

module.exports = {
    scrapeCar
}
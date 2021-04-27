const puppeteer = require('puppeteer');
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const axios = require('axios');
const { TIMEOUT } = require('dns');
const { response } = require('express');
const { resolve } = require('path');
const { rejects } = require('assert');
const writeStream = fs.createWriteStream('post.csv');

//Wrtie Headers
writeStream.write(`Price,Link,Date \n`);
// var scrapedCars = {
//     title: "",
//     subtitle: "",
//     year: ""
// };
// const cars = [
//     {
//         "title_tab": "some title",
//         "subtitle_tab": "some subtitle",
//         "year_tab": "some year"
//     }
//   ]

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

async function scrapeChannel(url) {
    const cars = []
    
// try{

    // request(url, (error, response, html) => {
        // if (!error && response.statusCode == 200) {
            /*return*/const wynik = await axios.get(url).then((res) => {

            

            // const $ = cheerio.load(html);
            const $ = cheerio.load(res.data);

            $('.offer-item__content').each((i, el) => {
                const title_test = $(el)
                    .find("h2")
                    .text()
                    .replace(/\s\s+/g, '');
                const subtitle_test = $(el)
                    .find('h3')
                    .text();
                const year_test = $(el)
                    .find('ul > li[data-code="year"] > span')
                    .text();
                const mileage = $(el)
                    .find('ul > li[data-code="mileage"] > span')
                    .text();
                const engine_capacity = $(el)
                    .find('ul > li[data-code="engine_capacity"] > span')
                    .text();
                const fuel_type = $(el)
                    .find('ul > li[data-code="fuel_type"] > span')
                    .text();
                const city = $(el)
                    .find('.ds-location-city')
                    .text();
                const region = $(el)
                    .find('.ds-location-region')
                    .text();
                const price = $(el)
                    .find('.offer-price__number > span')
                    .text();

                car = {
                    "title_tab": title_test,
                    "subtitle_tab": subtitle_test,
                    "year_tab": year_test
                };
                cars.push(car);
                //a(car);
                console.log(title_test, '|', subtitle_test, '|', year_test, '|', mileage, '|', engine_capacity, '|', fuel_type, '|', city, '|', region, '|', price, '|', cars.length);
                //return powinien być na koniec funkcji, ale jak to zrobić
                //return {title, subtitle, year, mileage, engine_capacity, fuel_type, city, region, price}
                //return cars;

                //moze tutaj zrobic posta, zeby od razu kazdy zescrapowany samochod mi wrzucalo do bazy danych, w tym eachu
            });

            console.log('Scraping Done...');
            console.log(cars.length);

            // console.log('Dlugosc tablicy ' + cars.length);
            //return cars;
        //} //if
        console.log('po ifie ' + cars.length);
        // resolve(cars.length.toString());
        //return poRequescie();
        // promise = new Promise((resolve, reject) => {
        //     resolve(cars.length);
        // });
        // // return promise;
        //resolve("cars.length.toString()");
        //resolve(cars.length.toString())
        return cars;
    });
    // return cars.length;
    return wynik;
    // const promise = await Promise.all([]);
    // return promise;
    //prom.resolve(cars.length.toString())
    //return prom;
    //return cars;
// }
// catch(err) {
//     console.log("Błąd");
// }
    //chyba tak powinno być
    //return {title, subtitle, year, mileage, engine_capacity, fuel_type, city, region, price}

    //przez asynchronicznosc zwroci dlugosc tablicy rowna 1
    // finally {
    //     console.log('Dlugosc tablicy ' + cars.length);
    
    //     return cars;
    // }
    // const promise = new Promise((resolve, reject) => {
    //     resolve(cars.length);
    // });
    //return promise;
}

// function poRequescie() {
//     console.log('Dlugosc tablicy po requescie ' + cars.length)
//     //return cars;
// }

module.exports = {
    scrapeChannel
}
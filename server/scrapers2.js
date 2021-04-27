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

async function scrapeChannel(url) {
    try {

    const cars = []

            const wynik = await axios.get(url).then((res) => {

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
                    "title": title,
                    "subtitle": subtitle,
                    "year": year
                };
                cars.push(car);

                console.log(title, '|', subtitle, '|', year, '|', mileage, '|', engine_capacity, '|', fuel_type, '|', city, '|', region, '|', price, '|', cars.length);
            });

            console.log('Scraping Done...');
            console.log(cars.length);

        console.log('po ifie ' + cars.length);
        // resolve(cars.length.toString());
        //resolve("cars.length.toString()");
        //resolve(cars.length.toString())
        return cars;
    });

    return await wynik;
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
    scrapeChannel
}
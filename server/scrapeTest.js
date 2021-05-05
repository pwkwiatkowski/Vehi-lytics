const puppeteer = require('puppeteer');
const request = require('request');
const cheerio = require('cheerio');
const axios = require('axios');
const { response } = require('express');
const { resolve } = require('path');
const { rejects } = require('assert');

async function scrapeChannel(url) {
    const cars = []
await axios.get(url).then((res) => {
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
            "year": year
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

scrapeChannel('https://www.otomoto.pl/osobowe/Audi/A3')
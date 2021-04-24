const puppeteer = require('puppeteer');
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

//Wrtie Headers
writeStream.write(`Price,Link,Date \n`);
// var scrapedCars = {
//     title: "",
//     subtitle: "",
//     year: ""
// };
let cars = [
    {
        "title": "some title",
        "subtitle": "some subtitle",
        "year": "some year",
        "price": "some price"
    }
  ]

async function scrapeChannel(url) {
    request(url, (error, response, html) => {
        if(!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
    
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

                    let car = {
                        "title": title,
                        "subtitle": subtitle,
                        "year": year,
                        "price": price
                       }
                    cars.push(car);

                    console.log(title, '|', subtitle, '|', year, '|', mileage, '|', engine_capacity, '|', fuel_type, '|', city, '|', region, '|', price);
                    //return powinien być na koniec funkcji, ale jak to zrobić
                    //return {title, subtitle, year, mileage, engine_capacity, fuel_type, city, region, price}
            });
    
            console.log('Scraping Done...')
        }
    });
    //chyba tak powinno być
    //return {title, subtitle, year, mileage, engine_capacity, fuel_type, city, region, price}
    return cars;
}

module.exports = {
    scrapeChannel
}
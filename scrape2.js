const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

//Wrtie Headers
writeStream.write(`Price,Link,Date \n`);

request('https://www.otomoto.pl/osobowe/opel/astra', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        $('.price-wrapper-listing').each((i, el) => {
            const price = $(el)
                .find('.offer-price__number')
                .text()
                .replace(/\s\s+/g, '');
                const link = $(el).
                    find('a')
                    .attr('href');
                const date = $(el)
                    .find('.post-date')
                    .text()
                    .replace(/,/, '');

                //console.log(price, link, date);
                //Wrtie Row to CSV
                writeStream.write(`${price}, ${link}, ${date} \n`);
        });

        console.log('Scraping Done...')
    }
});
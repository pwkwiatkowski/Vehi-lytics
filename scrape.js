const request = require('request');
const cheerio = require('cheerio');

request('https://www.otomoto.pl/osobowe/opel/astra', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const ad = $('.offer-item__title');

        //console.log(description.html());
        //console.log(ad.text());
        //const output = ad.find('h3').text();
        //const output = ad.children('h3').text();
        // const output = ad
        //     .children('h3')
        //     .next()
        //     .text();

        // const output = ad
        //     .children('h3')
        //     .parent()
        //     .text();

        $('.breadcrumb__link').each((i, el) => {
            const item = $(el).text();
            const link = $(el).attr('href');

            console.log(item);
            //console.log(link);
        });
    }
});
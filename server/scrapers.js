const puppeteer = require('puppeteer');


async function scrapeChannel(url) {
    const browser = await puppeteer.launch();
    try {
        const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('/html/body/ytd-app/div/ytd-page-manager/ytd-browse[2]/div[3]/ytd-c4-tabbed-header-renderer/tp-yt-app-header-layout/div/tp-yt-app-header/div[2]/div[2]/div/div[1]/div/div[1]/ytd-channel-name/div/div/yt-formatted-string')
    const text = await el.getProperty('textContent');
    const name = await text.jsonValue();

    const [el2] = await page.$x('//*[@id="img"]');
    const src = await el2.getProperty('src');
    const avatarURL = await src.jsonValue();

    // browser.close();

    console.log({name, avatarURL})

    return {name, avatarURL}
    } catch (err) {
        console.error(err.message);
    } finally {
        await browser.close();
    }
    
}

module.exports = {
    scrapeChannel
}
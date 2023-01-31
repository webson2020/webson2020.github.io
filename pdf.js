const puppeteer = require('puppeteer');

// (async() => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://webson2020.github.io/', {waitUntil:'networkidle2'});
//     await page.pdf({path:'pdf.pdf', format: 'A4'});
//     await browser.close();
// })();



async function convertToPDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://webson2020.github.io/');
    await page.pdf({path: 'profile.pdf', format: 'A4'});
    await browser.close();
  }
  
  convertToPDF();
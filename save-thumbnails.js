const puppeteer = require('puppeteer');  

const url = "http://localhost:1234/";        // Set website you want to screenshot
const Screenshot = async () => {             // Define Screenshot function
  const browser = await puppeteer.launch();  // Launch a "browser"
  const page = await browser.newPage();      // Open new page
  await page.goto(url);                      // Go website
  await page.waitForSelector('#thumbnails');         // Method to ensure that the element is loaded

    const thumbs = await page.$$('.thumb');    // logo is the element you want to capture
    for (const thumb of thumbs) {
        const name = thumb._remoteObject.description
            .split('.thumb')[0]
            .replace('div#', '');
        await thumb.screenshot({
            path: `./thumbnails/${name}.jpg`,
            quality: 100
        });
    }
  await page.close();                        // Close the website
  await browser.close();                     // Close the browser
}
Screenshot();  
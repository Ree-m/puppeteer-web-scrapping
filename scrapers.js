const puppeteer = require("puppeteer");

async function scrapeProducts(url) {
  const browser = await puppeteer.launch(); //laucng a browser
  const page = await browser.newPage(); //make new page in browser
  await page.goto(url); //got to page

  // get image of book
  const [el] = await page.$x('//*[@id="imgBlkFront"]'); //go to the element i want in my url and find it in inspect ,then click copy and then copy x path,$x is get xpath
  const src = await el.getProperty("src"); //from the image i want get the src
  const imageUrl = await src.jsonValue(); // make it a string

  //get name of book
  const [el2] = await page.$x('//*[@id="productTitle"]'); //go to the element i want in my url and find it in inspect ,then click copy and then copy x path,$x is get xpath
  const txt = await el2.getProperty("textContent"); //from the image i want get the src
  const title = await txt.jsonValue(); // make it a string

  // get price of bbok
  const [el3] = await page.$x('/html/body/div[1]/div[2]/div[4]/div[1]/div[4]/div[5]/div/div[1]/div/div[1]/div/div/div[1]/div/div[1]/h5/div[2]/div[1]/div/span/span[2]'); //go to the element i want in my url and find it in inspect ,then click copy and then copy x path,$x is get xpath
  const txt2 = await el3.getProperty("textContext"); //from the image i want get the src
  const price = await txt2.jsonValue(); // make it a string

  console.log({ imageUrl, title, price });

  browser.close();
}

scrapeProducts(
  "https://www.amazon.com/Black-Swan-Impact-Improbable-Incerto/dp/1400063515"
);

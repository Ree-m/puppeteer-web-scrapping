const puppeteer = require("puppeteer");

async function run(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: "frontpage-screenshot.png" });

  await browser.close();
}

run("https://www.traversymedia.com/");

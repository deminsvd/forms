import puppetteer from 'puppeteer';

describe('Button validation', () => {
  let browser = null;
  let page = null;
  //jest.setTimeout(10000);
  
  
  beforeAll(async () => {
    //await browser.close();
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 100,
      devtools: true, // show devTools
    });
    console.log('открыт');
    page = await browser.newPage();
    console.log('открыт');
  });



  test('Popup', async ()=>{
    console.log('тест');
    await page.goto('http://localhost:9000');
    
    const button = await page.$('.btn');
    await button.click();
    const resultDiv = await page.$('.form-popup');

    if (resultDiv) {
            console.log(`Тест popup прошёл успешно`);
    } else {
            console.error(`Тест popup не прошёл`);
    }

    await page.waitForSelector('.form-popup');

    //await button.click();
    //const resultDiv2 = await page.$('.form-popup');
    //if (resultDiv2) {
    //        console.log(`Тест popup скрыт прошёл успешно`);
    //} else {
    //        console.error(`Тест popup скрыт не прошёл`);
    //}

  });

  afterAll(async () => {
    await browser.close();
  });


});
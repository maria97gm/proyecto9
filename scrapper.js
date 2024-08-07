const puppeteer = require('puppeteer')
const fs = require('fs')

const scrapper = async (url) => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  })

  const page = await browser.newPage()
  await page.goto(url)

  await page.waitForSelector('.mc-closeModal', { visible: true })
  setTimeout(async () => {
    await page.click('.mc-closeModal')
  }, 2000)

  await page.waitForSelector('div.js-product-miniature-wrapper')

  let products = []

  const getProducts = async () => {
    const divProducto = await page.$$('div.js-product-miniature-wrapper')

    for (let i = 0; i < divProducto.length; i++) {
      const div = divProducto[i]

      const img = await div.$eval('img', (e) => e.src)
      const title = await div.$eval('h3.product-title', (e) => e.innerText)
      const price = await div.$eval('.product-price', (e) => e.innerText)

      products.push({
        img,
        title,
        price
      })
    }
  }

  await getProducts()

  let hasNextPage = true
  while (hasNextPage) {
    try {
      await page.waitForSelector('#infinity-url')
      await page.click('#infinity-url')
      await page.waitForSelector('div.js-product-miniature-wrapper')
      await getProducts()
    } catch (error) {
      hasNextPage = false
    }
    console.log(`Número total de productos recolectados: ${products.length}`)
    fs.writeFile('./products.json', JSON.stringify(products), () => {
      console.log('Se han recogido los datos')
    })
  }
  await browser.close()
}

scrapper('https://ziajashop.es/1469-cuidado-facial')

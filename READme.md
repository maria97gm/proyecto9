**Proyecto 9**

**"Robando" los productos de Ziaja**      

En este proyecto hemos usado Web Scrapping para coger prestado los productos corporales de la marca Ziaja

**¿Cómo iniciar el proyecto?**

- npm i
- npm run start : Inicia el index.js que simplemente levanta un servidor base
- npm run scrape : Para llevar a cabo el scrapeo. Te abrirá la página de Ziaja, cerrará automáticamente el banner que aparece de la Newsletter, irá pasando todas las páginas que haya de productos mientra los almacena en un JSON. Finalmente, la página se cerarrá
- npm run seed: De esta manera trasladarás los productos a una BBDD

**¿Qué variables se han usado en el proyecto?**

- DB\_URL![](Aspose.Words.5f9d07ff-4e7c-41ba-a474-27219671402d.001.png)

**¿Qué librerías tenemos instaladas?**

- Express
- Mongoose
- Nodemon
- Dotenv
- Puppeteer

**Endpoints**

Solo tenemos el GET para poder ver todos los productos una vez los recopilemos.

**Método Ruta Descripción ![](Aspose.Words.5f9d07ff-4e7c-41ba-a474-27219671402d.002.png)![](Aspose.Words.5f9d07ff-4e7c-41ba-a474-27219671402d.003.png)**GET /api/v1/productosZiaja Obtener todos los productos de Ziaja

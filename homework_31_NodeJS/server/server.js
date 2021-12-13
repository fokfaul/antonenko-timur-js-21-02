const express = require('express')
const app = express()
const fetch = require('node-fetch')
const fs = require('fs')

const host = '127.0.0.1'
const port = 3000

app.use(express.json()) // Необходимо для парсинга body в соответствующих запросах в формате JSON
app.use((req, res, next) => {
  res.type('text/plain') // Установка заголовка type
    .set( // Установка заголовка
      'Access-Control-Allow-Origin', // Заголовок
      '*' // Значение заголовка
    )
    .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
    .set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next() // Если не вызвать то запрос не пройдёт дальше
})

app.route('/file')
  .get((req, res) => {
      try { // При синхронном чтении, использовать try/catch дабы скрипт не завершился ошибкой
        const file = fs.readFileSync( // Прочитать файл синхронно
          './file', //Путь к файлу
          'utf8' // Кодировка (если не указать, будет вохвращен buffer)
        )
        res.status(200).json(file);
      } catch (e) {
        res.status(500).json(e.toString());
      }

  })
  .post((req, res) => {
      console.log(req.body.text);
      try {
        fs.writeFileSync('./file', req.body.text, 'utf8');
        res.status(200).send({massage: "Текст сохранен!"})
      } catch (e) {
        res.status(500).json({massage: e.toString()});
      }
  })

app.listen(port, host, () => console.log(`Server started at http://${host}:${port}`))
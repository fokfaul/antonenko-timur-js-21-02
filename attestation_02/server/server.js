const express = require('express');
const app = express();
const fetch = require('node-fetch');

const {
  APP_ID_FIELD, APP_ID_VALUE, USER_URL, LIMIT_FIELD, PAGE_FIELD, BASE_URL, POST_URL
} =  require('./constants/api/dumMyApi.js');
const { METHOD_GET, METHOD_POST, METHOD_PUT } = require('./constants/api/common.js');

const host = '127.0.0.1';
const port = 4000;

app.use(express.json());
app.use((req, res, next) => {
  res.type('text/plain')
    .set(
      'Access-Control-Allow-Origin',
      '*'
    )
    .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
    .set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next() // Если не вызвать то запрос не пройдёт дальше
});

const doGetRequest = (path, searchParams) => {
  const url = new URL(path, BASE_URL);
  searchParams && Object.entries(searchParams).forEach((params) => {
    url.searchParams.append(params[0], params[1]);
  });
  return fetch(url.toString(), {
    method: METHOD_GET,
    headers: { [APP_ID_FIELD]: APP_ID_VALUE },
  }).then((resp) => resp.json());
};

const doPostRequest = (path, postObj) => {
  return fetch(BASE_URL+path, {
    method: METHOD_POST,
    headers: { [APP_ID_FIELD]: APP_ID_VALUE, 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(postObj)
  }).then((resp) => resp.json());
};

const doPutRequest = (path, putObj) => {
  return fetch(BASE_URL+path, {
    method: METHOD_PUT,
    headers: { [APP_ID_FIELD]: APP_ID_VALUE, 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(putObj)
  }).then((resp) => resp.json());
};

app.route('/user').get((req, res) => {
    doGetRequest(USER_URL, req.query).then((resp) => res.status(200).send(resp));
});
app.route('/user/:id')
    .get((req, res) => {
        doGetRequest(`${USER_URL}/${req.params.id}`).then((resp) => res.status(200).send(resp));
    })
    .put((req, res) => {
        console.log(req.body)
        doPutRequest(`${USER_URL}/${req.params.id}`, req.body).then((resp) => res.status(200).send(resp));
    })
app.route('/user/create').post((req, res) => {
    doPostRequest(`${USER_URL}/create`, req.body).then((resp) => res.status(200).send(resp));
});
app.route('/post').get((req, res) => {
    doGetRequest(POST_URL, req.query).then((resp) => res.status(200).send(resp));
});
app.route('/user/:id/post').get((req, res) => {
    doGetRequest(`${USER_URL}/${req.params.id}/${POST_URL}`, req.query).then((resp) => res.status(200).send(resp));
});
app.route('/post/:id')
    .get((req, res) => {
        doGetRequest(`${POST_URL}/${req.params.id}`).then((resp) => res.status(200).send(resp));
    })
app.route('/post/:id/comment').get((req, res) => {
    doGetRequest(`${POST_URL}/${req.params.id}/comment`, req.body).then((resp) => res.status(200).send(resp));
});
/*app.route('/file')
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
  })*/

app.listen(port, host, () => console.log(`Server started at http://${host}:${port}`))
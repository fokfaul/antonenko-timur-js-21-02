const express = require('express');
const app = express();

const {apiError} = require('./errors/dumMyApi.js');
const {doGetRequest, doPostRequest, doPutRequest} = require('./api/dumMyApi.js');
const { dateMDY, dateDMT } = require('./hooks/date.js');
const { USER_URL, POST_URL} = require('./constants/api/dumMyApi.js');

const host = '127.0.0.1';
const port = 4000;

const defaultResponse = (res, apiData) => {
    if ('error' in apiData)
        res.status(400).send({"error": apiError(apiData['error'])})
    else
        res.status(200).send(apiData)
}

app.use(express.json());
app.use((req, res, next) => {
  res.type('text/plain')
    .set(
      'Access-Control-Allow-Origin',
      '*'
    )
    .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
    .set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

app.route('/user').get((req, res) => {
    doGetRequest(USER_URL, req.query).then((apiData) => {defaultResponse(res, apiData)});
});
app.route('/user/:id')
    .get((req, res) => {
        doGetRequest(`${USER_URL}/${req.params.id}`).then((apiData) => {
            if ('error' in apiData)
                res.status(400).send({"error": apiError(apiData['error'])})
            else
            {
                if(apiData.registerDate)
                    apiData.registerDate = dateMDY(apiData.registerDate, req.headers['accept-language']);
                if(apiData.dateOfBirth)
                    apiData.dateOfBirth = dateMDY(apiData.dateOfBirth, req.headers['accept-language']);
                res.status(200).send(apiData)
            }
        });
    })
    .put((req, res) => {
        doPutRequest(`${USER_URL}/${req.params.id}`, req.body).then((apiData) => {defaultResponse(res, apiData)});
    })
app.route('/user/create').post((req, res) => {
    doPostRequest(`${USER_URL}/create`, req.body).then((apiData) => {defaultResponse(res, apiData)});
});
app.route('/post').get((req, res) => {
    doGetRequest(POST_URL, req.query).then((apiData) => {
        if ('error' in apiData)
            res.status(400).send({"error": apiError(apiData['error'])})
        else
        {
            apiData.data = apiData.data.map((elem)=> {
                elem.publishDate = dateDMT(elem.publishDate, req.headers['accept-language']);
                return elem;
            })
            res.status(200).send(apiData)
        }
    });
});
app.route('/user/:id/post').get((req, res) => {
    doGetRequest(`${USER_URL}/${req.params.id}/${POST_URL}`, req.query).then(
        (apiData) => {defaultResponse(res, apiData)}
    );
});
app.route('/post/:id')
    .get((req, res) => {
        doGetRequest(`${POST_URL}/${req.params.id}`).then((apiData) => {
            if ('error' in apiData)
                res.status(400).send({"error": apiError(apiData['error'])})
            else
            {
                apiData.publishDate = dateMDY(apiData.publishDate, req.headers['accept-language']);
                res.status(200).send(apiData)
            }
        });
    })
app.route('/post/:id/comment').get((req, res) => {
    doGetRequest(`${POST_URL}/${req.params.id}/comment`, req.body).then((apiData) => {
        if ('error' in apiData)
            res.status(400).send({"error": apiError(apiData['error'])})
        else
        {
            apiData.data = apiData.data.map((elem)=> {
                elem.publishDate = dateDMT(elem.publishDate, req.headers['accept-language']);
                return elem;
            })
            res.status(200).send(apiData)
        }
    });
});

app.listen(port, host, () => console.log(`Server started at http://${host}:${port}`))
const express = require('express');
const bodyParser = require('body-parser');

// instance object
const app = express();

// panggil routes
const route = require('./router')
route(app)

// parse : applicaton/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.listen(3000, () => {
    console.log(`Memulai server`);
});

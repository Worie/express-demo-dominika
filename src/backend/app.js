// appka: super prymitywny routing
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 
const PORT = 8080;
app.listen(PORT);
console.log(`App running on ${PORT}`);

const routes = require('./routes');


app.use('/', routes);
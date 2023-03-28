const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const router = require('./routers/router');

const app = express();

app.set('view engine', 'ejs');

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// load assets
app.use('/css', express.static(path.resolve(__dirname, 'views/assets/css')));
app.use('/js', express.static(path.resolve(__dirname, 'views/assets/js')));

// load route
app.use('/', router);

app.listen(process.env.APP_PORT, () => {
  console.log(`App listening on port ${process.env.APP_PORT}!`);
});

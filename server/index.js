const express = require('express');
const path = require('path');
const morgan = require('morgan');
const userRouter = require('./routes/user');
const db = require('./database/index');

const app = express();

const port = 3000;
const PUBLIC_DIR = path.resolve(__dirname, '../client/dist');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use('/', express.static(PUBLIC_DIR));

app.use('/user', userRouter);

app.listen(port, () => {
  db;
  console.log(`starsalign is listening at http://localhost:${port}`);
});

module.exports = app;

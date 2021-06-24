const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const port = 3000;

app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`starsalign is listening at http://localhost:${port}`);
});

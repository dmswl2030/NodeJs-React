//express 설치
const express = require('express');
const app = express();
const port = 5001;

//몽고 DB 연결
const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://devdmswl:L3PH8pnbmbZh3ReI@cluster0.silam.mongodb.net/'
  )
  .then(() => console.log('MogoDB 연결!'))
  .catch((error) => console.log('failed: ', error));

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//express 설치
const express = require('express');
const app = express();
const port = 5001;
const config = require('./config/key');
//몽고 DB 연결
const mongoose = require('mongoose');
mongoose
  .connect(config.mongoURI)
  .then(() => console.log('MogoDB 연결!'))
  .catch((error) => console.log('failed: ', error));

//유저
const { User } = require('./models/User');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('시작 페이지'));
//회원가입 시 필요한 정보들을 client에서 가져오면 그 정보를 db에 넣어준다 (콜백방식을 mongoose 7부터 지원하지 않음)
app.post('/register', (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch((err) => res.status(400).json({ success: false, error: err }));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

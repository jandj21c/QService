var express = require('express');
var app = express();

var config = require('./config');

//===== 서버 변수 설정 =====//
var PORT = config.server_port;

// local test
PORT = 3000;



// 정적 페이지 폴더 setting
app.use(express.static(__dirname + '/web'));

app.get('/', function(req, res){
     res.send('hello world');
});

app.listen(PORT);
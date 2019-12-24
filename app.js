// Express 기본 모듈 불러오기
var express = require('express')
    , http = require('http');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser');

// 에러 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');

// Logger
var logger = require('morgan');

// 모듈로 분리한 설정 파일 불러오기
var config = require('./config');

// 모듈로 분리한 라우팅 파일 불러오기
var route_loader = require('./routes/route_loader');

//var sequelize = require('./models').sequelize;


//===== 서버 변수 설정 =====//
//const PORT = config.server_port;

// 익스프레스 객체 생성
var app = express();
//sequelize.sync(); // 데이터베이스 동기화

app.use(logger('dev', {}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// 라우팅 시작
route_loader.init(app, express.Router());

// unexpected error handlder
app.use( expressErrorHandler.httpError(404) );

app.all('*', function(req, res){
  res.status(404).send('<h1>ERROR - Not Found this URL. by Giparang.</h1>');
});

app.listen(3000, function() {
  console.log('============= 큇서비스 챗봇 서버가 시작되었습니다 ============');
});

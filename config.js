module.exports = {

    server_port : process.env.PORT,
  
    database_host : 'quickdb.database.windows.net',
    database_user_name : 'jandj21c',
    dialect : 'mysql',
    database_name : 'quickDB',
    database_key_secret : process.env.passwordsql, // 미적용
    /* develop Data base */

    //database_name : 'heroku_b12efbb902f7e6d',
    //database_user_name : process.env.DB_USER_NAME,
    //database_key_secret : process.env.DB_SECRET_KEY,
  
    /* test Data base */
    //testbase_name :'heroku_9107542bb778cb2',
    //testbase_user_name : process.env.TEST_DB_USER_NAME,
    //testbase_key_secret : process.env.TEST_DB_SECRET_KEY,
  
    // route_loader 에서 사용하므로 모든 경로는 /routes 폳더를 기준으로 해야한다!!
    route_info : [
    //   { file : './searchPrice/coinPrice', path : '/api/coinPrice', method : 'coinPriceCommand' , type : 'post'},
    //   { file : './searchPrice/myCoinPrice', path : '/api/myCoinPrice', method : 'myCoinPriceCommand' , type : 'post'},
  
    //   { file : './rippleWallet/checkRippleWallet', path : '/api/checkRippleWallet', method : 'checkRippleWalletCommand' , type : 'post'},
    //   { file : './rippleWallet/createRippleWallet', path : '/api/createRippleWallet', method : 'createRippleWalletCommand' , type : 'post'},
    //   { file : './rippleWallet/xrpBalance', path : '/api/xrpBalance', method : 'xrpBalanceCommand' , type : 'post'},
    //   { file : './rippleWallet/xrpSend', path : '/api/xrpSend', method : 'xrpSendCommand' , type : 'post'},
    //   { file : './rippleWallet/xrpWithdrawal', path : '/api/xrpWithdrawal', method : 'xrpWithdrawalCommand' , type : 'post'},
    //   { file : './rippleWallet/onEventSend', path : '/api/onEventSend', method : 'onEventSendCommand' , type : 'post'},
      
    //   { file : './priceNotify/addPriceNotify', path : '/api/addPriceNotify', method : 'addPriceNotifyCommand' , type : 'post'},
    //   { file : './priceNotify/myPriceNotify', path : '/api/myPriceNotify', method : 'myPriceNotifyCommand' , type : 'post'},
    //   { file : './priceNotify/removePriceNotify', path : '/api/removePriceNotify', method : 'removePriceNotifyCommand' , type : 'post'},
    //   { file : './priceNotify/setPriceNotiInterval', path : '/api/setPriceNotiInterval', method : 'setPriceNotiIntervalCommand' , type : 'post'},
    //   { file : './priceNotify/onEventPrice', path : '/api/onEventPrice', method : 'onEventPriceCommand' , type : 'post'},
  
      { file : './testPing', path : '/api/sayHello', method : 'testPost1' , type : 'post'},
      { file : './testPing', path : '/api/getHello', method : 'testGet' , type : 'get'},
      { file : './testPing', path : '/api/showHello', method : 'testPost2' , type : 'post'}
    ]
  }
  
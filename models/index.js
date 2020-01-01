'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
//const env = process.env.NODE_ENV || 'development';
const env = process.env.NODE_ENV;
//const configSQ = require(__dirname + '/../sequelize/sequelize.json')[env];
const config = require('../config');
let db = {};

let dia = {
  "host" : config.database_host,
  "dialect" : config.dialect,
  "dialectOptions" : {
    encrypt: true
  }
};

let sequelize;
//if (configSQ.use_env_variable) {
//  sequelize = new Sequelize(process.env[configSQ.use_env_variable], configSQ);
//} else {
//sequelize = new Sequelize(configSQ.database, configSQ.username, configSQ.password, configSQ);
//}

sequelize = new Sequelize(config.database_name, config.database_user_name, config.database_key_secret, dia);

sequelize
  .authenticate()
  .then(err => {
    console.log('Connefction successful', err);
  })
  .catch(err => {
    console.log('Unable to connect to database', err);
  });


// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
//});

//db.sequelize = sequelize;
//db.Sequelize = Sequelize;

// db.User = require('./user')(sequelize, Sequelize);
// db.PriceTimer = require('./priceTimer')(sequelize, Sequelize);

//let userModel = new db.User;

module.exports = db;
//module.exports.priceTimerModel = priceTimerModel;
//module.exports.userModel = db.User;

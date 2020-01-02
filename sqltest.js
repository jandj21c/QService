const Sequelize = require('sequelize');
const config = require('./config');

console.log('%s secret?', config.database_key_secret);

const sequelize = new Sequelize('quickDB', 'jandj21c', config.database_key_secret, {
  dialect: 'mssql',
  host: 'quickdb.database.windows.net',
  dialectOptions: {
    options: {
      encrypt: true
    }
  }
});

sequelize
  .authenticate()
  .then(err => {
    console.log('Connefction successful', err);
  })
  .catch(err => {
    console.log('Unable to connect to database', err);
  });
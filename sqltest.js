const Sequelize = require('sequelize');

const sequelize = new Sequelize('quickDB', 'jandj21c', process.env.passwordsql, {
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
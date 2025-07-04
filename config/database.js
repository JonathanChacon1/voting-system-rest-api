require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

// Sincronizar modelos
sequelize.sync()
  .then(() => {
    console.log('Base de datos y tablas creadas');
  })
  .catch((error) => {
    console.error('Error al crear la base de datos:', error);
  });

module.exports = sequelize;

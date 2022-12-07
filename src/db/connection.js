const signale = require('signale')
const { Sequelize } = require('sequelize')
const UserModel = require('./models/user.model')

// Option 3: Passing parameters separately (other dialects)
const connection = new Sequelize(
  'postgres',
  'postgres',
  'giorgobiani1',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

(async () => {
  try {
    await connection.authenticate()
    signale.success('DB:connect: success')
  } catch (error) {
    signale.error('DB:connect: error')
  }
})();
(async () => {
  await UserModel.sync({ force: true })
})()

module.exports = connection

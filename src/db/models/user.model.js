const { DataTypes } = require('sequelize')
const connection = require('../connection')

const User = connection.define('user', {
  firstName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  lastName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  connection,
  freezeTableName: true,
  tableName: 'users'
})

module.exports = User

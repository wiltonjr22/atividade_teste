
const connection = require('../config')
const Sequelize = require('sequelize')

const users = connection.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [0, 70]
    }
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [0,70]
    }
  },
  nickname: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      len: [0,70]
    }
  },
  address : {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      len: [0,70]
    }
  },
  bio : {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      notEmpty: true,
      len: [0,70]
    }
  },
})

Characters.sync({ force: false })

Characters.save = async (data) => {
  const { name } = data

  const characterExists = await Characters.findOne({
    where: { name }
  })

  if (characterExists) return false

  const character = await Characters.create({ name })

  return character
}

module.exports = Characters
const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('user', {
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sur_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone_number: {
        type: Sequelize.STRING || Sequelize.INTEGER,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
    { tableName: 'users' }
) 

module.exports = User
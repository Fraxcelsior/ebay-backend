const Sequelize = require('sequelize')
const sequelize = require('../db')

const Advertisement = sequelize.define(
    'advertisement',
    {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type:Sequelize.STRING,
            allowNull: false
        },
        picture: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        },
        price: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        phone_number: {
            type: Sequelize.STRING || Sequelize.INTEGER,
            allowNull: false
        }
    },
    { tableName: 'advertisements'}
)

module.exports = Advertisement
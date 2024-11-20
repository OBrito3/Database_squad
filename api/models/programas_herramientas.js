
const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Pro_Herr = sequelize.define(
    'pro_herr',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        programaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'programas',
                key: 'id'
            },
        },

        herramientaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'herramientas',
                key: 'id'   
            }
        },
        metodoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'metodos',
                key: 'id'
            }
        }
    },
    { timestamps: false, tablename: 'pro_herr' }
)

module.exports = Pro_Herr

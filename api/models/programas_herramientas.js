
const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Pro_Herr = sequelize.define(
    'pro_herr',
    {
        programa_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'programas',
                key: 'id'
            },
        },

        herramienta_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'herramientas',
                key: 'id'   
            }
        },
        metodo_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'metodos',
                key: 'id'
            }
        }
    },
    { timestamps: false }
)

module.exports = Pro_Herr

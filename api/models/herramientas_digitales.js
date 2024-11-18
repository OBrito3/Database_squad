const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Herramienta = sequelize.define(
    'herramientas',
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    { timestamps: false }
)

module.exports = Herramienta
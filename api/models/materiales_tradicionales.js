const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Material = sequelize.define(
    'materiales',
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
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        tutorial: {
            type: DataTypes.STRING,
            allowNull: false,
        }
     },
    { timestamps: false }
)

module.exports = Material

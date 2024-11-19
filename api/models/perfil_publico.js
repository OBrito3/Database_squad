const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Publico = sequelize.define(
    'publico',
    {
        nombre_usuario: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        },

        foto: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        
        rol:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    { timestamps: false }
)

module.exports = Publico
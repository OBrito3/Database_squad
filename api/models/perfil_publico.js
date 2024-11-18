const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Publico = sequelize.define(
    'publico',
    {
        nombre_usuario: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        foto: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        
        rol:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    { timestamps: false }
)

module.exports = Publico
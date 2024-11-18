const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Publicacion = sequelize.define(
    'publicacion',
    {
        contenido: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        fecha_publicacion: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        categoria: {
            type: DataTypes.ENUM('tutorial', 'portfolio'),
            allowNull: false,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    { timestamps: false }
)

module.exports = Publicacion
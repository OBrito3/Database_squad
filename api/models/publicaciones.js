const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Publicacion = sequelize.define(
    'publicaciones',
    {   
        imagen: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contenido: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        fecha_publicacion: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    { timestamps: false }
)

module.exports = Publicacion
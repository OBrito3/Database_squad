const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Publicacion = sequelize.define(
    'publicaciones',
    {   
        imagen: {
            type: DataTypes.STRING,
            allowNull: true,
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
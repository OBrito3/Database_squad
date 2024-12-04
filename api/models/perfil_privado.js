const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Privado = sequelize.define(
    'privado',
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                is: {
                    args: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    msg: "Error: Wrong email format."
                }
            },
            unique: true,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fecha_registro: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date,
        },
        role:{
            type: DataTypes.ENUM('usuario', 'artista', 'admin'),
            defaultValue: 'artista',
            allowNull: false,
        }
    },
    { timestamps: false }
)

module.exports = Privado
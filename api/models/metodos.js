const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Metodo = sequelize.define(
    'metodos',
    {
        metodo: {
            type: DataTypes.ENUM('tradicional', 'digital'),
            allowNull: false,
        },
        categoria_artistica: {
            type: DataTypes.ENUM('ilustracion', 'diseño grafico', 'escultura', 'modelado 3D', 'animacion'),
            allowNull: false,
        },
        
    },
    { timestamps: false }
)

module.exports = Metodo

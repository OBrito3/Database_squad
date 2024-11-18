const Metodo = require('../api/models/metodos')
const Material = require('../api/models/materiales_tradicionales')
const Herramienta = require('../api/models/herramientas_digitales')
const Programa = require('../api/models/programas')
const Pro_Herr = require('../api/models/programas_herramientas')
const Privado = require('../api/models/perfil_privado')
const Publico = require('../api/models/perfil_publico')
const Publicacion = require('../api/models/publicaciones')


function addRelationsToModels() {
    try {
        // One to many 
        Material.belongsTo(Metodo, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
        Metodo.hasMany(Material)

        Publicacion.belongsTo(Metodo, {onDelete: 'CASCADE', onUpdate: 'CASCADE' })
        Metodo.hasMany(Publicacion)

        Publicacion.belongsTo(Publico, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }) 
        Publico.hasMany(Publicacion)

        /*
        Pro_Herr.belongsTo(Metodo, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
        Metodo.hasMany(Pro_Herr)

        // Many to many
        Programa.belongsToMany(Herramienta, { through: 'programas_herramientas', timestamps: false, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
        Herramienta.belongsToMany(Programa, { through: 'programas_herramientas', timestamps: false, onDelete: 'CASCADE', onUpdate: 'CASCADE' })

        */
       
        // One to One
        Privado.hasOne(Publico, {onDelete: 'CASCADE', onUpdate: 'CASCADE'}) //ESTAR PENDIENTE AL ID DE PRIVADO
        Publico.belongsTo(Privado)

        console.log('Relations added to all models')
    } catch (error) {
        throw error
    }
}

module.exports = addRelationsToModels

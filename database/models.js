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


        // Many to many
        Programa.belongsToMany(Herramienta, { through: Pro_Herr, foreignKey: 'programaId', otherKey: 'herramientaId', timestamps: false })
        Herramienta.belongsToMany(Programa, { through: Pro_Herr, foreignKey: 'herramientaId', otherKey: 'programaId', timestamps: false })

        
        Publicacion.hasMany(Material, { foreignKey: "publicacionId", as: "materiales" });
Material.belongsTo(Publicacion, { foreignKey: "publicacionId", as: "publicacion" });


        // One to many 

        Pro_Herr.belongsTo(Metodo, { foreignKey: 'metodoId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
        Metodo.hasMany(Pro_Herr, { foreignKey: 'metodoId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
       
        // One to One
        Privado.hasOne(Publico, {onDelete: 'CASCADE', onUpdate: 'CASCADE'}) //ESTAR PENDIENTE AL ID DE PRIVADO
        Publico.belongsTo(Privado)




        // PRUEBA
// Relación de herramientas y programas con publicaciones a través de la tabla intermedia
Publicacion.belongsToMany(Herramienta, {
    through: Pro_Herr,
    foreignKey: "publicacionId",
    otherKey: "herramientaId",
    as: "herramientas",
  });
  Herramienta.belongsToMany(Publicacion, {
    through: Pro_Herr,
    foreignKey: "herramientaId",
    otherKey: "publicacionId",
    as: "publicaciones",
  });
  
  Publicacion.belongsToMany(Programa, {
    through: Pro_Herr,
    foreignKey: "publicacionId",
    otherKey: "programaId",
    as: "programas",
  });
  Programa.belongsToMany(Publicacion, {
    through: Pro_Herr,
    foreignKey: "programaId",
    otherKey: "publicacionId",
    as: "publicaciones",
  });
  




        console.log('Relations added to all models')
    } catch (error) {
        throw error
    }
}

module.exports = addRelationsToModels

const router = require('express').Router()

const { checkAuth, checkAdmin, checkArtista } = require("../middlewares/auth");
const { getAllMateriales, getOneMaterial, createMaterial, updateMaterial, deleteMaterial } = require('../controllers/materiales_tradicionales')

router.get('/', getAllMateriales)  
router.get('/:id', getOneMaterial)
router.post('/', checkAuth, checkAdmin, createMaterial)
router.put('/:id', checkAuth, checkAdmin, updateMaterial)
router.delete('/:id', checkAuth, checkAdmin, deleteMaterial)


//ARTISTAS
router.post('/', checkAuth, checkArtista, createMaterial) // es necesario poner privado en esta ruta, ¿necesita su propia función como perfiles???
router.put('/privado/:id', checkAuth, checkArtista, updateMaterial)
router.delete('/privado/:id', checkAuth, checkArtista, deleteMaterial)

module.exports = router

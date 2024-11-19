const router = require('express').Router()

const { checkAuth, checkAdmin, checkArtista } = require("../middlewares/auth");
const { getAllMateriales, getOneMaterial, createMaterial, updateMaterial, deleteMaterial, updateUserMaterial, deleteUserMaterial } = require('../controllers/materiales_tradicionales')

//ADMINS

router.get('/', getAllMateriales)  
router.get('/:id', getOneMaterial)
router.put('/:id', checkAuth, checkAdmin, updateMaterial)
router.delete('/:id', checkAuth, checkAdmin, deleteMaterial)


//ARTISTAS
router.post('/', checkAuth, checkArtista, createMaterial)
router.put('/privados/:id', checkAuth, checkArtista, updateUserMaterial)
router.delete('/privados/:id', checkAuth, checkArtista, deleteUserMaterial)

module.exports = router

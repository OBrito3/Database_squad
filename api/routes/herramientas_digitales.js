const router = require('express').Router()

const { checkAuth, checkAdmin, checkArtista } = require("../middlewares/auth");
const { getAllHerramientas, getOneHerramienta, createHerramienta, updateHerramienta, deleteHerramienta, updateUserHerramienta, deleteUserHerramienta } = require('../controllers/herramientas_digitales')

//ADMINS

router.get('/', getAllHerramientas)
router.get('/:id', getOneHerramienta)
router.put('/:id', checkAuth, checkAdmin, updateHerramienta)
router.delete('/:id', checkAuth, checkAdmin, deleteHerramienta)

//ARTISTAS

router.post('/', checkAuth, checkArtista, createHerramienta)
router.put('/privados/:id', checkAuth, checkArtista, updateUserHerramienta)
router.delete('/privados/:id', checkAuth, checkArtista, deleteUserHerramienta)

module.exports = router

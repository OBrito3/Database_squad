const router = require('express').Router()

const { checkAuth, checkAdmin, checkArtista } = require("../middlewares/auth");
const { getAllHerramientas, getOneHerramienta, createHerramienta, updateHerramienta, deleteHerramienta } = require('../controllers/herramientas_digitales')

router.get('/', getAllHerramientas)
router.get('/:id', getOneHerramienta)
router.post('/', checkAuth, checkAdmin, createHerramienta)
router.put('/:id', checkAuth, checkAdmin, updateHerramienta)
router.delete('/:id', checkAuth, checkAdmin, deleteHerramienta)

//ARTISTAS
router.post('/', checkAuth, checkArtista, createHerramienta) // es necesario poner privado en esta ruta, ¿necesita su propia función como perfiles???
router.put('/privado/:id', checkAuth, checkArtista, updateHerramienta)
router.delete('/privado/:id', checkAuth, checkArtista, deleteHerramienta)

module.exports = router

const router = require('express').Router()

const { checkAuth, checkAdmin } = require("../middlewares/auth");
const { getAllHerramientas, getOneHerramienta, createHerramienta, updateHerramienta, deleteHerramienta } = require('../controllers/herramientas_digitales')

router.get('/', getAllHerramientas)
router.get('/:id', getOneHerramienta)
router.post('/', checkAuth, checkAdmin, createHerramienta)
router.put('/:id', checkAuth, checkAdmin, updateHerramienta)
router.delete('/:id', checkAuth, checkAdmin, deleteHerramienta)

module.exports = router

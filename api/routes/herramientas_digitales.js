const router = require('express').Router()

const { getAllHerramientas, getOneHerramienta, createHerramienta, updateHerramienta, deleteHerramienta } = require('../controllers/herramientas_digitales')

router.get('/', getAllHerramientas)
router.get('/:id', getOneHerramienta)
router.post('/', createHerramienta)
router.put('/:id', updateHerramienta)
router.delete('/:id', deleteHerramienta)

module.exports = router

const router = require('express').Router()

const { getAllMetodos, getOneMetodo, createMetodo, updateMetodo, deleteMetodo } = require('../controllers/metodos')

router.get('/', getAllMetodos)
router.get('/:id', getOneMetodo)
router.post('/', createMetodo)
router.put('/:id', updateMetodo)
router.delete('/:id', deleteMetodo)

module.exports = router

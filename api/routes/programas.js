const router = require('express').Router()

const { getAllProgramas, getOnePrograma, createPrograma, updatePrograma, deletePrograma } = require('../controllers/programas')

router.get('/', getAllProgramas)
router.get('/:id', getOnePrograma)
router.post('/', createPrograma)
router.put('/:id', updatePrograma)
router.delete('/:id', deletePrograma)   


module.exports = router

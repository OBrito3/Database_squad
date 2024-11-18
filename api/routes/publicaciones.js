const router = require('express').Router()

const { getAllPublicaciones, getOnePublicacion, createPublicacion, updatePublicacion, deletePublicacion } = require('../controllers/publicaciones')

router.get('/', getAllPublicaciones)
router.get('/:id', getOnePublicacion)
router.post('/', createPublicacion)
router.put('/:id', updatePublicacion)
router.delete('/:id', deletePublicacion)  


module.exports = router

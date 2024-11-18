const router = require('express').Router()

const { getAllMateriales, getOneMaterial, createMaterial, updateMaterial, deleteMaterial } = require('../controllers/materiales_tradicionales')

router.get('/', getAllMateriales)  
router.get('/:id', getOneMaterial)
router.post('/', createMaterial)
router.put('/:id', updateMaterial)
router.delete('/:id', deleteMaterial)


module.exports = router

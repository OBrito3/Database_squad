const router = require('express').Router()

const { checkAuth, checkAdmin } = require("../middlewares/auth");
const { getAllMateriales, getOneMaterial, createMaterial, updateMaterial, deleteMaterial } = require('../controllers/materiales_tradicionales')

router.get('/', getAllMateriales)  
router.get('/:id', getOneMaterial)
router.post('/', checkAuth, checkAdmin, createMaterial)
router.put('/:id', checkAuth, checkAdmin, updateMaterial)
router.delete('/:id', checkAuth, checkAdmin, deleteMaterial)


module.exports = router

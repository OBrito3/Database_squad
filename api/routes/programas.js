const router = require('express').Router()

const { checkAuth, checkAdmin } = require("../middlewares/auth");
const { getAllProgramas, getOnePrograma, createPrograma, updatePrograma, deletePrograma } = require('../controllers/programas')

router.get('/', getAllProgramas)
router.get('/:id', getOnePrograma)
router.post('/', checkAuth, checkAdmin, createPrograma)
router.put('/:id', checkAuth, checkAdmin, updatePrograma)
router.delete('/:id', checkAuth, checkAdmin, deletePrograma)   


module.exports = router

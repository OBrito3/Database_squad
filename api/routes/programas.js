const router = require('express').Router()

const { checkAuth, checkAdmin, checkArtista } = require("../middlewares/auth");
const { getAllProgramas, getOnePrograma, createPrograma, updatePrograma, deletePrograma } = require('../controllers/programas')

router.get('/', getAllProgramas)
router.get('/:id', getOnePrograma)
router.post('/', checkAuth, checkAdmin, createPrograma)
router.put('/:id', checkAuth, checkAdmin, updatePrograma)
router.delete('/:id', checkAuth, checkAdmin, deletePrograma)   



//ARTISTAS
router.post('/', checkAuth, checkArtista, createPrograma) // es necesario poner privado en esta ruta, ¿necesita su propia función como perfiles???
router.put('/privado/:id', checkAuth, checkArtista, updatePrograma)
router.delete('/privado/:id', checkAuth, checkArtista, deletePrograma)

module.exports = router

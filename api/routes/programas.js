const router = require('express').Router()

const { checkAuth, checkAdmin, checkArtista } = require("../middlewares/auth");
const { getAllProgramas, getOnePrograma, createPrograma, updatePrograma, deletePrograma, updateUserPrograma, deleteUserPrograma } = require('../controllers/programas')

// ADMINS

router.get('/', getAllProgramas)
router.get('/:id', getOnePrograma)
router.put('/:id', checkAuth, checkAdmin, updatePrograma)
router.delete('/:id', checkAuth, checkAdmin, deletePrograma)   



// ARTISTAS

router.post('/', checkAuth, checkArtista, createPrograma)
router.put('/privados/:id', checkAuth, checkArtista, updateUserPrograma)
router.delete('/privados/:id', checkAuth, checkArtista, deleteUserPrograma)

module.exports = router

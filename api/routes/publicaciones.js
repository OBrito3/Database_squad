const router = require('express').Router()

const { checkAuth, checkAdmin } = require("../middlewares/auth");
const { getAllPublicaciones, getOnePublicacion, createPublicacion, updatePublicacion, deletePublicacion, createUserPublicacion, updateUserPublicacion, deleteUserPublicacion } = require('../controllers/publicaciones')

// ADMINS

router.get('/', getAllPublicaciones)
router.get('/:id', getOnePublicacion)
router.post('/', checkAuth, checkAdmin, createPublicacion)
router.put('/:id', checkAuth, checkAdmin, updatePublicacion)
router.delete('/:id', checkAuth, checkAdmin, deletePublicacion)  


// USUARIOS Y ARTISTAS

router.post('/publicos/:publicoId', checkAuth, createUserPublicacion)
router.put('/privados/:id', checkAuth, updateUserPublicacion)
router.delete('/privados/:id', checkAuth, deleteUserPublicacion)



module.exports = router

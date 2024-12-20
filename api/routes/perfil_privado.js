const router = require('express').Router()

const { checkAuth, checkAdmin } = require("../middlewares/auth");
const { getAllPerfilesPrivados, getOnePerfilPrivado, createPerfilPrivado, updatePerfilPrivado, deletePerfilPrivado, updateUserPerfilPrivado, deleteUserPerfilPrivado } = require('../controllers/perfil_privado')

// ADMINS

router.get('/', checkAuth, checkAdmin, getAllPerfilesPrivados)
router.get('/:id', checkAuth, checkAdmin, getOnePerfilPrivado)
router.post('/', checkAuth, checkAdmin, createPerfilPrivado)   
router.put('/:id', checkAuth, checkAdmin, updatePerfilPrivado)
router.delete('/:id', checkAuth, checkAdmin, deletePerfilPrivado)


// USUARIOS Y ARTISTAS

router.put('/privados/:id', checkAuth, updateUserPerfilPrivado)
router.delete('/privados/:id', checkAuth, deleteUserPerfilPrivado)



module.exports = router



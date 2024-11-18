const router = require('express').Router()

const { checkAuth, checkAdmin } = require("../middlewares/auth");
const { getAllPerfilesPublicos, getOnePerfilPublico, createPerfilPublico, updatePerfilPublico, deletePerfilPublico, updateUserPerfilPublico, deleteUserPerfilPublico } = require('../controllers/perfil_publico')


//ADMINS
router.get('/', checkAuth, checkAdmin, getAllPerfilesPublicos)
router.get('/:id', checkAuth, checkAdmin, getOnePerfilPublico)
router.post('/', checkAuth, checkAdmin, createPerfilPublico)
router.put('/:id', checkAuth, checkAdmin, updatePerfilPublico)
router.delete('/:id', checkAuth, checkAdmin, deletePerfilPublico)  


//USERS
router.put('/publico/:id', checkAuth, updateUserPerfilPublico)
router.delete('/publico/:id', checkAuth, deleteUserPerfilPublico)

module.exports = router

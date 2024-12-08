const router = require('express').Router()

const { checkAuth, checkAdmin } = require("../middlewares/auth");
const { getAllPerfilesPublicos, getOnePerfilPublico, createPerfilPublico, updatePerfilPublico, deletePerfilPublico, updateUserPerfilPublico, deleteUserPerfilPublico } = require('../controllers/perfil_publico')


//ADMINS

router.get('/', checkAuth, checkAdmin, getAllPerfilesPublicos)
router.get('/:id', checkAuth, getOnePerfilPublico) //quitamos checkAdmin de aquí
router.post('/', checkAuth, checkAdmin, createPerfilPublico)
router.put('/:id', checkAuth, checkAdmin, updatePerfilPublico)
router.delete('/:id', checkAuth, checkAdmin, deletePerfilPublico)  


// USUARIOS Y ARTISTAS
router.put('/publicos/:id', checkAuth, updateUserPerfilPublico)
router.delete('/publicos/:id', checkAuth, deleteUserPerfilPublico)

module.exports = router

const router = require('express').Router()

const { checkAuth, checkAdmin } = require("../middlewares/auth");
const { getAllPerfilesPrivados, getOnePerfilPrivado, createPerfilPrivado, updatePerfilPrivado, deletePerfilPrivado } = require('../controllers/perfil_privado')

router.get('/', checkAuth, checkAdmin, getAllPerfilesPrivados)
router.get('/:id', checkAuth, checkAdmin, getOnePerfilPrivado)
router.post('/', checkAuth, checkAdmin, createPerfilPrivado)   
router.put('/:id', checkAuth, checkAdmin, updatePerfilPrivado)
router.delete('/:id', checkAuth, checkAdmin, deletePerfilPrivado)

router.put('/privado/:id', checkAuth, updatePerfilPrivado)




module.exports = router



const router = require('express').Router()

const { getAllPerfilesPublicos, getOnePerfilPublico, createPerfilPublico, updatePerfilPublico, deletePerfilPublico } = require('../controllers/perfil_publico')

router.get('/', getAllPerfilesPublicos)
router.get('/:id', getOnePerfilPublico)
router.post('/', createPerfilPublico)
router.put('/:id', updatePerfilPublico)
router.delete('/:id', deletePerfilPublico)  


module.exports = router

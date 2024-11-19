const router = require('express').Router()

const { checkAuth, checkAdmin } = require("../middlewares/auth");
const { getAllMetodos, getOneMetodo, createMetodo, updateMetodo, deleteMetodo } = require('../controllers/metodos')

// ADMINS

router.get('/', getAllMetodos)
router.get('/:id', getOneMetodo)
router.post('/', checkAuth, checkAdmin, createMetodo)
router.put('/:id', checkAuth, checkAdmin, updateMetodo)
router.delete('/:id', checkAuth, checkAdmin, deleteMetodo)

module.exports = router

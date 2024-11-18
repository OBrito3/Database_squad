const router = require('express').Router()

router.use('/metodos', require('./metodos'))
router.use('/materiales', require('./materiales_tradicionales'))
router.use('/programas', require('./programas'))
router.use('/herramientas', require('./herramientas_digitales'))
router.use('/privados', require('./perfil_privado'))
router.use('/publicos', require('./perfil_publico'))
router.use('/publicaciones', require('./publicaciones'))
router.use('/auth', require('./auth'))

module.exports = router

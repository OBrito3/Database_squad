const Publicacion = require('../models/publicaciones')

//ADMINS
async function getAllPublicaciones(req, res) {
    try {
        const publicaciones = await Publicacion.findAll({ where: req.query })
        if (publicaciones) {
            return res.status(200).json(publicaciones)
        } else {
            return res.status(404).send('Publicaciones no encontradas')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOnePublicacion(req, res) {
    try {
        const publicacion = await Publicacion.findByPk(req.params.id)
        if (publicacion) {
            return res.status(200).json(publicacion)
        } else {
            return res.status(404).send('Publicación no encontrada')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createPublicacion(req, res) {
    try {
        const publicacion = await Publicacion.create(req.body)
        return res.status(200).json({ message: 'Publicación creada', publicación: publicacion })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updatePublicacion(req, res) {
    try {
        const [publicacionExist, publicacion] = await Publicacion.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (publicacionExist !== 0) {
            return res.status(200).json({ message: 'Publicación actualizada', publicación: publicacion })
        } else {
            return res.status(404).send('Publicación no encontrada')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deletePublicacion(req, res) {
    try {
        const publicacion = await Publicacion.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (publicacion) {
            return res.status(200).json('Publicación borrada')
        } else {
            return res.status(404).send('Publicación no encontrada')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// USUARIOS Y ARTISTAS
async function createUserPublicacion(req, res) {
    try {
        const publicacion = await Publicacion.create(req.body, {
            where: {
                id: res.locals.privado.id,
            }
        })
        return res.status(200).json({ message: 'Publicación creada', publicación: publicacion })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateUserPublicacion(req, res) {
    try {
        const [publicacionExist, publicacion] = await Publicacion.update(req.body, {
            returning: true,
            where: {
                id: res.locals.privado.id,
            },
        })
        if (publicacionExist !== 0) {
            return res.status(200).json({ message: 'Publicación actualizada', publicación: publicacion })
        } else {
            return res.status(404).send('Publicación no encontrada')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteUserPublicacion(req, res) {
    try {
        const publicacion = await Publicacion.destroy({
            where: {
                id: res.locals.privado.id,
            },
        })
        if (publicacion) {
            return res.status(200).json('Publicación borrada')
        } else {
            return res.status(404).send('Publicación no encontrada')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllPublicaciones,
    getOnePublicacion,
    createPublicacion,
    updatePublicacion,
    deletePublicacion,
    createUserPublicacion,
    updateUserPublicacion,
    deleteUserPublicacion
}
   

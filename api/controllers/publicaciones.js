const Publicacion = require('../models/publicaciones')
const Publico = require('../models/perfil_publico')
const Metodo = require('../models/metodos')

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
        // Primero, buscamos el método correspondiente. Aquí buscamos por el 'metodoId' que puede estar en el cuerpo de la solicitud (req.body)
       /*  const metodoId = req.body.metodoId; // Esto debe venir en el cuerpo de la solicitud o en la URL, según tu implementación

        if (!metodoId) {
            return res.status(400).json({ message: 'El metodoId es obligatorio' });
        }

        // Buscar el metodo con el metodoId proporcionado
        const metodo = await Metodo.findByPk(metodoId);

        if (!metodo) {
            return res.status(400).json({ message: 'Método no encontrado' });
        } */

        // Crear la publicación con el publicoId y metodoId
        const publicacion = await Publicacion.create({
            ...req.body, // Incluye el resto de los datos de la publicación
            publicoId: req.params.publicoId, // 'publicoId' lo tomamos de los parámetros de la URL
            metodoId: metodo.id // Asignamos el 'metodoId' encontrado
        });

        console.log(publicacion);
        console.log(req.params.publicoId);

        return res.status(200).json({ message: 'Publicación creada', publicacion: publicacion });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
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
   

const Publicacion = require('../models/publicaciones')
const Publico = require('../models/perfil_publico')
const Metodo = require('../models/metodos')
const Material = require('../models/materiales_tradicionales')
const Herramienta = require('../models/herramientas_digitales')
const Programa = require('../models/programas')
const Pro_Herr = require('../models/programas_herramientas')

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
        const { metodoId, materiales, herramientas, programas, ...publicacionData } = req.body;
        // Verifica si el método existe mediante el 'metodo' y 'categoria_artistica' proporcionados en el cuerpo de la solicitud
        const metodo = await Metodo.findOne({where: {metodo:req.body.metodo, categoria_artistica:req.body.categoria_artistica}});

        if (!metodo) {
            return res.status(404).json({ message: 'Método no encontrado' });
        }
        // Crear la publicación con el publicoId y metodoId
        const publicacion = await Publicacion.create({
            ...publicacionData, // Incluye el resto de los datos de la publicación
            publicoId: req.params.publicoId, // 'publicoId' lo tomamos de los parámetros de la URL
            metodoId: metodo.id // Asignamos el 'metodoId' encontrado
        });

        // RESTRICCIÓN POR RANGO DE metodoId

        // Si metodo es tradicional, solo se permiten materiales
        if (req.body.metodo === 'tradicional' /* && (metodoId >= 1 && metodoId <= 5) */) {
            if (!materiales || materiales.length === 0) {
                return res.status(400).json({ message: "Debes proporcionar materiales para este método" });
            }

            // Manejar materiales
            for (const material of materiales) {
                const [mat] = await Material.findOrCreate({
                    where: { nombre: material.nombre },
                    defaults: { ...material, metodoId },
                });

                if (mat.metodoId !== metodoId) {
                    await mat.update({ metodoId });
                }
            }
        }
        // Si metodo es digital, solo se permiten herramientas y programas
        else if (req.body.metodo === 'digital' /* && (metodoId >= 6 && metodoId <= 10) */) {
            if ((!herramientas || herramientas.length === 0) || (!programas || programas.length === 0)) {
                return res.status(400).json({
                    message: "Debes proporcionar herramientas y programas para este método"
                });
            }

            // Manejar herramientas
            for (const herramienta of herramientas) {
                const [herr] = await Herramienta.findOrCreate({
                    where: { nombre: herramienta.nombre },
                    defaults: herramienta,
                });
            }

            // Manejar programas
            for (const programa of programas) {
                const [prog] = await Programa.findOrCreate({
                    where: { nombre: programa.nombre },
                    defaults: programa,
                });

                // Relacionar programas con herramientas a través de Pro_herrs
                if (programa.herramientas && Array.isArray(programa.herramientas)) {
                    for (const herramientaNombre of programa.herramientas) {
                        const herramienta = await Herramienta.findOne({
                            where: { nombre: herramientaNombre },
                        });
                        if (herramienta) {
                            await Pro_Herr.findOrCreate({
                                where: { metodoId: metodoId.id, programaId: prog.id, herramientaId: herramienta.id },
                            });
                        }
                    }
                }
            }
        } else {
            // Si metodoId está fuera de los rangos permitidos
            return res.status(400).json({
                message: "El método seleccionado no permite materiales ni herramientas y programas"
            });
        }

        /* console.log(publicacion);
        console.log(req.params.publicoId); */

        return res.status(200).json({ message: 'Publicación creada', publicacion: publicacion });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}


/* async function updateUserPublicacion(req, res) {
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
 */
async function updateUserPublicacion(req, res) {
    try {
        if (!res.locals.privado) {
            return res.status(401).send("Usuario no autenticado");
        }

        console.log('ID recibido:', req.params.id);
        console.log('publicoId recibido:', res.locals.privado.id);

        const publicacion = await Publicacion.findOne({
            where: {
                id: req.params.id,
                publicoId: res.locals.privado.id,
            },
        });

        if (!publicacion) {
            return res.status(404).send("Publicación no encontrada o no autorizada");
        }

        await publicacion.update(req.body);

        return res.status(200).json({ message: "Publicación actualizada" });
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
}




/* async function deleteUserPublicacion(req, res) {
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
} */


async function deleteUserPublicacion(req, res) {
    try {
        if (!res.locals.privado) {
            return res.status(401).send("Usuario no autenticado");
        }

        console.log('ID recibido:', req.params.id);
        console.log('publicoId recibido:', res.locals.privado.id);

        const publicacion = await Publicacion.destroy({
            where: {
                id: req.params.id,
                publicoId: res.locals.privado.id,
            },
        });

        if (!publicacion) {
            return res.status(404).send("Publicación no encontrada o no autorizada");
        } else {
            return res.status(200).json({ message: "Publicación borrada" });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
};

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
   

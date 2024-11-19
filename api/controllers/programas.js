const Programa = require('../models/programas')
//create, update and delete solo los administradores

// ADMINS

async function getAllProgramas(req, res) {
    try {
        const programa = await Programa.findAll({ where: req.query })
        if (programa) {
            return res.status(200).json(programa)
        } else {
            return res.status(404).send('Programas no encontrados')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOnePrograma(req, res) {
    try {
        const programa = await Programa.findByPk(req.params.id)
        if (programa) {
            return res.status(200).json(programa)
        } else {
            return res.status(404).send('Programa no encontrado')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createPrograma(req, res) {
    try {
        const programa = await Programa.create(req.body)
        return res.status(200).json({ message: 'Programa creado', programa: programa })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updatePrograma(req, res) {
    try {
        const [programaExist, programa] = await Programa.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (programaExist !== 0) {
            return res.status(200).json({ message: 'Programa actualizado', programa: programa })
        } else {
            return res.status(404).send('Programa no encontrado')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deletePrograma(req, res) {
    try {
        const programa = await programa.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (programa) {
            return res.status(200).json('Programa borrado')
        } else {
            return res.status(404).send('Programa no encontrado')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// ARTISTAS

async function updateUserPrograma(req, res) {
    try {
        const [programaExist, programa] = await Programa.update(req.body, {
            returning: true,
            where: {
                id: res.locals.privado.id,
            },
        })
        if (programaExist !== 0) {
            return res.status(200).json({ message: 'Programa actualizado', programa: programa })
        } else {
            return res.status(404).send('Programa no encontrado')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteUserPrograma(req, res) {
    try {
        const programa = await programa.destroy({
            where: {
                id: res.locals.privado.id,
            },
        })
        if (programa) {
            return res.status(200).json('Programa borrado')
        } else {
            return res.status(404).send('Programa no encontrado')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    getAllProgramas,
    getOnePrograma,
    createPrograma,
    updatePrograma,
    deletePrograma,
    updateUserPrograma,
    deleteUserPrograma
}
   

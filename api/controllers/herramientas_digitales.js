const Herramienta = require('../models/herramientas_digitales')
//create, updte and delete solo los administradores


//ADMINS

async function getAllHerramientas(req, res) {
    try {
        const herramientas = await Herramienta.findAll({ where: req.query })
        if (herramientas) {
            return res.status(200).json(herramientas)
        } else {
            return res.status(404).send('Herramientas no encontradas')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneHerramienta(req, res) {
    try {
        const herramienta = await Herramienta.findByPk(req.params.id)
        if (herramienta) {
            return res.status(200).json(herramienta)
        } else {
            return res.status(404).send('Herramienta no encontrada')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createHerramienta(req, res) {
    try {
        const herramienta = await Herramienta.create(req.body)
        return res.status(200).json({ message: 'Herramienta creada', herramienta: herramienta })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateHerramienta(req, res) {
    try {
        const [herramientaExist, herramienta] = await Herramienta.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (herramientaExist !== 0) {
            return res.status(200).json({ message: 'Herramienta actualizada', herramienta: herramienta })
        } else {
            return res.status(404).send('Herramienta no encontrada')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteHerramienta(req, res) {
    try {
        const herramienta = await Herramienta.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (herramienta) {
            return res.status(200).json('Herramienta borrada')
        } else {
            return res.status(404).send('Herramienta no encontrada')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


//ARTISTAS

async function updateUserHerramienta(req, res) {
    try {
        const [herramientaExist, herramienta] = await Herramienta.update(req.body, {
            returning: true,
            where: {
                id: res.locals.privado.id,
            },
        })
        if (herramientaExist !== 0) {
            return res.status(200).json({ message: 'Herramienta actualizada', herramienta: herramienta })
        } else {
            return res.status(404).send('Herramienta no encontrada')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteUserHerramienta(req, res) {
    try {
        const herramienta = await Herramienta.destroy({
            where: {
                id: res.locals.privado.id,
            },
        })
        if (herramienta) {
            return res.status(200).json('Herramienta borrada')
        } else {
            return res.status(404).send('Herramienta no encontrada')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}




module.exports = {
    getAllHerramientas,
    getOneHerramienta,
    createHerramienta,
    updateHerramienta,
    deleteHerramienta,
    updateUserHerramienta,
    deleteUserHerramienta
}   


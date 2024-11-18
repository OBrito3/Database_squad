const Metodo = require('../models/metodos')
//create, updte and delete solo los administradores

async function getAllMetodos(req, res) {
    try {
        const metodos = await Metodo.findAll({ where: req.query })
        if (metodos) {
            return res.status(200).json(metodos)
        } else {
            return res.status(404).send('Métodos no encontrados')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneMetodo(req, res) {
    try {
        const metodo = await Metodo.findByPk(req.params.id)
        if (metodo) {
            return res.status(200).json(metodo)
        } else {
            return res.status(404).send('Método no encontrado')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createMetodo(req, res) {
    try {
        const metodo = await Metodo.create(req.body)
        return res.status(200).json({ message: 'Método creado', metodo: metodo })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateMetodo(req, res) {
    try {
        const [metodoExist, metodo] = await Metodo.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (metodoExist !== 0) {
            return res.status(200).json({ message: 'Método actualizado', metodo: metodo })
        } else {
            return res.status(404).send('Método no encontrado')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteMetodo(req, res) {
    try {
        const metodo = await Metodo.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (metodo) {
            return res.status(200).json('Método borrado')
        } else {
            return res.status(404).send('Método no encontrado')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllMetodos,
    getOneMetodo,
    createMetodo,
    updateMetodo,
    deleteMetodo
}

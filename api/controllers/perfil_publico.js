const Publico = require('../models/perfil_publico')
//create, updte and delete solo los administradores

async function getAllPerfilesPublicos(req, res) {
    try {
        const publicos = await Publico.findAll({ where: req.query })
        if (publicos) {
            return res.status(200).json(publicos)
        } else {
            return res.status(404).send('Perfiles no encontrados')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOnePerfilPublico(req, res) {
    try {
        const publico = await Publico.findByPk(req.params.id)
        if (publico) {
            return res.status(200).json(publico)
        } else {
            return res.status(404).send('Perfil no encontrado')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createPerfilPublico(req, res) {
    try {
        const publico = await Publico.create(req.body)
        return res.status(200).json({ message: 'Perfil creado', perfil: publico })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updatePerfilPublico(req, res) {
    try {
        const [publicoExist, publico] = await Publico.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (publicoExist !== 0) {
            return res.status(200).json({ message: 'Perfil actualizado', perfil: publico })
        } else {
            return res.status(404).send('Perfil no encontrado')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deletePerfilPublico(req, res) {
    try {
        const publico = await Publico.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (publico) {
            return res.status(200).json('Perfil borrado')
        } else {
            return res.status(404).send('Perfil no encontrado')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


//USERS

async function updateUserPerfilPublico(req, res) {
    try {
        const [publicoExist, publico] = await Publico.update(req.body, {
            returning: true,
            where: {
                id: res.locals.publico.id,
            },
        })
        if (publicoExist !== 0) {
            return res.status(200).json({ message: 'Perfil actualizado', perfil: publico })
        } else {
            return res.status(404).send('Perfil no encontrado')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteUserPerfilPublico(req, res) {
    try {
        const publico = await Publico.destroy({
            where: {
                id: res.locals.publico.id,
            },
        })
        if (publico) {
            return res.status(200).json('Perfil borrado')
        } else {
            return res.status(404).send('Perfil no encontrado')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    getAllPerfilesPublicos,
    getOnePerfilPublico,        
    createPerfilPublico,
    updatePerfilPublico,
    deletePerfilPublico,
    updateUserPerfilPublico,
    deleteUserPerfilPublico
}   


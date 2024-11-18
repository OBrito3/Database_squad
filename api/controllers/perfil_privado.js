const Privado = require('../models/perfil_privado')
//create, updte and delete solo los administradores


//ADMINS

async function getAllPerfilesPrivados(req, res) {
    try {
        const privado = await Privado.findAll({ where: req.query })
        if (privado) {
            return res.status(200).json(privado)
        } else {
            return res.status(404).send('Perfiles no encontrados')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOnePerfilPrivado(req, res) {
    try {
        const privado = await Privado.findByPk(req.params.id)
        if (privado) {
            return res.status(200).json(privado)
        } else {
            return res.status(404).send('Perfil no encontrado')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createPerfilPrivado(req, res) {
    try {
        const privado = await Privado.create(req.body)
        return res.status(200).json({ message: 'Perfil creado', perfil: privado })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updatePerfilPrivado(req, res) {
    try {
        const [privadoExist, privado] = await Privado.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (privadoExist !== 0) {
            return res.status(200).json({ message: 'Perfil actualizado', perfil: privado })
        } else {
            return res.status(404).send('Perfil no encontrado')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deletePerfilPrivado(req, res) {
    try {
        const privado = await Privado.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (privado) {
            return res.status(200).json('Perfil borrado')
        } else {
            return res.status(404).send('Perfil no encontrado')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


// USERS

async function updateUserPerfilPrivado(req, res) {
    try {
        const [privadoExist, privado] = await Privado.update(req.body, {
            returning: true,
            where: {
                id: res.locals.privado.id,
            },
        })
        if (privadoExist !== 0) {
            return res.status(200).json({ message: 'Perfil actualizado', perfil: privado })
        } else {
            return res.status(404).send('Perfil no encontrado')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteUserPerfilPrivado(req, res) {
    try {
        const privado = await Privado.destroy({
            where: {
                id: res.locals.privado.id,
            },
        })
        if (privado) {
            return res.status(200).json('Perfil borrado')
        } else {
            return res.status(404).send('Perfil no encontrado')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports = {
    getAllPerfilesPrivados,
    getOnePerfilPrivado,        
    createPerfilPrivado,
    updatePerfilPrivado,
    deletePerfilPrivado,
    updateUserPerfilPrivado,
    deleteUserPerfilPrivado
}   


const Material = require('../models/materiales_tradicionales')
//create, updte and delete solo los administradores

async function getAllMateriales(req, res) {
    try {
        const material = await Material.findAll({ where: req.query })
        if (material) {
            return res.status(200).json(material)
        } else {
            return res.status(404).send('Materiales no encontrados')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneMaterial(req, res) {
    try {
        const material = await Material.findByPk(req.params.id)
        if (material) {
            return res.status(200).json(material)
        } else {
            return res.status(404).send('Material no encontrado')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createMaterial(req, res) {
    try {
        const material = await Material.create(req.body)
        return res.status(200).json({ message: 'Material creado', material: material })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateMaterial(req, res) {
    try {
        const [materialExist, material] = await Material.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (materialExist !== 0) {
            return res.status(200).json({ message: 'Material actualizado', material: material })
        } else {
            return res.status(404).send('Material no encontrado')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteMaterial(req, res) {
    try {
        const material = await Material.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (material) {
            return res.status(200).json('Material borrado')
        } else {
            return res.status(404).send('Material no encontrado')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllMateriales,
    getOneMaterial,
    createMaterial,
    updateMaterial,
    deleteMaterial  
}

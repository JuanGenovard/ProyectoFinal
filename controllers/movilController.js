const movil = require('../models/movil')
const usuarios = require('../models/usuarios')

const movilController = {};

movilController.getMovil = async (req, res) => {
    try {
        let email = req.params.email
        let resp = await movil.findAll({ attributes: {exclude:['createdAt', 'updatedAt']},
            where: {email: email},
            include: {
                model: compras,
                attributes: ['id_compras', 'fecha_compra']
            },
            attributes: ['email', 'nombre']
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

movilController.getAllMovils = async (req, res) => {
    try {
        let resp = await movil.findAll({
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
        console.log(err)
    }
}

module.exports = movilController
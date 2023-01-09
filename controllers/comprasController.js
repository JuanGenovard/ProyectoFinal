const compras = require('../models/compras')
const usuarios = require('../models/usuarios')

const comprasController = {};

comprasController.getComprasByEmail = async (req, res) => {
    try {
        let email = req.params.email
        let resp = await usuarios.findAll({ attributes: {exclude:['createdAt', 'updatedAt']},
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

comprasController.getAllCompras = async (req, res) => {
    console.log("11111111111111111111111111111111111111111111111111111111111111111111")
    try {
        let resp = await compras.findAll({
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
        console.log(err)
    }
}

comprasController.getComprasFromUsuario = async (req, res) => {
    try{
        let email = req.params.email
        console.log(email)
        let resp = await usuarios.findAll({
            where: { email: email},
            include: {
                model: compras,
                attributes: ['id_compra', 'fecha_compra']
            },
            attributes: ['email', 'nombre']
        })
        res.send(resp)
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}

comprasController.postNuevoCompra = async (req, res) => {
    try {
        let data = req.body
        let resp = await compras.create({
            fecha_pedido: data.fecha_pedido,
            EmailUsuario: data.EmailUsuario,
            id_movil: data.id_movil

        })

        res.send(resp)
    } catch (error) {
        res.send(error)
    }
}

comprasController.updateComprasById = async (req, res) => {
    try {
        let data = req.body
        let resp = await compras.update(
            {
                fecha_compra: data.fecha_compra
            },
            {
                where: { id_compra: data.id_compra }
            }
        )

        res.send(resp)

    } catch (err) {
        res.send(err)
    }
}



module.exports = comprasController
const compras = require('../models/compras');
const Moviles = require('../models/movil');
const usuarios = require('../models/usuarios')

const comprasController = {};

// comprasController.getComprasByEmail = async (req, res) => {
//     try {
//         let email = req.params.email
//         let resp = await usuarios.findAll({ attributes: {exclude:['createdAt', 'updatedAt']},
//             where: {email: email},
//             include: {
//                 model: compras,
//                 attributes: ['id_compras', 'fecha_compra']
//             },
//             attributes: ['email', 'nombre']
//         })
//             .then(resp => {
//                 res.send(resp)
//             })
//     } catch (err) {
//         res.send(err)
//     }
// }

comprasController.getAllCompras = async (req, res) => {
    try {
        const resp = await compras.findAll()
        const listaCompras = []
        for (let compra of resp) {
            const movil = await Moviles.findOne({where: {id_movil: compra.id_movil}})
            listaCompras.push({...compra.dataValues, movil})
        }
        res.send(listaCompras)
    } catch (err) {
        res.send(err)
    }
}

// comprasController.getComprasFromUsuario = async (req, res) => {
//     try{
//         let email = req.params.email
//         let resp = await usuarios.findAll({
//             where: { email: email},
//             include: {
//                 model: compras,
//                 attributes: ['id_compra', 'fecha_compra']
//             },
//             attributes: ['email', 'nombre']
//         })
//         res.send(resp)
//     } catch (error) {
//         res.send(error)
//     }
// }

comprasController.postNuevoCompra = async (req, res) => {
    try {
        let data = req.body
        let resp = await compras.create({
            fecha_compra: data.fecha_compra,
            emailUsuario: data.emailUsuario,
            id_movil: data.id_movil
        })

        res.send(resp)
    } catch (error) {
        res.send(error)
    }
}




module.exports = comprasController
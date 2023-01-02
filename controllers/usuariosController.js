const usuarios = require('../models/usuarios')

const usuariosController = {};

usuariosController.getAllUsuarios = async (req, res) => {
    try {
        let resp = await usuarios.findAll({attributes: {exclude:['createdAt', 'updatedAt']},
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

usuariosController.getUsuariosByEmail = async (req, res) => {
    try {
        let email = req.params.email
        let resp = await usuarios.findOne({ attributes: {exclude:['createdAt', 'updatedAt']},
            where: {email: email}
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}
// usuariosController.postNuevoUsuario = async (req, res) => {
//     try {
//         let data = req.body
//         let resp = await usuarios.create({
//             email: data.email,
//             fecha_nacimiento: data.fecha_nacimiento,
//             contraseña: data.contraseña,
//             nombre: data.nombre,
//             id_rol: data.id_rol,
//             exclude:['createdAt', 'updatedAt']
//         })

//         res.send(resp)
//     } catch (error) {
//         res.send(error)
//     }
// }

module.exports = usuariosController
const usuarios = require('../models/usuarios');
const { encryptContraseña } = require('../Services/authServices');

const usuariosController = {};

usuariosController.postNuevoUsuario = async (req, res) => {
    try {
        let data = req.body
        let resp = await usuarios.create({
            email: data.email,
            contraseña: data.password,
            nombre: data.nombre,
            id_rol: data.id_rol,
            exclude:['createdAt', 'updatedAt']
        })

        res.send(resp)
    } catch (error) {
        res.send(error)
    }
}
usuariosController.updateUsuarioById = async (req, res) => {
    try {
        let data = req.body
        const hashedContraseña = encryptContraseña(data.password)
        let resp = await usuarios.update(
            {
                contraseña: hashedContraseña,
            },
            {
                where: { email: data.email }
            }
        )

        res.send(resp)

    } catch (err) {
        res.send(err)
    }
}
// usuariosController.deleteUsuarioById = async (req, res) => {
//     try {
//         let email = req.params.email
//         let resp = await usuarios.destroy({
//             where: { email: email }
//         })

//         if (resp == 1) {
//             res.send("El perfil ha sido eliminado")
//         } else {
//             res.send("No se ha podido eliminar el perfil")
//         }

//     } catch (err) {
//         res.send(err)
//     }
// }

module.exports = usuariosController
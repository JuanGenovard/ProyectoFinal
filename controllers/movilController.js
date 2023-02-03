const movil = require('../models/movil')

const movilController = {};

movilController.getMovil = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await movil.findAll({
            where: {id_movil: id}
        })
            .then(resp => {
                res.send(resp[0])
            })
    } catch (err) {
        res.send(err)
    }
}

movilController.getAllMovils = async (req, res) => {
    try {
        let resp = await movil.findAll({
        }).then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)    }
}

movilController.deleteMovilById = async (req, res) => {
    try {
        let id_movil = req.params.id
        let resp = await movil.destroy({
            where: { id_movil: id_movil }
        })
        console.log(resp)

        if (resp == 1) {
            res.send("El perfil ha sido eliminado")
        } else {
            res.send("No se ha podido eliminar el perfil")
        }

    } catch (err) {
        res.send(err)
    }
}

movilController.postNewMovil = async ( req, res) => {
    try {
        let data = req.body
        console.log(data)
        let resp = await movil.create({
            id_movil: data.id_movil,
            nombre: data.nombre,
            color: data.color,
            precio: data.precio
        })
        res.send(resp)
    } catch ( error) {
        res.send(error)
    }
}

module.exports = movilController
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

module.exports = movilController
const CarroService = require("../services/CarroService")

module.exports = {
    getAll: async (req,res) => {
        let json = {
            error: "", 
            result: []
        }

        let carros = await CarroService.getAll()

        for(let i in carros) {
            json.result.push({
                codigo: carros[i].carro_codigo,
                descricao: carros[i].modelo
            })
        }

        res.json(json)
    },

    getById: async (req, res) => {
        let json = {
            error: "", 
            result: {}
        }

        codigo = req.params.codigo

        let carro = await CarroService.getById(codigo)
        json.result = {
            codigo: carro.carro_codigo,
            descricao: carro.modelo
        }

        res.json(json)
    },

    insert: async (req, res) => {
        let json = {
            error: "", 
            result: {}
        }

        modelo = req.body.modelo
        placa  = req.body.placa
        if (!modelo && !placa) {
            json.error = "Parametros passados de forma incorreta"
            res.json(json)
        } else {
            await CarroService.insert([modelo, placa])
            json.result.message = 'Carro cadastrado com sucesso'
            res.json(json)
        }
    },

    update: async (req, res) => {
        let json = {
            error: "", 
            result: {}
        }

        codigo = req.body.codigo
        modelo = req.body.modelo
        placa  = req.body.placa
        if (!modelo && !placa) {
            json.error = "Parametros passados de forma incorreta"
            res.json(json)
        } else {
            await CarroService.update([modelo, placa, codigo])
            json.result.message = 'Atualizado com sucesso'
            res.json(json)
        }
    },

    delete: async (req, res) => {
        let json = {
            error: "", 
            result: {}
        }

        codigo = req.body.codigo
        if (!codigo) {
            json.error = "Parametros passados de forma incorreta"
            res.json(json)
        } else {
            await CarroService.delete(codigo)
            json.result.message = 'Deletado com sucesso'
            res.json(json)
        }
    },

}
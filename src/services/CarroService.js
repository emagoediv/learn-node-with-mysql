const db = require("../db")
module.exports = {
    getAll: () => {
        return new Promise((accept, reject) => {
            db.query("SELECT * FROM carros", (error, result) => {
                if (error) {
                    reject(error)
                    return
                } else {
                    accept(result)
                }
            })
        })
    },

    getById: (codigo) => {
        return new Promise((accept, reject) => {
            db.query("SELECT * FROM carros WHERE carro_codigo = ?", [codigo], (error, result) => {
                if (error) {
                    reject(error)
                    return
                } else {
                    accept(result[0])
                }
            })
        })
    },

    insert: (datas) => {
        return new Promise((accept, reject) => {
            db.query("INSERT INTO carros VALUES(0, ?, ?)", datas, (error, result) => {
                if (error) {
                    reject(error)
                    return
                } else {
                    accept(true)
                }
            })
        })
    },

    update: (datas) => {
        return new Promise((accept, reject) => {
            db.query("UPDATE carros SET modelo = ?, placa = ? WHERE carro_codigo = ?", datas, (error, result) => {
                if (error) {
                    reject(error)
                    return
                } else {
                    accept(true)
                }
            })
        })
    },

    delete: (codigo) => {
        return new Promise((accept, reject) => {
            db.query("DELETE FROM carros WHERE carro_codigo = ?", [codigo], (error, result) => {
                if (error) {
                    reject(error)
                    return
                } else {
                    accept(true)
                }
            })
        })
    }
}
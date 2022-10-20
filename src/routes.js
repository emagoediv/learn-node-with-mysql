const express = require("express")
const router = express.Router()

const CarroController = require("./controllers/CarroController")

router.get("/carros", CarroController.getAll)
router.get("/carro/:codigo", CarroController.getById)
router.post("/carro", CarroController.insert)
router.put("/carro", CarroController.update)
router.delete("/carro", CarroController.delete)

module.exports = router;
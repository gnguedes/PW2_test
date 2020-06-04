const express = require("express")
const router = express.Router()
const controller = require("../controllers/package.controller")

router.get("/", controller.getPackage)
router.post("/", controller.addPackage)
router.delete("/:id", controller.deletePackage)
module.exports = app => app.use("/packages", router)
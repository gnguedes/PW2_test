const express = require("express")
const router = express.Router()
const controller = require("../controllers/users.controller")

router.get("/", controller.getUsers)
router.post("/", controller.addUser)
module.exports = app => app.use("/users", router)
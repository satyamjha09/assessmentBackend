const express = require("express")


const { register, login, getProfile } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware")


const router = express.Router()

router.post("/signup", register)
router.post("/login", login)
router.get("/profile", authMiddleware, getProfile)

module.exports = router
const { Router } = require("express")
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const router = Router()

router.post("/register", authController.registerUSer)
router.post("/login", authController.loginUser)
router.get("/get-me", authMiddleware.authUser, authController.getMe)
router.get("/logout", authController.logoutUser)

module.exports = router
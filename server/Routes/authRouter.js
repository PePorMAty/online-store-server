const Router = require("express");
const router = new Router();
const authController = require("../Controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/registration", authController.registration);
router.post("/login", authController.login);
router.get("/auth", authMiddleware, authController.check);
router.get("/users", authController.getUsers);

module.exports = router;

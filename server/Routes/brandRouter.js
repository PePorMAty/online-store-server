const Router = require("express");
const router = new Router();
const brandController = require("../Controllers/brandController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), brandController.create);
router.get("/", brandController.getAll);
router.delete("/", checkRole("ADMIN"), brandController.deleteBrand);

module.exports = router;

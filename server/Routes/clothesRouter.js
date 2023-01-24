const Router = require("express");
const router = new Router();
const clothesController = require("../Controllers/clothesController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), clothesController.create);
router.get("/", clothesController.getAll);
router.get("/:id", clothesController.getOne);
router.delete("/", checkRole("ADMIN"), clothesController.deleteClothes);

module.exports = router;

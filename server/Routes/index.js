const Router = require("express");
const router = new Router();
const authRouter = require("./authRouter");
const brandRouter = require("./brandRouter");
const clothesRouter = require("./clothesRouter");
const typeRouter = require("./typeRouter");

router.use("/user", authRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/clothes", clothesRouter);

module.exports = router;

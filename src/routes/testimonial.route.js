const {Router} = require("express");
const isAuth = require("../middlewares/isAuth");
const {create} = require("../controllers/testimonal.controller");

const router = Router();

router.post("/admin/testimonial", isAuth, create);

module.exports = router;

const {Router} = require("express");
const isAuth = require("../middlewares/isAuth");
const { create } = require("../controllers/contact.controller");

const router = Router();

router.post("/send-contact", create)

module.exports = router;

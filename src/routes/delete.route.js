const {Router} = require("express");
const { deleteServ, DeleteFeedback } = require("../controllers/delete.controller");

const router = Router();

router.delete("/deleteService/:id", deleteServ)
router.delete("/deleteFeedback/:id", DeleteFeedback)

module.exports = router;

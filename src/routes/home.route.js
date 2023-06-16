const { Router } = require("express");
const { home, about, services, blog, contactUs, adminPage, formPage, Allservices, AllTestimonials, allContact } = require("../controllers/home.controller");
const isAuth = require("../middlewares/isAuth");

const router = Router();

router.get("/", home);
router.get("/about", about);
router.get("/services", services);
router.get("/blog", blog);
router.get("/form", isAuth, formPage)
router.get("/contact-us", contactUs); 
router.get("/allContact", allContact);
router.get("/all-services", Allservices);
router.get("/all-testimonials", AllTestimonials);
router.get('/admin', isAuth, adminPage )
router.get("/admin/logout", isAuth, (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
  });






// router.get("/admin/logout", isAuth, (req, res) => {
//   res.clearCookie("token");
//   res.redirect("/");
// });

module.exports = router;

const auth = require("./auth.route");
const home = require("./home.route");
const testimonal = require("./testimonial.route")
const service = require('./service.route');
const contact = require("./contactUs.route");
const deletePost = require("./delete.route")


module.exports = [auth, home, service, testimonal, contact, deletePost];

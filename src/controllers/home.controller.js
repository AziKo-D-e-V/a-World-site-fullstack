const Io = require("../utils/io");
const Service = new Io('./database/services.json')
const Testimonial = new Io('./database/testimonal.json')
const Message = new Io('./database/contacts.json')

const home = async (req, res) => {
  const services = await Service.read()
  const testimonials = await Testimonial.read()
  res.render("index", {
    services,
    testimonials,
  });
};

const about = async (req, res) => {
  res.render("about");
};

const AllTestimonials = async (req, res) => {
  const testimonials = await Testimonial.read()
  
  res.render("allTestimonials", {testimonials});
}

const services = async (req, res) => {
  res.render("services");
};
const Allservices = async (req, res) => {  
  const services = await Service.read()

  res.render("allServices", {
    services
  });
};

const blog = async (req, res) => {
  res.render("blog");
};
const contactUs = async (req, res) => {
  res.render("contact");
};
const formPage = async (req, res) => {
  res.render("form");
};
const adminPage = async (req, res) => {
  res.render("admin");
};
const allContact = async (req, res) => { 
  const contacts = await Message.read()

  res.render("allContact", { contacts });
}

module.exports = {
  home,
  about,
  allContact,
  Allservices,
  AllTestimonials,
  adminPage,
  formPage,
  services,
  blog,
  contactUs,
};

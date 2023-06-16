const {v4: uuid} = require("uuid");
const Io = require("../utils/io");
const Testimonials = new Io("./database/testimonal.json");
const Testimonial = require("../models/Testimonial");
const path = require("path");

const create = async (req, res) => {
  const {text, name, profession} = req.body;
    const { image } = req.files;
    
  const imageName = `${uuid()}${path.extname(image.name)}`;

  image.mv(process.cwd() + "/uploads/" + imageName);

  const newTestimonial = new Testimonial( text,imageName, name, profession);

  const testimonials = await Testimonials.read();

  const data = testimonials.length ? [...testimonials, newTestimonial] : [newTestimonial];

  await Testimonials.write(data);

  res.redirect("/form");
};

module.exports = {
  create,
};

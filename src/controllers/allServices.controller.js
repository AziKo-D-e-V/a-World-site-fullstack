const {v4: uuid} = require("uuid");
const Io = require("../utils/io");
const Services = new Io("./database/services.json");
const Service = require("../models/Services");
const path = require("path");

const create = async (req, res) => {
  const {btn} = req.body;
  const {image} = req.files;
console.log(image);
  const imageName = `${uuid()}${path.extname(image.name)}`;

  image.mv(process.cwd() + "/uploads/" + imageName);

  const newService = new Service(imageName, btn);

  const services = await Services.read();

  const data = services.length ? [...services, newService] : [newService];

  await Services.write(data);

  res.redirect("/form");
};

module.exports = {
  create,
};

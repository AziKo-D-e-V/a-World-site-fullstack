const {v4: uuid} = require("uuid");
const Io = require("../utils/io");
const Contacts = new Io("./database/contacts.json");
const Contact = require("../models/Contact");
const path = require("path");

const create = async (req, res) => {
    const { name, phone, email, message } = req.body;
    
  const newContact = new Contact(name, phone, email, message);

  const contacts = await Contacts.read();

  const data = contacts.length ? [...contacts, newContact] : [newContact];

  await Contacts.write(data);

  res.redirect("/contact-us");
};

module.exports = {
  create,
};

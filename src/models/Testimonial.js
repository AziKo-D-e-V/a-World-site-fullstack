const { v4: uuid } = require("uuid");

class Testimon {
  constructor(text, image, name, profession) {
    this.id = uuid();
    this.text = text;
    this.image = image;
    this.name = name;
    this.profession = profession;
  }
}

module.exports = Testimon;
